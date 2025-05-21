
# SP-8-1
## front
Definujte relaci dělitelnosti pro celá čísla $a, b \in \mathbb{Z}$.
## back
- Řekneme, že $a$ dělí $b$ (značíme $a \mid b$), jestliže existuje $k \in \mathbb{Z}$ takové, že $a \cdot k = b$.
- V tomto případě je $a$ dělitel $b$ a $b$ násobek $a$.
- Pokud $a$ nedělí $b$, značíme $a \nmid b$.

# SP-8-2
## front
Jak zní věta o dělení se zbytkem? Vyjádřete rovnicí.
## back
- Pro $a \in \mathbb{Z}$ a $d \in \mathbb{N}$ existují jednoznačně $q, r \in \mathbb{Z}$ taková, že:
  - $a = qd + r$
  - $0 \leq r < d$
- $q$ je celočíselný podíl, $r$ je zbytek: $r = a \mod d$

# SP-8-3
## front
Co je to největší společný dělitel dvou čísel $a, b$? Jak se značí?
## back
- Největší společný dělitel (NSD, gcd) čísel $a, b$ je $n \in \mathbb{N}_0$, který:
  - $n \mid a$ a $n \mid b$
  - Každý jiný společný dělitel $d$ čísel $a, b$ dělí i $n$
- Značíme: $\gcd(a, b) = n$

# SP-8-4
## front
Kdy jsou dvě celá čísla $a, b$ nesoudělná?
## back
- $a$ a $b$ jsou nesoudělná, pokud $\gcd(a, b) = 1$.
- Pokud $\gcd(a, b) > 1$, jsou soudělná.

# SP-8-5
## front
Vyjmenujte a popište 3 kategorie přirozených čísel podle počtu dělitelů.
## back
- Číslo 1 – jen jeden dělitel (1)
- Prvočísla – přesně dva dělitele (1 a samo číslo)
- Složená čísla – tři a více dělitelů

# SP-8-6
## front
Jak definujeme společný násobek a nejmenší společný násobek (NSN) dvou čísel $a, b$?
## back
- Společný násobek: $n \in \mathbb{N}_0$, když $a \mid n$ a $b \mid n$.
- Nejmenší společný násobek (NSN, lcm): $n$, pokud je společným násobkem a dělí každý další společný násobek.
- Značíme: $\operatorname{lcm}(a, b) = n$

# SP-8-7
## front
K čemu slouží Rozšířený Euklidův algoritmus (REA)?  
(Poznáte algoritmus na obrázku?)
![Rozšířený Euklidův algoritmus](img/SP-8_0.jpg)
## back
- Pomáhá najít $\gcd(a, b)$ a zároveň reprezentaci ve formě $ax + by = \gcd(a, b)$, tedy také koeficienty $x, y$.
- Umožňuje řešit lineární diofantické rovnice i najít inverzi v $\mathbb{Z}_m$.

# SP-8-8
## front
Co je lineární diofantická rovnice (LDR) a za jakých podmínek má v $\mathbb{Z}$ řešení?
![Řešení LDR](img/SP-8_1.jpg)
## back
- LDR má tvar $ax + by = c$, kde $a, b, c \in \mathbb{Z}$, $x, y \in \mathbb{Z}$.
- Řešení existuje právě tehdy, když $\gcd(a, b) \mid c$.

# SP-8-9
## front
Definujte kongruenci modulo $m$ pro $a, b \in \mathbb{Z}$.
## back
- $a \equiv b \pmod{m}$ právě tehdy, když $m \mid (a - b)$.
- $a$ je kongruentní s $b$ modulo $m$.

# SP-8-10
## front
Jak vypadá množina zbytků (reziduí) modulo $m$ a jaké operace jsou v ní definovány?
## back
- $\mathbb{Z}_m = \{0, 1, 2, ..., m-1\}$
- Operace: sčítání a násobení modulo $m$.

# SP-8-11
## front
Jak definujeme inverzní prvek v $\mathbb{Z}_m$, a kdy existuje multiplikativní inverze k $a$?
## back
- Aditivní inverze: $a + (-a) \equiv 0 \pmod{m}$
- Multiplikativní inverze: $a \cdot a^{-1} \equiv 1 \pmod{m}$
- Multiplikativní inverze existuje právě tehdy, když $\gcd(a, m) = 1$

# SP-8-12
## front
Uveďte pravidlo pro krácení v kongruenci: $ac \equiv bc$ (mod $m$).
## back
- $d = \gcd(m, c)$
- $ac \equiv bc \pmod{m} \iff a \equiv b \pmod{\frac{m}{d}}$

# SP-8-13
## front
Jak zní Malá Fermatova věta pro prvočíslo $p$ a $a$, kde $\gcd(a, p)=1$?
## back
- Pokud $p$ je prvočíslo a $\gcd(a, p) = 1$, pak:
  - $a^{p-1} \equiv 1 \pmod{p}$

