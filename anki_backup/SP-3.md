# SP-3-1
## front
Definujte neorientovaný graf a popište jeho základní složky.
## back
- Neorientovaný graf je uspořádaná dvojice $(V, E)$, kde:
  - $V$ je neprázdná konečná množina vrcholů (uzlů)
  - $E$ je množina hran (každá hrana je dvouprvková podmnožina $V$, např. $\{u, v\}$)

# SP-3-2
## front
Co je to hrana v neorientovaném grafu a jak se značí?
## back
- Hrana je dvouprvková podmnožina množiny vrcholů $V$, značíme $\{u, v\}$

# SP-3-3
## front
Kolik různých hran může mít úplný neorientovaný graf s $n$ vrcholy?
## back
- Počet všech možných hran je roven ${n \choose 2} = \frac{n(n-1)}{2}$

# SP-3-4
## front
Co znamená, že vrcholy $u$ a $v$ jsou sousedé v grafu?
## back
- Pokud existuje hrana $\{u, v\}$, pak jsou $u$ a $v$ sousedé
- Vrcholy $u$ a $v$ jsou koncové vrcholy hrany $e = \{u,v\}$

# SP-3-5
## front
Vysvětlete pojmy "sled" a "cesta" v grafu.
## back
- Sled: posloupnost vrcholů a hran, kde každá hrana spojuje právě následující dvojici vrcholů (délka je počet hran)
- Cesta: sled, ve kterém se neopakují vrcholy (ani hrany)

# SP-3-6
## front
Definujte orientovaný graf.
## back
- Orientovaný graf je dvojice $(V, E)$, kde $E$ je množina orientovaných hran (tj. uspořádaných dvojic vrcholů $(u,v)$)

# SP-3-7
## front
Jak se určuje stupeň vrcholu v neorientovaném grafu?
## back
- Stupeň vrcholu je počet hran obsahujících daný vrchol, tedy počet sousedních vrcholů (pokud nepovolíme více hran mezi stejnými vrcholy)

# SP-3-8
## front
Co je regulární graf?
## back
- Regulární graf je takový graf, ve kterém mají všechny vrcholy stejný stupeň

# SP-3-9
## front
Definujte úplný graf a zapište jej obecným značením.
## back
- Úplný graf $K_n$ je graf, ve kterém je každá dvojice různých vrcholů spojena hranou
- $E = \binom{V}{2}$

# SP-3-10
## front
Co je úplný bipartitní graf a jak se značí?
## back
- Úplný bipartitní graf $K_{m,n}$ je graf, jehož vrcholy lze rozdělit do dvou disjunktních množin velikosti $m$ a $n$, přičemž každá hrana spojuje právě vrchol z jedné množiny s vrcholem z druhé

# SP-3-11
## front
Co je cesta $P_m$ a kružnice $C_n$ v grafové teorii?
## back
- Cesta $P_m$ je graf tvořený $m$ vrcholy, které jsou spojeny do řetězce (každý vrchol (kromě koncových) má stupeň 2)
- Kružnice $C_n$ je uzavřená cesta s $n$ vrcholy a $n$ hranami (každý vrchol stupeň 2)

# SP-3-12
## front
Definujte doplněk grafu $\overline{G}$.
## back
- Doplněk grafu $\overline{G}$ má stejné vrcholy jako původní graf $G$, ale obsahuje právě ty hrany, které v $G$ nejsou

# SP-3-13
## front
Jaký je rozdíl mezi podgrafem a indukovaným podgrafem?
## back
- Podgraf: podmnožiny $V$ a $E$ původního grafu
- Indukovaný podgraf: podgraf, který obsahuje všechny hrany původního grafu mezi vybranými vrcholy (maximální možná množina hran nad danou množinou vrcholů)

# SP-3-14
## front
Vysvětlete princip sudosti (součet stupňů vrcholů).
## back
- Pro každý neorientovaný graf platí: 
  - $$\sum_{v \in V} \deg(v) = 2|E|$$
- Tedy součet všech stupňů je dvojnásobek počtu hran

# SP-3-15
## front
V orientovaném grafu rozlišujeme vstupní a výstupní stupeň vrcholu. Popište tyto pojmy.
## back
- Vstupní stupeň vrcholu: počet hran, které do vrcholu vstupují
- Výstupní stupeň vrcholu: počet hran, které z vrcholu vycházejí

# SP-3-16
## front
Jak se v orientovaném grafu označuje vrchol s nulovým vstupním a výstupním stupněm?
## back
- Vrchol se vstupním stupněm 0 se nazývá "zdroj"
- Vrchol s výstupním stupněm 0 se nazývá "stok"

