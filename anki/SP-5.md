
# SP-5-1
## front
Co je relační databáze? Uveďte hlavní charakteristiky a přínosy databázových technologií.
## back
- Relační databáze je soubor záznamů se systematickou strukturou umožňující efektivní vyhledávání pomocí počítače.
- Existence dat v DB je nezávislá na aplikačních programech.
- Zaměřuje se na řízení velkého množství, perzistentních, spolehlivých a sdílených dat:
  - Velké množství – nestačí operační paměť
  - Perzistentní – data přetrvávají mezi zpracováními
  - Spolehlivá – lze rekonstruovat po chybě
  - Sdílená – přístupná více uživatelům
- Hlavní přínosy:
  - Nezávislost dat na aplikaci
  - Efektivní přístup k datům
  - Urychlení vývoje aplikací
  - Integrita a ochrana dat
  - Správa a zálohování dat
  - Transakční zpracování
  - Paralelní přístup
  - Zotavení po chybě

# SP-5-2
## front
Jaké jsou základní pojmy relačních databází? Vysvětlete pojem relace a schéma relační databáze.
## back
- Relace – dvourozměrná struktura (tabulka):
  - Atributy (sloupce) – jména a domény atributů
  - N-tice (řádky) – prvky relace (unikátní)
- Schéma relační databáze: množina relací $R$ a množina integritních omezení $I$

# SP-5-3
## front
Popište základní operace relační algebry.
## back
- Dotazovací formalismus – specifikujeme CO chceme, ne JAK to získat.
- Výsledkem dotazu je opět relace (může být použitá pro další dotaz).
- Základní operace:
  - **Selecke:** $název\_relace('atribut' = hodnota)$ – výběr záznamů na základě podmínky.
  - **Projekce:** $název\_relace(podmínka)[atribut1, atribut2]$ – výběr atributů pro výsledek.
  - **Přirozené spojení:** $relace1 * relace2$ – spojení dle stejně pojmenovaných atributů.
  - **Přejmenování atributu:** $název\_relace[atribut1 \rightarrow jiné\_jméno]$
  - **Množinové operace:** sjednocení ($\cup$), průnik ($\cap$), rozdíl ($\setminus$), kartézský součin ($\times$)
  - **Polospojení:** left/right join ($relace1 *\!>\; relace2$)

# SP-5-4
## front
Jaké jsou základní části a příkazy jazyka SQL? Uveďte, která část slouží k čemu.
## back
- **SQL – Structured Query Language**
  - Relačně úplný; řešíme výsledek, ne konkrétní postup.
- Části SQL:
  1. **DDL (Data Definition Language):**
     - create, alter, drop
     - tvorba relací/tabulek; řeší i integritní omezení
  2. **DML (Data Manipulation Language):**
     - insert, update, delete, merge
     - úprava záznamů v tabulkách, transakce
  3. **DCL (Data Control Language):**
     - grant, revoke
     - správa uživatelských práv a přístupů
  4. **TCL (Transaction Control Language):**
     - commit, rollback, savepoint

# SP-5-5
## front
Jak lze v DDL vyjádřit integritní omezení (constraints)? Vysvětlete rozdělení a příklady jednotlivých typů.
## back
- Integritní omezení se realizují pomocí DDL (například v CREATE TABLE).
- Kontrolují se periodicky či při každé úpravě dat.
- Typy:
  1. **Deklarativní** (pro domény atributů):
     - Kontrola hodnot atributů (např. NOT NULL, CHECK)
     - Další omezení: UNIQUE, PRIMARY KEY, FOREIGN KEY / REFERENCES
  2. **Procedurální** (nad tabulkami):
     - Složitější kontrola, např. pomocí triggeru (spouštění procedur při změně obsahu tabulky)
- Příklad CREATE TABLE s constraints viz obrázek:
  - ![Příklad CREATE TABLE s integritními omezeními](img/SP-5_0.jpg)

# SP-5-6
## front
Doplňte chybějící části vět: ___ umožňuje deklarovat PRIMARY KEY, ___ umožňuje zajistit, že hodnota není NULL, ___ umožňuje určit cizí klíč (FOREIGN KEY).
## back
- PRIMARY KEY – deklaruje primární klíč (jedinečnost a NOT NULL na úrovni tabulky)
- NOT NULL – zajistí, že sloupec nesmí mít hodnotu NULL
- FOREIGN KEY / REFERENCES – určuje cizí klíč (odkaz na jinou tabulku)

# SP-5-7
## front
Vysvětlete rozdíl mezi DDL a DML v SQL.
## back
- **DDL (Data Definition Language):** 
  - Slouží k definici struktury databáze – vytváření, změna, mazání tabulek a dalších objektů (CREATE, ALTER, DROP)
