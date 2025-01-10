import { CountryType } from "@/types/types";
import { Box, Image, VStack, Text, Heading } from "@chakra-ui/react";

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
        <Box
            borderWidth={"1px"}
            borderRadius={"lg"}
            overflow={"hidden"}
            boxShadow={"lg"}
            maxW={"sm"}
            bg={"white"}>
            <Image 
                src={country.flags.svg} 
                alt={country.name.common}
                maxH={96} />
            <VStack align={"start"} p={4} color={"gray.700"}> 
                <Heading size={"xl"}>{country.name.common}</Heading>
                <Text>{country.region}</Text>
                <Text>{country.population}</Text>
            </VStack>
        </Box>
    )
}

export default CountryCard;