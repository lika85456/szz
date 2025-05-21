
# SP-8-1
## front
Co znamená, že $a$ dělí $b$? Jak značíme tuto relaci?
## back
- $a, b \in \mathbb{Z}$
- Číslo $a$ dělí $b$, značíme $a \mid b$, pokud existuje $k \in \mathbb{Z}$ takové, že $a \cdot k = b$.
- $a$ je celočíselný dělitel $b$, $b$ je násobek $a$.
- Pokud $a$ nedělí $b$, píšeme $a \nmid b$.

# SP-8-2
## front
Jak formálně vypadá dělení se zbytkem? Jaké hodnoty nabývá zbytek?
## back
- Pro $a \in \mathbb{Z}, d \in \mathbb{N}$ existují jednoznačně čísla $q, r \in \mathbb{Z}$ taková, že:
  - $a = qd + r$ a $0 \leq r < d$
- $q$ je celočíselný podíl
- $r$ je zbytek po dělení $a$ číslem $d$, značíme $r = a \bmod d$
- $r \in \{0, 1, ..., d-1\}$

# SP-8-3
## front
Kdy je číslo $n$ společným dělitelem čísel $a$ a $b$?
## back
- $n \in \mathbb{N}_0$ je společný dělitel $a, b$ právě tehdy, když $n \mid a \land n \mid b$.

# SP-8-4
## front
Jak je definován největší společný dělitel (gcd) dvou celých čísel $a$, $b$?
## back
- $n = \gcd(a, b)$, pokud platí:
  - $n \mid a \land n \mid b$
  - Každý další společný dělitel $d$ dělí $n$: $(\forall d \in \mathbb{N}_0)[(d \mid a \land d \mid b) \Rightarrow d \mid n]$

# SP-8-5
## front
Kdy jsou dvě čísla $a$ a $b$ nesoudělná? Co znamená naopak soudělnost?
## back
- $a, b$ jsou nesoudělná, pokud $\gcd(a, b) = 1$
- Jsou soudělná, pokud $\gcd(a, b) > 1$

# SP-8-6
## front
Kdy je číslo $n$ společným násobkem čísel $a, b$? Co je nejmenší společný násobek (lcm)?
## back
- $n \in \mathbb{N}_0$ je společný násobek $a, b$, pokud $a \mid n \land b \mid n$
- Nejmenší společný násobek $n = \mathrm{lcm}(a, b)$, pokud:
  - $a \mid n \land b \mid n$
  - Pro každý další společný násobek $m$, $n \mid m$

# SP-8-7
## front
Co znamená zkratka REA v teorii čísel? (doplněno obrázkem algoritmu)
## back
- REA je Rozšířený Euklidův Algoritmus (Extended Euclidean Algorithm)
- Slouží k hledání $\gcd(a, b)$ a řešení $ax + by = \gcd(a, b)$ v celých číslech
- {Schéma algoritmu nebo průběh algoritmu – například obrázek "Rozšířený Euklidův algoritmus"}

# SP-8-8
## front
Co je lineární diofantická rovnice (LDR) a kdy má řešení?
## back
- Rovnice tvaru $ax + by = c$, kde $a, b, c \in \mathbb{Z}$ a $x, y \in \mathbb{Z}$
- LDR má řešení právě tehdy, když $\gcd(a, b) \mid c$
- {Ukázka řešení nebo schéma – například obrázek "Řešení LDR"}

# SP-8-9
## front
Jak rozdělujeme přirozená čísla podle počtu dělitelů?
## back
1. Číslo $1$: 1 dělitel (samo sebe)
2. Prvočísla: 2 dělitelé (1 a sama sebe)
3. Složená čísla: 3 nebo více dělitelů

# SP-8-10
## front
Kdy platí kongruence $a \equiv b \pmod{m}$ a co tato relace znamená?
## back
- Pro $a, b \in \mathbb{Z}$, $m \in \mathbb{N}$:
  - $a \equiv b \pmod{m}$ právě tehdy, když $m \mid (a - b)$
- To znamená, že $a$ a $b$ mají po dělení $m$ stejný zbytek

# SP-8-11
## front
Co je množina zbytků modulo $m$, jak ji značíme, a jaké operace jsou na ní definovány?
## back
- Pro $m \geq 2$: $\mathbb{Z}_m = \{0,1,2,...,m-1\}$
- Na $\mathbb{Z}_m$ jsou definovány operace:
  - Sčítání modulo $m$
  - Násobení modulo $m$

# SP-8-12
## front
Co je aditivní a multiplikativní inverze v $\mathbb{Z}_m$?
## back
- Aditivní inverze (opačný prvek): $a + (-a) \equiv 0 \pmod{m}$
- Multiplikativní inverze (inverzní prvek): $a \cdot a^{-1} \equiv 1 \pmod{m}$

# SP-8-13
## front
Za jakých podmínek má $a \in \mathbb{Z}_m$ multiplikativní inverzi?
## back
- Multiplikativní inverze k $a$ v $\mathbb{Z}_m$ existuje právě tehdy, když $\gcd(a, m) = 1$
- Pokud existuje, je jediná

