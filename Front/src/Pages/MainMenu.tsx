import HeaderMock from "../components/header/HeaderMock.tsx";
import FooterMock from "../components/footer/FooterMock.tsx";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  HStack,
} from "@chakra-ui/react";

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
          flexDirection="row"
          justifyContent="space-between"
          w="100%"
          mt="50px"
        >
          {/* Conteúdo Principal */}
          <Flex flex="0.7" ml="100px" direction="column" gap="50px">
            <Flex direction="row" gap="25px">
              <Image
                ml="50px"
                src="src/assets/LabSecLogo.png"
                alt=""
                w="300px"
              />
              <Flex
                direction="column"
                flex="1"
                justifyContent="start"
                alignItems="start"
                mr="50px"
                p="25px"
              >
                <Flex direction="column" align="start">
                  <Text color="primary" fontSize="4xl">
                    Bem Vindo ao HUB do
                  </Text>

                  {/* O HStack mantém as letras coloridas na mesma linha */}
                  <HStack lineHeight="1">
                    <Text color="secondary" fontSize="7xl" fontWeight="black">
                      L
                    </Text>
                    <Text color="primary" fontSize="7xl" fontWeight="black">
                      A
                    </Text>
                    <Text color="secondary" fontSize="7xl" fontWeight="black">
                      B
                    </Text>
                    <Text color="primary" fontSize="7xl" fontWeight="black">
                      S
                    </Text>
                    <Text color="secondary" fontSize="7xl" fontWeight="black">
                      E
                    </Text>
                    <Text color="primary" fontSize="7xl" fontWeight="black">
                      C
                    </Text>
                  </HStack>
                </Flex>
                <Text fontWeight="bold">
                  LABORATÓRIO DE SEGURANÇA CIBERNÉTICA
                </Text>
                <Text mt="30px" mb="30px" fontSize="4xl">
                  Hack, Aprenda, Proteja.
                </Text>
                <Flex direction="row" gap="40px">
                  <Button>Veja os Cursos</Button>
                  <Button>Invada Máquinas</Button>
                </Flex>
              </Flex>
            </Flex>
            <Text
              mt="50px"
              ml="80px"
              mr="80px"
              fontSize="2xl"
              textAlign="center"
            >
              Nossa Missão é oferecer uma plataforma gratuita para estudantes
              Brasileiros consumirem conteudo hacker e treinamento em máquinas
              virtuais para que possam trilhar uma carreira na área de segurança
              cibernética
            </Text>
          </Flex>

          {/* Notícias */}
          <Flex flex="0.2" mr="100px" direction="column" bg="white">
            <Text borderBottom="solid 2px black" m="25px">
              Últimas Notícias
            </Text>
            <Flex direction="column" gap="30px">
              <Box m="25px">
                <Text fontWeight="bold" p="10px">
                  Título
                </Text>
                <Text color="gray" p="10px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <FooterMock />
    </Box>
  );
}

export default MainMenu;
