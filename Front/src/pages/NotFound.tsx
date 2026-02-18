import {
  Flex,
  Heading,
  Image,
  HStack,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import FooterMock from "../components/footer/FooterMock.tsx";

function NotFound() {
  return (
    <>
      <Flex direction={"column"} h={"90vh"}>
        {/* Header da Tela de Not Found */}
        <Flex h={"55px"} bg="white" justifyContent={"center"}>
          <Image
            src="src/assets/Rectangle.svg"
            alt="Logo LabSec"
            objectFit={{ sm: "scale-down", xl: "contain" }}
          />
          <HStack>
            <Text
              color="secondary"
              fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              L
            </Text>
            <Text
              color="primary"
              fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              A
            </Text>
            <Text
              color="primary"
              fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              B
            </Text>
            <Text
              color="secondary"
              fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              S
            </Text>
            <Text
              color="primary"
              fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              E
            </Text>
            <Text
              color="primary"
              fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              C
            </Text>
          </HStack>
        </Flex>

        {/* Conteúdo da tela */}
        <Flex direction={"column"} h={"auto"} grow={"1"} align={"center"}>
          <Text
            mt="140px"
            color={"gray.300"}
            fontSize={{ base: "80px", sm: "100px", md: "140px", xl: "180px" }}
            fontWeight={"bold"}
            lineHeight="0.8"
          >
            404
          </Text>
          <Text
            fontSize={{ base: "xl", sm: "2xl", md: "3xl", xl: "4xl" }}
            fontWeight={"bold"}
            textDecoration={"underline"}
            color="primary"
          >
            Página não encontrada.
          </Text>
          <Button
            as={RouterLink}
            // @ts-ignore
            to="/"
            variant={"secondary" as any}
            size="xl"
            mt={"40px"}
          >
            Home
          </Button>
        </Flex>
      </Flex>

      <FooterMock />
    </>
  );
}

export default NotFound;
