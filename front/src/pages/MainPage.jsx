import styles from "./style.module.css";
import { useState } from 'react'
import { Footer } from '../components/Footer/footer'
import { createVM, ValidaAnswer } from '../APIs/API_VM'
import { ModalTip } from '../components/ModalTip/ModalTip'
import { useRef } from "react";

export const MainPage = () => {
    const[ipEye,setEye] = useState(null)
    const[ipEcho,setEcho] = useState(null)
    const[ipBunny,setBunny] = useState(null)
    const [showTip, setShowTip] = useState(false);
    const [textTip, setTextTip] = useState('');
    
    const BunnyAnswer = useRef();
    const EchoAnswer = useRef();
    const EyeAnswer = useRef();

    async function handleIP(namevm, set,ip) {
        if(ip == null){
            set("Criando VM... aguardando IP");

        await createVM(namevm, (ip) => {
            
            set(ip);
        });
        } 
        
    }


    async function handleAnswer(namevm, answer) {
        if(answer != null){
            const res = await ValidaAnswer(namevm,answer)
            if(res.message == 'correct'){
                alert("✅ Resposta correta!");
            }else{
                alert("❌ Resposta incorreta!");
            }
        } 
        
    }



    function handleTip(text) {
        setTextTip(text)
        setShowTip(!showTip);
    }


    return(
        <>
            <section id='sobre' className={`pt-5 container ${styles.section}`}>
                <div className=' row '>
                    <div className='col-md-7'>
                            <h2 className='text-center pb-2 fw-bolder'>Sobre o Projeto</h2>
                            <p className='text-justify'>Este projeto web foi desenvolvido pela extensão do LABSEC para atuar como uma plataforma de treinamento segura e aberta para a troca de conhecimento sobre a segurança da informação. 
                                permitindo que a comunidade acadêmica do CEFET-RJ tenha acesso a desafios, conteúdos e atividades que simulam cenários de invasão de redes.</p>
                                
                    </div>
                    <div className='col-md-5'>
                            <h2 className='text-center pb-2 fw-bolder'>Objetivos do projeto</h2>
                                <ul  style={{listStyle:"disc" }}>
                                    <li >Desenvolver habilidades voltadas ao Hacking ético</li>
                                    <li>Capacitar novos Profissonais da Segurança</li>
                                    <li>Treinamento para Campeonatos de CTF</li>
                                </ul>
                    </div>
                </div>
            </section>

            <section id='maquinas' className={`pt-5 container ${styles.section}`}>
                <h2 className='text-center fw-bolder'>Máquinas Virtuais</h2>
                <h3 className=" fw-bold">O que são</h3>
                <p>Máquinas virtuais (VMs) são computadores simulados que rodam dentro de um host físico. 
                    Elas reproduzem sistemas operacionais, redes e serviços reais sem exigir hardware extra. Permitindo assim montar ambientes de teste 
                    idênticos aos encontrados em situações reais. Atualmente temos 3 máquinas virtuais ativas que treinam fundamentos diferentes da segurança da informação e teste de penetração.
                </p>
                    <p>Sobre as máquinas, só é fornecido o IP da rede delas e algumas dicas para caso o usuário fique perdido durante o exercicio. O objetivo do Aluno é retornar uma
                        Flag, que pode estar escondida dentro do sistema ou representada por alguma característica da VM como versão ou nome de usuários. Posteriormente Tutoriais 
                        completos serão disponibilizados para as máquinas assim como explicação e utilização das ferramentas utilizadas durante a invasão, além é claro da criação de novas VMs para abordar novos assuntos e dificuldades.
                    </p>
                
                <div id='SauronEye' className={`container pt-2 pb-2 mt-5 mb-5 ${styles.card__box} `}  >
                    <h3>Olho de Sauron &#x1f441;</h3>
                    <p>Você foi encarregado de realizar um reconhecimento completo dos serviços que estão rodando na máquina.
                        Utilize suas habilidades para identificar portas abertas, versões de serviços, e interpretar os resultados que encontrar com o scaneamento do Nmap 
                    </p>

                    <div className={`${styles.ip__div__text}`}  onClick={() => handleIP("Eye",setEye, ipEye)}>
                    {ipEye == null ? <p> Clique Aqui para carregar a máquina e obter o IP dela </p> : 
                        <p style={{cursor: 'auto', color: /\d/.test(ipEye)? "green": "yellow"}} > {ipEye} </p>}
                    </div>

                    <p >Qual serviço está rodando em uma porta não usual?</p>
                    <div className='resposta-flex row container pb-2'>
                        <input className='ml-2 col-md-6' type="text" name="" ref={EyeAnswer} id="" placeholder='Resposta Ex: NomeServiço:Porta ' />
                        <button className='btn btn-success offset-md-2  col-md-2 ' onClick={ () =>handleAnswer("Sauron", EyeAnswer.current.value) }
                        >Confirmar</button>
                    </div>
                </div>

                <div id='Echo' className={`container pt-2 pb-2 mb-5  ${styles.card__box} `}>
                    <h3>Arquivos Sigilosos 💾 </h3>
                    <p>
                        Um colega seu pediu sua ajuda para recuperar um arquivo importante para ele que acabou ficando no computador da 
                        empresa antiga que ele trabalhava. Ele disse que a empresa utiliza o proocolo FTP para transferencias entre arquivos na rede.
                        Faça o download do arquivo jpeg.
                    </p>

                    <div className={`${styles.ip__div__text}`}  onClick={() => handleIP("Echo",setEcho, ipEcho)}>
                    {ipEcho == null ? <p> Clique Aqui para carregar a máquina e obter o IP dela </p> : 
                        <p style={{cursor: 'auto', color: /\d/.test(ipEcho)? "green": "yellow"}} > {ipEcho} </p>}
                    </div>
                    
                    <p >Com a foto baixada no seu computador, qual é o herói favorito desse seu colega?</p>
                    
                    <div className='resposta-flex row container pb-2'>
                        <input className='ml-2 col-md-6' type="text" name="" id="" ref={EchoAnswer} placeholder='resposta (Nome todo em Minusculo)' />
                        <button className='btn btn-success offset-md-2  col-md-2 ' onClick={ () =>handleAnswer("Echo", EchoAnswer.current.value) }
                        >Confirmar</button>
                        <button className='btn btn-warning offset-md-1 col-md-1' onClick={() => 
                        handleTip("A empresa não tem uma política forte de segurança e deixou o login anonimo do FTP ativo")}>Dica
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

                    <div className={`${styles.ip__div__text}`}  onClick={() => handleIP("Bunny",setBunny, ipBunny)}>
                    {ipBunny == null ? <p> Clique Aqui para carregar a máquina e obter o IP dela </p> : 
                        <p style={{cursor: 'auto', color: /\d/.test(ipBunny)? "green": "yellow"}} > {ipBunny} </p>}
                    </div>
                    
                    <p>Qual é o nome do Coelho que você resgatou?</p>
                    
                    <div className='resposta-flex row container pb-2'>
                        <input className='ml-2 col-md-6' type="text" name="" ref={BunnyAnswer} id="BunnyAnswer" placeholder='resposta (Nome todo em Minusculo)' />
                        <button className='btn btn-success offset-md-2  col-md-2 ' onClick={()=> handleAnswer("Bunny",BunnyAnswer.current.value)}
                        >Confirmar</button>
                        <button className='btn btn-warning offset-md-1 col-md-1' onClick={() => 
                        handleTip("Windows server 2016 são conhecidos por serem vulneráveis ao ataque Eternal Blue")}>Dica
                        </button>
                    </div>
                </div>
            </section>

            <section id='equipe' className={` container ${styles.section} ${styles.equipe} pb-5`}>
                <h2 className='text-center pt-4 pb-4 fw-bolder'>Equipe por trás do projeto</h2>
                <div className='row justify-content-around text-center'>
                    <div className='col-md-3'>
                            <img className='img-fluid' src="https://avatars.githubusercontent.com/u/3826791?v=4" alt="" />
                            <p className="d-flex flex-column"> <span className="fw-bolder"> Igor Cezar </span> <span className="fst-italic">Professor Orientador da Extensão</span></p>
                            <p><a href="https://github.com/igorcompuff">Link do Github</a> / <a href="https://www.linkedin.com/in/igorgonzalezribeiro/">Link do Linkedin</a></p>
                    </div>

                    <div className='col-md-3'>
                            <img className='img-fluid' src="https://avatars.githubusercontent.com/u/213132679?v=4" alt="" />
                            <p className="fw-bolder">Perfil do Github do Projeto</p>
                            <a href="https://github.com/LABSEC-CEFET-RJ/LABSEC-HUB">Link do Repositório no Github</a>
                    </div>

                    <div className='col-md-3'>
                            <img className='img-fluid' src="https://avatars.githubusercontent.com/u/104049906?s=400&u=5d105196638b46841284cd3b81d81246d62ca0e4&v=4" alt="" />
                            <p className="d-flex flex-column"> <span className="fw-bolder"> Rafael Costa </span> <span className="fst-italic"> Tech Leader e Bolsista </span></p>
                            <p><a href="https://github.com/jake7038">Link do Github</a> /  <a href="https://www.linkedin.com/in/rafaelcostadev/">Link do Linkedin</a></p>
                    </div>
                </div>


            </section>
            {showTip && <ModalTip text={textTip} showTip={showTip} />}
            <Footer></Footer>
        </>
        
        
    )


}