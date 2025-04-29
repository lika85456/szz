# SP-4-1
## front
Co je zakořeněný strom? 
## back
- Zakořeněný strom je strom (graf bez cyklů), ve kterém byl jeden vrchol prohlášen za kořen.
- Vzniká tak vztah mezi vrcholy: předek-potomek.

# SP-4-2
## front
Jaký je rozdíl mezi obecnými stromy a binárními stromy? 
## back
- Obecný strom nemá omezení na počet potomků jednotlivých vrcholů.
- Binární strom je zakořeněný strom, ve kterém má každý vrchol nejvýše 2 syny a rozlišujeme levého a pravého syna.

# SP-4-3
## front
Popiš konstrukci binomiálního stromu řádu $k$.
## back
- Binomiální strom řádu $k$:
   - Obsahuje přesně $2^k$ vrcholů.
   - Řád 0 tvoří samostatný vrchol.
   - Vyšší řády získáme tak, že vezmeme všechny binomiální stromy předchozích řádů, spojíme je a nad ně přidáme nový kořen.
   - Ekvivalentní způsob: vezmeme dva binomiální stromy řádu $k-1$, jeden připojíme pod kořen druhého. 
- {Obrázek: binomiální stromy pro různé hodnoty $k$ (0,1,2,3)}

# SP-4-4
## front
Vyjmenuj základní vlastnosti binární haldy. 
## back
- Datová struktura tvaru binárního stromu.
- V každém vrcholu je uložen klíč.
- Haldový tvar: všechny hladiny kromě poslední musí být kompletní, poslední hladina je zaplněna zleva.
- Haldové uspořádání: klíč v každém předkovi je menší nebo roven klíči v jeho potomcích.
- Typicky implementována pomocí pole.

# SP-4-5
## front
Jaké jsou základní operace s binární haldou a jejich časové složitosti?
## back
- insert(): vloží prvek na konec, probublává nahoru, složitost $O(\log n)$.
- findMin(): vrátí minimum, které je vždy v kořenu, složitost $O(1)$.
- extractMin(): odstraní minimum z kořene, nahradí jej posledním prvkem a probublává dolů, složitost $O(\log n)$.
- heapBuild(): postaví haldu odspodu, složitost $O(n)$.

# SP-4-6
## front
Jak vypadá pole reprezentující binární haldu? (popiš způsob reprezentace + schéma)
## back
- Haldová pole jsou indexována od 1 (nebo 0).
- Pro vrchol na pozici $i$:
   - Levý syn: $2i$
   - Pravý syn: $2i + 1$
   - Rodič: $\lfloor i/2 \rfloor$
- {Obrázek: pole, kde indexy ukazují na vnořenou strukturu binární haldy}

# SP-4-7
## front
Popiš hlavní vlastnosti binomiální haldy. 
## back
- Binomiální halda je množina binomiálních stromů.
- Stromy jsou uspořádány vzestupně podle řádů.
- Každý řád $k$ je v haldě zastoupen maximálně jedním stromem.
- Celkový počet prvků je součet velikostí jednotlivých stromů.
- Množina stromů se implementuje spojovým seznamem.

# SP-4-8
## front
Jaká je maximální velikost seznamu stromů v $n$-prvkové binomiální haldě?
## back
- V $n$-prvkové binomiální haldě se vyskytuje nejvýše $O(\log n)$ binomiálních stromů, protože jeden strom řádu $k$ má $2^k$ vrcholů a pozice stromu odpovídají bitům binárního zápisu čísla $n$.

# SP-4-9
## front
Popiš metodu findMin(), merge(), insert() a extractMin() pro binomiální haldu a jejich složitosti.
## back
- findMin(): hledá minimum ve všech kořenech stromů, složitost $O(\log n)$ (nebo $O(1)$ při ukazateli na minimum).
- merge(): sloučí dvě haldy obdobně jako sčítání binárních čísel; slučujeme stromy stejného řádu, složitost $O(\log n)$.
- insert(): vytvoří jednoprvkovou haldu a merge s existující ($O(\log n)$).
- extractMin(): najde strom s minimem, odstraní kořen, vzniklé podstromy se spojí do nové binomiální haldy a provedeme merge s původní, složitost $O(\log n)$.

