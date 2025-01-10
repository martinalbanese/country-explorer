import { CountryType } from "@/types/types";
import { BASE_URL } from "../config"

/**
 * Funzione per ottenere la lista completa dei paesi dall'API.
 * La funzione esegue una fetch all'endpoint dell'API per recuperare tutte le informazioni sui paesi.
 *
 * @returns Una promessa che risolve con una lista di oggetti di tipo `CountryType`, ognuno rappresentante un paese con informazioni come nome, bandiera, regione e popolazione.
 * @throws Un errore se la fetch non va a buon fine o i dati sono malformati.
 */

export const getAllCountries = async (): Promise<CountryType[]> => {
    try {
        const response = await fetch(`${BASE_URL}/all`);

        if (!response.ok) {
            throw new Error('Errore nella fetch dei dati in getAllCountries');
        }
        const data = await response.json();

        // Mapping dei dati per adattarli al tipo CountryType
        const countries: CountryType[] = data.map((country: any) => ({
            name: {
                common: country.name?.common ?? '',
            },
            flags: {
                svg: country.flags?.svg ?? '',
            },
            region: country.region ?? '',
            population: country.population ?? 0,
        }));

        return countries;
    } catch (err) {
        throw new Error(`Errore nella fetch dei dati in getAllCountries + ${err}`);
    }
}