# SP-3-17
## front
Kdy je graf souvislý? Co je souvislá komponenta?
## back
- Graf je souvislý, pokud mezi každými dvěma vrcholy existuje cesta
- Souvislá komponenta je maximální souvislý podgraf

# SP-3-18
## front
Popište základní způsoby paměťové reprezentace grafu.
## back
- Seznam sousedů: pro každý vrchol seznam jeho sousedů, složitost $O(|V| + |E|)$
- Matice sousednosti: kvadratická matice $|V| \times |V|$, kde prvek označuje existenci hrany, složitost $O(|V|^2)$

# SP-3-19
## front
Co znamená symetrizace orientovaného grafu?
## back
- Symetrizace: pokud mezi dvěma vrcholy existuje jakákoliv orientovaná hrana, ve výsledku mezi nimi je neorientovaná hrana

# SP-3-20
## front
Vysvětlete pojem slabá a silná souvislost v orientovaných grafech.
## back
- Slabá souvislost: orientovaný graf je slabě souvislý, pokud jeho symetrizace je souvislý graf
- Silná souvislost: pro každé dva vrcholy existuje orientovaná cesta tam i zpět

# SP-3-21
## front
Co je izomorfismus grafů?
## back
- Izomorfismus grafů $G_1$ a $G_2$ je bijekce $f: V(G_1) \rightarrow V(G_2)$, která zachovává incidence hran a vrcholů (tedy existují-li v $G_1$ mezi $u$ a $v$ hrana, mají je propojené i jejich obrazy pod $f$ v $G_2$)

# SP-3-22
## front
Definujte strom v grafově teorii.
## back
- Strom je souvislý graf, který neobsahuje žádnou kružnici

# SP-3-23
## front
Co je kostra grafu?
## back
- Kostra grafu je takový podgraf původního grafu, který obsahuje všechny jeho vrcholy a je stromem (tj. spojí všechny vrcholy bez vzniku cyklu)

# SP-3-24
## front
Definujte topologické uspořádání orientovaného grafu.
## back
- Topologické uspořádání je lineární uspořádání vrcholů orientovaného grafu tak, že pro každou orientovanou hranu $(u, v)$ platí, že $u$ je dříve než $v$

# SP-3-25
## front
{Obrázek grafu se zvýrazněnými cestami různé délky}
Určete, která zvýrazněná cesta je skutečně "cestou" podle grafové teorie.
## back
- Skutečnou "cestou" je jen ta zvýrazněná sekvence, v níž se neopakuje žádný vrchol (ani hrana)

# SP-3-26
## front
Popište základní princip a použití algoritmu procházení grafu do šířky (BFS).
## back
- Algoritmus začíná ve zvoleném vrcholu
- Postupně přidává nově nalezené sousedy do fronty, z níž vrcholy vybírá k dalšímu rozšíření
- Použití: nalezení vzdálenosti mezi vrcholy (nejkratší cesta v neohodnoceném grafu), vyhledání souvislých komponent, konstrukce kostry
- Složitost: $O(n+m)$ při seznamu sousedů

# SP-3-27
## front
Jaký je princip algoritmu DFS (prohledávání do hloubky)?
## back
- Rozšiřuje vždy v nejnověji nalezeném vrcholu (lze implementovat rekurzivně nebo pomocí zásobníku)
- Slouží k procházení celého grafu, hledání souvislých komponent, nebo tvorbě kostry
- Složitost: $O(n+m)$

# SP-3-28
## front
K jakému účelu slouží algoritmus TopSort (topologické uspořádání)? Popište jeho princip.
## back
- TopSort vytváří topologické uspořádání orientovaného grafu (seřazení vrcholů tak, aby šipky vedly zleva doprava)
- Princip: počítá vstupní stupně vrcholů, odebírá "zdroje" (vstupní stupeň 0) a snižuje vstupní stupeň jejich následovníkům
- Pokud se graf vyčerpá, nemá cykly, jinak cyklus obsahuje

# SP-3-29
## front
Jaké typy problémů lze řešit pomocí algoritmu BFS?
## back
- Hledání nejkratších cest v neohodnoceném grafu
- Určení vzdáleností mezi vrcholy
- Nalezení souvislých komponent
- Konstrukce kostry grafu

# SP-3-30
## front
Jaké typy problémů lze řešit pomocí DFS?
## back
- Procházení celého grafu
- Vyhledávání souvislých komponent
- Získání topologického uspořádání (modifikované DFS)
- Hledání cyklů
- Konstrukce kostry grafu

