{/*Import Header From ./components/Header/header.tsx */}
import {Box, Center, Stack, Text, Image, Separator, Flex, Checkbox} from '@chakra-ui/react'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import { useState, useEffect } from 'react'
import axios from 'axios'



function Aula(){

    const [image, setImage] = useState<string>('');

    async function getImage(){
            const response = await axios.get("rota que pega o nome da imagem")
            const res = response.data
            setImage(res.name)
    }

    useEffect(() => {
        getImage()
    }, [])

    return(
        <>

         <Header/> 
        <Stack direction='column'  width='100%'>
            <Box bg="#9ca1a6">
            <Stack  ml='5%'>
                        <Box>
                            <Box>{/* ícone de seta */}</Box>
                            <Text as='p'fontSize='medium'>Voltar para Módulos</Text>
                        </Box>
                        <Box>
                            <Stack>
                                <Text as="h1" fontSize='xx-large' fontWeight='bold'>Mapeamento com NMAP</Text>
                                <Text as="h3" fontSize='medium' fontWeight='bold'>Subtítulo da Aula</Text>
                            </Stack>
                        </Box>
                    </Stack>
                    </Box >
            <Center>
                
                <Stack  width='80%' ml='5%'>
                    
                    <Stack >
                        <Stack>
                            <Text>Apresentação do NMAP</Text>
                            <Text>Texto de descrição</Text>
                                <Image width='50%' height='20%' src={`../../assets/${image}.svg`}/>
                            <Box></Box>
                        </Stack>

                        {/* Linha divisória */}
                        <Separator borderColor="gray.400" borderBottomWidth="1px" width='90%'/>
                        
                        
                        <Stack>
                            <Text fontWeight='bold'>Título de seção</Text>
                            <Text fontWeight='bold'>Lorem ipsum</Text>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack width='20%' border="1px solid" borderColor="gray.400"  borderRadius="md" mr='5%' paddingBottom='4%' paddingTop='1%' borderWidth={8}>
                    <Center>
                        <Stack direction='column' >
                            <Text fontWeight='bold' fontSize='medium'>Scanner de redes</Text>
                            <Separator borderColor="gray.400" borderBottomWidth="1px"  />
                             <Stack direction='column' gap={5}>
                               <Checkbox.Root defaultChecked colorPalette="blue">
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control  cursor='pointer'>
                                            <Checkbox.Indicator />
                                        </Checkbox.Control>
                                        <Checkbox.Label>
                                        <Text color="black">Princípios básicos de rede</Text>
                                        </Checkbox.Label>
                                </Checkbox.Root> 
                                <Checkbox.Root defaultChecked colorPalette="blue">
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control cursor='pointer'>
                                        <Checkbox.Indicator />
                                        </Checkbox.Control>
                                        <Checkbox.Label>
                                        <Text color="black">Mapeamento com NMAP</Text>
                                        </Checkbox.Label>
                                </Checkbox.Root> 
                                <Checkbox.Root defaultChecked colorPalette="blue">
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control cursor='pointer'>
                                        <Checkbox.Indicator />
                                        </Checkbox.Control>
                                        <Checkbox.Label>
                                        <Text color="black">Tipos de escaneamento</Text>
                                        </Checkbox.Label>
                                </Checkbox.Root> 
                                <Checkbox.Root defaultChecked colorPalette="blue">
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control cursor='pointer'>
                                        <Checkbox.Indicator />
                                        </Checkbox.Control>
                                        <Checkbox.Label>
                                        <Text color="black">Scan de serviços</Text>
                                        </Checkbox.Label>
                                </Checkbox.Root> 
                                <Checkbox.Root defaultChecked colorPalette="blue">
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control cursor='pointer'>
                                        <Checkbox.Indicator />
                                        </Checkbox.Control>
                                        <Checkbox.Label>
                                        <Text color="black">Scan de portas</Text>
                                        </Checkbox.Label>
                                </Checkbox.Root> 
                                <Checkbox.Root defaultChecked colorPalette="blue">
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control cursor='pointer'>
                                        <Checkbox.Indicator />
                                        </Checkbox.Control>
                                        <Checkbox.Label>
                                        <Text color="black">Laboratório prático</Text>
                                        </Checkbox.Label>
                                </Checkbox.Root> 
                                    
                                    
                                
                                
                                
                                
                                
                                

                            </Stack>
                        </Stack>
                    </Center>
                </Stack>
            </Center>

        </Stack>
        <Footer />
        </>
    )

}

export default Aula