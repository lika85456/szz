
# SP-6-1
## front
Jaké jsou základní požadavky na databázi z hlediska ochrany dat a přístupu více uživatelů? Vyjmenujte příslušné moduly.
## back
- Ochrana dat před chybami a havárií serveru 
  - Řeší recovery modul (obnova po systémových/hardwarových chybách, vždy navrací DB do konzistentního stavu)
- Korektní, rychlý a asynchronní přístup pro větší počet uživatelů
  - Řeší concurrency control modul (každý uživatel vidí konzistentní stav)

# SP-6-2
## front
Vydefinujte pojem transakce v kontextu databází.
## back
- Sekvence souvisejících akcí, která dostane databázi z jednoho konzistentního stavu do druhého.
- Během transakce může databáze přechodně být v nekonzistentním stavu, ale na konci musí znovu být konzistentní.
- Transakce se provede buď celá, nebo vůbec (vše nebo nic).

# SP-6-3
## front
V jakých okamžicích může transakce začít a skončit? Jaké jsou klíčové příkazy pro ukončení transakce?
## back
- Začátek transakce:
  - Vznik session (spojení s databází)
  - Konec předchozí transakce
- Konec transakce:
  - Ukončení session
  - Klíčová slova: COMMIT (potvrzení) nebo ROLLBACK (zrušení)

# SP-6-4
## front
Vyjmenujte možné stavy transakce a popište je.
## back
- Aktivní (A): Probíhají DML (Data Manipulation Language) příkazy
- Částečně potvrzená (PC): Po provedení posledního příkazu transakce, čeká na potvrzení nebo zrušení
- Potvrzená (C - Committed): Po úspěšném zakončení (COMMIT)
- Chybná (F): Nelze pokračovat v normálním průběhu transakce
- Zrušená (AB - Aborted): Po skončení operace ROLLBACK

# SP-6-5
## front
Doplňte: Vlastnosti transakcí jsou známy pod zkratkou ____.
## back
ACID

# SP-6-6
## front
Co znamená jednotlivé písmeno v ACID vlastnostech transakce?
## back
- Atomicity (A): Transakce proběhne celá, nebo vůbec (nedělitelnost)
- Consistency (C): Transakce transformuje databázi z jednoho konzistentního stavu do druhého
- Independence (Isolation, I): Dílčí efekty jedné transakce nejsou viditelné jiným transakcím
- Durability (D): Uložené efekty transakce jsou trvalé, přetrvávají i po pádu systému

# SP-6-7
## front
{Obrázek znázorňující jednotlivé stavy transakce jako diagram stavů: Aktivní → Částečně potvrzená → Potvrzená; Aktivní/Částečně potvrzená → Chybná → Zrušená}
Popište, co diagram transakčních stavů vyjadřuje.
## back
- Diagram ukazuje přechody mezi hlavními stavy transakce:
  - Aktivní → (po provedení posledního příkazu) → Částečně potvrzená → (COMMIT) → Potvrzená (Committed)
  - Pokud dojde k chybě (v průběhu nebo po částečném potvrzení), tranzice do stavu Chybná (Failed)
  - Ze stavu Chybná vede přes ROLLBACK do stavu Zrušená (Aborted)

# SP-6-8
## front
Popište princip zotavení databáze (recovery) po chybě. Jakou roli zde hraje žurnál/log?
## back
- Pro zotavení se využívá žurnál (log), který obsahuje změnové vektory zaznamenávající změny údajů.
- Po chybě: 
  - Nedokončené (nepotvrzené) transakce se odvolávají (provádí se na nich ROLLBACK)
  - Potvrzené transakce, jejichž efekty nebyly fyzicky zapsány na disk, se znovu aplikují (redo)
- Typy chyb:
  - Globální (například pád serveru, ztráta spojení, incident na disku)
  - Lokální (logické chyby v konkrétní transakci)

