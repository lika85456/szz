
# SP-9-1
## front
Co je základním principem asymetrických kryptosystémů? Uveď minimálně 3 charakteristiky.
## back
- Pro šifrování a dešifrování se používají různé klíče (veřejný a soukromý).
- Pomocí veřejného klíče se šifruje, soukromým klíčem se dešifruje.
- Privátní klíč nelze v rozumném čase odvodit z veřejného klíče.
- Každý subjekt má svůj vlastní pár veřejný-privátní klíč.

# SP-9-2
## front
Vysvětli princip RSA a popiš, jak vypadají veřejný a soukromý klíč.
## back
- RSA je asymetrická šifra založená na modulárním umocňování.
- Veřejný klíč je dvojice $(e, n)$, kde $e$ je veřejný exponent a $n = pq$ je součin dvou velkých prvočísel.
- Soukromý klíč je dvojice $(d, n)$, kde $d$ je inverzí k $e$ modulo $\varphi(n)$.
- Šifrování: $E(m) = c = |m^e|_n$, $0 < c < n$.
- Dešifrování: $D(c) = |c^d|_n = |m^{ed}|_n$, kde $ed \equiv 1 \pmod{\varphi(n)}$.

# SP-9-3
## front
Jak probíhá generování klíčů v RSA? Na co je třeba dbát při volbě prvočísel?
## back
- Subjekt náhodně vybírá dvě velká prvočísla $p$ a $q$ (s cca 340 číslicemi).
- $n = pq$.
- Pravděpodobnost, že velké náhodné číslo je prvočíslo, je cca $2/\log(10^{340})$.
- Pro nalezení prvočísla je potřeba v průměru asi $400$ testů.
- Exponent $e$ volíme větší než $p$, $q$; $2^e > n$.
- Pro bezpečnost je dobré, aby $p-1$ i $q-1$ měly velký prvočíselný faktor a $p-q$ byl dostatečně velký.

# SP-9-4
## front
Napiš postup šifrování a dešifrování zprávy pomocí RSA.
## back
- Zpráva $m$ se převede na číslo menší než $n$.
- Šifrování: $c = E(m) = m^e \mod n$.
- Dešifrování: $m = D(c) = c^d \mod n$.
- $e$ a $d$ jsou zvoleny tak, aby $ed \equiv 1 \;(\mathrm{mod} \;\varphi(n))$.

# SP-9-5
## front
Co zajišťuje bezpečnost RSA? Proč nelze snadno vygenerovat soukromý klíč z veřejného?
## back
- Nelze jednoduše spočítat $\varphi(n)$ bez znalosti faktorizace $n = pq$.
- Faktorizace velkého $n$ je výpočetně velmi náročná i pro nejlepší známé algoritmy.
- Bez znalosti $p$ a $q$ nemůžeme určit $d$.
- Bezpečnost RSA proto závisí na složitosti faktorizace velkých čísel.

# SP-9-6
## front
Jak funguje digitální podpis s použitím RSA?
## back
- Odesílatel (subjekt 1) podepíše zprávu svým privátním klíčem: $S = D_{PK_1}(m) = |m^{d_1}|_{n_1}$.
- Pak zprávu zašifruje veřejným klíčem příjemce: $c = E_{VK_2}(S) = |S^{e_2}|_{n_2}$.
- Příjemce nejprve dešifruje svým privátním klíčem, poté veřejným klíčem odesílatele odhalí původní obsah.
- Příjemce si tím ověří, že zpráva skutečně přišla od subjektu 1 a podpis nelze popřít.

# SP-9-7
## front
Jak lze urychlit operace RSA při šifrování a dešifrování?
## back
- Urychlení šifrování: Volba public exponentu $e$ s nízkou Hammingovou váhou.
- Urychlení dešifrování: Čínská věta o zbytcích (RSA-CRT) – výpočty probíhají s čísly poloviční délky.

