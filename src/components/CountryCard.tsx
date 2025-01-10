import { CountryType } from "@/types/types";
import { Box, Image, VStack, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router";
import '../App.css'

/**
* Componente per visualizzare i dettagli di un paese.
*
* @param country - Oggetto che contiene le informazioni di un paese come nome, bandiera, regione e popolazione.
* @returns Un componente di tipo card che mostra il nome del paese, la bandiera, la regione e la popolazione.
*/

type CountryCardProps = {
    country: CountryType;
}

const CountryCard = ({ country }: CountryCardProps) => {
    if (!country) {
        <Box textAlign={"center"} color={"red.500"} p={5}>
                <Text>Paese non trovato</Text>
            </Box>
    }

    return (
        <Link to={`/country/${country.name.common}`} style={{ textDecoration: 'none' }}>
            <Box
                className="card">
                <Image
                    className="card-img"
                    src={country.flags.svg}
                    alt={country.name.common}
                    maxH={96} />
                <VStack align={"start"} className="card-content">
                    <Heading className="card-title">{country.name.common}</Heading>
                    <Text className="card-text"><strong>Region:</strong> {country.region}</Text>
                    <Text className="card-text"><strong>Population:</strong> {country.population}</Text>
                </VStack>
            </Box>
        </Link>
    )
}

export default CountryCard;