# SP-4-10
## front
Jak probíhá spojení (merge) dvou binomiálních hald?
## back
- Slučujeme binomiální haldy obdobně jako binární sčítání:
  1. Procházíme seznamy stromů od nejnižších řádů.
  2. Pokud jsou dva stromy stejného řádu, spojíme je do stromu vyššího řádu – větší kořen připojíme pod menší.
  3. Složitost na jeden krok je $O(1)$, složitost celého spojení je $O(\log n)$ (daná počtem řádů/stromů).

# SP-4-11
## front
Jak je definován binární vyhledávací strom (BST)?
## back
- Binární vyhledávací strom je binární strom, ve kterém má každý vrchol unikátní klíč.
- Pro každý uzel platí: 
   - klíče v levém podstromu jsou menší,
   - klíče v pravém podstromu jsou větší než klíč uzlu.

# SP-4-12
## front
Jaké jsou základní operace s binárním vyhledávacím stromem a jejich složitosti (v závislosti na $h$)?
## back
- BVSFind(): hledá prvek podle klíče ($O(h)$)
- BVSInsert(): vloží prvek na správné místo ($O(h)$)
- BVSDelete(): odstraní prvek ($O(h)$)
- BVSMin()/BVSMax(): nalezení minima/maxima ($O(h)$)
- BVSPred()/BVSSucc(): najde předchůdce/následníka ($O(h)$)
- BVSShow(): in-order průchod – vypíše prvky ve vzestupném pořadí ($O(n)$)
- $h$ = výška stromu

# SP-4-13
## front
Popiš, jak probíhá smazání vrcholu v binárním vyhledávacím stromu (BVS).
## back
- Pokud je vrchol list: jednoduše ho odstraníme.
- Pokud má vrchol jednoho potomka: nahradíme ho tímto potomkem.
- Pokud má dva potomky:
   1. Najdeme následníka nebo předchůdce (ve stejném podstromu, má maximálně 1 dítě).
   2. Prohodíme smazaný prvek s následníkem/předchůdcem a pak odstraníme.

# SP-4-14
## front
Jak může ve špatném případě vypadat binární vyhledávací strom z hlediska výšky? (popiš i složitost)
## back
- V nejhorším případě je strom degenerovaný (např. vkládáme setříděnou posloupnost).
- Výška stromu: $h(T) = |T|$, kde $|T|$ je počet prvků.
- Základní operace mají složitost až $O(n)$.

# SP-4-15
## front
Jak lze zajistit vyváženost binárního vyhledávacího stromu a proč není dokonale vyvážený strom prakticky použitelný?
## back
- Dokonalé vyvážení: rozdíl počtů vrcholů v levém a pravém podstromu každého uzlu maximálně 1.
- V praxi však vkládání a mazání v dokonale vyváženém stromu způsobuje náročné přeuspořádání ($O(n)$).
- Používají se hloubkově vyvážené stromy, např. AVL, kde regulujeme rozdíl hloubek podstromů.

# SP-4-16
## front
Co je AVL strom a jaká je jeho základní vlastnost?
## back
- AVL strom je druh binárního vyhledávacího stromu, ve kterém pro každý vrchol platí, že rozdíl hloubek jeho levého a pravého podstromu je maximálně 1.
- AVL zajišťuje, že výška stromu je $\Theta (\log n)$.

# SP-4-17
## front
Jak AVL stromy udržují vyváženost po operaci insert() nebo delete()?
## back
- Po každé operaci insert() nebo delete() se v uzlech aktualizuje znaménko vyvážení (balance factor).
- Pokud je rozdíl hloubek větší než 1 (nebo menší než -1), je potřeba strom vyrovnat rotacemi:
   - Jednoduchá rotace (pravá/levá)
   - Dvojitá rotace (pravolevá, levopravá)
- Rotace upraví strom tak, aby podmínky AVL byly opět splněny.

