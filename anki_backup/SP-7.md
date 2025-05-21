
# SP-7-1
## front
Co je to prvotní výrok ve výrokové logice?
## back
- Prvotní výrok je jednoduchá oznamovací věta, u které má smysl se ptát, zda je či není pravdivá.
- Prvotní výroky označujeme velkými písmeny a říkáme jim prvotní formule.

# SP-7-2
## front
Co rozumíme pod pojmem pravdivostní ohodnocení výrokové formule?
## back
- Pravdivostní ohodnocení je přiřazení $v$, které každé prvotní formuli přiřadí hodnotu 0 nebo 1.
  - $v(A) = 1$ — $A$ je pravdivý při ohodnocení $v$.
  - $v(A) = 0$ — $A$ je nepravdivý při ohodnocení $v$.

# SP-7-3
## front
Jaká je pravdivost negace výrokové formule $\neg A$?
## back
- Negace $\neg A$ je pravdivá pro všechna ohodnocení, při kterých je $A$ nepravdivý; pro ostatní je nepravdivá.

# SP-7-4
## front
Kdy je pravdivá konjunkce $A \land B$ dvou výroků?
## back
- $A \land B$ je pravdivá právě tehdy, jsou-li obě formule $A$ i $B$ současně pravdivé. Pro ostatní ohodnocení je nepravdivá.

# SP-7-5
## front
Vyplňte: Disjunkce $A \lor B$ je pravdivá, pokud ...
## back
- ... alespoň jeden z výroků $A$ a $B$ je pravdivý. Pro ostatní ohodnocení je nepravdivá.

# SP-7-6
## front
Kdy je implikace $A \Rightarrow B$ nepravdivá?
## back
- $A \Rightarrow B$ je nepravdivá pouze tehdy, když předpoklad $A$ platí (je pravdivý) a závěr $B$ neplatí (je nepravdivý). Jinak je pravdivá.

# SP-7-7
## front
Jaká je podmínka pravdivosti ekvivalence $A \Leftrightarrow B$?
## back
- $A \Leftrightarrow B$ je pravdivá právě tehdy, když mají $A$ a $B$ stejnou pravdivostní hodnotu při daném ohodnocení; jinak je nepravdivá.

# SP-7-8
## front
Co je to tautologie ($\top$) a kontradikce ($\bot$) ve výrokové logice?
## back
- Tautologie ($\top$): Formule, která je pro každé ohodnocení pravdivá.
- Kontradikce ($\bot$): Formule, která je pro každé ohodnocení nepravdivá.

# SP-7-9
## front
Co znamená, že formule je splnitelná?
## back
- Formule je splnitelná, pokud je alespoň pro jedno ohodnocení pravdivá.

# SP-7-10
## front
Doplň vztah: Pokud platí $E \Rightarrow F$, pak ...
## back
- ... $E$ je postačující podmínka pro $F$, $F$ je nutná podmínka pro $E$.

# SP-7-11
## front
Kdy je $E$ nutná a postačující podmínka pro $F$?
## back
- Pokud $E \Leftrightarrow F$, pak je $E$ nutná a postačující podmínka pro $F$ (a obráceně).

# SP-7-12
## front
Co znamená, že dvě výrokové formule $E$ a $F$ jsou logicky ekvivalentní?
## back
- Formule $E$ a $F$ jsou logicky ekvivalentní, právě když pro každé ohodnocení $v$ je $v(E) = v(F)$. Značí se $E \modeleq F$.

# SP-7-13
## front
Jak se zapisuje, že $F$ je logickým důsledkem $E$?
## back
- $F$ je logickým důsledkem $E$ ($E \models F$), právě když pro každé ohodnocení $v$, pro které $v(E) = 1$, je i $v(F) = 1$.

# SP-7-14
## front
Jak zní základní principy logiky? Vyjmenujte alespoň dva.
## back
- Zákon vyloučení sporu: $A \land \neg A \modeleq \bot$
- Zákon vyloučení třetího: $A \lor \neg A \modeleq \top$
- Zákon dvojí negace: $\neg\neg A \Leftrightarrow A \modeleq \top$

# SP-7-15
## front
Jaká je obměněná implikace k $E \Rightarrow F$?
## back
- $(E \Rightarrow F) \modeleq (\neg F \Rightarrow \neg E)$

