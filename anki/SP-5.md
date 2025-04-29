# SP-5-1
## front
Co je databáze a jaké jsou její hlavní charakteristiky?
## back
- Databáze je soubor záznamů se systematickou strukturou, která umožňuje počítačové vyhledávání dat.
- Existence dat v DB je nezávislá na aplikačních programech.
- Pracuje s velkým množstvím, perzistentních, spolehlivých a sdílených dat:
  - Velké množství: nestačí operační paměť.
  - Perzistentní: data přetrvávají od zpracování ke zpracování.
  - Spolehlivá: lze rekonstruovat po chybě.
  - Sdílená: přístupná více uživatelům.

# SP-5-2
## front
Vyjmenuj hlavní přínosy databázových technologií.
## back
- Nezávislost dat na aplikaci
- Efektivní přístup k datům
- Urychlení vývoje aplikací
- Integrita a ochrana dat
- Správa a zálohování dat
- Transakční zpracování
- Paralelní přístup k datům
- Zotavení po chybě

# SP-5-3
## front
Co znamenají pojmy DBS a DBMS?
## back
- DBS (Database System): databázový systém, zahrnuje databázi, DBMS a aplikační software.
- DBMS (Database Management System): systém pro správu databáze, software umožňující vytváření, správu a manipulaci s databázemi.

# SP-5-4
## front
Jaký je rozdíl mezi relací, atributem a n-ticí v relační databázi?
## back
- Relace: dvourozměrná struktura (tabulka).
- Atribut (sloupec): jméno a doména atributu, popisuje sloupce tabulky.
- N-tice (řádek): prvek relace, konkrétní záznam v tabulce; každý řádek je unikátní.

# SP-5-5
## front
Z čeho se skládá schéma relační databáze?
## back
- Schéma relační databáze se skládá z množiny relací $R$ a množiny integritních omezení $I$.

# SP-5-6
## front
Co je relační algebra a proč je důležitá pro databáze?
## back
- Relační algebra je dotazovací formalismus pro vyhledávání dat v relačních databázích.
- Specifikujeme, co chceme najít, ne jak.
- Výsledkem operací je vždy relace, která může být vstupem pro další dotaz.
- Jazyk, který umožňuje všechny operace relační algebry, je tzv. "relačně úplný".

# SP-5-7
## front
Vyjmenuj základní operace relační algebry a krátce je popiš.
## back
- Selekce: vyhledání záznamů splňujících podmínku v relaci (název_relace(''atribut'' = hodnota)).
- Projekce: výběr konkrétních atributů do výsledné relace (název_relace[podmínka][atribut1, atribut2]).
- Přirozené spojení: spojení dvou relací na základě stejně pojmenovaných atributů (relace1 * relace2).
- Přejmenování atributů: název_relace[atribut1 $\rightarrow$ jine\_jmeno].
- Množinové operace: sjednocení ($\cup$), průnik ($\cap$), rozdíl ($\setminus$), kartézský součin ($\times$).
- Polospojení: left/right join (relace1 *$>$ relace2).

# SP-5-8
## front
Vyplň schéma: název_relace(''atribut'' = hodnota) je operace ________ (v relační algebře).
## back
- Selekce

# SP-5-9
## front
Jak lze pomocí relační algebry zapsat projekci vybraných atributů?
## back
- Formát: název_relace[podmínka][atribut1, atribut2]
- Hranaté závorky označují výběr (projekci) atributů do výsledné relace.

# SP-5-10
## front
Jaká je role SQL v práci s databázemi?
## back
- SQL (Structured Query Language) je jazyk pro práci s relačními databázemi.
- Je relačně úplný – každý dotaz v relační algebře lze zapisovat v SQL.
- Řeší požadovaný výsledek, ne konkrétní způsob realizace dotazu.

