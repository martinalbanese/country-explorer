import CountryList from "@/components/CountryList";
import { Box, Heading } from "@chakra-ui/react";

/**
 * Pagina principale dell'applicazione che visualizza l'elenco dei paesi.
 * Include il componente `CountryList` che recupera e visualizza i paesi.
 *
 * @returns Una vista con il titolo "Elenco dei Paesi" e il componente `CountryList` sotto di esso.
 */

const Home = () => {
    return (
        <Box>
            <Heading mb={5}>Elenco dei Paesi</Heading>
            <CountryList />
        </Box>
    );
}

export default Home;