# SP-7-16
## front
Co znamená, že množina logických spojek tvoří universální systém?
## back
- Množina logických spojek tvoří universální systém, právě když ke každé formuli existuje logicky ekvivalentní formule, která obsahuje pouze tyto spojky.

# SP-7-17
## front
Vyjmenujte nějaké dvouprvkové universální systémy logických spojek.
## back
- Například: $\{\neg, \lor\}$, $\{\neg, \land\}$, $\{\neg, \Rightarrow\}$

# SP-7-18
## front
Existují jednoprvkové universální systémy? Pokud ano, jaké?
## back
- Ano, jednoprvkové universální systémy tvoří například spojky NAND ($\uparrow$) a NOR ($\downarrow$).

# SP-7-19
## front
Definujte literál ve výrokové logice.
## back
- Literál je výroková formule, která je buď prvotní formulí, nebo negací prvotní formule.

# SP-7-20
## front
Co je to implikant?
## back
- Implikant je buď literál, nebo konjunkce několika literálů.

# SP-7-21
## front
Jak vypadá formule v disjunktivním normálním tvaru (DNT)?
## back
- Výroková formule je v DNT, pokud je implikantem, nebo disjunkcí několika implikantů.

# SP-7-22
## front
Co je klausule a co je konjunktivní normální tvar (KNT)?
## back
- Klausule: Literál nebo disjunkce několika literálů.
- Výroková formule je v KNT, pokud je klausulí, nebo konjunkcí několika klausulí.

# SP-7-23
## front
Lze každou výrokovou formuli převést do DNT i KNT?
## back
- Ano, každá výroková formule je logicky ekvivalentní k formuli v DNT i KNT.

# SP-7-24
## front
Co je minterm pro formuli $F$?
## back
- Minterm $F$ je takový její implikant, který obsahuje všechny prvotní formule vyskytující se v $F$ a každou právě jednou.

# SP-7-25
## front
Jaký je rozdíl mezi běžným a úplným disjunktivním normálním tvarem (ÚDNT)?
## back
- ÚDNT je disjunkce mintermů, které obsahují všechny prvotní formule vyskytující se v původní formuli, a každou právě jednou.
- DNT nemusí obsahovat všechny prvotní formule.

# SP-7-26
## front
Definujte maxterm a úplný konjunktivní normální tvar (ÚKNT).
## back
- Maxterm je klausule obsahující všechny prvotní formule vyskytující se ve formuli a každou právě jednou (buď v přímém, nebo v negovaném tvaru).
- ÚKNT je konjunkce různých (logicky neekvivalentních) maxtermů.

# SP-7-27
## front
Je pravda, že každou výrokovou formuli lze převést do logicky ekvivalentního ÚKNT i ÚDNT?
## back
- Ano, každou výrokovou formuli lze převést do logicky ekvivalentního úplného konjunktivního i disjunktivního normálního tvaru.

# SP-7-28
## front
{Obrázek: Pravdivostní tabulka pro operace AND, OR, NOT, IMPLIKACE, EKVIVALENCE}
## back
{Obrázek: Pravdivostní tabulka pro operace AND ($\land$), OR ($\lor$), NOT ($\neg$), IMPLIKACE ($\Rightarrow$), EKVIVALENCE ($\Leftrightarrow$)}

# SP-7-29
## front
Uveďte příklad převodu formule do disjunktivního normálního tvaru (DNT) na základě pravdivostní tabulky.
## back
Například pro formule $F(A, B) = A \lor B$:
- Pravdivostní tabulka:

  | A | B | $A \lor B$ |
  |---|---|-------------|
  | 0 | 0 |      0      |
  | 0 | 1 |      1      |
  | 1 | 0 |      1      |
  | 1 | 1 |      1      |

- DNT: $(A \land \neg B) \lor (\neg A \land B) \lor (A \land B)$

# SP-7-30
## front
Převod formule do úplného disjunktivního normálního tvaru (ÚDNT) — jak postupujeme?
## back
- Najdeme všechny ohodnocení, při kterých je formule pravdivá.
- Pro každé takové ohodnocení vytvoříme minterm: zvolíme kladnou nebo zápornou podobu každé prvotní formule podle hodnoty v ohodnocení.
- Výsledná formule je disjunkcí všech těchto mintermů.
