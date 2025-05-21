# SP-1-1
## front
Jaká je definice regulárního jazyka? Vyjmenujte klíčové vlastnosti regulárních jazyků.
## back
- Regulární jazyk je jazyk, který lze:
  - generovat regulární gramatikou,
  - přijmout deterministickým nebo nedeterministickým konečným automatem,
  - popsat regulárním výrazem.
- Jsou podmnožinou bezkontextových, kontextových i rekurzivně spočetných jazyků.
- Regulární jazyky jsou uzavřené na operace: sjednocení, průnik, doplněk, rozdíl, zřetězení, iterace.
- Každý konečný jazyk je regulární.

# SP-1-2
## front
Vysvětlete pojmy: terminální a neterminální symbol v gramatice. Jaká je formální definice gramatiky?
## back
- Terminální symboly ($\Sigma$): Základní, nedělitelný symbol abecedy generovaného jazyka.
- Neterminální symboly ($N$): Pomocné symboly používané pro generování pravidly.
- Gramatika je uspořádaná čtveřice: $$G = (N, \Sigma, P, S),$$ kde:
  - $N$ je konečná neprázdná množina neterminálních symbolů,
  - $\Sigma$ je abeceda terminálních symbolů, $N \cap \Sigma = \emptyset$,
  - $P$ je konečná množina přepisovacích pravidel ($\alpha A \beta \rightarrow \gamma$),
  - $S$ je počáteční symbol gramatiky.

# SP-1-3
## front
Jaká pravidla může obsahovat regulární gramatika? Co je jediná výjimka?
## back
- Pravidla pouze ve tvaru:
  - $A \rightarrow a$ nebo $A \rightarrow aB$, kde $a \in \Sigma, A,B \in N$
- Výjimka: pravidlo $S \rightarrow \varepsilon$ povoleno pouze pokud $S$ není na pravé straně žádného jiného pravidla.
- Regulární gramatika je nezkracující s touto výjimkou.

# SP-1-4
## front
Formálně definujte konečný automat a popište jeho hlavní komponenty.
## back
Konečný automat je pětice: $$M = (Q, \Sigma, \delta, q_0, F),$$ kde:
- $Q$ — konečná neprázdná množina stavů,
- $\Sigma$ — konečná vstupní abeceda,
- $\delta$ — přechodová funkce,
  - pro DKA: $\delta : Q \times \Sigma \rightarrow Q$
  - pro NKA: $\delta : Q \times \Sigma \rightarrow 2^Q$ (může mít $\varepsilon$-přechody: $Q \times (\Sigma \cup \varepsilon)$)
- $q_0$ — počáteční stav ($q_0 \in Q$),
- $F \subset Q$ — množina koncových stavů.

# SP-1-5
## front
Co dělá konečný automat s řetězcem? Kdy je řetězec přijat automatem?
## back
- Automat začíná v počátečním stavu, hlava čte první symbol vstupního řetězce.
- Pro každý symbol se stav aktualizuje podle přechodové funkce, hlava se pohne na další symbol.
- Po přečtení celého řetězce je řetězec přijat, pokud automat skončí v některém z koncových stavů ($F$).

# SP-1-6
## front
Jak lze odstranit nedosažitelné a zbytečné stavy z konečného automatu? Má tato úprava vliv na jazyk přijímaný automatem?
## back
- Nedosažitelné stavy nejsou dosažitelné z počátečního stavu žádnou posloupností přechodů.
- Zbytečné stavy nejsou dosažitelné do žádného koncového stavu.
- Oba typy stavů lze odstranit bez vlivu na jazyk přijímaný automatem.

# SP-1-7
## front
Popište postup odstranění $\varepsilon$-přechodů v nedeterministickém konečném automatu (NKA).
## back
- Vypočítá se $\varepsilon$-closure pro každý stav (množina stavů dosažitelných pouze pomocí $\varepsilon$-přechodů, včetně sebe sama).
- Přechodová funkce se upraví: při přechodu z $S$ na symbol $a$ přecházíme do všech stavů, do kterých vedou přechody z $\varepsilon$-closure($S$).
- Koncové stavy upravíme: pokud v $\varepsilon$-closure původního stavu byl nějaký koncový, je i nový stav koncový.

# SP-1-8
## front
Jak lze převést NKA s více počátečními stavy na ekvivalentní NKA s jediným počátečním stavem?
## back
- Přidáme nový jediný počáteční stav.
- Z tohoto nového počátečního stavu vedou $\varepsilon$-přechody do všech původních počátečních stavů.

