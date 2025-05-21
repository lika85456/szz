
# SP-4-1
## front
Co je zakořeněný strom a jak se liší od běžného stromu?
## back
- Zakořeněný strom je strom, ve kterém je jeden vrchol označen jako kořen.
- Vzniká vazba mezi vrcholy, kde určujeme vztah předek-potomek.
- Oproti běžnému stromu existuje jednoznačné směřování od kořene k potomkům.

# SP-4-2
## front
Definuj binární strom.
## back
- Binární strom je zakořeněný strom, ve kterém každý vrchol může mít nejvýše 2 syny.
- Rozlišujeme levého a pravého syna.

# SP-4-3
## front
Popiš binomiální strom řádu $k$.
## back
- Binomiální strom řádu $k$ má právě $2^k$ vrcholů.
- Řád 0 je jeden izolovaný vrchol.
- Další řády získáme tak, že vezmeme stromy všech předchozích řádů a nad ně přidáme nový kořen.
- Alternativně: vezmeme 2 binomiální stromy řádu $k-1$ a jedním z nich se stane podstrom druhého pod jeho kořenem.

# SP-4-4
## front
Vyjmenuj hlavní vlastnosti binární haldy.
## back
- Má tvar binárního stromu.
- V každém vrcholu je uložen klíč.
- Haldový tvar: všechny hladiny kromě poslední jsou zcela obsazené, poslední obsazena zleva.
- Haldové uspořádání: pro každou dvojici předek-potomek platí, že klíč v předku je menší nebo roven potomku.

# SP-4-5
## front
Jak probíhá operace insert() u binární haldy a jaká je její časová složitost?
## back
- Element je vložen na konec podle tvaru haldy.
- Poté probublává nahoru, aby byla zachována vlastnost haldy.
- Složitost operace: $O(\log n)$.

# SP-4-6
## front
Jaká je složitost operací findMin(), extractMin(), insert() v binární haldě?
## back
- findMin(): $O(1)$ (minimum je vždy v kořeni)
- extractMin(): $O(\log n)$ (odstranění minima a zabublání dolů)
- insert(): $O(\log n)$ (vloží na konec a probublá nahoru)

# SP-4-7
## front
Popiš algoritmus heapBuild() u binární haldy včetně jeho časové složitosti.
## back
- Staví haldu odspodu.
- Každý list je korektní halda, poté se postupně z vyšších hladin nový kořen probublá dolů.
- Složitost heapBuild(): $O(n)$.

# SP-4-8
## front
Jak se typicky implementuje binární halda?
## back
- Binární halda se nejčastěji implementuje pomocí pole.

# SP-4-9
## front
Jaká je základní struktura binomiální haldy a jaké má hlavní vlastnosti?
## back
- Jde o uspořádanou množinu binomiálních stromů řazených vzestupně dle svých řádů.
- Pro každý řád $k$ je v haldě nejvýše jeden binomiální strom.
- Stromy obsahují klíče a udržují haldové uspořádání.
- Množina stromů je implementována spojovým seznamem.
- $n$-prvková halda má až $O(\log n)$ binomiálních stromů.

# SP-4-10
## front
Jaká je složitost operací findMin(), merge(), insert(), extractMin() v binomiální haldě?
## back
- findMin(): $O(\log n)$ (musíme najít minimum v kořenech stromů)  
  - při udržování ukazatele na minimum lze v $O(1)$
- merge(): $O(\log n)$ (podobně jako binární sčítání)
- insert(): $O(\log n)$ (vytvoří novou jednoprvkovou haldu a merge)
- extractMin(): $O(\log n)$ (utržení kořene se stromem s minimem a merge zbytku)

# SP-4-11
## front
Jak probíhá operace merge() v binomiální haldě?
## back
- Stromy se slučují jako při binárním sčítání – tj. od nejnižších řádů.
- Sloučení dvou stromů stejného řádu je $O(1)$, porovnáme kořeny a větší strom připojíme pod menší.
- Celkové sloučení má složitost $O(\log n)$.

