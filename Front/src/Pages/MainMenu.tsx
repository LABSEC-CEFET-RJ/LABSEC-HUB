import HeaderMock from "../components/header/HeaderMock.tsx";
import FooterMock from "../components/footer/FooterMock.tsx";
import Noticias from "../components/noticias/Noticias.tsx";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function MainMenu() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box position="sticky" top="0" zIndex="1000" w="100%">
        <HeaderMock />
      </Box>

      {/* Área Principal */}
      <Box flex="1" w="100%" bg="gray.50">
        <Flex
          maxW="1600px"
          mx="auto"
          p={{ base: 4, md: 8, xl: 12 }}
          direction={{ base: "column", xl: "row" }}
          gap={{ base: 10, xl: 10 }}
          alignItems={{ xl: "start" }}
          mt={{ md: "50px" }}
          border="solid 1px black"
        >
          <Flex
            flex="1"
            direction="column"
            gap={8}
            ml={{ sm: "0px", xl: "50px" }}
            border="solid 1px red"
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              alignItems={{ base: "center", md: "flex-start" }}
              gap={8}
            >
              <Image
                src="src/assets/LabSecLogo.png"
                alt="Logo LabSec"
                w={{ base: "180px", md: "220px", lg: "280px" }}
                objectFit="contain"
              />

              <VStack
                alignItems={{ base: "center", md: "flex-start" }}
                textAlign={{ base: "center", md: "left" }}
              >
                <Text
                  color="primary"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="medium"
                  fontFamily="monospace"
                >
                  Bem Vindo ao HUB do
                </Text>

                {/* LABSEC Colorido */}
                <HStack>
                  {["L", "A", "B", "S", "E", "C"].map((letter, index) => (
                    <Text
                      key={letter}
                      color={index % 2 === 0 ? "secondary" : "primary"}
                      fontSize={{ base: "5xl", sm: "6xl", lg: "7xl" }}
                      fontWeight="black"
                      lineHeight="1"
                    >
                      {letter}
                    </Text>
                  ))}
                </HStack>

                <Text
                  fontWeight="bold"
                  fontSize={{ base: "sm", md: "md" }}
                  color="primary"
                  letterSpacing="wider"
                >
                  LABORATÓRIO DE SEGURANÇA CIBERNÉTICA
                </Text>

                {/* Slogan e Botões */}
                <Box mt={6}>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="medium"
                    borderBottom="3px solid"
                    borderColor="primary"
                    display="inline-block"
                    mb={6}
                  >
                    Hack, Aprenda, Proteja.
                  </Text>

                  <Flex
                    gap={4}
                    direction={{ base: "column", sm: "row" }}
                    w="100%"
                  >
                    <Button
                      as={RouterLink}
                      // @ts-ignore
                      to="/courses"
                      size="lg"
                      bg="primary"
                      _hover={{ bg: "primary.600" }}
                      color="white"
                    >
                      Veja os Cursos
                    </Button>

                    <Button
                      as={RouterLink}
                      // @ts-ignore
                      to="/maquinas"
                      variant={"secondary" as any}
                      size="lg"
                    >
                      Invada Máquinas
                    </Button>
                  </Flex>
                </Box>
              </VStack>
            </Flex>

            <Text
              maxW="900px"
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              lineHeight="1.8"
              textAlign={{ base: "center", md: "center" }}
              mt={4}
              mx="180px"
            >
              Nossa Missão é oferecer uma plataforma gratuita para estudantes
              Brasileiros consumirem conteúdo hacker e treinamento em máquinas
              virtuais para que possam trilhar uma carreira na área de segurança
              cibernética.
            </Text>
          </Flex>

          {/* === NOTÍCIAS === */}
          <Box w={{ base: "100%", xl: "380px" }} minW={{ xl: "350px" }}>
            <Noticias />
          </Box>
        </Flex>
      </Box>

      <FooterMock />
    </Box>
  );
}

export default MainMenu;