# SP-5-11
## front
Vyjmenuj hlavní části SQL a popiš jejich účel.
## back
- DDL (Data Definition Language): tvorba a změny struktury databáze (CREATE, ALTER, DROP), integritní omezení.
- DML (Data Manipulation Language): manipulace s daty (INSERT, UPDATE, DELETE, MERGE), transakce.
- DCL (Data Control Language): správa práv uživatelů (GRANT, REVOKE).
- TCL (Transaction Control Language): řízení transakcí (COMMIT, ROLLBACK, SAVEPOINT).

# SP-5-12
## front
K čemu slouží DDL v SQL a jaké příkazy sem patří?
## back
- DDL (Data Definition Language) se používá pro tvorbu, úpravu a mazání struktur databáze – tabulek, integritních omezení.
- Příkazy: CREATE, ALTER, DROP.

# SP-5-13
## front
Co znamenají DML, DCL, TCL v SQL? Uveď příklady.
## back
- DML (Data Manipulation Language): manipulace s daty (INSERT, UPDATE, DELETE, MERGE).
- DCL (Data Control Language): úprava práv (GRANT, REVOKE).
- TCL (Transaction Control Language): řízení transakcí (COMMIT, ROLLBACK, SAVEPOINT).

# SP-5-14
## front
Jakým způsobem jsou v SQL vyjadřována integritní omezení a v rámci kterého typu příkazu?
## back
- Integritní omezení jsou vyjadřovaná v DDL, zejména v příkazu CREATE (např. při vytváření tabulky).
- Můžou se kontrolovat periodicky nebo při každé úpravě dat.

# SP-5-15
## front
Vyjmenuj typy integritních omezení v databázích. Jaký je mezi nimi rozdíl?
## back
- Deklarativní: pro domény atributů, kontrolují hodnoty atributů (např. NOT NULL, CHECK, UNIQUE, PRIMARY KEY, FOREIGN KEY / REFERENCES).
- Procedurální: složitější omezení, pracují s celými tabulkami (např. triggery).

# SP-5-16
## front
Vyjmenuj příklady deklarativních integritních omezení v SQL.
## back
- NOT NULL
- CHECK
- UNIQUE
- PRIMARY KEY
- FOREIGN KEY (REFERENCES)

# SP-5-17
## front
Co jsou procedurální integritní omezení a uveď příklad.
## back
- Složitější omezení, definovaná nad celými tabulkami.
- Typickým příkladem je trigger (spouštěč), který provádí akci na základě určité události (např. před nebo po vložení/úpravě záznamu).

# SP-5-18
## front
Jak vypadá vyjádření integritních omezení v příkazu CREATE v SQL? (Uveď příklad nebo popis.)
## back
- V příkazu CREATE TABLE lze u každého sloupce zadat omezení, např.

$$
\text{CREATE TABLE osoba (}
\\ \qquad \text{id INT PRIMARY KEY,}
\\ \qquad \text{jmeno VARCHAR(50) NOT NULL,}
\\ \qquad \text{vek INT CHECK (vek \textgreater= 0)}
\\ \text{);}
$$

- Lze přidat i omezení na cizí klíč:
$$
\text{FOREIGN KEY (osoba\_id) REFERENCES osoba(id)}
$$

# SP-5-19
## front
{Obrázek znázorňující příkaz CREATE TABLE s deklarovanými integritními omezeními: PRIMARY KEY, NOT NULL, UNIQUE, FOREIGN KEY.}
## back
- Příkaz CREATE TABLE obsahuje sloupce s integritními omezeními:
  - PRIMARY KEY (primární klíč)
  - NOT NULL (nesmí být prázdné)
  - UNIQUE (unikátní hodnota)
  - FOREIGN KEY (cizí klíč, vazba na jinou tabulku)
- Například:
  - id INT PRIMARY KEY
  - jmeno VARCHAR(50) NOT NULL
  - email VARCHAR(50) UNIQUE
  - osoba_id INT REFERENCES osoba(id)
