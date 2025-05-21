
# SP-1-1
## front
Vyjmenujte základní charakteristiky regulárních jazyků.
## back
- Jsou podmnožinou bezkontextových, kontextových i rekurzivně spočetných jazyků
- Jazyk je regulární právě tehdy, kdy jej lze generovat regulární gramatikou
- Regulární jazyk lze přijmout deterministickým i nedeterministickým konečným automatem
- Regulární jazyk lze popsat regulárním výrazem
- Regulární jazyky jsou uzavřené vůči operacím: sjednocení, průnik, doplněk, rozdíl, zřetězení, iterace
- Každý konečný jazyk je vždy regulární

# SP-1-2
## front
Jaká pravidla musí splňovat regulární gramatika?
## back
- Pravidla mají tvar:
  - $A \rightarrow a$ nebo $A \rightarrow aB$, kde $A, B \in N$, $a \in \Sigma$
- Povolená výjimka je pravidlo $S \rightarrow \varepsilon$, pouze pokud $S$ není na pravé straně žádného pravidla
- Regulární gramatika je nezkracující ($S\rightarrow \varepsilon$ jedině za popsaných podmínek)

# SP-1-3
## front
Co je gramatika a jak se formálně zapisuje?
## back
- Gramatika je prostředek pro popis jazyků
- Formálně: $G = (N, \Sigma, P, S)$, kde:
  - $N$ — konečná neprázdná množina neterminálních symbolů
  - $\Sigma$ — abeceda terminálních symbolů (abeceda generovaného jazyka), $N \cap \Sigma = \emptyset$
  - $P$ — konečná množina přepisovacích pravidel $\alpha A \beta \rightarrow \gamma$ ($\alpha, \beta, \gamma \in (N \cup \Sigma)^*,\ A\in N$)
  - $S$ — počáteční symbol gramatiky

# SP-1-4
## front
Jak je definován konečný automat (KA)?
## back
- Uspořádaná pětice: $M = (Q, \Sigma, \delta, q_0, F)$, kde:
  - $Q$ — konečná neprázdná množina stavů
  - $\Sigma$ — konečná vstupní abeceda
  - $\delta$ — přechodová funkce:
    - DKA: $\delta: Q \times \Sigma \rightarrow Q$
    - NKA: $\delta: Q \times \Sigma \rightarrow 2^Q$ (mohou být $\varepsilon$-přechody: $\delta: Q \times (\Sigma \cup \varepsilon) \rightarrow 2^Q$)
  - $q_0$ — počáteční stav
  - $F \subset Q$ — množina koncových stavů

# SP-1-5
## front
Popište hlavní rozdíly mezi DKA a NKA.
## back
- DKA (Deterministický KA):
  - Přechodová funkce je jednoznačná: pro každý stav a symbol právě jeden následující stav
  - $\delta: Q \times \Sigma \rightarrow Q$
- NKA (Nedeterministický KA):
  - Pro daný stav a symbol může být více možných následujících stavů (nebo žádný)
  - Přechodová funkce: $\delta: Q \times \Sigma \rightarrow 2^Q$
  - Možné rozšíření o $\varepsilon$-přechody nebo více počátečních stavů
- Každý NKA lze převést na DKA

# SP-1-6
## front
Co je to $\varepsilon$-closure v kontextu KA a k čemu slouží?
## back
- $\varepsilon$-closure pro daný stav je množina stavů, do kterých se lze dostat pomocí $\varepsilon$-přechodů (tj. "zadarmo", bez čtení znaku ze vstupu)
- Obsahuje vždy i původní stav
- Používá se při odstraňování $\varepsilon$-přechodů z automatu a při konverzi NKA na DKA

# SP-1-7
## front
Kdy automat přijme řetězec?
## back
Automat přijme řetězec, pokud:
- Po přečtení všech symbolů vstupu skončí v koncovém stavu ($q \in F$)
- Jinak je řetězec automatem odmítnut

# SP-1-8
## front
Definujte, co znamená nedosažitelný a zbytečný stav v KA. 
## back
- Nedosažitelný stav: Z počátečního stavu do něj neexistuje žádná posloupnost přechodů
- Zbytečný stav: Ze stavu není možné se dostat do žádného koncového stavu
- Odstranění těchto stavů nemění jazyk přijímaný automatem

# SP-1-9
## front
Definujte proces determinizace KA krok za krokem.
## back
- Na vstupu: NKA s jedním poč. stavem a bez $\varepsilon$-přechodů
- Nové stavy DKA tvoříme jako množiny (podmnožiny) stavů NKA, kde může NKA být
- Pro každý vstupní symbol určujeme přechody mezi těmito množinami
- Každou nově vzniklou množinu stavů v DKA postupně "rozšíříme" o jejich přechody
- Hotovo ve chvíli, kdy jsou už všechny podmnožiny "zpracované"

