
# SP-9-1
## front
Co jsou asymetrické kryptosystémy a jak se liší od symetrických šifer?
## back
- Asymetrické kryptosystémy používají dva různé klíče:
  - Veřejný klíč pro šifrování
  - Soukromý (privátní) klíč pro dešifrování
- Privátní klíč nelze prakticky odvodit z veřejného klíče v rozumném čase
- Každý subjekt má svůj unikátní pár veřejného a privátního klíče
- Umožňují bezpečnou komunikaci a digitální podpis bez nutnosti předem sdílet tajný klíč

# SP-9-2
## front
Jaký je princip šifrovacího algoritmu RSA?
## back
- RSA je založené na modulárním umocňování
- Veřejný klíč: dvojice $(e, n)$, kde $e$ je veřejný exponent a $n = pq$ (součin dvou velkých prvočísel)
- $gcd(e, \varphi(n)) = 1$
- Šifrování: $E(m) = c = |m^e|_n$, kde $m$ je blok plaintextu, $c$ ciphertext
- Dešifrování: $D(c) = |c^d|_n = |m|_n$, kde $d$ je inverze čísla $e$ modulo $\varphi(n)$
- Soukromý klíč: dvojice $(d, n)$
- Bezpečnost je založena na obtížnosti faktorizace velkých čísel

# SP-9-3
## front
Jak se generují RSA klíče? Jaká je pravděpodobnost vybrání prvočísel?
## back
- Generování:
  - Najdou se dvě velká náhodná čísla $p$ a $q$ (cca 340 decimálních číslic)
  - Pravděpodobnost, že náhodně vybrané číslo této délky je prvočíslo, je přibližně $2 / \log(10^{340})$
  - Pro nalezení prvočísla je potřeba v průměru cca 400 testů čísel
- Veřejný exponent $e$ by měl být větší než $p$ a $q$

# SP-9-4
## front
Jaké faktory ovlivňují bezpečnost RSA?
## back
- Bezpečnost je založena na obtížnosti faktorizace $n = pq$
- Modulární umocňování pro běžné velikosti je rychlé (milisekundy)
- Získání dešifrovacího exponentu $d$ z $(e, n)$ je obtížné bez znalosti $\varphi(n)$ (tedy bez znalosti faktorizace $n$)
- Moderní algoritmy potřebují stovky let pro faktorizaci 200-číslicového $n$
- Ochrana proti speciálním rychlým technikám:
  - $p-1$ a $q-1$ by měly mít velké prvočíselné faktory
  - Malý $gcd(p-1, q-1)$
  - Dostatečně velký rozdíl $p-q$

# SP-9-5
## front
Popiš princip digitálního podpisu s použitím RSA.
## back
- Každý subjekt má svůj veřejný/privátní klíč ($PK_1, VK_1$, $PK_2, VK_2$)
- Subjekt 1 podepíše zprávu: $S = D_{PK_1}(m) = |m^{d_1}|_{n_1}$
- Zpráva pro subjekt 2 se šifruje: $c = E_{VK_2}(S) = |S^{e_2}|_{n_2}$
- Subjekt 2 dešifruje svým privátním klíčem a poté ověří podpis veřejným klíčem subjektu 1
- Zajišťuje autenticitu (odesílatel nemůže podpis popřít) a integritu

# SP-9-6
## front
Jak lze urychlit výpočty v RSA šifrování a dešifrování?
## back
- Urychlení šifrování: Volba veřejného exponentu $e$ s nízkou Hammingovou vahou
- Urychlení dešifrování: Použití Čínské věty o zbytcích (RSA-CRT), což umožňuje počítat s čísly poloviční délky

# SP-9-7
## front
Jaký je princip algoritmu Diffie-Hellman pro dohodu na klíči?
## back
- Subjekty A a B se dohodnou na prvočísle $m$ a bázi $a$ ($1 < a < m$)
- A zvolí $k_A$, spočítá $y_A = |a^{k_A}|_m$ a pošle B
- B zvolí $k_B$, spočítá $y_B = |a^{k_B}|_m$ a pošle A
- Oba spočítají sdílený klíč $K = |a^{k_A \cdot k_B}|_m$
- Útočník nemůže z $|a^{k_A}|_m$ nebo z $|a^{k_B}|_m$ spočítat $K$ (DHP – Diffie-Hellmanův problém)

