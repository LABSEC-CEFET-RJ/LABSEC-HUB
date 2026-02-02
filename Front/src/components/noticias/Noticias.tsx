import { Box, Flex, Text } from "@chakra-ui/react";

function Noticias() {
  return (
    <Flex
      flex={{ md: "0.3" }}
      mr={{ md: "100px" }}
      m={{ base: "20px" }}
      direction={{ base: "column", md: "column" }}
      bg="white"
      border="solid 1px black"
      borderColor="gray.400"
      rounded="md"
      shadow="4px 4px 2px 1px rgb(218, 218, 218)"
    >
      <Text borderBottom="solid 2px black" m="20px">
        Últimas Notícias
      </Text>
      <Flex direction="column" gap="30px">
        <Box pl="25px">
          <Text fontWeight="bold" pl="10px" pr="5px" pb="5px">
            Títulos
          </Text>
          <Text color="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Box>
        <Box pl="25px">
          <Text fontWeight="bold" pl="10px" pr="5px" pb="5px">
            Títulos
          </Text>
          <Text color="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Box>
        <Box pl="25px">
          <Text fontWeight="bold" pl="10px" pr="5px" pb="5px">
            Títulos
          </Text>
          <Text color="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Box>
        <Box pl="25px">
          <Text fontWeight="bold" pl="10px" pr="5px" pb="5px">
            Títulos
          </Text>
          <Text color="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Box>
        <Box pl="25px">
          <Text fontWeight="bold" pl="10px" pr="5px" pb="5px">
            Títulos
          </Text>
          <Text color="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Noticias;