# SP-4-12
## front
Jak vypadá schéma binární vyhledávací strom (BVS) a jaká je jeho základní vlastnost?
## back
- Jde o binární strom, kde každý vrchol obsahuje unikátní klíč.
- V každém vrcholu platí:
  - klíče v levém podstromu jsou menší než v aktuálním vrcholu,
  - klíče v pravém podstromu jsou větší než v aktuálním vrcholu.

# SP-4-13
## front
Uveď základní operace v binárním vyhledávacím stromu a jejich složitosti podle hloubky $h(T)$.
## back
- BVSShow(): výpis klíčů vzestupně ($O(n)$)
- BVSMin(), BVSMax(): nalezení minima, maxima ($O(h(T))$)
- BVSPred(), BVSSucc(): nalezení předchůdce/následníka ($O(h(T))$)
- BVSFind(): hledání klíče ($O(h(T))$)
- BVSInsert(): vložení klíče ($O(h(T))$)
- BVSDelete(): odstranění klíče ($O(h(T))$)

# SP-4-14
## front
Co se může stát s hloubkou binárního vyhledávacího stromu (BVS) v nejhorším případě a jak to ovlivní složitosti operací?
## back
- V nejhorším případě může být hloubka $h(T) = |T|$ (strom degeneruje do seznamu).
- Všechny klíčové operace pak mají složitost $O(n)$.

# SP-4-15
## front
Proč nestačí u BVS dokonalé vyvažování (tj. max rozdíl mezi levým a pravým podstromem u každého vrcholu je 1)?
## back
- Dokonalé vyvažování není efektivní – při implementaci by měly operace insert() a delete() složitost $O(n)$.
- Proto se používají hloubkově vyvážené stromy (např. AVL), které udrží menší hloubku při efektivních operacích.

# SP-4-16
## front
Jaké vlastnosti má AVL strom?
## back
- Rozdíl hloubek podstromů každého vrcholu je maximálně 1.
- Hloubka celého stromu je $\Theta(\log n)$.
- Operace insert() a delete() musí vždy po zásahu zajistit vyvážení.
- Ve vrcholu se udržuje znaménko vyvážení.
- Pokud je hodnota větší než 1 (nebo menší než –1), je třeba provést rotace (jednoduché nebo dvojité).

# SP-4-17
## front
Popiš základní použití hashovací tabulky.
## back
- Hashovací tabulka slouží pro implementaci slovníku: klíč-hodnota, kde klíč je unikátní.
- Umožňuje efektivní operace (v průměru $O(1)$) insert, find (hledání), delete.

# SP-4-18
## front
Jak se prvek vkládá a hledá v hashovací tabulce?
## back
- Definujeme pole přihrádek o konečné velikosti $m$.
- Definujeme hashovací funkci $h$, která každému klíči přiřadí index v poli.
  - Při vkládání klíče $k$ prvek vložíme do přihrádky $h(k)$.
  - Při hledání klíče $k$ zkontrolujeme pouze přihrádku $h(k)$.

# SP-4-19
## front
Co jsou kolize v hashovací tabulce a proč vznikají?
## back
- Kolize nastává, když dvě různé hodnoty klíče mají stejnou hashovací hodnotu a obsadí stejnou přihrádku v tabulce.
- Vznikají proto, že počet možných klíčů (univerzum) je větší než počet přihrádek v tabulce ($m$).

# SP-4-20
## front
Jaké vlastnosti by měla mít ideální hashovací funkce?
## back
- Výpočet hodnoty hash musí být v konstantním čase ($O(1)$).
- Hashovací funkce by měla rozprostřít zadanou $n$-prvkovou množinu pokud možno rovnoměrně do všech $m$ přihrádek (tj. každá přihrádka má max $\lceil n/m \rceil$ prvků).

# SP-4-21
## front
Uveď příklady dobře fungujících hashovacích funkcí.
## back
- Lineární kongruence: $k \mapsto a\cdot k \mod m$, kde $m$ je prvočíslo a $a$ vysoká konstanta nesoudělná s $m$
- Vyšší bity součinu: $k \mapsto \lfloor (a\cdot k \mod 2^\omega)/2^{\omega - \mathcal{L}} \rfloor$, pro $\omega$-bitové klíče do $2^\mathcal{L}$ přihrádek
- Pro posloupnosti: využití skalárního součinu nebo polynomu

