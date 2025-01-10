import { Box } from '@chakra-ui/react';
import Header from './Header';
import { Outlet } from 'react-router';

/**
 * Layout principale dell'applicazione.
 * Include l'header e un contenitore per il contenuto principale.
 *
 * @returns Un layout che include un header fisso e un contenitore principale per i contenuti.
 */

const Layout = () => (
  <Box minHeight="100vh" display="flex" flexDirection="column">
    <Header />
    <Box p={5} mt="60px" flex="1">
      <Outlet /> 
    </Box>
  </Box>
);

export default Layout;
