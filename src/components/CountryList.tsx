import useAllCountries from "@/services/hooks/useAllCountries";
import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import CountryCard from "./CountryCard";

/**
 * Componente per visualizzare una lista di paesi.
 * Utilizza il custom hook `useAllCountries` per recuperare i dati dei paesi dall'API.
 *
 * @returns Una griglia di cards, ciascuna rappresentante un paese, con una gestione di stato per il caricamento e gli errori.
 */

const CountryList = () => {
    const { countries, loading, error } = useAllCountries();

    if (loading) {
        return (
            <Box textAlign={"center"}>
                <Spinner size={"xl"} />
                <Text>Caricamento paesi in corso...</Text>                
            </Box>
        )
    }

    if (error) {
        return (
            <Box textAlign={"center"} color={"red.500"}>
                <Text>Si è verificato un errore durante il caricamento dei dati: {error}</Text>
            </Box>
        )
    }

    return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} gap={6}>
            {countries.map((country) => (
                <CountryCard key={country.name.common} country={country} />
            ))}
        </SimpleGrid>
    )
}

export default CountryList;