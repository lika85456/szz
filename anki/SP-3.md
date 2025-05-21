
# SP-3-1
## front
Co je neorientovaný graf a jaké množiny jej tvoří?
## back
- Neorientovaný graf je uspořádaná dvojice $(V, E)$, kde:
  - $V$ je neprázdná konečná množina vrcholů,
  - $E$ je množina hran (každá hrana je dvouprvková podmnožina $V$).

# SP-3-2
## front
Jak se značí hrana spojující vrcholy $u$ a $v$ v neorientovaném grafu?
## back
- Hrana mezi vrcholy $u$ a $v$ se značí $\{u, v\}$.

# SP-3-3
## front
Co je množina všech možných hran v neorientovaném grafu s vrcholy $V$?
## back
- Množina všech možných hran je $\binom{V}{2}$ (všechny dvouprvkové podmnožiny $V$).

# SP-3-4
## front
Jak se nazývají vrcholy, které tvoří hranu, a jaký mají mezi sebou vztah?
## back
- Vrcholy tvořící hranu jsou koncové vrcholy této hrany.
- Jsou incidentní s danou hranou.
- Navzájem jsou sousedé.

# SP-3-5
## front
Vysvětli rozdíl mezi sledem a cestou v grafu.
## back
- Sled: Sekvence vrcholů a hran, kde každá hrana spojuje sousední vrcholy.
- Cesta: Sled, ve kterém se žádný vrchol (ani hrana) neopakuje.

# SP-3-6
## front
Definuj orientovaný graf.
## back
- Orientovaný graf je dvojice $(V, E)$, kde $E$ je množina orientovaných hran (tj. uspořádané dvojice vrcholů).

# SP-3-7
## front
Co je stupeň vrcholu? Odpověz pro neorientované i orientované grafy.
## back
- Neorientované grafy: Stupeň vrcholu je počet hran obsahujících tento vrchol (neboli počet jeho sousedů, pokud nepovolíme více hran mezi stejnými vrcholy).
- Orientované grafy:
  - Vstupní stupeň: Počet hran směřujících do vrcholu.
  - Výstupní stupeň: Počet hran, které z vrcholu vycházejí.

# SP-3-8
## front
Co je okolí vrcholu a co regulární graf?
## back
- Okolí vrcholu: Množina všech jeho sousedních vrcholů.
- Regulární graf: Graf, kde všechny vrcholy mají stejný stupeň.

# SP-3-9
## front
Co je úplný graf a jak se značí?
## back
- Úplný graf obsahuje všechny možné hrany mezi vrcholy.
- Značíme $K_n$, kde $n = |V|$.
- Hrany jsou $E = \binom{V}{2}$.

# SP-3-10
## front
Definuj úplný bipartitní graf a jeho značení.
## back
- Úplný bipartitní graf ($K_{m,n}$): Vrcholy jsou rozděleny do dvou disjunktních part, hrany vedou pouze mezi partami a ne uvnitř.
- Každý vrchol první party je spojen se všemi vrcholy druhé party.

# SP-3-11
## front
Co je grafová cesta $P_m$ a kružnice $C_n$?
## back
- Cesta $P_m$: Sled $m+1$ vrcholů se $m$ hranami, v němž se žádný vrchol neopakuje.
- Kružnice $C_n$: Sled $n$ různých vrcholů a $n$ hran, uzavírající okruh (poslední vrchol je soused prvního).

# SP-3-12
## front
Vysvětli, co je doplněk grafu $\overline{G}$.
## back
- Doplněk grafu $\overline{G}$:
  - Má stejné vrcholy jako $G$.
  - Hrana mezi dvěma vrcholy existuje v $\overline{G}$, pokud neexistuje v $G$.

# SP-3-13
## front
Rozdíl mezi podgrafem a indukovaným podgrafem.
## back
- Podgraf: Graf vzniklý omezením na podmnožiny vrcholů a hran původního grafu.
- Indukovaný podgraf: Podgraf na zvolené podmnožině vrcholů, obsahuje všechny hrany původního grafu mezi těmito vrcholy.

# SP-3-14
## front
Formuluj princip sudosti v teorii grafů.
## back
- Součet stupňů všech vrcholů v neorientovaném grafu je vždy dvojnásobkem počtu hran: 
  $$
  \sum_{v \in V} \deg(v) = 2|E|
  $$

# SP-3-15
## front
Co jsou zdroj a stok v orientovaném grafu?
## back
- Zdroj: Vrchol s nulovým vstupním stupněm.
- Stok: Vrchol s nulovým výstupním stupněm.

# SP-3-16
## front
Co znamená, že graf je souvislý? Co je souvislá komponenta?
## back
- Graf je souvislý, když mezi každou dvojicí vrcholů existuje cesta.
- Souvislá komponenta: Maximální souvislý podgraf (tj. podgraf, v kterém jsou všechny vrcholy navzájem dosažitelné, a nelze jej zvětšit o další dosažitelný vrchol).

# SP-3-17
## front
Jaké jsou základní paměťové reprezentace grafu?
## back
- Seznam sousedů: $O(|V| + |E|)$ paměti.
- Matice sousednosti: $O(|V|^2)$ paměti.

# SP-3-18
## front
Co je symetrizace orientovaného grafu a kdy je graf slabě souvislý?
## back
- Symetrizace: Všechny orientované hrany mezi dvěma vrcholy jsou nahrazeny jednou neorientovanou hranou.
- Slabá souvislost: Symetrizovaný graf je souvislý.

# SP-3-19
## front
Definuj silnou souvislost v orientovaném grafu.
## back
- Silně souvislý orientovaný graf: Pro každé dva vrcholy $u, v$ existuje orientovaná cesta z $u$ do $v$ i z $v$ do $u$.

