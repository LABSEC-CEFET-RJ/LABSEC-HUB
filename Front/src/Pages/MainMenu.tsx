import HeaderMock from "../components/header/HeaderMock.tsx";
import FooterMock from "../components/footer/FooterMock.tsx";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";

function MainMenu() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box position="sticky" top="0" zIndex="1000" w="100%">
        <HeaderMock />
      </Box>

      {/* Conteúdo do Menu Principal */}
      <Box flex="1" bg="white" w="100%">
        {/* Imagem + Texto */}
        <Flex>
          <Image src="src/assets/LabSecLogo.png" alt="" w="200px" />
          <Text></Text>
        </Flex>
      </Box>

      <FooterMock />
    </Box>
  );
}

export default MainMenu;
