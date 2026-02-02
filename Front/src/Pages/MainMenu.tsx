import HeaderMock from "../components/header/HeaderMock.tsx";
import FooterMock from "../components/footer/FooterMock.tsx";
import Noticias from "../components/noticias/Noticias.tsx";
import { Box, Flex, Text, Button, Image, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function MainMenu() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box position="sticky" top="0" zIndex="1000" w="100%">
        <HeaderMock />
      </Box>

      {/* Div do Menu Principal */}
      <Box flex="1" w="100%">
        {/*Conteúdo Principal + Notícias */}
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          w="100%"
          h="100%"
          mt={{ md: "50px" }}
          gap={{ base: "50px" }}
        >
          {/* Conteúdo Principal */}
          <Flex
            flex="0.7"
            mt={{ base: "25px" }}
            ml={{ md: "100px" }}
            direction={{ base: "column", md: "column" }}
            gap={{ base: "20px", md: "50px" }}
          >
            <Flex
              direction={{ base: "row", md: "row" }}
              gap={{ base: "", md: "25px" }}
              justifyContent={{ base: "space-between" }}
              ml={{ base: "50px" }}
              mr={{ base: "50px" }}
            >
              <Image
                ml={{ md: "" }}
                src="src/assets/LabSecLogo.png"
                alt=""
                w={{ base: "200px", md: "300px" }}
                flex={{ md: "0.3" }}
              />
              <Flex
                direction="column"
                flex={{ md: "0.7" }}
                alignSelf={{ base: "center", md: "end" }}
                justifyContent={{ base: "center", md: "start" }}
                alignItems={{ base: "center", md: "start" }}
                p={{ md: "25px" }}
              >
                <Flex
                  direction={{ base: "column", md: "column" }}
                  align={{ base: "center", md: "start" }}
                >
                  <Text color="primary" fontSize="4xl">
                    Bem Vindo ao HUB do
                  </Text>

                  {/* O HStack mantém as letras coloridas na mesma linha */}
                  <HStack lineHeight="1">
                    <Text color="secondary" fontSize="6xl" fontWeight="black">
                      L
                    </Text>
                    <Text color="primary" fontSize="6xl" fontWeight="black">
                      A
                    </Text>
                    <Text color="secondary" fontSize="6xl" fontWeight="black">
                      B
                    </Text>
                    <Text color="primary" fontSize="6xl" fontWeight="black">
                      S
                    </Text>
                    <Text color="secondary" fontSize="6xl" fontWeight="black">
                      E
                    </Text>
                    <Text color="primary" fontSize="6xl" fontWeight="black">
                      C
                    </Text>
                  </HStack>
                </Flex>
                <Text fontWeight="bold">
                  LABORATÓRIO DE SEGURANÇA CIBERNÉTICA
                </Text>
                <Text mt="30px" mb="30px" fontSize="3xl">
                  Hack, Aprenda, Proteja.
                </Text>
                <Flex direction="row" gap="40px">
                  <Button
                    as={RouterLink}
                    // @ts-ignore
                    to="/courses"
                  >
                    Veja os Cursos
                  </Button>
                  <Button
                    variant={"secondary" as any}
                    as={RouterLink}
                    // @ts-ignore
                    to="/maquinas"
                  >
                    Invada Máquinas
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            <Text
              mt={{ base: "25px", md: "50px" }}
              ml={{ base: "20px", md: "150px" }}
              mr={{ base: "20px", md: "150px" }}
              fontSize="xl"
              justifyContent={{ base: "center" }}
              alignContent={{ base: "center" }}
              textAlign={{ base: "center" }}
            >
              Nossa Missão é oferecer uma plataforma gratuita para estudantes
              Brasileiros consumirem conteudo hacker e treinamento em máquinas
              virtuais para que possam trilhar uma carreira na área de segurança
              cibernética
            </Text>
          </Flex>

          {/* Notícias */}
          <Noticias />
        </Box>
      </Box>

      <FooterMock />
    </Box>
  );
}

export default MainMenu;