# SP-4-18
## front
Jaká je složitost základních operací v AVL stromu?
## back
- Všechny základní operace (find, insert, delete, min, max, pred, succ) mají složitost $O(\log n)$.

# SP-4-19
## front
K čemu slouží hashovací tabulka a jaké má hlavní parametry?
## back
- Hashovací tabulka slouží k efektivní implementaci slovníků (mapování klíč -> hodnota).
- Obsahuje:
   - Konečné pole přihrádek (obvykle délka $m$)
   - Hashovací funkci $h$, která mapuje klíče na přihrádky
- Klíč je unikátní.

# SP-4-20
## front
Popiš, jak funguje vkládání a vyhledávání v hashovací tabulce.
## back
- Vkládání: Pro klíč $k$ vypočteme $h(k)$. Prvek vložíme do přihrádky $h(k)$.
- Vyhledávání: Pokud hledáme klíč $k$, podíváme se do přihrádky $h(k)$, kde musí být uložený (při absenci kolizí).

# SP-4-21
## front
Co je kolize v hashovací tabulce a proč k ní dochází?
## back
- Kolize nastává, když hashovací funkce přiřadí různým klíčům stejnou přihrádku.
- Důvod: univerzum klíčů je obvykle větší než počet přihrádek tabulky ($n \gg m$), takže více klíčů může být mapováno na jedno místo.

# SP-4-22
## front
Jaká je ideální hashovací funkce pro hash tabulky?
## back
- Hashovací funkce $h$ by měla:
   - Být spočtena v konstantním čase.
   - Rozprostřít vstupní množinu rovnoměrně do všech přihrádek.
   - Pro $n$ prvků a $m$ přihrádek: každá přihrádka má nejvýše $\lceil n/m \rceil$ prvků.

# SP-4-23
## front
Popiš tři příklady hashovacích funkcí vhodných pro hash tabulky.
## back
- Lineární kongruence: $h(k) = a \cdot k \bmod m; \, m$ je obvykle prvočíslo, $a$ je velká konstanta nesoudělná s $m$.
- Hashování vyšších bitů součinu: $h(k) = \lfloor (a k \bmod 2^\omega)/2^{\omega - \mathcal{L}} \rfloor$, kde $\omega$ je délka klíče v bitech, $m=2^\mathcal{L}$.
- Pro posloupnosti (např. řetězce): skalární součin nebo polynom.

# SP-4-24
## front
Jak funguje řetězení (chaining) při řešení kolizí v hashovacích tabulkách?
## back
- Všechny prvky se stejnou hodnotou $h(k)$ se uloží do stejné přihrádky do spojovaného seznamu (spoják).
- Vyhledávání i mazání provádíme jen v příslušném seznamu.

# SP-4-25
## front
Jak funguje otevřená adresace pro řešení kolizí a jaké jsou její hlavní metody?
## back
- Pokud je přihrádka $h(k)$ obsazená, hledá se podle pevného algoritmu další volné místo.
- Hlavní metody:
   - Lineární přidávání: zkoušíme následující přihrádky ($h(k)+1, h(k)+2, ...$).
   - Dvojité hashování: použijeme druhou hashovací funkci $g()$ a hledáme $h(k,i) = (f(k) + i \cdot g(k)) \bmod m$, kde $i$ je pokus o umístění.

# SP-4-26
## front
Co je "náhrobek" (tombstone) v kontextu otevřené adresace hashovacích tabulek a k čemu slouží?
## back
- Náhrobek označuje místo v tabulce, kde byl prvek smazán.
- Slouží k tomu, aby bylo při vyhledávání možné nalézt prvky, které byly při kolizích přemístěny dále.
- Bez náhrobků by mohlo vyhledávání mylně skončit první volnou přihrádkou.

# SP-4-27
## front
Co je potřeba udělat, když se hashovací tabulka příliš zaplní?
## back
- Tabulku je potřeba zvětšit (například zdvojnásobit).
- Všechny klíče musí být znovu přehashovány a vloženy do nové, větší tabulky.
