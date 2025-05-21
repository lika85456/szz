
# SP-6-1
## front
Jaké dva hlavní požadavky jsou kladeny na databázi z hlediska ochrany a přístupu k datům?
## back
- Ochrana dat před chybami a havárií serveru, což zajišťuje recovery modul (DB se vždy vrátí do konzistentního stavu při systémových/hw chybách)
- Korektní, rychlý a asynchronní přístup pro větší počet uživatelů, což řeší concurrency control modul (každý uživatel vidí konzistentní stav)

# SP-6-2
## front
Definuj transakci v databázovém systému.
## back
- Sekvence souvisejících akcí, která dostane databázi z jednoho konzistentního stavu do druhého.
- V průběhu transakce může existovat nekonzistentní stav, ale na konci musí být databáze opět konzistentní.
- Transakce se provede buď celá, nebo vůbec.

# SP-6-3
## front
Kdy začíná a končí transakce v databázovém systému?
## back
- Začátek transakce: vznik session nebo konec předchozí transakce.
- Konec transakce: ukončení session, nebo klíčová slova COMMIT (potvrzení) / ROLLBACK (zrušení).

# SP-6-4
## front
Vyjmenuj stavy transakce a popiš je stručně.
## back
- Aktivní (A): Probíhají DML příkazy.
- Částečně potvrzená (PC): Po provedení poslední operace transakce.
- Potvrzená (C — Commited): Po úspěšném zakončení transakce (COMMIT).
- Chybná (F): Nelze pokračovat v normálním průběhu transakce kvůli chybě.
- Zrušená (AB — Aborted): Po skončení operace ROLLBACK.

# SP-6-5
## front
Co znamená zkratka ACID u transakcí a jaké vlastnosti zahrnuje?
## back
- Atomicity (atomárnost): Transakce proběhne celá, nebo vůbec.
- Consistency (konzistence): Transakce transformuje DB z jednoho konzistentního stavu do jiného konzistentního stavu.
- Independence (izolovanost): Dílčí efekty jedné transakce nejsou viditelné jiným transakcím.
- Durability (trvalost): Uložené efekty transakce jsou trvale uloženy.

# SP-6-6
## front
Vysvětli atomicitu v rámci ACID vlastností transakce.
## back
Atomicita znamená, že transakce musí být provedena celá, nebo vůbec vůbec — žádná její část nesmí být provedena samostatně.

# SP-6-7
## front
Co znamená konzistence (consistency) v ACID vlastnostech?
## back
Konzistence znamená, že transakce transformuje databázi z jednoho konzistentního stavu do jiného konzistentního stavu, tedy zachovává integritu dat.

# SP-6-8
## front
Co znamená izolovanost (independence) v ACID vlastnostech?
## back
Izolovanost (independence) znamená, že dílčí efekty jedné transakce nejsou viditelné ostatním transakcím — transakce běží izolovaně.

# SP-6-9
## front
Co znamená trvalost (durability) v ACID vlastnostech?
## back
Trvalost znamená, že potvrzené změny způsobené transakcí jsou trvale uložené i v případě například havárie systému.

# SP-6-10
## front
Jaké hlavní úkoly řeší recovery modul v databázi?
## back
- Ochrana dat před chybami a havárií serveru.
- Zajištění návratu databáze do konzistentního stavu při systémových nebo hardwarových chybách.

# SP-6-11
## front
Jak funguje recovery (obnova) databáze při chybách?
## back
- Využívá se žurnál (log) obsahující změnové vektory.
- Nedokončené transakce se odvolávají (ROLLBACK).
- Potvrzené (committed) transakce, jejichž efekt nebyl zapsán na disk, se zopakují.

# SP-6-12
## front
Jaké typy chyb recovery modul řeší?
## back
- Globální chyby: Pád serveru, ztráta spojení, incident na disku.
- Lokální chyby: Logické chyby v konkrétní transakci.

# SP-6-13
## front
Co se stane s transakcemi při globálních a lokálních chybách?
## back
- Nedokončené transakce se odvolávají (ROLLBACK).
- Potvrzené transakce, jejichž efekt nebyl zapsán na disk (např. kvůli výpadku) se po obnovení zopakují.

# SP-6-14
## front
Co znamená rozvrhování (plánování) transakcí v databázi?
## back
- Proces plánování pořadí a způsobu provedení transakcí a jejich dílčích operací.
- Musí zajistit korektní a asynchronní přístup více uživatelům bez narušení konzistence databáze.

# SP-6-15
## front
Jaké techniky se používají pro rozvrhování transakcí v databázích?
## back
- Zamykání a uzamykací protokoly.
- Používání dobře formovaných transakcí a dvoufázového uzamykacího protokolu pro zamezení deadlocků.

# SP-6-16
## front
Co je to legální rozvrh u transakcí?
## back
- Rozvrh, kde:
  - Transakce musí mít objekt zamknutý, aby s ním mohla pracovat.
  - Transakce nemůže zamykat již zamknutý objekt.

# SP-6-17
## front
Popiš pravidla dobře formovaných transakcí v souvislosti s uzamykáním.
## back
- Transakce zamyká objekt, pokud k němu chce přistupovat.
- Transakce nezamyká objekt, pokud ho již dříve zamkla.
- Transakce neodemyká objekt, který nezamkla.
- Na konci transakce nezůstane žádný objekt zamčený.

# SP-6-18
## front
Jak funguje dvoufázový uzamykací protokol (2PL)?
## back
- 1. fáze: Uzamykají se objekty podle potřeby, ale nesmí se nic odemykat.
- 2. fáze: Odemykají se objekty, přičemž po prvním odemknutí se již nesmí nic zamykat.

# SP-6-19
## front
K čemu slouží dvoufázový uzamykací protokol v databázích?
## back
- Zamezuje vzniku deadlocků (záseků při čekání na zámky).
- Umožňuje vytvořit uspořádatelný rozvrh pro dobře formované transakce.

# SP-6-20
## front
Jak lze řešit vzniklý deadlock při rozvrhování transakcí?
## back
V případě deadlocku se u jedné operace prostě provede rollback dané transakce nebo operace.

# SP-6-21
## front
Vyjmenuj fáze běhu transakce a přiřaď k nim charakteristickou akci.
## back
- Aktivní (A): Probíhají DML příkazy.
- Částečně potvrzená (PC): Po skončení poslední operace.
- Potvrzená (C): Po provedení COMMIT.
- Chybná (F): Detekována chyba, nelze pokračovat.
- Zrušená (AB): Po provedení ROLLBACK.

# SP-6-22
## front
Doplň: Recovery využívá ______ obsahující změnové vektory, k obnově dat po havárii.
## back
recovery využívá žurnál (log) obsahující změnové vektory.

# SP-6-23
## front
Vysvětli pojem “asynchronní přístup” v kontextu databází.
## back
- Možnost, aby více uživatelů mohlo současně, nezávisle a efektivně pracovat s databází, aniž by narušili integritu dat.
- Řeší concurrency control modul.

# SP-6-24
## front
Proč musí být na konci transakce databáze v konzistentním stavu?
## back
Protože jen tak je zajištěna integrita a správnost dat — pouze konzistentní databáze poskytuje správné a důvěryhodné informace.

# SP-6-25
## front
Co se stane, když transakce způsobí nekonzistentní stav databáze a následně dojde k havárii?
## back
Recovery modul pomocí žurnálu (logu) provede rollback neúspěšné/nedokončené transakce a obnoví databázi do posledního konzistentního stavu.
