
# SP-7-1
## front
Co je prvotní výrok (prvotní formule) ve výrokové logice?
## back
- Jednoduchá oznamovací věta, u které má smysl se ptát, zda je či není pravdivá.
- Prvotní výroky označujeme velkými písmeny.
- Nazýváme je také **prvotní formule**.

# SP-7-2
## front
Co znamená pravdivostní ohodnocení ve výrokové logice?
## back
- Pravdivostní ohodnocení je přiřazení $v$, které každé prvotní formuli přiřadí hodnotu $0$ nebo $1$:
  - $v(A) = 1$ znamená, že $A$ je pravdivý při ohodnocení $v$.
  - $v(A) = 0$ znamená, že $A$ je nepravdivý při ohodnocení $v$.

# SP-7-3
## front
Co je negace $\neg A$ výroku $A$ a kdy je pravdivá?
## back
- Negace $\neg A$ je pravdivá právě tehdy, když je $A$ nepravdivý.
- Pro ostatní ohodnocení je nepravdivá.

# SP-7-4
## front
Jak je definována konjunkce ($A \land B$) dvou výroků?
## back
- $A \land B$ je pravdivá, pokud jsou $A$ i $B$ současně pravdivé.
- Pro ostatní ohodnocení je nepravdivá.

# SP-7-5
## front
Jak je definována disjunkce ($A \lor B$) dvou výroků?
## back
- $A \lor B$ je pravdivá, pokud alespoň jeden z výroků $A$ a $B$ je pravdivý.
- Pro ostatní ohodnocení je nepravdivá.

# SP-7-6
## front
Kdy je implikace ($A \Rightarrow B$) nepravdivá?
## back
- Implikace $A \Rightarrow B$ je nepravdivá tehdy, když:
  - $A$ (předpoklad) je pravdivý
  - $B$ (závěr) je nepravdivý
- Ve všech ostatních případech je pravdivá.

# SP-7-7
## front
Kdy je ekvivalence ($A \Leftrightarrow B$) pravdivá?
## back
- $A \Leftrightarrow B$ je pravdivá pro všechna ohodnocení, při kterých mají výroky $A$ a $B$ stejnou pravdivostní hodnotu.
- Jinak je nepravdivá.

# SP-7-8
## front
Co je tautologie ($\top$) a kontradikce ($\bot$)?
## back
- **Tautologie ($\top$):**
  - Formule, která je pro každé ohodnocení pravdivá.
- **Kontradikce ($\bot$):**
  - Formule, která je pro každé ohodnocení nepravdivá.

# SP-7-9
## front
Co znamená, že formule je splnitelná?
## back
- Formule je splnitelná, pokud existuje alespoň jedno pravdivostní ohodnocení, při kterém je pravdivá.

# SP-7-10
## front
Jak se liší nutná, postačující a nutná i postačující podmínka mezi výroky $E$ a $F$?
## back
- $E \Rightarrow F$: $E$ je **postačující podmínka** pro $F$, $F$ je **nutná podmínka** pro $E$.
- $E \Leftrightarrow F$: $E$ je **nutná i postačující podmínka** pro $F$ a naopak.

# SP-7-11
## front
Co znamená, že formule $E$ a $F$ jsou logicky ekvivalentní?
## back
- $E$ a $F$ jsou logicky ekvivalentní, právě když pro každé ohodnocení $v$ platí $v(E) = v(F)$.
- Značíme $E \modeleq F$.

# SP-7-12
## front
Kdy je formule $F$ logickým důsledkem formule $E$?
## back
- $F$ je logickým důsledkem $E$, právě když pro každé ohodnocení $v$, pro které $v(E) = 1$, je zároveň $v(F) = 1$.
- Značíme $E \models F$.

# SP-7-13
## front
Vysvětli zákon vyloučení sporu, zákon vyloučení třetího a zákon dvojí negace pomocí formule.
## back
- **Zákon vyloučení sporu:** $A \land \neg A \modeleq \bot$
- **Zákon vyloučení třetího:** $A \lor \neg A \modeleq \top$
- **Zákon dvojí negace:** $\neg\neg A \Leftrightarrow A \modeleq \top$

# SP-7-14
## front
Jak zní obměněná implikace a jaký je její symbolický zápis?
## back
- Obměněná implikace: $(E \Rightarrow F) \modeleq (\neg F \Rightarrow \neg E)$

# SP-7-15
## front
Kdy je množina logických spojek universální systém?
## back
- Množina logických spojek tvoří **universální systém** právě tehdy, když ke každé formuli existuje logicky ekvivalentní formule, která obsahuje pouze tyto spojky.

# SP-7-16
## front
Uveď příklady dvouprvkových universálních systémů logických spojek.
## back
- $\{\neg, \lor\}$
- $\{\neg, \land\}$
- $\{\neg, \Rightarrow\}$

# SP-7-17
## front
Existují i jednoprvkové universální systémy logických spojek? Pokud ano, uveď je.
## back
- Ano, existují:
  - Pouze NAND ($\uparrow$)
  - Pouze NOR ($\downarrow$)

# SP-7-18
## front
Co je literál ve výrokové logice?
## back
- Literál je:
  - Prvotní formule, nebo
  - Negace prvotní formule.

# SP-7-19
## front
Co je implikant a klausule ve výrokové logice?
## back
- **Implikant:** Literál nebo konjunkce několika literálů.
- **Klausule:** Literál nebo disjunkce několika literálů.

# SP-7-20
## front
Kdy je výroková formule v disjunktivním normálním tvaru (DNT)?
## back
- Jsou-li splněny:
  - Je implikantem, nebo
  - Je disjunkcí několika implikantů (tj. konjunkcí literálů nebo jejich disjunkcí).

# SP-7-21
## front
Kdy je výroková formule v konjunktivním normálním tvaru (KNT)?
## back
- Jsou-li splněny:
  - Je klausulí, nebo
  - Je konjunkcí několika klausulí (tj. disjunkcí literálů nebo jejich konjunkcí).

# SP-7-22
## front
Lze každou výrokovou formuli převést na DNT nebo KNT?
## back
- Ano:
  - Každá výroková formule lze převést do logicky ekvivalentního DNT i KNT.

# SP-7-23
## front
Co je minterm a maxterm ve výrokové logice?
## back
- **Minterm:** Implikant formule $F$, který obsahuje všechny prvotní formule vyskytující se v $F$, každou právě jednou.
- **Maxterm:** Klausule formule $F$, která obsahuje všechny prvotní formule vyskytující se v $F$, každou právě jednou.

# SP-7-24
## front
Definuj úplný disjunktivní a úplný konjunktivní normální tvar (ÚDNT, ÚKNT).
## back
- **Úplný disjunktivní normální tvar (ÚDNT):**
  - Formule je mintermem, nebo
  - Disjunkcí různých (logicky neekvivalentních) mintermů.
- **Úplný konjunktivní normální tvar (ÚKNT):**
  - Formule je maxtermem, nebo
  - Konjunkcí různých (logicky neekvivalentních) maxtermů.

# SP-7-25
## front
Lze každou výrokovou formuli převést do logicky ekvivalentního ÚKNT a ÚDNT?
## back
- Ano:
  - Každou výrokovou formuli lze převést do logicky ekvivalentního ÚKNT i ÚDNT.

# SP-7-26
## front
Doplň větu: Výroková formule je ______, pokud existuje alespoň jedno ohodnocení, při kterém je pravdivá.
## back
- Výroková formule je **splnitelná**, pokud existuje alespoň jedno ohodnocení, při kterém je pravdivá.
