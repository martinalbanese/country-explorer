import useDetailsCountries from "@/services/hooks/useDetailsCountry";
import { Box, Heading, Image, Spinner, Text, Grid, VStack } from "@chakra-ui/react";
import { useParams } from "react-router";

const CountryDetails = () => {
    const { name } = useParams<{ name: string }>();
    const { countryDetails, loading, error } = useDetailsCountries(name!);

    if (loading) {
        return (
            <Box textAlign="center" p={5}>
                <Spinner size="xl" />
                <Text mt={3}>Caricamento in corso...</Text>
            </Box>
        );
    }

    if (error) {
        return (
            <Box textAlign={"center"} color={"red.500"} p={5}>
                <Text>Si è verificato un errore durante il caricamento dei dettagli in CountryDetails: {error}</Text>
            </Box>
        );
    }

    if (!name) {
        return (
            <Box textAlign={"center"} color={"purple.500"} p={5}>
                <Text>Nome del paese non disponibile</Text>
            </Box>
        );
    }

    if (!countryDetails) {
        return (
            <Box textAlign={"center"} color={"purple.500"} p={5}>
                <Text>Dettagli non disponibili</Text>
            </Box>
        );
    }

    return (
        <Box p={5}>
            <Grid
                templateColumns={{ base: "1fr", sm: "1fr", md: "1fr", lg: "1fr 1fr" }}
                gap={6}
            >
                {/* Prima colonna: Bandiera e nome del paese */}
                <Box textAlign="center">
                    <Image
                        src={countryDetails.flags.svg}
                        alt={`Bandiera di ${countryDetails.name.common}`}
                        maxH={96}
                        mb={5}
                        mx="auto"
                    />
                    <Heading size="2xl" mb={3}>{countryDetails.name.common}</Heading>
                </Box>
                <Grid
                    templateColumns={{ base: "1fr", sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
                    gap={6}
                >
                    {/* Seconda colonna: Dettagli principali */}
                    <VStack align="start" gap={3}>
                        <Text fontSize="xl" fontWeight="bold">Region:</Text>
                        <Text fontSize="lg">{countryDetails.region}</Text>

                        <Text fontSize="xl" fontWeight="bold">Population:</Text>
                        <Text fontSize="lg">{countryDetails.population}</Text>

                        <Text fontSize="xl" fontWeight="bold">Capital:</Text>
                        <Text fontSize="lg">{countryDetails.capital[0]}</Text>

                        <Text fontSize="xl" fontWeight="bold">Borders:</Text>
                        <Text fontSize="lg" textAlign={"start"}>{countryDetails.borders.join(", ")}</Text>
                    </VStack>

                    {/* Terza colonna: Altri dettagli */}
                    <VStack align="start" gap={3}>
                        <Text fontSize="xl" fontWeight="bold">Languages:</Text>
                        <Text fontSize="lg">{Object.values(countryDetails.languages).join(", ")}</Text>

                        <Text fontSize="xl" fontWeight="bold">Currencies:</Text>
                        <Text fontSize="lg" textAlign={"start"}>
                            {Object.values(countryDetails.currencies).map(currency => currency.name).join(", ")}
                        </Text>

                        <Text fontSize="xl" fontWeight="bold">Timezones:</Text>
                        <Text fontSize="lg" textAlign={"start"}>{countryDetails.timezones.join(", ")}</Text>

                        <Text fontSize="xl" fontWeight="bold" textAlign={"start"}>International Code:</Text>
                        <Text fontSize="lg" textAlign={"start"}>{countryDetails.idd.root} {countryDetails.idd.suffixes.join(", ")}</Text>
                    </VStack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CountryDetails;
