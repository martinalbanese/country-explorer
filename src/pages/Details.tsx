import { Box } from "@chakra-ui/react";
import CountryDetails from "@/components/CountryDetails"; // Importiamo il componente

/**
 * Pagina per visualizzare i dettagli di un singolo paese.
 * Questa pagina carica e renderizza il componente `CountryDetails`, che si occupa di mostrare le informazioni specifiche del paese selezionato.
 * 
 * @returns Un componente Box che contiene il componente `CountryDetails` con i dettagli di un paese.
 */
const Details = () => {
    return (
        <Box p={5}>
            <CountryDetails /> {/* Renderizziamo il componente CountryDetails */}
        </Box>
    );
};

export default Details;
