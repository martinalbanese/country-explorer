import { CountryDetailsType } from "@/types/types";
import { useEffect, useState } from "react";
import { getDetailsCountries } from "../api/getDetailsCountry";

/**
 * Custom hook per recuperare i dettagli di un paese.
 * Utilizza la funzione `getDetailsCountries` per effettuare la chiamata API e gestisce
 * lo stato di caricamento, errore e i dati restituiti.
 * 
 * @param name - Il nome del paese di cui si vogliono ottenere i dettagli.
 * @returns Un oggetto contenente i dettagli del paese, lo stato di caricamento e eventuali errori.
 */

const useDetailsCountries = (name: string) => {
    const [countryDetails, setCountryDetails] = useState<CountryDetailsType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountryDetails = async () => {
            try {
                const data = await getDetailsCountries(name);
                setCountryDetails(data);
                setLoading(false);
            } catch (err) {
                setError(`Errore durante il recupero dei dettagli del paese in useDetailsCountries: ${err}`);
                setLoading(false);
            }
        }

        fetchCountryDetails();
        console.log(name);
    }, [name]);

    return { countryDetails, loading, error };

}

export default useDetailsCountries;