# SP-1-9
## front
Popište princip determinizace NKA (převod na DKA).
## back
- Vstup: NKA s jedním počátečním stavem, bez $\varepsilon$-přechodů.
- Každý stav DKA odpovídá množině stavů NKA, ve kterých se NKA může nacházet po přečtení určité části vstupu.
- Pro každou takto vzniklou množinu zkonstruujeme nové přechody podle možností NKA.
- Postup opakujeme, dokud neprojdeme všechny nalezené množiny.

# SP-1-10
## front
Jak probíhá minimalizace deterministického konečného automatu?
## back
1. Odstraníme nedosažitelné a zbytečné stavy (např. BFS průchodem).
2. Rozdělíme stavy na koncové a nekoncové skupiny.
3. Pro nové skupiny upravíme přechodovou funkci.
4. Zkontrolujeme, zda všechny stavy ve skupině mají shodné přechody.
5. Pokud ne, dále skupinu dělíme; opakujeme, dokud složení skupin neměníme.
6. Výsledný automat nemá ekvivalentní stavy a je minimální.

# SP-1-11
## front
Jak lze zjistit, zda jsou dva konečné automaty ekvivalentní?
## back
- Převedeme oba automaty na minimální deterministickou podobu (minimální DKA).
- Pokud existuje izomorfismus mezi těmito automaty, jsou ekvivalentní (přijímají tentýž jazyk).

# SP-1-12
## front
Jak lze provést sjednocení dvou konečných automatů? Popište dva přístupy podle typů automatů.
## back
- Pro NKA s $\varepsilon$-přechody nebo s více počátečními stavy:
  - Nový počáteční stav, $\varepsilon$-přechody do počátečních stavů obou automatů, nebo více počátečních stavů.
- Pro úplně určené DKA nebo NKA:
  - Paralelní činnost (stav je dvojice stavů z původních automatů). Každý nový stav představuje kombinaci původních stavů.

# SP-1-13
## front
Jak probíhá průnik jazyků přijímaných KA? Jak vypadají koncové stavy ve výsledném automatu?
## back
- Vytvoříme nový automat pomocí paralelní činnosti (stav je dvojice stavů z původních automatů).
- Nové koncové stavy jsou ty dvojice, kde oba původní stavy jsou koncové.

# SP-1-14
## front
Jak utvoříme doplněk jazyka přijímaného KA?
## back
- Vstupní automat musí být úplně určený DKA.
- Prohodíme koncové a nekoncové stavy.

# SP-1-15
## front
Jak lze zapsat rozdíl dvou jazyků pomocí operací s konečnými automaty?
## back
$$L(M_1) \setminus L(M_2) = L(M_1) \cap \overline{L(M_2)}$$
- Provedeme průnik $M_1$ s doplňkem jazyka přijímaného $M_2$.

# SP-1-16
## front
Jak se realizuje součin (zřetězení) dvou KA?
## back
- Ze všech koncových stavů $M_1$ zavedeme $\varepsilon$-přechody do počátečního stavu $M_2$.
- Novými koncovými stavy budou koncové stavy $M_2$, počáteční stav bude počáteční stav $M_1$.

# SP-1-17
## front
Popište, jak se provádí iterace (hvězda) jazyka KA.
## back
- Přidáme nový počáteční stav, který je zároveň koncovým.
- Z nového počátečního vedeme $\varepsilon$-přechod do původního počátečního.
- Ze všech původních koncových stavů vedeme $\varepsilon$-přechody zpět do nového počátečního.

# SP-1-18
## front
Jaké jsou elementární regulární výrazy a jaké operace lze s nimi tvořit?
## back
- Základní regulární výrazy:
  - $\varnothing$ (prázdný jazyk)
  - $\varepsilon$ (jazyk obsahující prázdný řetězec)
  - $a$ pro $a \in \Sigma$
- Pokud $x$ a $y$ jsou regulární výrazy:
  - $(x + y)$ — sjednocení,
  - $(x \cdot y)$ — zřetězení,
  - $(x)^*$ — iterace (Kleeneho hvězda).

# SP-1-19
## front
Jaké jazyky reprezentují hodnoty regulárních výrazů $\varnothing$, $\varepsilon$, $a$, $(x + y)$, $(x\cdot y)$ a $(x^*)$?
## back
- $h(\varnothing) = \varnothing$
- $h(\varepsilon) = \{\varepsilon\}$
- $h(a) = \{a\}$
- $h(x + y) = h(x) \cup h(y)$
- $h(x\cdot y) = h(x)\cdot h(y)$
- $h(x^*) = h(x)^*$

