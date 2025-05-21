
# SP-2-1
## front
Co je bezkontextový jazyk (BJ) a jak lze bezkontextový jazyk generovat nebo přijímat?
## back
- Bezkontextový jazyk je formální jazyk, který lze generovat bezkontextovou gramatikou.
- Lze jej také přijímat zásobníkovým automatem (ZA).

# SP-2-2
## front
Vyjmenuj uzávěrové vlastnosti bezkontextových jazyků (BJ). Pro které operace nejsou uzavřené?
## back
- BJ jsou uzavřené vůči:
  - sjednocení
  - zřetězení
  - iteraci (Kleeneho hvězda)
- Nejsou uzavřené pro:
  - průnik
  - doplněk
  - rozdíl

# SP-2-3
## front
Jak vypadá definice bezkontextové gramatiky?
## back
Bezkontextová gramatika je uspořádaná čtveřice:
- $G = (N, \Sigma, P, S)$, kde:
  - $N$ je konečná množina neterminálních symbolů
  - $\Sigma$ je konečná množina terminálních symbolů
  - $P$ je konečná množina pravidel tvaru $A \rightarrow \alpha$ (\(A \in N,\ \alpha \in (N \cup \Sigma)^*\))
  - $S \in N$ je počáteční symbol

# SP-2-4
## front
Co je $\varepsilon$-pravidlo a co je jednoduché pravidlo v bezkontextové gramatice?
## back
- $\varepsilon$-pravidlo: pravidlo tvaru $A \rightarrow \varepsilon$ (nahrazení neterminálu prázdným řetězcem)
- Jednoduché pravidlo: pravidlo tvaru $A \rightarrow B$ ($A, B \in N$)

# SP-2-5
## front
Kdy je bezkontextová gramatika (BG) nejednoznačná a kdy jednoznačná?
## back
- Nejednoznačná BG: pro určitý řetězec lze sestavit alespoň dva různé derivační stromy.
- Jednoznačná BG: pro každý řetězec existuje právě jeden derivační strom.

# SP-2-6
## front
Co je nejednoznačný vs. jednoznačný bezkontextový jazyk?
## back
- Nejednoznačný bezkontextový jazyk: neexistuje pro něj jednoznačná gramatika.
- Jednoznačný bezkontextový jazyk: lze jej generovat jednoznačnou gramatikou.

# SP-2-7
## front
Jaká pravidla nesmí obsahovat gramatika bez cyklů? Co je cyklus v gramatice?
## back
- Gramatika je bez cyklů ($A \Rightarrow^+ A$), pokud neobsahuje jednoduchá ($A \rightarrow B$) a $\varepsilon$-pravidla ($A \rightarrow \varepsilon$).
- Cyklus znamená, že z nějakého neterminálu $A$ lze odvodit opět $A$ (alespoň jedním pravidlem).

# SP-2-8
## front
Napište formální definici zásobníkového automatu (ZA).
## back
Nedeterministický zásobníkový automat je uspořádaná sedmice:
- $R = (Q, \Sigma, G, \delta, q_0, Z_0, F)$, kde:
  - $Q$ je konečná neprázdná množina stavů
  - $\Sigma$ je konečná vstupní abeceda
  - $G$ je konečná neprázdná abeceda zásobníku
  - $\delta$: přechodová funkce, $Q \times (\Sigma \cup \{\epsilon\}) \times G^*$ $\rightarrow$ množina konečných podmnožin $Q \times G^*$
  - $q_0 \in Q$ je počáteční stav
  - $Z_0 \in G$ je počáteční symbol zásobníku
  - $F \subset Q$ je množina koncových stavů

# SP-2-9
## front
Jaký rozdíl je mezi deterministickým (DZA) a nedeterministickým zásobníkovým automatem? Jak DZA přijímá řetězce?
## back
- Nedeterministický ZA je výpočetně silnější než deterministický.
- DZA přijme řetězec, pokud:
  - Přečte celý řetězec a skončí buď v koncovém stavu, nebo s prázdným zásobníkem (tyto způsoby jsou výpočetně ekvivalentní a lze je převádět jeden na druhý).

# SP-2-10
## front
Co jsou levá a pravá derivace v syntaktické analýze bezkontextových jazyků?
## back
- Levá derivace: v každém kroku se nahradí nejvíce vlevo stojící neterminál.
- Pravá derivace: v každém kroku se nahradí nejvíce vpravo stojící neterminál.

# SP-2-11
## front
Jaký je rozdíl mezi levým a pravým rozkladem věty v gramatice?
## back
- Levý rozklad: posloupnost čísel pravidel použitých v levé derivaci (nejlevější neterminál).
- Pravý rozklad: posloupnost čísel pravidel použitých v pravé derivaci (nejpravější neterminál).

# SP-2-12
## front
Co je syntaktická analýza bezkontextového řetězce a jaký je její výsledek?
## back
- Syntaktická analýza: proces, který pro danou bezkontextovou gramatiku $G$ a řetězec $\omega$ určí, zda $\omega \in L(G)$.
- Pokud ano, získáme syntaktickou strukturu řetězce (např. levý nebo pravý rozklad, derivační strom).

