import { Flex, Box, Image, Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logoLabsec from "../../assets/Logo_name_labsec-removebg-preview 1.svg";
import logo2labsec from "../../assets/Rectangle.svg";

export default function Header() {
  const navigate = useNavigate();

  const login = async () => {
    console.log("login");
  };

  const navigation = (route: string) => {
    navigate(route);
  };

  return (
    <Flex
      as="header"
      w="100%"
      px={8}
      py={4}
      align="center"
      justify="space-between"
      boxShadow="sm"
      position="sticky"
      top={0}
      bg="white"
      zIndex={10}
    >
      
      <HStack >
        <Image src={logo2labsec} alt="logo-base" h="40px" objectFit="contain" />
        <Image src={logoLabsec} alt="logo-labsec" h="40px" objectFit="contain" />
      </HStack>

      
      <HStack>
        <Button variant="ghost" color='black'  onClick={() => navigation("/")}>Home</Button>
        <Button variant="ghost" color='black' onClick={() => navigation("/?")}>Aulas</Button>
        <Button variant="ghost" color='black' onClick={() => navigation("/?")}>FAQ</Button>
        <Button variant="ghost" color='black' onClick={() => navigation("/About")}>Sobre</Button>
      </HStack>

      
      <HStack >
        <Button colorScheme="blue" color='black' variant="outline" onClick={login}>
          Login
        </Button>
        <Button colorScheme="blue">Contatar</Button>
      </HStack>
    </Flex>
  );
}