# SP-1-10
## front
Popište algoritmus minimalizace deterministického konečného automatu (DKA).
## back
1. Odstraníme nedosažitelné a zbytečné stavy (BFS z počátečního/koncových stavů)
2. Rozdělíme stavy na dvě skupiny: koncové a nekoncové
3. Pro tyto skupiny vyplníme přechodovou funkci podle "nového označení" skupin
4. Zkontrolujeme, zda všechny stavy ve skupině mají stejné přechody
5. Pokud najdeme rozdíl, vytvoříme novou skupinu, případně rozdělíme podle shodnosti přechodů
6. Opakujeme předchozí kroky, dokud se skupiny dále nemění
7. Výsledný automat je minimální DKA

# SP-1-11
## front
Jak lze skládat/převádět konečné automaty pomocí operací sjednocení a průniku?
## back
- Sjednocení:
  - Pro NKA/NKA s $\varepsilon$-přechody: více počátečních stavů, nebo nový počáteční se $\varepsilon$-přechody na startovní stavy
  - Pro DKA: paralelní činnost; stavy ve výsledku jsou kombinace (kartézský součin) stavů obou automatů
- Průnik:
  - Paralelní činnost (kartézský součin)
  - Ve výsledku jen ty stavy, co vzniknou z koncových stavů obou automatů

# SP-1-12
## front
Co je doplněk a rozdíl jazyků a jak se operují nad KA?
## back
- Doplněk:
  - Potřebujeme úplně určený DKA
  - Prohodíme koncové a nekoncové stavy
- Rozdíl:
  - $L(M_1)\setminus L(M_2) = L(M_1) \cap \overline{L(M_2)}$
  - Nejprve určíme doplněk $L(M_2)$, pak průnik s $L(M_1)$

# SP-1-13
## front
Vysvětlete operace součin (zřetězení) a iterace automatů
## back
- Součin (zřetězení):
  - Ze všech koncových stavů $M_1$ vedeme $\varepsilon$-přechody do počátečního stavu $M_2$
  - Koncové stavy jsou pouze stavy $M_2$, počáteční stavy jsou z $M_1$
- Iterace (Kleeneho hvězda):
  - Přidáme nový počáteční/konečný stav
  - $\varepsilon$-přechod do původního počátečního
  - Ze všech koncových stavů původního automatu vedeme $\varepsilon$-přechody zpět do nového počátečního

# SP-1-14
## front
Vyjmenujte základní stavební prvky (pravidla konstrukce) regulárních výrazů.
## back
- $\varnothing$, $\varepsilon$, $a$ jsou regulární výrazy pro všechna $a \in \Sigma$
- Pokud $x$, $y$ jsou regulární výrazy nad $\Sigma$, pak:
  - $(x+y)$, $(x \cdot y)$, $(x)^*$ jsou regulární výrazy

# SP-1-15
## front
Jak se určuje význam regulárního výrazu?
## back
Nechť $h$ přiřazuje řešenému regulárnímu výrazu jeho jazyk:
- $h(\varnothing) = \varnothing$ (prázdný výraz $\rightarrow$ prázdný jazyk)
- $h(\varepsilon) = \{\varepsilon\}$
- $h(a) = \{a\}$
- $h(x+y) = h(x) \cup h(y)$
- $h(xy) = h(x) \cdot h(y)$
- $h(x^*) = h(x)^*$

# SP-1-16
## front
Popište pravidla derivace regulárních výrazů – napíšete vzorce!
## back
- $\frac{\text{d}V}{\text{d}\varepsilon} = V$
- $\frac{\text{d}\varepsilon}{\text{d}a} = \varnothing$
- $\frac{\text{d}\varnothing}{\text{d}a} = \varnothing$
- $\frac{\text{d}b}{\text{d}a} = \varnothing$
- $\frac{\text{d}a}{\text{d}a} = \varepsilon$
- $\frac{\text{d}(U+V)}{\text{d}a} = \frac{\text{d}U}{\text{d}a} + \frac{\text{d}V}{\text{d}a}$
- $\frac{\text{d}(UV)}{\text{d}a} = \frac{\text{d}U}{\text{d}a}V + \{\frac{\text{d}V}{\text{d}a}:\varepsilon \in h(U)\}$
- $\frac{\text{d}(V^*)}{\text{d}a} = \frac{\text{d}V}{\text{d}a}V^*$

# SP-1-17
## front
Jak lze převádět mezi regulární gramatikou (RG) a konečným automatem (KA)?
## back
- RG $\rightarrow$ KA:
  - Stavy mají stejná jména jako neterminály, vyřešíme koncové stavy
- KA $\rightarrow$ RG:
  - Neterminál pro každý stav automatu
  - Pravidla odpovídají přechodové funkci

# SP-1-18
## front
Vyjmenujte a krátce popište nejčastější převody mezi RG, KA, RV.
## back
- RG $\leftrightarrow$ KA: Stavy odpovídají neterminálům
- RV $\rightarrow$ KA: 
  - Metoda sousedů (počáteční/konečné znaky a jejich sousedi tvoří hrany v KA)
  - Metoda derivací (každý nový regulární výraz je nový stav)
  - Postupná konstrukce (sestavujeme automat odspodu)