# SP-4-22
## front
Popiš metodu chaining (řetězení) pro řešení kolizí v hash tabulce.
## back
- Při kolizi jsou prvky ukládány v přihrádce do spojového seznamu.
- Hledání, vkládání i mazání je omezeno délkou spojáku v každé přihrádce.

# SP-4-23
## front
Co je otevřená adresace (open addressing) a jaké jsou základní druhy při řešení kolizí v hash tabulce?
## back
- Při kolizi se klíč uloží do jiné volné přihrádky podle určitého pravidla.
- Základní druhy:
  - Lineární přidávání: při kolizi posouváme o 1 dále.
  - Dvojité hashování: při kolizi použijeme druhou hashovací funkci; obecně $h(k, i) = (f(k) + i \cdot g(k)) \mod m$, $i$ je počet pokusů.
- Při mazání prvek označíme jako "náhrobek", aby bylo možné najít následné prvky.

# SP-4-24
## front
Jak se řeší situace, kdy se hashovací tabulka příliš zaplní?
## back
- Tabulka se zvětší (například zdvojnásobí).
- Všechny klíče musí být přehashovány a znovu vloženy do rozšířené tabulky.

# SP-4-25
## front
Jak fungují rotace v AVL stromech a kdy jsou potřeba?
## back
- Rotace jsou třeba, pokud je znaménko vyvážení některého vrcholu větší než 1 nebo menší než –1 (strom ztratil vyvážení).
- Existují jednoduché (single) a dvojité (double) rotace.
- Typ použité rotace závisí na směru nevyvážení stromu (vlevo/vpravo a jeho podstromy).

# SP-4-26
## front
Vysvětli princip pojmu "náhrobek" v otevřené adresaci hashovací tabulky.
## back
- Náhrobek (tombstone) označí místo, kde byl prvek odstraněn.
- Pomáhá při hledání – následné prvky mohly být při vkládání umístěny jinde kvůli kolizi.
- Při vkládání lze náhrobek znovu zaplnit.

# SP-4-27
## front
Co je to hladina v binární haldě?
## back
- Hladina je úroveň (level) stromu, kde jsou umístěny jeho vrcholy ve stejné vzdálenosti od kořene.
- Všechny hladiny, kromě poslední, musí být zcela obsazeny.
- Poslední hladina je obsazena zleva.

# SP-4-28
## front
Shrň rozdíly mezi binární a binomiální haldou.
## back
- Binární halda:
  - tvořena jediným binárním stromem s haldovým tvarem a uspořádáním,
  - rychlé findMin() ($O(1)$), insert() ($O(\log n)$), extractMin() ($O(\log n)$),
  - heapBuild() v $O(n)$.
- Binomiální halda:
  - skládá se z více binomiálních stromů různých řádů,
  - umožňuje efektivní merge dvou hald ($O(\log n)$),
  - findMin() v $O(\log n)$, insert(), extractMin() a merge() v $O(\log n)$.

# SP-4-29
## front
Vysvětli, jakým způsobem AVL stromy zajišťují, že hloubka binárního vyhledávacího stromu je $\Theta(\log n)$.
## back
- U každého vrcholu AVL stromu je rozdíl hloubek jeho levého a pravého podstromu maximálně 1.
- Tím je zajištěno, že struktura stromu zůstává blízko ideálního stavu a nezdegeneruje do seznamu,
- což vede na hloubku celého stromu $\Theta(\log n)$ a tedy i efektivní operace.

# SP-4-30
## front
Jak funguje operace extractMin() u binární haldy?
## back
- Minimum je vždy v kořeni stromu.
- Nahradí se posledním prvkem haldy, poslední prvek se odstraní.
- Nový kořen "propadá" dolů směrem, aby byla zachována halda (haldové uspořádání).
- Složitost: $O(\log n)$.
