import styles from "./style.module.css";
import { useState } from 'react'
import { Footer } from '../components/Footer/footer'
import { createVM } from '../APIs/API_VM'

export const MainPage = () => {
    const[ipEye,setIp] = useState('Clique no botão para carregar a máquina e obter o IP dela')
    const[ipEcho,setEcho] = useState('Clique no botão para carregar a máquina e obter o IP dela')
    const[ipBunny,setBunny] = useState('[Clique no botão para carregar a máquina e obter o IP dela]')

    async function handleClick(namevm) {
        setBunny("Criando VM... aguardando IP");

        await createVM(namevm, (ip) => {
            setBunny(ip);
        });
    }

    return(
        <>
            <section id='sobre' className={`pt-5 container ${styles.section}`}>
                <div className=' row '>
                    <div className='col-md-7'>
                            <h2 className='text-center pb-2'>Sobre o Projeto</h2>
                            <p className='text-justify'>Este projeto web foi desenvolvido pela extensão do LABSEC para atuar como uma plataforma de treinamento segura e aberta para a troca de conhecimento sobre a segurança da informação. 
                                permitindo que a comunidade acadêmica do CEFET-RJ tenha acesso a desafios, conteúdos e atividades que simulam cenários de invasão de redes.</p>
                                
                    </div>
                    <div className='col-md-5'>
                            <h2 className='text-center pb-2'>Objetivos do projeto</h2>
                                <ul  style={{listStyle:"disc" }}>
                                    <li >Desenvolver habilidades voltadas ao Hacking ético</li>
                                    <li>Capacitar novos Profissonais da Segurança</li>
                                    <li>Treinamento para Campeonatos de CTF</li>
                                </ul>
                    </div>
                </div>
            </section>

            <section id='maquinas' className={`pt-5 container ${styles.section}`}>
                <h2 className='text-center'>Máquinas Virtuais</h2>
                <h3>O que são</h3>
                <p>Atualmente temos 3 máquinas virtuais ativas (VM). Elas servem para simular um sistema real e poder treinar com as mesmas.
                    Para uma máquina ser considerada resolvida é necessária fornecer uma flag que, ou estará escondida no sistema ou então será
                    representada por algo relacionado a VM, como alguma versão ou nome de algum protocolo que você devê descobrir que está rodando na máquina. 
                </p>
                    <p>Sobre as máquinas, só é fornecido o IP da rede delas e algumas dicas para caso o usuário fique perdido durante o exercicio. Posteriormente Tutoriais 
                        completos serão disponibilizados para as máquinas assim como explicação e utilização das ferramentas utilizadas durante a invasão, além é claro da criação de novas VMs.
                    </p>
                
                <div id='SauronEye' className='container mb-4 pb-2' action="">
                    <h3>Olho de Sauron &#x1f441;</h3>
                    <p>Você foi encarregado de realizar um reconhecimento completo dos serviços que estão rodando na máquina.
                        Utilize suas habilidades para identificar portas abertas, versões de serviços, e interpretar os resultados que encontrar com o scaneamento do Nmap 
                        </p>
                    <p>{ipEye}</p>
                    <button className='btn btn-primary'>Carregar Máquina</button>
                    <p className='m-0'>Pergunta sobre a VM</p>
                    <div className='resposta-flex row container pb-2'>
                    <input className='ml-2 col-md-6' type="text" name="" id="" placeholder='resposta' />
                    <button className='btn btn-success offset-md-2  col-md-2  '>Confirmar</button>
                    </div>
                </div>

                <div id='Echo' className='container mb-4 pb-2' action="">
                    <h3>Arquivos Sigilosos 💾 </h3>
                    <p>
                        Um colega seu pediu sua ajuda para recuperar um arquivo importante para ele que acabou ficando no computador da 
                        empresa antiga que ele trabalhava. Ele disse que a empresa utiliza o proocolo FTP para transferencias entre arquivos na rede.
                        Faça o download do arquivo jpeg e diga qual é o héroi favorito do seu colega.
                    </p>
                    <p>{ipEcho}</p>
                    <button className='btn btn-primary'>Carregar Máquina</button>
                    <p className='m-0'>Pergunta sobre a VM</p>
                    <div className='resposta-flex row container pb-2'>
                    <input className='ml-2 col-md-6' type="text" name="" id="" placeholder='resposta' />
                    <button className='btn btn-success offset-md-2  col-md-2  '>Confirmar</button>
                    </div>
                    
                </div>

                <div id='BunnyHole' className='container pb-2' >
                    <h3>Buraco do Coelho &#128007; </h3>
                    <p>
                        Um Coelho escapou de sua dona e acabou caindo dentro de uma máquina rodando o windows server 2016...
                        Você precisa salva-lo, ganhe acesso ao shell da máquina e resgatate o coitado do coelho
                        de ter que viver em uma versão tão vulnerável do windows server.
                    </p>
                    <p>{ipBunny}</p>
                    <button className='btn btn-primary' onClick={() => handleClick("Bunny")}>Carregar Máquina</button>
                    <p className='m-0'>Perguntar sobre a VM</p>
                    <div className='resposta-flex row container pb-2'>
                    <input className='ml-2 col-md-6' type="text" name="" id="" placeholder='resposta' />
                    <button className='btn btn-success offset-md-2  col-md-2 '>Confirmar</button>
                    </div>
                </div>
            </section>

            <section id='equipe' className={` container ${styles.section} ${styles.equipe}`}>
                <h2 className='text-center pt-4 pb-4'>Equipe por trás do projeto</h2>
                <div className='row justify-content-around text-center'>
                    <div className='col-md-3'>
                            <img className='img-fluid' src="https://thumbs.dreamstime.com/b/opte-pelo-%C3%ADcone-do-perfil-avatar-placeholder-cinzento-da-foto-99724602.jpg" alt="" />
                            <p>Igor Cezar (Professor da Extensão)</p>
                            <p>Link do Github / Link do Linkedin</p>
                    </div>

                    <div className='col-md-3'>
                            <img className='img-fluid' src="https://thumbs.dreamstime.com/b/opte-pelo-%C3%ADcone-do-perfil-avatar-placeholder-cinzento-da-foto-99724602.jpg" alt="" />
                            <p>Igor Cezar (Professor da Extensão)</p>
                            <p>Link do Github / Link do Linkedin</p>
                    </div>

                    <div className='col-md-3'>
                            <img className='img-fluid' src="https://thumbs.dreamstime.com/b/opte-pelo-%C3%ADcone-do-perfil-avatar-placeholder-cinzento-da-foto-99724602.jpg" alt="" />
                            <p>Igor Cezar (Professor da Extensão)</p>
                            <p>Link do Github / Link do Linkedin</p>
                    </div>
                </div>

                <div className='row pt-4 pb-4 justify-content-around text-center'>
                    <div className='col-md-3'>
                            <img className='img-fluid' src="https://thumbs.dreamstime.com/b/opte-pelo-%C3%ADcone-do-perfil-avatar-placeholder-cinzento-da-foto-99724602.jpg" alt="" />
                            <p>Igor Cezar (Professor da Extensão)</p>
                            <p>Link do Github / Link do Linkedin</p>
                    </div>

                    <div className='col-md-3'>
                            <img className='img-fluid' src="https://thumbs.dreamstime.com/b/opte-pelo-%C3%ADcone-do-perfil-avatar-placeholder-cinzento-da-foto-99724602.jpg" alt="" />
                            <p>Igor Cezar (Professor da Extensão)</p>
                            <p>Link do Github / Link do Linkedin</p>
                    </div>

                    <div className='col-md-3'>
                            <img className='img-fluid' src="https://thumbs.dreamstime.com/b/opte-pelo-%C3%ADcone-do-perfil-avatar-placeholder-cinzento-da-foto-99724602.jpg" alt="" />
                            <p>Igor Cezar (Professor da Extensão)</p>
                            <p>Link do Github / Link do Linkedin</p>
                    </div>
                </div>

            </section>
            <Footer></Footer>
        </>
        
        
    )


}