# SP-8-14
## front
Jak se provádí krácení v modulární aritmetice? Uveď příslušný vztah.
## back
- Pro $a, b, c \in \mathbb{Z}, m \in \mathbb{N}, m \geq 2$, označme $d = \gcd(m, c)$
- Platí: $ac \equiv bc \pmod m \iff a \equiv b \pmod{m/d}$

# SP-8-15
## front
Formulujte malou Fermatovu větu.
## back
- Je-li $p$ prvočíslo a $a \in \mathbb{N}$ takové, že $p \nmid a$ (tj. $\gcd(a,p)=1$), potom platí:
  - $a^{p-1} \equiv 1 \pmod{p}$

# SP-8-16
## front
Jak lze v $\mathbb{Z}_p$, kde $p$ je prvočíslo a $a \neq 0$, najít multiplikativní inverzi $a$?
## back
- Platí: $a^{p-2}$ je multiplikativní inverzí čísla $a$ modulo $p$

# SP-8-17
## front
Definujte Eulerovu funkci $\varphi(n)$. Co počítá?
## back
- $\varphi : \mathbb{N} \rightarrow \mathbb{N}$
- Každému $n \in \mathbb{N}$ přiřadí počet čísel $k \leq n$ takových, že $\gcd(k, n) = 1$
- Tedy: $\varphi(n) = |\{k \in \mathbb{N} : k \leq n, \gcd(k,n) = 1\}|$

# SP-8-18
## front
Formulujte Eulerovu větu. Kdy platí?
## back
- Pro $m \geq 2$ a $a \in \mathbb{N}$ nesoudělné s $m$ platí:
  - $a^{\varphi(m)} \equiv 1 \pmod{m}$
- Pokud $p$ je prvočíslo, $\varphi(p) = p - 1$: věta splývá s malou Fermatovou

# SP-8-19
## front
Jak spočítáme Eulerovu funkci $\varphi(n)$ v následujících případech?
- $p$ je prvočíslo
- $p$ je prvočíslo, $\alpha \in \mathbb{N}$
- $m, n \in \mathbb{N}, \gcd(m, n) = 1$
## back
- $p$ prvočíslo: $\varphi(p) = p - 1$
- $p$ prvočíslo, $\alpha$: $\varphi(p^\alpha) = p^\alpha - p^{\alpha-1}$
- $\gcd(m, n) = 1$: $\varphi(m \cdot n) = \varphi(m) \cdot \varphi(n)$

# SP-8-20
## front
Jaký vztah existuje mezi Eulerovou funkcí a multiplikativní inverzí v $\mathbb{Z}_m$?
## back
- Pro $m \geq 2$ a $a \in \mathbb{Z}_m$ nesoudělné s $m$ je $a^{\varphi(m) - 1}$ multiplikativní inverzí čísla $a$ modulo $m$

# SP-8-21
## front
Jak je definována lineární kongruence a co je jejím řešením?
## back
- Hledáme $x \in \mathbb{Z}$ splňující $ax \equiv b \pmod{m}$, kde $a, b, m \in \mathbb{Z}, m \geq 2$
- Řešením je množina všech $x$ splňujících tuto kongruenci

# SP-8-22
## front
Co je Čínská věta o zbytcích (ČVOZ)? (doplněno schématem)
## back
- Je to výrok o řešení soustavy kongruencí s různými, navzájem nesoudělnými moduly.
- Pokud $m_1, ..., m_N$ jsou vzájemně nesoudělná a $a_1, ..., a_N \in \mathbb{Z}$, pak soustava:
  $$
  x \equiv a_1 \pmod{m_1} \\
  x \equiv a_2 \pmod{m_2} \\
  ... \\
  x \equiv a_N \pmod{m_N}
  $$
  má řešení, které je určeno modulo $M = m_1 \cdot ... \cdot m_N$
- {Obrázek schématu ČVOZ – například obrázek "SP-8_2.jpg"}

# SP-8-23
## front
Jak získáme konkrétní řešení soustavy kongruencí pomocí Čínské věty o zbytcích?
## back
- Výsledek je:
  $$
  x = a_1 \cdot M_1 \cdot X_1 + ... + a_N \cdot M_N \cdot X_N \pmod M
  $$
  - $M_i = \frac{M}{m_i}$, $X_i$ je inverze $M_i$ modulo $m_i$, $M = m_1 \cdots m_N$
- {Obrázek postupu – například obrázek "SP-8_3.jpg"}

# SP-8-24
## front
Jak vypadá zobecněná čínská věta o zbytcích (ZČVOZ)? (obrazový materiál)
## back
- ZČVOZ řeší soustavu kongruencí i v případě, že moduly nejsou nesoudělné
- Určuje existenci a podobu řešení v obecnějším případě
- {Schéma nebo obrázek s obecnou větou - například obrázek "SP-8_4.jpg"}
```