# SP-9-8
## front
Jaký je vztah mezi Diffie-Hellmanovým problémem (DHP) a problémem diskrétního logaritmu (DLP)?
## back
- DHP (nelze snadno spočítat sdílený klíč z veřejných hodnot) není složitější než DLP (nalezení exponentu v $y = a^k \bmod m$), podle aktuálních znalostí však není DHP ani jednodušší než DLP

# SP-9-9
## front
Popiš šifrovací systém El Gamal – jak vzniká a jak funguje?
## back
- El Gamal vzniká úpravou Diffie-Hellmana
- A zvolí $g$ (generátor grupy) a prvočíslo $m$
- A zvolí privátní klíč $k_A$, spočítá $y_A = |g^{k_A}|_m$, zveřejní $(m, g, y_A)$ jako veřejný klíč
- B chce poslat zprávu $p$:
  - Zvolí $k_B$, spočítá $y_B = |g^{k_B}|_m$ a sdílený klíč $K = |y_A^{k_B}|_m$
  - Zašifruje: $c = |p \cdot K|_m$
  - Odešle $A$ dvojici $(y_B, c)$
- A spočítá $K = |y_B^{k_A}|_m$, after computes $K^{-1}$, dešifruje: $p = |c \cdot K^{-1}|_m$

# SP-9-10
## front
Co je hashovací funkce a které bezpečnostní vlastnosti jsou požadované?
## back
- Hashovací funkce: z libovolně dlouhého vstupu vytvoří pevně dlouhý hash
- Požadované vlastnosti:
  - Jednosměrnost (snadno $x \to h(x)$, zpětně nelze)
  - Bezkoliznost (obtížnost najít dva různé vstupy se stejným hashem)
  - Pro různé vstupy stejný output délky
- Hashy se využívají v digitálních podpisech (podepisuje se hash, ne dlouhá data)

# SP-9-11
## front
Vysvětli rozdíl mezi bezkolizností hashovacích funkcí 1. a 2. řádu.
## back
- Bezkoliznost 1. řádu:
  - Obtížné najít dvě různé zprávy $M$ a $M'$ tak, aby $h(M) = h(M')$
- Bezkoliznost 2. řádu:
  - Pro daný vstup $x$ je obtížné najít druhý vstup $y \neq x$ tak, že $h(x) = h(y)$

# SP-9-12
## front
Jaká je odolnost hash funkce délky $n$ proti nalezení kolize 1. řádu? (narozeninový paradox)
## back
- Pokud se hash funkce chová jako náhodné orákulum:
  - Složitost nalezení kolize s 50% pravděpodobností je přibližně $2^{n/2}$

# SP-9-13
## front
Jaká je odolnost hash funkce délky $n$ proti nalezení druhého vzoru konkrétního hashe (2. řád)?
## back
- Pokud se hash funkce chová jako náhodné orákulum:
  - Složitost nalezení druhého vzoru je přibližně $2^n$

# SP-9-14
## front
Jak se konstruuje hashovací funkce pomocí kompresní funkce? (popiš základní princip)
## back
- Zpráva rozdělena na bloky, poslední blok doplněn (např. '1' a pak '0')
- Pro každý blok použita kompresní funkce $f$, která z předchozího kontextu $H_{i-1}$ a bloku $M_i$ vytvoří $H_i$
- Bezkoliznost kompresní funkce zajistí bezkoliznost celé hashovací funkce
- Obvykle se jako kompresní funkce používá bloková šifra – kontext $H_{i-1}$ je vstup, blok $M_i$ je klíč

# SP-9-15
## front
Co znamená Davies-Meyerova konstrukce pro hash funkce?
## back
- Davies-Meyerova konstrukce:
  - Po zašifrování kompresní funkcí se ještě k výsledku přičte (XOR) původní kontext $H_{i-1}$
  - Zvyšuje odolnost proti určitým typům útoků na hash funkce

# SP-9-16
## front
Co je HMAC a k čemu se používá?
## back
- HMAC: Hash-based Message Authentication Code
- Integritní kód, bránící padělání zprávy
- Používá tajný klíč $K$ a hashovací funkci
- Detekuje chyby při přenosu a zabraňuje neoprávněné změně zprávy