- KA $\rightarrow$ RV:
  - Soustava regulárních rovnic (stav = neznámá, spočítáme výraz pro poč. stav)
  - Eliminace stavů (přidáme nový poč. koncový, redukujeme)
- RG $\rightarrow$ RV: Převod pravidel na rovnice
- RV $\rightarrow$ RG: Metoda derivací, postupná konstrukce

# SP-1-19
## front
K čemu slouží pumping lemma pro regulární jazyky a jak jej použít?
## back
- Platí: regulární jazyk $\Rightarrow$ pumpující vlastnost (pumping lemma)
- Používá se pro důkaz neregularity jazyka: když nějaký jazyk pumpovací lemma nesplňuje, není regulární
- Pumpovací vlastnost: 
  - Pokud je jazyk $L$ regulární, existuje číslo $p > 0$ tak, že každé slovo $w \in L$, pro které platí $|w| \geq p$, lze zapsat ve tvaru $w = xyz$, kde pro slova $x, y$ a $z$ platí, že $|xy| \leq p$, $|y| > 0$ a $xy^iz \in L$ pro každé $i \geq 0$.
- Postup:
  - Najděte větu z jazyka, rozdělte na $xyz$ s $|xy| \leq p, |y|\geq 1$
  - Určete $k$, aby $xy^kz \notin L$
  - Pokud takové $x, y, z$ vždy najdete, jazyk není regulární

# SP-1-20
## front
Vyjmenujte základní operace, pro které jsou regulární jazyky uzavřené.
## back
- Sjednocení
- Průnik
- Doplněk
- Rozdíl
- Zřetězení (součin)
- Iterace (Kleeneho hvězda)

# SP-1-21
## front
Jak lze odstranit více počátečních stavů v NKA?
## back
Přidáme nový jediný počáteční stav a vedeme z něj $\varepsilon$-přechody do všech původních počátečních stavů.

# SP-1-22
## front
K čemu slouží minimální DKA a jak zjistíme jeho ekvivalenci s jiným DKA?
## back
- Minimální DKA je takový automat pro daný jazyk $L$, který má nejméně stavů – odstraněné nedosažitelné, zbytečné a ekvivalentní stavy
- Ekvivalenci dvou KA ověříme převodem obou na minimální DKA a hledáním isomorfismu mezi nimi

# SP-1-23
## front
Co znamená, že regulární gramatika je nezkracující?
## back
Žádné pravidlo (kromě povolené výjimky $S \rightarrow \varepsilon$, pouze když $S$ není na pravé straně žádného pravidla) neumožňuje produkovat prázdný řetězec; všechny ostatní pravidla generují alespoň jeden symbol.

# SP-1-24
## front
Co znamená homogenní konečný automat?
## back
Každý stav má definován přechod právě pro jeden symbol – do konkrétního stavu se lze dostat právě pomocí jednoho symbolu.

# SP-1-25
## front
Jaký je rozdíl mezi levou a pravou regulární rovnicí? Uveďte tvar obou.
## back
- Levá regulární rovnice: $x = x\alpha + \beta$ (neznámý člen $x$ vlevo, násobení za $x$)
- Pravá regulární rovnice: $x = \alpha x + \beta$ (neznámý člen $x$ vpravo, násobení před $x$)

# SP-1-26
## front
Jaká je metoda eliminace stavů při převodu KA → RV?
## back
- Přidá se nový počáteční stav (a případně nový koncový, pokud je víc původních koncových)
- Postupně se odebírají stavy; při každé eliminaci aktualizujeme "cestu" přesúvanou do regulárního výrazu mezi zbylými stavy
- Na konci obdržíme regulární výraz pro přijímaný jazyk

# SP-1-27
## front
Vysvětlete princip převodu RG → RV pomocí regulárních rovnic.
## back
- Každé pravidlo nahradíme vhodnou rovnicí, kde neznámé jsou neterminální symboly
- Pravidla určují pravou či levou regulární rovnici
- Řešíme soustavu tak, aby pro počáteční neterminál dostaneme regulární výraz jazyka

# SP-1-28
## front
Proč má regulární jazyk konečný automat a zároveň regulární gramatiku i regulární výraz?
## back
Protože platí ekvivalence:
- KA $\leftrightarrow$ RG $\leftrightarrow$ RV
- Tj. každý regulární jazyk lze přijmout konečným automatem, generovat regulární gramatikou i vyjádřit regulárním výrazem

# SP-1-29
## front
Co se stane při záměně koncových a nekoncových stavů v úplně určeném DKA?
## back
Získáme automat, který přijímá doplněk původního jazyka (tj. všechny řetězce, které původní automat odmítá, a naopak).

# SP-1-30
## front
Co znamená, že KA lze zapsat různými způsoby? Vyjmenujte aspoň 3 způsoby zápisu.
## back
Konečný automat lze formálně popsat více způsoby, např.:
- Formálně pomocí pěti-prvkové n-tice $(Q, \Sigma, \delta, q_0, F)$
- Jako ohodnocený orientovaný graf (vrcholy – stavy, hrany – přechody)
- V tabulce (tabulka přechodové funkce)
