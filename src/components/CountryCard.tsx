import { CountryType } from "@/types/types";
import { Box, Image, VStack, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router";

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
    return (
        <Link to={`/country/${country.name.common}`} style={{ textDecoration: 'none' }}>
            <Box
                borderWidth={"1px"}
                borderRadius={"lg"}
                overflow={"hidden"}
                boxShadow={"lg"}
                maxW={"sm"}
                bg={"white"}
                display="flex"  // Usato per rendere il contenuto della card flessibile
                flexDirection="column"  // Gli elementi saranno impilati verticalmente
                height="100%">
                <Image
                    src={country.flags.svg}
                    alt={country.name.common}
                    maxH={96} />
                <VStack align={"start"} p={4} color={"gray.700"}>
                    <Heading size={"xl"}>{country.name.common}</Heading>
                    <Text><strong>Region:</strong> {country.region}</Text>
                    <Text><strong>Population:</strong> {country.population}</Text>
                </VStack>
            </Box>
        </Link>
    )
}

export default CountryCard;