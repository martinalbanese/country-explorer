import { Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router';

const Header = () => {

    return (
        <Box bg="teal.500" color="white" w="100%" p={4} height="60px" position="fixed" top={0} left={0} right={0}>
            <Flex justify="center" align="center" w="100%">
                <Link to="/">
                    <Heading size="lg" fontSize="xl" _hover={{ textDecoration: "underline" }} cursor={"pointer"} color={"white"}>
                        Country Explorer
                    </Heading>
                </Link>
            </Flex>
        </Box>
    );
};

export default Header;
