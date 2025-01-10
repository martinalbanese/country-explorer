import { CountryType } from "@/types/types";
import { useEffect, useState } from "react";
import { getAllCountries } from "../api/getAllCountries";

/**
 * Custom hook per ottenere la lista dei paesi.
 * Questo hook si occupa di fare una richiesta all'API utilizzando la funzione `getAllCountries`
 * e gestisce lo stato di caricamento, errori e i dati ottenuti.
 *
 * @returns Un oggetto con:
 *   - `countries`: lista di paesi di tipo `CountryType`
 *   - `loading`: stato che indica se i dati sono ancora in fase di caricamento
 *   - `error`: eventuale errore che si è verificato durante la fetch dei dati
 */

const useAllCountries = () => {
    const [countries, setCountries] = useState<CountryType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const data = await getAllCountries();
                setCountries(data);
                setLoading(false);
            } catch (err) {
                setError(`Errore durante il recupero dei dati in useAllCountries: ${err}`);
                setLoading(false);
            }
        }

        fetchCountries();
    }, []);

    return { countries, loading, error };
}

export default useAllCountries;