# SP-3-31
## front
Jaký je rozdíl v použití fronty a zásobníku v BFS a DFS?
## back
- BFS používá frontu (FIFO), prochází graf do šířky
- DFS používá zásobník (LIFO) nebo rekurzi, prochází graf do hloubky

# SP-3-32
## front
Popište zásadní kroky Jarníkova algoritmu (Primova) pro hledání minimální kostry.
## back
- Začne v jednom vrcholu
- Postupně přidává vrcholy podle nejlevnější hrany spojující již vybrané vrcholy s nevstoupenými
- Opakuje, dokud nejsou pokryty všechny vrcholy
- Složitost naivní $O(mn)$, s binární haldou $O(m\log n)$

# SP-3-33
## front
Jaký je základní princip Kruskalova algoritmu pro minimální kostru?
## back
- Hrany se seřadí podle váhy od nejmenších
- Postupně přidává hrany, které nespojí již propojené komponenty (nevznikne cyklus)
- Používá se data struktura Union-Find 
- Složitost $O(m\log n)$

# SP-3-34
## front
Pro jaký typ grafů lze použít Dijkstrův algoritmus a jaký problém řeší?
## back
- Dijkstra slouží k hledání nejkratších cest v ohodnocených grafech s nezápornými váhami hran

# SP-3-35
## front
Co znamená "relaxace" v kontextu Dijkstrova algoritmu?
## back
- Relaxace: přepočítání nejkratší vzdálenosti do sousedního vrcholu po přidání nové hrany, případně aktualizace vzdálenosti a předchůdce

# SP-3-36
## front
Jaký je rozdíl mezi Dijkstrovým a Bellman-Fordovým algoritmem z pohledu možných vah hran?
## back
- Dijkstra: pouze nezáporné ohodnocení hran
- Bellman-Ford: může řešit obecné ohodnocení (kladné i záporné váhy), nesmí ale existovat záporný cyklus

# SP-3-37
## front
Popište princip Bellman-Fordova algoritmu.
## back
- Opakovaně prochází všechny hrany a snaží se "relaxovat" (zlepšit) vzdálenosti na všech cestách, dokud nenajde nejkratší cesty, nebo nenarazí na záporný cyklus
- Složitost $O(mn)$

# SP-3-38
## front
K čemu slouží algoritmy Jarník (Prim) a Kruskal v grafové teorii?
## back
- Ke konstrukci minimální kostry ohodnoceného grafu (spanning tree s minimální váhou)

# SP-3-39
## front
Jaký je časový a paměťový rozdíl mezi reprezentací grafu seznamem sousedů a maticí sousednosti?
## back
- Seznam sousedů: časová i paměťová složitost $O(|V| + |E|)$, výhodné pro řídké grafy
- Matice sousednosti: paměťová složitost $O(|V|^2)$, výhodné pro husté grafy

# SP-3-40
## front
{Obrázek malého neorientovaného grafu}
Vytvořte matici sousednosti z daného grafu.
## back
- Vypište $|V| \times |V|$ matici, kde prvek $i,j$ je 1, pokud mezi $i$ a $j$ existuje hrana, jinak 0 (viz daný obrázek)

# SP-3-41
## front
Jak lze pomocí DFS zjistit souvislé komponenty neorientovaného grafu?
## back
- Pro každý nenavštívený vrchol spusť DFS; každý průchod nalezne právě jednu souvislou komponentu
- Opakujte, dokud nejsou všechny vrcholy navštíveny

# SP-3-42
## front
Co je slabě a co silně souvislá komponenta v orientovaném grafu?
## back
- Slabě souvislá komponenta: komponenta grafu, která je souvislá po symetrizaci orientovaných hran na neorientované
- Silně souvislá komponenta: maximální množina vrcholů, mezi nimiž existuje orientovaná cesta tam i zpět mezi libovolnými dvěma vrcholy

# SP-3-43
## front
Jaký je algoritmický způsob nalezení topologického uspořádání orientovaného grafu?
## back
- Spočítejte vstupní stupně všech vrcholů
- Najděte všechny vrcholy se vstupním stupněm 0 (zdroje)
- Vkládejte je do výsledné posloupnosti
- Po odebrání "zdroje" aktualizujte vstupní stupně jeho následovníků
- Opakujte, dokud nejsou všechny vrcholy zahrnuty (pokud ne, graf má cyklus)

# SP-3-44
## front
{Obrázek orientovaného acyklického grafu}
Uspořádejte vrcholy topologicky.
## back
- Uveďte jedno z možných topologických uspořádání podle obrázku (vrcholy v pořadí tak, aby každá hrana směřovala zleva doprava ve výsledné posloupnosti)
