import { Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router';

/**
 * Componente per l'header di navigazione dell'applicazione.
 * Include il nome del sito che è un link alla homepage.
 *
 * @returns Un header fisso con un titolo che linka alla homepage.
 */

const Header = () => {

    return (
        <Box className="header">
            <Flex justify="center" align="center" w="100%">
                <Link to="/">
                    <Heading className="header-title">
                        Country Explorer
                    </Heading>
                </Link>
            </Flex>
        </Box>
    );
};

export default Header;
