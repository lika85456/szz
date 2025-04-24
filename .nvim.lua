
local function create_anki_card()
    local anki_text = [[
# 
## front

## back

    ]]
    -- Get the current cursor position
    local curr_pos = vim.api.nvim_win_get_cursor(0)
    local row = curr_pos[1] - 1  -- 0-indexed row

    -- Insert the lines
    vim.api.nvim_buf_set_lines(0, row, row, false, vim.split(anki_text, "\n"))

    -- Move the cursor to the end of the first line (# W-)
    local target_col = #vim.split(anki_text, "\n")[1]  -- End of the first line
    vim.api.nvim_win_set_cursor(0, { row + 1, target_col })
end

-- Register with which-key using the new spec
local wk = require("which-key")

-- wk.register({
--     { "<Space>cc", create_anki_card, desc = "Create Anki Card" },
-- })
wk.add(
    {
        { "<Space>cc", create_anki_card, desc = "Create Anki Card" },
    },
    { mode = {"n", "v"} }

)
vim.api.nvim_create_autocmd("VimEnter", {
    pattern = "*",
    callback = function()
        vim.fn.jobstart({ "bun", "index.ts" }, {
            cwd = vim.fn.getcwd(),
            stdout_buffered = true,
            stderr_buffered = true,
            on_stdout = function(_, data)
                if data then
                    local output = table.concat(data, " ")  -- Concatenate output to a single line
                    vim.notify("bun index.ts output: " .. output, vim.log.levels.INFO, { title = "bun" })
                end
            end,
            on_stderr = function(_, data)
                if data then
                    local error_output = table.concat(data, " ")  -- Concatenate stderr to a single line
                    vim.notify("bun index.ts error: " .. error_output, vim.log.levels.ERROR, { title = "bun" })
                end
            end,
        })
    end,
})

vim.api.nvim_create_autocmd("BufWritePost", {
    pattern = "*.tex",
    callback = function()
        local stderr_lines = {}

        vim.fn.jobstart({ "pdflatex", "-halt-on-error", "main.tex" }, {
            cwd = vim.fn.getcwd(),
            stdout_buffered = true,
            stderr_buffered = true,
            on_stderr = function(_, data)
                if data then
                    for _, line in ipairs(data) do
                        if line ~= "" then
                            table.insert(stderr_lines, line)
                        end
                    end
                end
            end,
            on_exit = function(_, code)
                if code == 0 then
                    vim.notify("✅ LaTeX build successful", vim.log.levels.INFO, { title = "pdflatex" })
                else
                    -- Print the error to the notify pop-up
                    local error_message = table.concat(stderr_lines, "\n")
                    vim.notify("❌ LaTeX build failed:\n" .. error_message, vim.log.levels.ERROR, { title = "pdflatex" })
                    vim.fn.system("rm main.aux main.toc main.out")
                end
            end,
        })
    end,
})