# SP-9-8
## front
Popiš algoritmus Diffie-Hellman pro výměnu klíče.
## back
- Veřejně se dohodne prvočíslo $m$ a báze $a$ ($1 < a < m$).
- A zvolí tajné $k_A$, spočítá $y_A = a^{k_A}\ \text{mod}\ m$ a odešle B.
- B zvolí $k_B$, spočítá $y_B = a^{k_B}\ \text{mod}\ m$ a odešle A.
- Oba spočítají sdílený klíč: $K = y_B^{k_A}\ \text{mod}\ m = y_A^{k_B}\ \text{mod}\ m = a^{k_A k_B}\ \text{mod}\ m$.
- Útočník nedokáže z $y_A$ nebo $y_B$ spočítat $K$ (tzv. Diffie-Hellmanův problém, DHP).

# SP-9-9
## front
Jak funguje šifra El Gamal a jak se liší od základního Diffie-Hellman protokolu?
## back
- Vyžaduje generátor $g$ a prvočíslo $m$.
- A vygeneruje $k_A$, spočítá $y_A = g^{k_A}\ \text{mod}\ m$ (soukromý klíč $k_A$, veřejný klíč $(m, q, y_A)$).
- B chce odeslat zprávu $p$, vygeneruje $k_B$ a $y_B = g^{k_B}\ \text{mod}\ m$.
- Sdílený klíč: $K = y_A^{k_B}\ \text{mod}\ m$.
- Zašifruje zprávu jako $c = (y_B, p \cdot K\ \text{mod}\ m)$.
- A dešifruje zprávu pomocí $K = y_B^{k_A}\ \text{mod}\ m$, dopočítá $p = c \cdot K^{-1}\ \text{mod}\ m$.

# SP-9-10
## front
Vyjmenuj vlastnosti dobré kryptografické hashovací funkce.
## back
- Jednosměrnost: Nelze najít $x$ pro dané $y = f(x)$.
- Bezkoliznost 1. řádu: Je výpočetně nemožné najít dvě různé zprávy $M \neq M'$, aby $h(M) = h(M')$.
- Bezkoliznost 2. řádu: Pro daný vstup $x$ je těžké najít $y \neq x$ tak, že $h(x) = h(y)$.
- Pro různé vstupy vždy stejně dlouhý výstup.
- Hash funkce by se měla chovat jako náhodné orákulum.