# SP-3-20
## front
Co znamená izomorfismus grafů?
## back
- Dva grafy jsou izomorfní, pokud existuje bijekce mezi jejich množinami vrcholů, která zachovává incidenci hran (tj. mezi odpovídajícími vrcholy existuje hrana v jednom grafu tehdy a jen tehdy, když existuje v druhém).

# SP-3-21
## front
Co je strom a kostra grafu?
## back
- Strom: Souvislý graf, který neobsahuje žádnou kružnici.
- Kostra grafu: Podgraf, který obsahuje všechny vrcholy původního grafu a je stromem.

# SP-3-22
## front
Co je topologické uspořádání orientovaného grafu?
## back
- Uspořádání vrcholů do lineární posloupnosti tak, že pro každou orientovanou hranu $(u \to v)$ platí, že $u$ je před $v$.

# SP-3-23
## front
Popiš algoritmus BFS a jeho využití v grafu.
## back
- Breadth-First Search (prohledávání do šířky):
  - Začíná v daném vrcholu, navštěvuje všechny jeho sousedy, pak sousedy jejich sousedů atd.
  - Využívá frontu pro uchovávání navštívených, ale nezpracovaných vrcholů.
  - Umožňuje určit vzdálenost mezi vrcholy (délka nejkratší cesty).
  - Používá se pro zjišťování souvislých komponent či pro konstrukci kostry grafu.
  - Časová a paměťová složitost: $O(n + m)$ pro seznam sousedů.

# SP-3-24
## front
Popiš algoritmus DFS a jeho vlastnosti.
## back
- Depth-First Search (prohledávání do hloubky):
  - Rozvíjí hledání v posledním nalezeném/nejnovějším vrcholu.
  - Používá zásobník (nebo rekurzi).
  - Použití: hledání kostry a souvislých komponent.
  - Časová a paměťová složitost: $O(n + m)$ pro seznam sousedů.

# SP-3-25
## front
Co je topologické uspořádání a jak lze algoritmicky získat TopSort?
## back
- TopSort (topologické uspořádání):
  - Určí pořadí vrcholů tak, aby všechny orientované hrany vedly "zleva doprava".
  - Algoritmus: Spočítá vstupní stupně, vyhledá zdroje, ty postupně odebírá a aktualizuje stupně sousedů.
  - Pokud zbývají vrcholy se vstupním stupněm nula, vybírají se tyto.
  - Časová i paměťová složitost: $O(n + m)$.

# SP-3-26
## front
Vysvětli princip Jarníkova algoritmu pro minimální kostru grafu.
## back
- Jarníkův algoritmus (někdy Primův):
  - Najde minimální kostru ohodnoceného grafu.
  - Začíná v libovolném vrcholu, postupně přidává vrcholy, které jsou spojeny s již vybranou částí minimální možnou hranou.
  - Časová složitost naivně: $O(mn)$. Pomocí binární haldy: $O(m\log n)$. Paměťová složitost: $O(n + m)$.

# SP-3-27
## front
Jak funguje Kruskalův algoritmus na minimální kostru?
## back
- Kruskalův algoritmus:
  - Konstrukce minimální kostry ohodnoceného grafu.
  - Inicializace: všechny vrcholy, bez hran.
  - Hrany jsou seřazeny dle ohodnocení, přidávají se postupně, pokud nepřidají cyklus.
  - Používá Union-Find pro zjištění cyklu.
  - Složitost: $O(m \log n)$.

# SP-3-28
## front
Jaký je základní princip Dijkstrova algoritmu?
## back
- Dijkstrův algoritmus hledá nejkratší cesty v ohodnoceném grafu s nezápornými hranami.
- Postupně vybírá vrchol s aktuálně nejmenší známou vzdáleností od startu.
- Pro každý vrchol upravuje (relaxuje) vzdálenosti sousedních vrcholů podle nové cesty.
- Implementace pomocí binární haldy: složitost $O(m \log n)$.

# SP-3-29
## front
Co znamená pojem relaxace v kontextu algoritmů na nejkratší cesty?
## back
- Relaxace: Operace, při které přepočítáme a případně zmenšíme vzdálenost k sousednímu vrcholu, pokud jsme našli rychlejší cestu.

# SP-3-30
## front
Jaký je rozdíl mezi Dijkstrovým a Bellman-Fordovým algoritmem?
## back
- Dijkstra:
  - Pracuje pouze s nezápornými ohodnoceními hran.
  - Vždy vybírá vrchol s nejmenší aktuální vzdáleností.
  - Složitost $O(m \log n)$.
- Bellman-Ford:
  - Umožňuje i záporné hodnoty hran (ale ne záporné cykly).
  - Opakovaně relaxuje všechny hrany v několika průchodech grafem.
  - Složitost $O(m \cdot n)$.

# SP-3-31
## front
Popiš princip Bellman-Fordova algoritmu a jeho výhody/nevýhody.
## back
- Hledá nejkratší cesty v ohodnoceném grafu s libovolnými (i zápornými) ohodnoceními hran, kromě záporných cyklů.
- Opakovaně prochází všechny hrany a relaxuje je.
- Lze znovu otevřít už uzavřený vrchol.
- Výhoda: najde cesty i se zápornými hranami.
- Nevýhoda: pomalejší než Dijkstra ($O(m n)$).

# SP-3-32
## front
Jakou časovou a paměťovou složitost mají hlavní grafové algoritmy?
## back
- BFS, DFS, TopSort: $O(n + m)$ (při reprezentaci seznamem sousedů).
- Jarník (s binární haldou), Kruskal, Dijkstra: $O(m \log n)$.
- Jarník (naivní): $O(m n)$.
- Bellman-Ford: $O(m n)$.
```
