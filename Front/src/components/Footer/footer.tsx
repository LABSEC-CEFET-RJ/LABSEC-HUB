import { Box,Text, Stack, Flex, Center } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


const Footer = () => {
     const navigate = useNavigate();
      function navigation(event: { currentTarget: { getAttribute: (arg0: string) => any; }; }){

       const rota = event.currentTarget.getAttribute('data-route')
       navigate(rota)
    }
  return (
    <Flex as="footer" bg="#0d2a42"  py={5}  >
      <Flex justifyContent="center"  alignItems="flex-start" width="40%"  ml="3%" gap={5}>
        <Stack
          direction={{ base: "column", md: "row" }}
          
          
          alignItems="center"
          
        >
          <Box>
    
    <Text as="h3"  fontWeight="bold" mb={4}  color="white">
      LABSEC
    </Text>

    {/* Links empilhados verticalmente */}
    <Stack direction="column" gap={2} alignItems="flex-start" >
      <Text 
        as="p" 
        cursor="pointer" 
        data-route="/" 
        onClick={navigation}
        _hover={{ color: "red.500" }}
        color="white"
      >
        Home
      </Text>
      <Text 
       color="white"
        as="p" 
        cursor="pointer" 
        data-route="/?" 
        onClick={navigation}
        _hover={{ color: "red.500" }}
      >
        Blog
      </Text>
      <Text 
       color="white"
        as="p" 
        cursor="pointer" 
        data-route="/?" 
        onClick={navigation}
        _hover={{ color: "red.500" }}
      >
        FAQ
      </Text>
    </Stack>
  </Box>
          
        </Stack>
         <Stack
          direction={{ base: "column", md: "row" }}
          
          justifyContent="space-between" 
          alignItems="center"
          
        >
        <Box>
    
    <Text as="h3"  fontWeight="bold" mb={4}  color="white">
      CEFET
    </Text>

   
  
      <Text 
        as="p" 
        cursor="pointer" 
       
        
        _hover={{ color: "red.500" }}
        color="white"
      >
        Site
      </Text>
      
    
        </Box>
          
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          
          justifyContent="space-between" 
          alignItems="center"
          
        >
          <Box>
    
    <Text as="h3"  fontWeight="bold" mb={4}  color="white">
      Suporte
    </Text>

    {/* Links empilhados verticalmente */}
    <Stack direction="column" gap={2} alignItems="flex-start" >
      <Text 
        as="p" 
        
        
        
        _hover={{ color: "red.500" }}
        color="white"
      >
        suporte.labsec@email.com
      </Text>
      
    </Stack>
  </Box>
          
        </Stack>


        
      </Flex>
      <Center>
      <Stack  borderColor="whiteAlpha.300"  pt={8} textAlign="center" alignItems={"flex-end"} mt="3%" mr="25%" >
          <Text fontSize="x-large" color="white" as="h2">
            © {new Date().getFullYear()} LABSEC / CEFET RJ
          </Text>
          <Text fontSize="xs"as="p" color="white">
            Todos os direitos reservados
          </Text>
        </Stack>
        </Center>
    </Flex>
  );
};

export default Footer;