# SP-8-14
## front
Jak vypočteme multiplikativní inverzi čísla $a$ modulo prvočíslo $p$ pomocí Malé Fermatovy věty?
## back
- Pokud $a \neq 0 \in \mathbb{Z}_p$:
  - Multiplikativní inverze je $a^{p-2} \pmod{p}$

# SP-8-15
## front
Co je Eulerova funkce $\varphi(n)$? Jak ji spočítáme pro několik základních typů čísel?
## back
- $\varphi(n)$ je počet přirozených čísel $\leq n$, která jsou s $n$ nesoudělná.
- Základní hodnoty:
  - Je-li $p$ prvočíslo: $\varphi(p) = p - 1$
  - $p$ prvočíslo, $\alpha \in \mathbb{N}$: $\varphi(p^\alpha) = p^\alpha - p^{\alpha - 1}$
  - $m, n \in \mathbb{N}$, $\gcd(m, n) = 1$: $\varphi(mn) = \varphi(m) \cdot \varphi(n)$

# SP-8-16
## front
Jak zní Eulerova věta a co z ní plyne o mocnině a její kongruenci modulo $m$?
## back
- Pokud $a \in \mathbb{N}$ je s $m \geq 2$ nesoudělné, platí:
  - $a^{\varphi(m)} \equiv 1 \pmod{m}$

# SP-8-17
## front
Jak pomocí Eulerovy věty získáme multiplikativní inverzi čísla $a$ modulo $m$, pokud $a$ a $m$ jsou nesoudělná?
## back
- Multiplikativní inverze $a$ modulo $m$ je $a^{\varphi(m)-1} \pmod{m}$

# SP-8-18
## front
Jaké je řešení lineární kongruence $ax \equiv b$ (mod $m$)? Uveďte podmínku existence řešení.
## back
- Najít všechna $x \in \mathbb{Z}$ splňující $ax \equiv b \pmod{m}$.
- Řešení existuje právě tehdy, když $\gcd(a, m) \mid b$.

# SP-8-19
## front
Jak zní Čínská věta o zbytcích (ČVOZ)?
![Čínská věta o zbytcích](img/SP-8_2.jpg)
## back
- Pokud $m_1, ..., m_n$ jsou navzájem nesoudělná a $a_1, ..., a_n \in \mathbb{Z}$, potom existuje právě jedno $x \in \mathbb{Z}$ modulo $M = m_1...m_n$ takové, že $x \equiv a_i \pmod{m_i}$ pro každé $i$.

# SP-8-20
## front
Jaký je explicitní vzorec pro řešení Čínské věty o zbytcích?
![Výpočet řešení ČVOZ](img/SP-8_3.jpg)
## back
$$
x = a_1 M_1 X_1 + a_2 M_2 X_2 + ... + a_n M_n X_n \pmod{M}
$$
kde:
- $M = m_1 m_2 ... m_n$
- $M_i = M / m_i$
- $X_i$ je inverzní prvek $M_i$ modulo $m_i$

# SP-8-21
## front
Co umožňuje zobecněná čínská věta o zbytcích (ZČVOZ)?
![ZČVOZ](img/SP-8_4.jpg)
## back
- Umožňuje řešit kongruenční soustavy i v případě, že moduly nejsou navzájem nesoudělné, pokud splněn určité podmínky slučitelnosti.

# SP-8-22
## front
Jak využít Rozšířený Euklidův algoritmus k nalezení multiplikativní inverze čísla $a$ v $\mathbb{Z}_m$?
![Rozšířený Euklidův algoritmus](img/SP-8_0.jpg)
## back
- Najdeme $x, y$ tak, že $ax + my = 1$. Potom $x$ je inverzní prvek $a$ modulo $m$.
- Inverze existuje, protože $\gcd(a, m) = 1$.

# SP-8-23
## front
Shrňte základní pojmy: dělitelnost, společný dělitel, NSD, společný násobek, NSN.
## back
- Dělitelnost: $a \mid b$ znamená, že $b = a \cdot k$ pro nějaké $k \in \mathbb{Z}$.
- Společný dělitel: číslo, které dělí obě čísla.
- Největší společný dělitel (NSD, gcd): největší takové číslo.
- Společný násobek: číslo, které je násobkem obou.
- Nejmenší společný násobek (NSN, lcm): nejmenší takové číslo.

# SP-8-24
## front
Co znamená zkrátit rovnici $ac \equiv bc$ (mod $m$) a jak určit nový modul?
## back
Označme $d = \gcd(m, c)$. Platí:
  - $ac \equiv bc \pmod{m} \iff a \equiv b \pmod{m/d}$

