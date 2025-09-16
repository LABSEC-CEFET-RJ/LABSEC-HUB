import styles from "./style.module.css";
import { useState } from 'react'
import { Footer } from '../components/Footer/footer'
import { createVM } from '../APIs/API_VM'
import { ModalTip } from '../components/ModalTip/ModalTip'

export const MainPage = () => {
    const[ipEye,setEye] = useState(null)
    const[ipEcho,setEcho] = useState(null)
    const[ipBunny,setBunny] = useState(null)
    const [showTip, setShowTip] = useState(false);
    const [textTip, setTextTip] = useState('');
    
    async function handleClick(namevm, set) {
        set("Criando VM... aguardando IP");

        await createVM(namevm, (ip) => {
            
            set(ip);
        });
    }

    function handleTip(text) {
        setTextTip(text || "foi")
        setShowTip(!showTip);
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
                
                <div id='SauronEye' className={`container pt-2 pb-2 mb-5 ${styles.card__box} `}  >
                    <h3>Olho de Sauron &#x1f441;</h3>
                    <p>Você foi encarregado de realizar um reconhecimento completo dos serviços que estão rodando na máquina.
                        Utilize suas habilidades para identificar portas abertas, versões de serviços, e interpretar os resultados que encontrar com o scaneamento do Nmap 
                    </p>

                    <div className={`${styles.ip__div__text}`}  onClick={() => handleClick("Eye",setEye)}>
                    {ipEye == null ? <p> Clique Aqui para carregar a máquina e obter o IP dela </p> : 
                        <p style={{cursor: 'auto', color: /\d/.test(ipEye)? "green": "yellow"}} > {ipEye} </p>}
                    </div>

                    <p >Qual serviço está rodando em uma porta não usual?</p>
                    <div className='resposta-flex row container pb-2'>
                        <input className='ml-2 col-md-6' type="text" name="" id="" placeholder='resposta' />
                        <button className='btn btn-success offset-md-2  col-md-2 '>Confirmar</button>
                        <button className='btn btn-warning offset-md-1 col-md-1' onClick={() => 
                        handleTip("a VM vulnerável ainda não foi criada")}>Dica
                        </button>
                    </div>
                </div>

                <div id='Echo' className={`container pt-2 pb-2 mb-5  ${styles.card__box} `}>
                    <h3>Arquivos Sigilosos 💾 </h3>
                    <p>
                        Um colega seu pediu sua ajuda para recuperar um arquivo importante para ele que acabou ficando no computador da 
                        empresa antiga que ele trabalhava. Ele disse que a empresa utiliza o proocolo FTP para transferencias entre arquivos na rede.
                        Faça o download do arquivo jpeg.
                    </p>

                    <div className={`${styles.ip__div__text}`}  onClick={() => handleClick("Echo",setEcho)}>
                    {ipEcho == null ? <p> Clique Aqui para carregar a máquina e obter o IP dela </p> : 
                        <p style={{cursor: 'auto', color: /\d/.test(ipEcho)? "green": "yellow"}} > {ipEcho} </p>}
                    </div>
                    
                    <p >Com a foto baixada no seu computador, qual é o herói favorito desse seu colega?</p>
                    
                    <div className='resposta-flex row container pb-2'>
                        <input className='ml-2 col-md-6' type="text" name="" id="" placeholder='resposta' />
                        <button className='btn btn-success offset-md-2  col-md-2 '>Confirmar</button>
                        <button className='btn btn-warning offset-md-1 col-md-1' onClick={() => 
                        handleTip("a VM vulnerável ainda não foi criada")}>Dica
                        </button>
                    </div>
                    
                </div>

                <div id='BunnyHole' className={`container pt-2 pb-2  ${styles.card__box} `} >
                    <h3>Buraco do Coelho &#128007; </h3>
                    <p>
                        Um Coelho escapou de sua dona e acabou caindo dentro de uma máquina rodando o windows server 2016...
                        Você precisa salva-lo, ganhe acesso ao shell da máquina e resgatate o coitado do coelho
                        de ter que viver em uma versão tão vulnerável do windows server.
                    </p>

                    <div className={`${styles.ip__div__text}`}  onClick={() => handleClick("Bunny",setBunny)}>
                    {ipBunny == null ? <p> Clique Aqui para carregar a máquina e obter o IP dela </p> : 
                        <p style={{cursor: 'auto', color: /\d/.test(ipBunny)? "green": "yellow"}} > {ipBunny} </p>}
                    </div>
                    
                    <p>Qual é o nome do Coelho que você resgatou?</p>
                    
                    <div className='resposta-flex row container pb-2'>
                        <input className='ml-2 col-md-6' type="text" name="" id="" placeholder='resposta' />
                        <button className='btn btn-success offset-md-2  col-md-2 '>Confirmar</button>
                        <button className='btn btn-warning offset-md-1 col-md-1' onClick={() => 
                        handleTip("Windows server 2016 são conhecidos por serem vulneráveis ao ataque Eternal Blue")}>Dica
                        </button>
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
            {showTip && <ModalTip text={textTip} showTip={showTip} />}
            <Footer></Footer>
        </>
        
        
    )


}