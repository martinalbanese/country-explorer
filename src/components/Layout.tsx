import { Box } from '@chakra-ui/react';
import Header from './Header';

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