# SP-9-11
## front
Vysvětli rozdíl mezi bezkolizností 1. a 2. řádu u hashovací funkce.
## back
- Bezkoliznost 1. řádu: Nalezení dvou libovolných různých zpráv se stejným hashem ($h(M) = h(M')$).
- Bezkoliznost 2. řádu: Pro daný vzor $x$ je výpočetně nemožné najít $y \neq x$ tak, aby $h(x) = h(y)$.

# SP-9-12
## front
Proč se hashe používají při digitálních podpisech místo samotné zprávy?
## back
- Hash celou zprávu reprezentuje krátkým otiskem, šetří výpočetní náročnost (např. při podpisu dlouhé zprávy).
- Bezkoliznost hashovací funkce zajistí, že je těžké nalézt dvě zprávy se stejným hashem, takže podpis odkazuje jednoznačně na konkrétní zprávu.

# SP-9-13
## front
Jakou bezpečnost z hlediska složitosti poskytuje náhodné orákulum hashů délky $n$ pro nalezení:
- kolize 1. řádu,
- kolize 2. řádu?
## back
- Pro kolizi 1. řádu: Složitost $\approx 2^{n/2}$ (narozeninový paradox).
- Pro kolizi 2. řádu: Složitost $\approx 2^{n}$.

# SP-9-14
## front
Popiš základní konstrukci hash funkce na základě blokové šifry s kompresní funkcí.
## back
- Zpráva se rozdělí na bloky.
- Každý blok vstupuje do kompresní funkce $f$ spolu s předchozím hashem $H_{i-1}$ a vytvoří nový hash $H_i$.
- Typicky se používá bloková šifra, kde $H_{i-1}$ je vstup a blok $M_i$ je klíč.
- Podle Davies–Meyerovy konstrukce se po zašifrování ještě přičte/XOR původní kontext.
- Bezkoliznost kompresní funkce zaručuje bezkoliznost celé hashovací funkce.

# SP-9-15
## front
Co je HMAC a k čemu slouží?
## back
- HMAC (Keyed-Hash Message Authentication Code) je integritní kód založený na hash funkci a tajném klíči $K$.
- Používá se k ověření integrity a autenticity zprávy.
- Detekuje chyby při přenosu a brání neoprávněné změně zprávy.

# SP-9-16
## front
Doplň obrázek: Jak vypadá princip blokového hashování?  
![schéma hashovací funkce](img/SP-9_0.jpg)
## back
- Princip: Zpráva je rozdělena na bloky, každý blok spolu s předchozím kontextem vstupuje do kompresní funkce, z jejíž výstupu vzniká hash celé zprávy.
- Na obrázku je vidět sekvenční zpracování bloků s aktualizací hashe po každém kroku.

# SP-9-17
## front
Vysvětli, jak funguje HMAC podle schématu:
![schéma HMAC](img/SP-9_1.jpg)
## back
- HMAC kombinuje hashovací funkci a tajný klíč ve dvou krocích: Vnitřní a vnější hash.
- Nejprve je zpráva spojena s klíčem, zhashována, pak výsledek znovu spojován s klíčem a opět zhashován.
- Posiluje tak odolnost proti útokům na hash funkci.

# SP-9-18
## front
K čemu slouží Public Key Infrastructure (PKI) a jaké jsou hlavní problémy distribuce klíčů?
## back
- PKI umožňuje bezpečnou distribuci veřejných klíčů a správu certifikátů.
- Hlavní problémy: 
  - Jak distribuovat veřejné klíče, aby nemohly být podvrženy (man-in-the-middle útok)?
  - Jak zajistit autenticitu a důvěryhodnost veřejných klíčů?

# SP-9-19
## front
Jaké jsou možné způsoby zveřejnění veřejných klíčů a co je jejich slabina?
## back
- Přímé zasílání veřejných klíčů (rychlé, jednoduché, ale zranitelné vůči podvržení).
- Veřejně dostupný adresář (zajišťuje správa autoritou, zvýšená bezpečnost).

# SP-9-20
## front
Jak funguje veřejně dostupný adresář pro klíče?  
![schéma veřejného adresáře](img/SP-9_2.jpg)
## back
- Veřejný adresář provádí distribuci a správu veřejných klíčů důvěryhodnou autoritou.
- Uživateli jsou klíče poskytovány z bezpečného adresáře, což brání jejich podvržení.

# SP-9-21
## front
Co je to certifikační autorita (CA) a jak zabezpečuje distribuci veřejných klíčů?  
![schéma CA](img/SP-9_3.jpg)
## back
- Autorita pro veřejné klíče spravuje distribuci klíčů z adresáře se svým vlastním párem klíčů (veřejný/privátní).
- Každý účastník musí znát veřejný klíč CA.
- Klíče distribuované CA jsou podepsané a ověřitelné prostřednictvím veřejného klíče CA.

# SP-9-22
## front
Popiš, co je to certifikát, co obsahuje a kdo ho vydává.
## back
- Certifikát obsahuje veřejný klíč držitele, identifikační údaje držitele, dobu platnosti, další údaje vytvořené CA a podpis CA.
- Vydává ho Certifikační Autorita (CA).
- Certifikát lze ověřit pomocí veřejného klíče CA.

# SP-9-23
## front
Jak funguje certifikace veřejných klíčů?  
![schéma certifikátu a CA](img/SP-9_4.jpg)
## back
- Distribuce veřejného klíče bez kontaktu se třetí stranou: uživatel má svůj veřejný klíč podepsaný důvěryhodnou autoritou (CA).
- Certifikát je strukturovaný dokument, který lze ověřit veřejným klíčem CA.
- V praxi mohou být certifikáty podepsány ve stromové struktuře (řetězení důvěry, root CA).

# SP-9-24
## front
Jak je řešena správa a důvěra v root/kořenové certifikáty?
## back
- Root certifikáty musí být distribuovány jiným způsobem (např. s operačním systémem).
- Dál se využívá hierarchie CA – certifikáty jsou podepsány v řetězci na důvěryhodný root certifikát.

