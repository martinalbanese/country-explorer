import { CountryDetailsType } from "@/types/types";

/**
 * Funzione asincrona per ottenere i dettagli di un paese tramite l'API di Restcountries.
 * La funzione effettua una chiamata API per recuperare i dettagli del paese e li restituisce.
 * Se la risposta è valida, restituisce i dati tipizzati come `CountryDetailsType`, altrimenti lancia un errore.
 * 
 * @param name - Il nome del paese di cui si vogliono ottenere i dettagli.
 * @returns Un oggetto di tipo `CountryDetailsType` che contiene le informazioni del paese.
 */

export const getDetailsCountries = async (name: string): Promise<CountryDetailsType> => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

        if (!response.ok) {
            throw new Error('Errore durante la fetch dei dettagli del paese');
        }
        const data = await response.json();
        console.log(data);

        // Accedere al primo elemento dell'array (data[0]) in quanto l'API restituisce un array di paesi
        const countryData = data[0];

        const countryDetails: CountryDetailsType = {
            name: {
                common: countryData.name?.common ?? '',
            },
            flags: {
                svg: countryData.flags?.svg ?? '',
            },
            region: countryData.region ?? '',
            population: countryData.population ?? 0,
            capital: countryData.capital ?? [],
            languages: countryData.languages ?? {},
            currencies: countryData.currencies ?? {},
            borders: countryData.borders ?? [],
            timezones: countryData.timezones ?? [],
            idd: {
                root: countryData.idd?.root ?? '',
                suffixes: countryData.idd?.suffixes ?? [],
            },
        };

        console.log(countryDetails);
        return countryDetails;
    } catch (err) {
        throw new Error(`Errore durante la fetch dei dettagli del paese in getDetailsCountries: ${err}`);
    }
}