- **DML (Data Manipulation Language):**
  - Slouží k manipulaci s daty v tabulkách – vkládání, aktualizace, mazání (INSERT, UPDATE, DELETE, MERGE)

# SP-5-8
## front
K čemu slouží DCL a TCL v SQL? Uveďte alespoň jeden příkaz pro každý typ.
## back
- **DCL (Data Control Language):**
  - Správa práv uživatelů a přístupů k datům.
  - Např.: GRANT, REVOKE
- **TCL (Transaction Control Language):**
  - Správa transakcí – potvrzení nebo vrácení změn.
  - Např.: COMMIT, ROLLBACK, SAVEPOINT

# SP-5-9
## front
Jak lze pomocí relační algebry vyjádřit projekci a selekci? Uveďte zápis a příklad.
## back
- **Selecke:** $název\_relace('atribut' = hodnota)$ – vybere všechny záznamy, kde 'atribut' má danou hodnotu.
- **Projekce:** $název\_relace(podmínka)[atribut1, atribut2]$ – vybere pouze zadané atributy z výsledné relace.
- Příklad: $zamestnanci(plát > 30000)[jméno, plát]$

# SP-5-10
## front
Co znamená pojem relačně úplný dotazovací jazyk? 
## back
- Relačně úplný jazyk je jazyk, ve kterém lze realizovat všechny dotazy vyjádřitelné pomocí relační algebry.
- Jakýkoliv dotaz v relační algebře lze převést do tohoto jazyka (například SQL je relačně úplný).

# SP-5-11
## front
Jaký je rozdíl mezi přirozeným spojením (*), kartézským součinem (×) a polospojením v relační algebře?
## back
- **Přirozené spojení ($*$):** 
  - Spojuje dvě relace na základě atributů se stejným názvem.
- **Kartézský součin ($\times$):**
  - Vytvoří všechny možné kombinace řádků obou relací.
- **Polospojení (left/right join, $*\!>\;$):**
  - Vrací řádky z jedné relace, které odpovídají podmínkám v druhé relaci v rámci spojení, ale zachovává pouze některé atributy.

# SP-5-12
## front
Vyjmenujte a stručně charakterizujte základní integritní omezení (constraints) v relační databázi.
## back
- **NOT NULL:** sloupec nesmí mít hodnotu NULL
- **UNIQUE:** všechny hodnoty ve sloupci musí být jedinečné
- **PRIMARY KEY:** Unikátní identifikátor řádku v tabulce (NOT NULL + UNIQUE)
- **FOREIGN KEY / REFERENCES:** Omezení určující odkaz na klíč v jiné tabulce
- **CHECK:** Ověřuje, že hodnota splňuje určitou podmínku

# SP-5-13
## front
Jaký je rozdíl mezi deklarativními a procedurálními integritními omezeními?
## back
- **Deklarativní omezení:** 
  - Kontrolují hodnoty jednotlivých atributů.
  - Stanovují jednoduchá pravidla (NOT NULL, CHECK, UNIQUE, PRIMARY KEY, FOREIGN KEY).
- **Procedurální omezení:** 
  - Mohou kontrolovat složitější podmínky napříč tabulkami.
  - Realizují se pomocí TRIGGERŮ – spouštějí akce při změnách v tabulkách.

# SP-5-14
## front
Jaký je rozdíl mezi SELECT projekcí v relační algebře a v SQL?
## back
- V relační algebře: $relace(podminka)[atribut1, atribut2]$ – projekce vybírá jen požadované atributy.
- V SQL:
  - Projekce v SELECT: `SELECT atribut1, atribut2 FROM tabulka WHERE podmínka;`

# SP-5-15
## front
Podle obrázku "Příklad CREATE TABLE s integritními omezeními" identifikujte, jak jsou vyjádřeny jednotlivé typy integritních omezení:
![Příklad CREATE TABLE s integritními omezeními](img/SP-5_0.jpg)
## back
Na obrázku jsou vyjádřena tato omezení:
- **NOT NULL:** u jednotlivých atributů, např. `prijmeni VARCHAR(255) NOT NULL`
- **UNIQUE:** např. `cislo_zam UNIQUE`
- **PRIMARY KEY:** např. `PRIMARY KEY (cislo_zam)`
- **FOREIGN KEY:** např. `FOREIGN KEY (oddeleni) REFERENCES oddeleni (cislo_odd)`
- **CHECK:** např. `CHECK (plat > 0)`

# SP-5-16
## front
Kdy a jak jsou integritní omezení kontrolována v rámci DDL?
## back
- Integritní omezení se kontrolují buď při každé úpravě dat (například při každém INSERT/UPDATE/DELETE), nebo periodicky (například při reindexaci nebo kontrole databáze).
- Vymezení integritních omezení v DDL se provádí přímo při definici tabulky, například v příkazu CREATE TABLE.
