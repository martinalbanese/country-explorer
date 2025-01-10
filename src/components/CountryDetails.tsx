import useDetailsCountries from "@/services/hooks/useDetailsCountry";
import { Box, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router";

/**
 * Componente che visualizza i dettagli di un singolo paese.
 * Utilizza il nome del paese preso dai parametri della URL per ottenere i dettagli dal servizio.
 * 
 * @returns Un box contenente le informazioni del paese o un messaggio di errore/caricamento
 */

const CountryDetails = () => {
    const { name } = useParams<{ name: string }>();
    const { countryDetails, loading, error } = useDetailsCountries(name!);

    if (loading) {
        return (
            <Box>
                <Spinner size="xl" />
                <Text>Caricamento in corso...</Text>
            </Box>
        )
    }

    if (error) {
        return (
            <Box textAlign={"center"} color={"red.500"}>
            <Text>Si è verificato un errore durante il caricamento dei dettagli in CountryDetails: {error}</Text>
        </Box>
        )
    }

    if (!countryDetails) {
        return (
            <Box textAlign={"center"} color={"purple.500"}>
                <Text>Dettagli non disponibili</Text>
            </Box>
        )
    }

    return (
        <Box p={5}>
            <Image 
                src={countryDetails.flags.svg} 
                alt={`Bandiera di ${countryDetails.name.common}`} 
                maxH={96}
                mb={5}
            />
            
            <Heading size={"4xl"} mb={5}>{countryDetails.name.common}</Heading>
            
            <Text mb={2}><strong>Region:</strong> {countryDetails.region}</Text>
            <Text mb={2}><strong>Population:</strong> {countryDetails.population}</Text>
            <Text mb={2}><strong>Capital:</strong> {countryDetails.capital[0]}</Text>
            <Text mb={2}><strong>Languages:</strong> {Object.values(countryDetails.languages).join(", ")}</Text>
            <Text mb={2}><strong>Currencies:</strong> {Object.values(countryDetails.currencies).map((currency) => currency.name).join(", ")}</Text>
            <Text mb={2}><strong>Borders:</strong> {countryDetails.borders.join(", ")}</Text>
            <Text mb={2}><strong>Timezones:</strong> {countryDetails.timezones.join(", ")}</Text>
            <Text mb={2}><strong>International Code:</strong> {countryDetails.idd.root} {countryDetails.idd.suffixes.join(", ")}</Text>
        </Box>
    )

}

export default CountryDetails;