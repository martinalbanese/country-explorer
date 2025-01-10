# Country Explorer

Country Explorer è un'applicazione web sviluppata con React e Vite. 
Consente di esplorare le informazioni sui paesi del mondo utilizzando dati, precisi e aggiornati, forniti dall'API Rest Countries, disponibile qui: [REST Countries API](https://restcountries.com/). 

L'applicazione include una griglia di paesi e una pagina di dettagli per ciascun paese.


## Istruzioni per l'installazione e l'esecuzione

1. **Clona il repository**
```bash
git clone https://github.com/martinalbanese/country-explorer.git
```

2. **Crea un file .env**
Nella root del progetto, crea un file .env e aggiungi la seguente variabile d'ambiente:
env
Copia codice
```
VITE_BASE_URL=https://restcountries.com/v3.1
```
Nota: Assicurati che il valore di VITE_BASE_URL corrisponda all'endpoint che vuoi utilizzare per la fetch.

3. **Installa le dipendenze**
Assicurati di avere [Node.js](https://nodejs.org/en) installato. Poi esegui:
```bash
npm install
```

4. **Avvia l'applicazione**
```bash
npm run dev
```

5. **Accedi all'applicazione**
L'applicazione sarà disponibile su: [http://localhost:5173](http://localhost:5173) (o un altro indirizzo mostrato nel terminale).

## Funzionalità implementate
1. **Homepage con Griglia di Paesi**
    -  Mostra una griglia di card per ciascun paese.
    - Le card includono la bandiera, il nome del paese, la regione e la popolazione.
    - Supporta il layout responsive, adattandosi alle diverse dimensioni dello schermo.

2. **Dettagli Paese**
    - Cliccando su una carta, l'utente può accedere a una pagina di dettaglio per il paese selezionato.
    - La pagina mostra informazioni come capitale, lingue, valute, confini e fuso orario.

3. **Design Responsive**
    - L'interfaccia si adatta perfettamente sia a schermi grandi che a dispositivi mobili.

4. **Gestione dello Stato di Caricamento e degli Errori**
    - Durante il recupero dei dati dall'API, un indicatore di caricamento informa l'utente.
    - Eventuali errori vengono segnalati con messaggi chiari e leggibili.

## Tecnologie Utilizzate
- ***React***: Libreria principale per lo sviluppo dell'interfaccia.
- ***Vite***: Tool di build veloce e leggero per lo sviluppo React.
- ***Chakra UI***: Libreria di componenti per uno stile moderno e responsive.
- ***React Router***: Per la gestione delle rotte e la navigazione tra le pagine.