# SP-6-9
## front
Jaký je rozdíl mezi globálními a lokálními chybami v kontextu zotavení databáze?
## back
- Globální chyby: Ovlivňují celý systém (například pád serveru, výpadek napájení, incident na disku)
- Lokální chyby: Týkají se pouze jednotlivé transakce (například logická chyba nebo selhání operace v konkrétní transakci)

# SP-6-10
## front
Co znamená rozvrhování transakcí (scheduling) v databázovém systému?
## back
- Proces rozhodování o tom, v jakém pořadí a jak budou transakce a jejich dílčí operace prováděny.
- Cílem je zajistit korektní a asynchronní přístup pro více uživatelů.
- Používají se techniky jako zamykání a uzamykací protokoly.

# SP-6-11
## front
Vysvětlete pojem legální rozvrh transakcí.
## back
- Legální rozvrh zajišťuje, že:
  - Transakce musí mít objekt zamknutý, aby na něm mohla pracovat.
  - Transakce nemůže zamykat objekty, které jsou již zamčené jinými transakcemi.

# SP-6-12
## front
Definujte dobře formovanou transakci z pohledu zamykání objektů.
## back
- Dobře formovaná transakce splňuje:
  - Zamyká objekt pouze pokud k němu chce přistupovat.
  - Nezamyká objekt, pokud ho již má zamčený.
  - Neodemyká objekt, který nezamkla.
  - Na konci transakce nesmí zůstat žádný objekt zamčený.

# SP-6-13
## front
Proč je třeba zavádět uzamykací protokoly při rozvrhování transakcí?
## back
- Protokoly jsou potřebné k zajištění:
  - Korektnosti a asynchronního přístupu více uživatelů k datům.
  - Zamezení nekonzistence, deadlockům a jiným konfliktům mezi transakcemi.

# SP-6-14
## front
Jak funguje dvoufázový (two-phase) uzamykací protokol a jak zabraňuje deadlocku?
## back
- 1. fáze: Zamykání
  - Transakce pouze zamyká objekty (postupně, jak potřebuje), nesmí žádný odemykat.
- 2. fáze: Odemýkání
  - Po prvním odemčení objektu už nesmí žádný další objekt zamykat.
- Pokud všechny transakce používají tento protokol, lze je uspořádat tak, aby nedošlo k vzájemným zablokováním (deadlockům).

# SP-6-15
## front
{Obrázek: časová osa transakce rozdělená na fázi zamykání a fázi odemykání, znázorňující dvoufázový uzamykací protokol}
Co diagram dvoufázového uzamykacího protokolu ukazuje?
## back
- Diagram znázorňuje, že transakce nejprve pouze zamyká potřebné objekty (první fáze).
- Jakmile začne odemykat byť jeden objekt, nezačne už nikdy zamykat další objekty (druhá fáze).
- Tento postup zabrání tomu, aby více transakcí zůstalo navzájem zablokovaných kvůli čekání na zamčené objekty.

# SP-6-16
## front
Jakým způsobem lze řešit vznik deadlocku mezi transakcemi, pokud dvoufázové zamykání nestačí?
## back
- Používají se další strategie rozvrhování (například timeouty nebo detekce deadlocků).
- Pokud dojde k deadlocku, jedna z operací/transakcí je ukončena provedením ROLLBACK.

# SP-6-17
## front
Vyjmenujte hlavní kroky, které jsou nutné, aby byl rozvrh transakcí uspořádatelný.
## back
- Všechny transakce musí být:
  - Dobře formované (správné zamykání a odemykání objektů)
  - Dvoufázové (tj. dodržovat dvoufázový uzamykací protokol)
- Uspořádatelný rozvrh zaručuje, že výsledek bude jako při sériovém (postupném) provádění transakcí.

# SP-6-18
## front
Napište, proč je důležité plánovat sekvenci operací meziněkolika transakcemi ve víceuživatelském prostředí.
## back
- Aby byl zajištěn:
  - Korektní a konzistentní výsledek (databáze se nedostane do nekonzistentního stavu)
  - Současný a bezpečný přístup více uživateli
  - Prevence ztráty nebo nekonzistence dat při souběžných operacích