# SP-2-13
## front
Vyjmenujte základní metody syntaktické analýzy bezkontextových jazyků.
## back
- Metody syntaktické analýzy:
  - Shora dolů (top-down)
    - nalezne levý rozklad
  - Zdola nahoru (bottom-up)
    - nalezne pravý rozklad

# SP-2-14
## front
Popište princip konstrukce zásobníkového automatu jako modelu syntaktického analyzátoru metodou shora dolů.
## back
- 1 stav, přijímá prázdným zásobníkem.
- Provádí 2 operace:
  - Expanze: pokud je na vrcholu zásobníku neterminál, nahradí jej pravou stranou pravidla gramatiky, ze vstupu nečte nic.
  - Srovnání: pokud je na vrcholu terminál, vyjme ho a přečte terminál ze vstupu.
- Na začátku je na zásobníku počáteční neterminál.

# SP-2-15
## front
Jaké operace provádí zásobníkový automat při syntaktické analýze shora dolů?
## back
- Expanze: nahradí neterminál na vrcholu zásobníku pravou stranou pravidla, nic nečte ze vstupu.
- Srovnání: odstraní terminál z vrcholu zásobníku a zároveň čte tento znak ze vstupu.

# SP-2-16
## front
Popište model zásobníkového automatu jako syntaktického analyzátoru metodou zdola nahoru.
## back
- 2 stavy, přijímá přechodem do koncového stavu.
- Provádí 3 operace:
  - Redukce: pokud je na vrcholu zásobníku pravá strana pravidla, nahradí ji neterminálem, nečte nic ze vstupu.
  - Přesun: přečte terminál ze vstupu a vloží jej na zásobník, zůstává ve stejném stavu.
  - Přijetí: pokud je na zásobníku počáteční neterminál, odstraní jej a počáteční symbol, přejde do koncového stavu.

# SP-2-17
## front
Vyjmenujte a stručně popište operace zásobníkového automatu při metodě zdola nahoru.
## back
- Redukce: nahradí sérii symbolů na vrcholu zásobníku neterminálem (podle pravidla), nečte vstup.
- Přesun: přečte terminál ze vstupu a vloží na zásobník.
- Přijetí: na zásobníku je počáteční neterminál, vyjme jej spolu s počátečním symbolem a přejde do koncového stavu.

# SP-2-18
## front
Co znamená 'expanze' a co 'srovnání' v kontextu shora-dolů syntaktické analýzy pomocí zásobníkového automatu?
## back
- Expanze: pokud mám na vrcholu zásobníku neterminál, vyndám ho a nahradím pravou stranou pravidla, ze vstupu nic nečtu.
- Srovnání: pokud mám na vrcholu zásobníku terminál, vyndám ho a zároveň přečtu ze vstupu stejný terminál.

# SP-2-19
## front
Jaké základní komponenty tvoří zásobníkový automat?
## back
- $Q$: množina stavů
- $\Sigma$: vstupní abeceda
- $G$: abeceda zásobníku
- $\delta$: přechodová funkce
- $q_0$: počáteční stav
- $Z_0$: počáteční symbol zásobníku
- $F$: množina koncových stavů

# SP-2-20
## front
Jaký je význam přechodové funkce $\delta$ v zásobníkovém automatu?
## back
- Přechodová funkce $\delta$ určuje, při daném aktuálním stavu, čteném znaku (eventuálně $\varepsilon$), a obsahu vrcholu zásobníku, do kterých stavů může automat přejít a jaký bude nový obsah zásobníku.
- Je definována: $\delta: Q \times (\Sigma \cup \{\epsilon\}) \times G^* \rightarrow \text{množina konečných podmnožin } (Q \times G^*)$

# SP-2-21
## front
Co je počáteční stav $q_0$ a počáteční symbol zásobníku $Z_0$ u zásobníkového automatu?
## back
- $q_0$ je stav, ve kterém automat začíná výpočet.
- $Z_0$ je symbol, který je při spuštění automatu umístěn na vrcholu zásobníku.

# SP-2-22
## front
Co znamená, že deterministický a nedeterministický zásobníkový automat jsou výpočetně ekvivalentní pro přijetí řetězce?
## back
Oba automaty mohou přijímat jazyk dvěma způsoby, které lze mezi sebou převádět:
- přijetím prázdným zásobníkem
- přijetím koncovým stavem

# SP-2-23
## front
Při syntaktické analýze shora dolů – co je na počátku na zásobníku a co je cílem analyzátoru?
## back
- Na počátku je na zásobníku počáteční neterminál gramatiky.
- Cílem je prázdný zásobník po úspěšné syntaktické analýze vstupního řetězce.

# SP-2-24
## front
Při syntaktické analýze zdola nahoru – jaký je význam přechodu do koncového stavu?
## back
Přechodem do koncového stavu automat potvrzuje, že vstupní řetězec byl správně rozpoznán jako věta jazyka (syntakticky korektní).

# SP-2-25
## front
Popište stručně architekturu a princip zásobníkového automatu.
## back
- Zásobníkový automat je konečný automat rozšířený o zásobník.
- Pracuje se vstupní abecedou a zásobníkovou abecedou, stavovou proměnnou a přechodovou funkcí, podle které manipuluje zásobníkem.
- Umožňuje rozpoznávat bezkontextové jazyky.
```