# SP-8-25
## front
Jak spočtete Eulerovu funkci $\varphi(n)$, pokud znáte prvočíselný rozklad čísla $n$?
## back
Nechť $n = p_1^{\alpha_1} \cdot p_2^{\alpha_2} \cdots p_k^{\alpha_k}$
- Potom:
$$
\varphi(n) = n \cdot \prod_{i=1}^k \left(1 - \frac{1}{p_i}\right)
$$

# SP-8-26
## front
Vyjmenujte hlavní aplikace modulární aritmetiky uvedené v obsahu této otázky.
## back
- Řešení kongruencí
- Výpočet inverzí v $\mathbb{Z}_m$
- Řešení diofantických rovnic
- Čínská věta o zbytcích
- Malá Fermatova a Eulerova věta

# SP-8-27
## front
Jak lze zjistit, zda má lineární kongruence $ax \equiv b \pmod{m}$ právě jedno řešení v $\mathbb{Z}_m$?
## back
- Právě tehdy, když $\gcd(a, m) = 1$ (tedy $a$ má multiplikativní inverzi modulo $m$).
- Řešení pak je $x \equiv a^{-1} b \pmod{m}$

# SP-8-28
## front
Jak vypadají operace sčítání a násobení v $\mathbb{Z}_m$?
## back
Pro $a, b \in \mathbb{Z}_m$:
  - Sčítání: $a + b \mod m$
  - Násobení: $a \cdot b \mod m$

# SP-8-29
## front
Vyjmenujte základní rozdíly mezi Malou Fermatovou a Eulerovou větou.
## back
- Malá Fermatova: platí pro prvočíslo $p$, $\gcd(a, p)=1$: $a^{p-1} \equiv 1 \pmod{p}$
- Eulerova: platí pro libovolné $m \geq 2$, když $\gcd(a, m)=1$: $a^{\varphi(m)} \equiv 1 \pmod{m}$
- Eulerova věta je zobecněním Malé Fermatovy.

# SP-8-30
## front
Jaký je algoritmus a podmínka řešitelnosti soustavy kongruencí podle zobecněné čínské věty o zbytcích (ZČVOZ)?
![ZČVOZ](img/SP-8_4.jpg)
## back
- Řešení soustavy existuje právě tehdy, když pro všechny $i, j$ platí $\gcd(m_i, m_j) \mid (a_i - a_j)$.
- Algoritmus řeší sjednocení případných konfliktních podmínek typicky pomocí jednotlivých kroků ekvivalentních s běžnou ČVOZ.

# SP-8-31
## front
Co je multiplikativní inverze v $\mathbb{Z}_m$ a kdy není určena?
## back
- Multiplikativní inverze k $a$ modulo $m$ je číslo $a^{-1}$ takové, že $a a^{-1} \equiv 1 \pmod{m}$.
- Existuje právě tehdy, když $\gcd(a, m) = 1$.
- Pokud $\gcd(a, m) > 1$, inverze neexistuje.

# SP-8-32
## front
Co je základní úloha teorie čísel, kterou řeší rozšířený Euklidův algoritmus, a jaké jsou jeho hlavní výstupy?
## back
- Základní úloha: najít $\gcd(a, b)$.
- Hlavní výstup: kromě hodnoty $\gcd(a, b)$ také koeficienty $x, y$ takové, že $ax + by = \gcd(a, b)$.

# SP-8-33
## front
Jaký je rozdíl mezi řešením rovnice $ax + by = c$ a kongruence $ax \equiv b \pmod{m}$?
## back
- $ax + by = c$: hledáme celočíselná řešení pro $x, y$ (LDR), existuje-li $\gcd(a, b) \mid c$.
- $ax \equiv b \pmod{m}$: hledáme všechna $x$, pro která $ax - b$ je dělitelné $m$.
- Řešení kongruence je možné převést na LDR.

# SP-8-34
## front
Co znamená, že dvě čísla jsou kongruentní modulo $m$, z hlediska zbytků?
## back
- Znamená to, že při dělení $a$ a $b$ číslem $m$ zbytek je stejný.
- Alternativně: $a$ a $b$ patří do stejné třídy zbytků v $\mathbb{Z}_m$.

# SP-8-35
## front
Jak souvisí prvočísla s existencí multiplikativních inverzí v $\mathbb{Z}_p$?
## back
- Pokud je $p$ prvočíslo, má každé $a \neq 0$ v $\mathbb{Z}_p$ multiplikativní inverzi, protože $\gcd(a, p)=1$ pro každé $a \not\equiv 0 \pmod{p}$.

# SP-8-36
## front
Uveďte základní typy rovnic a struktur řešených v teorii čísel v tomto okruhu.
## back
- Dělitelnost, násobky, NSD, NSN
- Diofantické rovnice (lineární $ax+by=c$)
- Kongruence (zejména lineární)
- Modularní aritmetika, zbytky
- Čínská věta o zbytcích
- Prvočísla, Eulerova funkce, Malá Fermatova a Eulerova věta

