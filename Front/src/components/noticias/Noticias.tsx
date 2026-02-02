import { Box, Flex, Text, VStack } from "@chakra-ui/react";

function Noticias() {
  const listaNoticias = [
    {
      id: 1,
      titulo: "Novo Laboratório",
      resumo: "Inauguração do espaço físico do LabSec no campus Maracanã.",
    },
    {
      id: 2,
      titulo: "Campeonato CTF",
      resumo: "Estudantes conquistam 2º lugar no HackaFlag nacional.",
    },
    {
      id: 3,
      titulo: "Workshop de Kali",
      resumo: "Aprenda as ferramentas básicas para pentest neste sábado.",
    },
    {
      id: 4,
      titulo: "Vaga de Estágio",
      resumo: "Parceiro do LabSec abre vagas para Blue Team.",
    },
    {
      id: 5,
      titulo: "Atualização da Plataforma",
      resumo: "Novas máquinas virtuais adicionadas ao sistema de treino.",
    },
    {
      id: 6,
      titulo: "Palestra com Ex-Aluno",
      resumo: "Como iniciar carreira em Cybersegurança no exterior.",
    },
    {
      id: 7,
      titulo: "Manutenção Programada",
      resumo: "O servidor ficará offline neste domingo para melhorias.",
    },
  ];
  return (
    <Flex
      direction="column"
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      rounded="lg"
      shadow="md"
      h={{ base: "auto", xl: "400px" }}
      maxH={{ base: "400px", xl: "600px" }}
      overflow="hidden"
      w={{ base: "100%", xl: "40px" }}
      minW={{ xl: "350px" }}
      mr={{ xl: "50px" }}
    >
      <Box p={5} borderBottom="2px solid" borderColor="gray.200" bg="gray.50">
        <Text fontWeight="bold" fontSize="xl" color="black">
          Últimas Notícias
        </Text>
      </Box>

      <VStack
        align="stretch"
        overflowY="auto"
        flex="1"
        css={{
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#CBD5E0",
            borderRadius: "24px",
          },
        }}
      >
        {listaNoticias.map((item, index) => (
          <Box
            key={item.id}
            p={5}
            borderBottom="1px solid"
            borderColor="gray.200"
            _hover={{ bg: "gray.50", cursor: "pointer" }}
            transition="0.2s"
          >
            <Text color="black" mb={1} fontSize="md">
              {item.titulo}
            </Text>
            <Text color="gray.600" fontSize="sm" lineHeight="1.6">
              {item.resumo}
            </Text>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
}

export default Noticias;
