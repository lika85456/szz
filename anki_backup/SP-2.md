# SP-2-1
## front
Co je bezkontextový jazyk a jak jej lze rozpoznat? (uveďte dvě definice)
## back
- Formální jazyk je **bezkontextový** právě tehdy, když ho lze generovat bezkontextovou gramatikou.
- Bezkontextový jazyk lze také přijímat pomocí zásobníkového automatu.

# SP-2-2
## front
Jaké uzávěrové vlastnosti mají bezkontextové jazyky?
## back
Bezkontextové jazyky jsou uzavřené vůči:
- sjednocení,
- zřetězení,
- iteraci (Kleeneho hvězda).

Nejsou uzavřené vůči:
- průniku,
- doplňku,
- rozdílu.

# SP-2-3
## front
Formálně definujte bezkontextovou gramatiku.
## back
Bezkontextová gramatika je uspořádaná čtveřice $G = (N, \Sigma, P, S)$, kde:
- $N$ je konečná množina neterminálů.
- $\Sigma$ je konečná množina terminálů.
- $P$ je konečná množina pravidel tvaru $A \rightarrow \alpha$, kde $A \in N$, $\alpha \in (N \cup \Sigma)^*$.
- $S \in N$ je startovní symbol.

# SP-2-4
## front
Co znamená, že je gramatika zkracující?
## back
Bezkontextová gramatika je **zkracující**, pokud obsahuje pravidla, která mohou odvodit prázdnou větu ($\varepsilon$).

# SP-2-5
## front
Jaký je rozdíl mezi jednoznačnou a nejednoznačnou bezkontextovou gramatikou?
## back
- **Jednoznačná gramatika**: Pro každý řetězec v jazyku existuje právě jeden derivační strom.
- **Nejednoznačná gramatika**: Existuje alespoň jeden řetězec, pro který lze sestrojit více derivačních stromů.

# SP-2-6
## front
Jaký je rozdíl mezi jednoznačným a nejednoznačným bezkontextovým jazykem?
## back
- **Jednoznačný bezkontextový jazyk**: Existuje k němu jednoznačná bezkontextová gramatika.
- **Nejednoznačný bezkontextový jazyk**: Neexistuje pro něj žádná jednoznačná bezkontextová gramatika.

# SP-2-7
## front
Co je $\varepsilon$-pravidlo a jednoduché pravidlo v bezkontextové gramatice?
## back
- **$\varepsilon$-pravidlo**: Pravidlo tvaru $A \rightarrow \varepsilon$ (odvodí prázdný řetězec).
- **Jednoduché pravidlo**: Pravidlo tvaru $A \rightarrow B$, kde $A, B \in N$ (neterminály).

# SP-2-8
## front
Kdy je bezkontextová gramatika bez cyklů?
## back
Bezkontextová gramatika je **bez cyklů** ($A \Rightarrow^+ A$), pokud neobsahuje jednoduchá a $\varepsilon$-pravidla.

# SP-2-9
## front
Jak formálně vypadá (nedeterministický) zásobníkový automat?
## back
(Nedeterministický) zásobníkový automat je sedmice 
$$R = (Q, \Sigma, G, \delta, q_0, Z_0, F),$$
kde:
- $Q$: konečná neprázdná množina stavů,
- $\Sigma$: konečná vstupní abeceda,
- $G$: konečná neprázdná abeceda zásobníku,
- $\delta$: přechodová funkce, zobrazuje $Q \times (\Sigma \cup \{\varepsilon\}) \times G^*$ do konečných podmnožin $Q \times G^*$,
- $q_0 \in Q$: počáteční stav,
- $Z_0 \in G$: počáteční symbol na zásobníku,
- $F \subset Q$: množina koncových stavů.

# SP-2-10
## front
Jak funguje zásobníkový automat z pohledu uživatele? 
## back
- Zásobníkový automat lze chápat jako konečný automat rozšířený o zásobník.
- Může zapisovat na zásobník a číst z něho, což mu umožňuje rozpoznávat složitější jazyky než klasické konečné automaty.

# SP-2-11
## front
Jaká je rozdílná výpočetní síla nedeterministického a deterministického zásobníkového automatu?
## back
- **Nedeterministický zásobníkový automat** (NZA) je výpočetně silnější než **deterministický zásobníkový automat** (DZA).
- Existují jazyky přijatelné NZA, které nejsou přijatelné DZA.

# SP-2-12
## front
Jaké jsou dvě ekvivalentní metody přijímaní řetězce zásobníkovým automatem?
## back
Deterministický zásobníkový automat (DZA) přijme řetězec, pokud:
1. Přečte celý vstup a skončí v koncovém stavu.
2. Přečte celý vstup a skončí s prázdným zásobníkem.

Tyto způsoby jsou výpočetně ekvivalentní a lze je vzájemně převádět.

# SP-2-13
## front
Vysvětlete pojem “levá derivace” v kontextu bezkontextových gramatik.
## back
**Levá derivace**: V každém kroku generování věty bezkontextovou gramatikou se nahradí ten neterminál, který je nejvíce vlevo.

# SP-2-14
## front
Vysvětlete pojem “pravá derivace” v kontextu bezkontextových gramatik.
## back
**Pravá derivace**: V každém kroku generování věty bezkontextovou gramatikou se nahradí ten neterminál, který je nejvíce vpravo.

# SP-2-15
## front
Co je levý a pravý rozklad věty v bezkontextové gramatice?
## back
- **Levý rozklad věty**: Posloupnost čísel pravidel použitých v levé derivaci dané věty.
- **Pravý rozklad věty**: Posloupnost čísel pravidel použitých v pravé derivaci dané věty.

# SP-2-16
## front
K čemu slouží syntaktická analýza pro bezkontextové gramatiky?
## back
Syntaktická analýza:
- Určuje, zda daný řetězec $\omega$ patří do jazyka $L(G)$ generovaného gramatikou $G$.
- V kladném případě poskytuje syntaktickou strukturu řetězce ve formě levého nebo pravého rozkladu.

# SP-2-17
## front
Jaké existují dvě základní metody syntaktické analýzy a jaký rozklad naleznou?
## back
- **Shora dolů (top-down):** Nalezne levý rozklad.
- **Zdola nahoru (bottom-up):** Nalezne pravý rozklad.

# SP-2-18
## front
Popište model syntaktického analyzátoru metodou shora dolů pomocí zásobníkového automatu.
## back
- 1 stav, přijímá prázdným zásobníkem
- Na začátku je na zásobníku počáteční neterminál
- Provádí dvě operace:
  - **Expanze:** Pokud je na vrcholu zásobníku neterminál, nahradím jej pravou stranou pravidla gramatiky (nic nečtu ze vstupu).
  - **Srovnání:** Pokud je na vrcholu zásobníku terminál, vyndám jej a zároveň přečtu odpovídající symbol ze vstupu.

# SP-2-19
## front
Popište model syntaktického analyzátoru metodou zdola nahoru pomocí zásobníkového automatu.
## back
- 2 stavy, přijímá přechodem do koncového stavu
- Provádí tři operace:
  - **Přesun:** Přečtu terminál ze vstupu a vložím jej na zásobník, zůstávám ve stejném stavu.
  - **Redukce:** Pokud je na vrcholu zásobníku pravá strana pravidla, vyndám ji a nahradím příslušným neterminálem (nic nečtu ze vstupu, zůstávám ve stejném stavu).
  - **Přijetí:** Na zásobníku je počáteční neterminál — vyndám jej spolu s počátečním symbolem a přejdu do koncového stavu.
