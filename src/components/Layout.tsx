import { Box } from '@chakra-ui/react';
import Header from './Header';

/**
 * Layout principale dell'applicazione.
 * Include l'header e un contenitore per il contenuto principale.
 *
 * @param children - I componenti da renderizzare all'interno del layout.
 * @returns Un layout che include un header fisso e un contenitore principale per i contenuti.
 */

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Box minHeight="100vh" display="flex" flexDirection="column">
    <Header />
    <Box p={5} mt="60px" flex="1">
      {children}
    </Box>
  </Box>
);

export default Layout;