# SP-9-17
## front
{Obrázek znázorňující konstrukci HMAC}
Co ukazuje tento diagram HMAC a jaký je jeho princip?
## back
- Diagram ilustruje, že HMAC kombinuje tajný klíč $K$ se zprávou, používá hash funkci a dvě různé konstanty (ipad, opad)
- Používá dvoufázové hashování s prefixací klíče a specifických hodnot pro posílení bezpečnosti
- Výsledkem je autentizační hashový kód zprávy

# SP-9-18
## front
Pojmy orákulum a náhodné orákulum – jaký mají význam v kontextu hashovacích funkcí?
## back
- Orákulum: stroj, který na stejný vstup vždy dává stejný výstup
- Náhodné orákulum: pro nové vstupy dává náhodně zvolené hodnoty, pro opakované stejné
- Hash funkce by se z hlediska bezpečnosti měla chovat jako náhodné orákulum

# SP-9-19
## front
Proč se hash zprávy podepisuje místo celé zprávy v digitálním podpisu?
## back
- Podepisování přímo celé zprávy je příliš náročné (dlouhé zprávy)
- Hash má konstantní délku, podpis je tím efektivnější
- Bezkoliznost hashů zajišťuje, že není snadné vyrobit jinou zprávu se stejným hashem (odolnost proti podvržení)

# SP-9-20
## front
Jaké jsou varianty distribuce veřejných klíčů a jaké mají nevýhody?
## back
- Přímé zasílání veřejného klíče:
  - Rychlé, jednoduché, ale snadné podvržení
- Veřejně dostupný adresář:
  - Důvěryhodná autorita zajišťuje distribuci, vyšší bezpečnost

# SP-9-21
## front
{Obrázek infrastruktury s veřejným adresářem veřejných klíčů}
Co znázorňuje tento obrázek a jaké vlastnosti má tento způsob distribuce klíčů?
## back
- Obrázek ukazuje centrální důvěryhodnou autoritu, která spravuje veřejně přístupný adresář veřejných klíčů uživatelů
- Zajišťuje vyšší úroveň bezpečnosti oproti přímé distribuci, ale uživatelé musí důvěřovat správci adresáře

# SP-9-22
## front
Jak funguje autorita pro veřejné klíče (PKA) a jak chrání distribuci klíčů?
## back
- Přísnější dohled na distribuci veřejných klíčů z adresáře
- Autorita má vlastní pár klíčů (veřejný, privátní)
- Účastníci musí znát veřejný klíč autority pro ověření pravosti klíčů ostatních

# SP-9-23
## front
{Obrázek infrastruktury s autoritou pro veřejné klíče}
Jakou roli hraje autorita v distribuční infrastruktuře klíčů na tomto obrázku?
## back
- Autorita má centrální roli při ověřování a přidělování veřejných klíčů
- Uživatelé si z adresáře stáhnou klíče a jejich pravost ověřují podpisem autority

# SP-9-24
## front
Co je certifikát, co obsahuje a jak funguje certifikační autorita (CA)?
## back
- Certifikát: struktura obsahující:
  - veřejný klíč držitele
  - identifikační údaje držitele
  - dobu platnosti a další údaje
  - podpis certifikační autority (CA)
- CA je důvěryhodná třetí strana, která vydává a podepisuje certifikáty
- Ověřitelnost certifikátu je pomocí veřejného klíče CA

# SP-9-25
## front
{Obrázek certifikační autority vystavující a podepisující certifikáty}
Co znázorňuje tento obrázek? Jaký je tok informací mezi uživatelem a CA?
## back
- Uživateli je vystaven certifikát obsahující jeho veřejný klíč a identitu
- CA podepisuje tento certifikát svým soukromým klíčem
- Validitu certifikátu může kdokoliv ověřit pomocí veřejného klíče CA

# SP-9-26
## front
Jaká je stromová struktura certifikátů a k čemu slouží kořenové certifikáty?
## back
- Certifikáty mohou být podepsané ve stromové struktuře (řetězec důvěry)
- Certifikát držitele je podepsaný CA$_1$, její certifikát podepsaný CA$_2$, atd.
- Kořenové certifikáty tvoří vrchol stromu; musí být distribuovány jiným způsobem (např. s operačním systémem nebo preinstalované v softwaru)