# SP-1-20
## front
Vyjmenujte základní pravidla pro derivace regulárních výrazů (odebírání předpony).
## back
- $\frac{\text{d}V}{\text{d}\varepsilon} = V$
- $\frac{\text{d}\varepsilon}{\text{d}a} = \varnothing$
- $\frac{\text{d}\varnothing}{\text{d}a} = \varnothing$
- $\frac{\text{d}b}{\text{d}a} = \varnothing$
- $\frac{\text{d}a}{\text{d}a} = \varepsilon$
- $\frac{\text{d}(U + V)}{\text{d}a} = \frac{\text{d}U}{\text{d}a} + \frac{\text{d}V}{\text{d}a}$
- $\frac{\text{d}(UV)}{\text{d}a} = \frac{\text{d}U}{\text{d}a}V + \{\frac{\text{d}V}{\text{d}a}:\varepsilon \in h(U)\}$
- $\frac{\text{d}(V^*)}{\text{d}a} = \frac{\text{d}V}{\text{d}a}\cdot V^*$

# SP-1-21
## front
Jak řešíme levé a pravé regulární rovnice? Uveďte obecný tvar těchto rovnic.
## back
- Levá rovnice: $x = x\alpha + \beta$
- Pravá rovnice: $x = \alpha x + \beta$, kde $\alpha,\beta$ jsou známé výrazy, $x$ neznámá.
- Cílem je izolovat $x$ a vyřešit rovnici (typicky dosazováním a využitím operací regulárních jazyků).

# SP-1-22
## front
Metody převodů mezi regulárními gramatikami (RG), KA a regulárními výrazy (RV): Jak převedete RG $\rightarrow$ KA?
## back
- Stavy KA jsou obvykle stejné jako neterminály RG.
- Pravidla RG odpovídají přechodům KA.
- Jediný rozdíl: nutno pořešit koncové stavy dle pravidel a počáteční stav.

# SP-1-23
## front
Popište metodu sousedů při převodu regulárního výrazu na konečný automat.
## back
- Každý znak se očísluje (považuje za jiný).
- Vytvoří se množiny počátečních a koncových znaků a množina sousedních znaků.
- Každý znak tvoří stav, plus nový počáteční stav.
- Z nového počátečního staví hrany do stavů počátečních znaků, dále přidáváme hrany dle sousedních znaků.

# SP-1-24
## front
Popište metodu derivací při převodu RV na KA.
## back
- Postupně derivujeme výraz všemi znaky abecedy.
- Každý vzniklý regulární výraz považujeme za nový stav automatu.
- Přechodová funkce je dána derivací jednotlivých výrazů.

# SP-1-25
## front
Jak lze z regulárního výrazu vytvořit KA metodou postupné konstrukce?
## back
- Automat se sestavuje od elementárních výrazů ($\varepsilon$, $a$, $\varnothing$).
- Postupně přidáváme operace (sjednocení, zřetězení, iterace) a rozšiřujeme automat začleňováním jejich automatických analogií.

# SP-1-26
## front
Jak převedeme KA na regulární výraz metodou regulárních rovnic (metoda pravých rovnic)?
## back
- Ke každému stavu sestavíme regulární rovnici odvozenou z jeho odchozích přechodů.
- U koncových stavů přidáme $+\varepsilon$.
- Soustavu řešíme na výraz odpovídající počátečnímu stavu.

# SP-1-27
## front
Popište metodu eliminace stavů při převodu KA na regulární výraz.
## back
- Přidáme (je-li třeba) nový počáteční a nový koncový stav.
- Postupně odebíráme jednotlivé stavy a přepisujeme přechody mezi ostatními stavy pomocí regulárních výrazů.
- Výsledkem je jediný regulární výraz popisující jazyk KA.

# SP-1-28
## front
Jak se převádí regulární gramatika na regulární výraz?
## back
- Metoda regulárních rovnic: Každé pravidlo převedeme na regulární rovnici.
- Eliminace neterminálních symbolů: Postupně odebíráme neterminály, obdobně jako eliminaci stavů v KA.

# SP-1-29
## front
Popište pumping lemma pro regulární jazyky.
## back
- Pro každý regulární jazyk existuje "pumpující vlastnost".
- Používá se pro důkaz neregularity jazyka.
- Některé slovo $w$ rozdělíme na $xyz$ s podmínkami:
  - $|xy| \leq p$, $|y| \geq 1$
- Pro některý $k$ platí: $xy^k z \not\in L$
- Pokud takové rozdělení nalezneme, jazyk není regulární.

# SP-1-30
## front
Co znamená, že regulární jazyky jsou uzavřené na základní jazykové operace?
## back
Regulární jazyky tvoří třídu jazyků, pro kterou:
- sjednocení ($L_1 \cup L_2$),
- průnik ($L_1 \cap L_2$),
- doplněk ($\overline{L}$),
- rozdíl ($L_1 \setminus L_2$),
- zřetězení ($L_1 \cdot L_2$),
- iterace ($L^*$)
vždy existuje regulární jazyk, tzn. uzavřenost na tyto operace.
