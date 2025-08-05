import './styles.css'
import { useState } from 'react'
export const MainPage = () => {
    const[ipEye,setIp] = useState('Clique no botão para carregar a máquina e obter o IP dela')

    return(
        <>
            <section className='pt-5 container'>
                <div className=' row '>
                    <div className='col-7'>
                            <h2 className='text-center pb-2'>Sobre o Projeto</h2>
                            <p className='text-justify'>Este projeto web foi desenvolvido pela extensão do LABSEC para atuar como uma plataforma de treinamento segura e aberta para a troca de conhecimento sobre a segurança da informação. 
                                permitindo que a comunidade acadêmica do CEFET-RJ tenha acesso a desafios, conteúdos e atividades que simulam cenários de invasão de redes.</p>
                                
                    </div>
                    <div className='col-5'>
                            <h2 className='text-center pb-2'>Objetivos do projeto</h2>
                                <ul  style={{listStyle:"disc", listStylePosition: 'inside' }}>
                                    <li >Desenvolver habilidades voltadas ao Hacking ético</li>
                                    <li>Capacitar novos Profissonais da Segurança</li>
                                    <li>Treinamento para Campeonatos de CTF</li>
                                </ul>
                    </div>
                </div>
            </section>

            <section className='pt-5 container'>
                <h2 className='text-center'>Máquinas Virtuais</h2>
                <h3>O que são</h3>
                <p>ATualmente temos 3 máquinas virtuais ativas (VM). Elas servem para simular um sistema real e poder treinar com as mesmas.
                    Para uma máquina ser considerada resolvida é necessária fornecer uma flag que, ou estará escondida no sistema ou então será
                    representada por algo relacionado a VM, como alguma versão ou nome de algum protocolo que você devê descobrir que está rodando na máquina. 
                </p>
                    <p>Sobre as máquinas, só é fornecido o IP da rede delas e algumas dicas para caso o usuário fique perdido durante o exercicio. Posteriormente Tutoriais 
                        completos serão disponibilizados para as máquinas assim como explicação e utilização das ferramentas utilizadas durante a invasão, além é claro da criação de novas VMs.
                    </p>
                <h3>O olho que tudo vê </h3>
                <form className='container' action="">
                    <p>Explicação da máquina</p>
                    <p>[{ipEye}]</p>
                    <button className='btn btn-primary'>Carregar Máquina</button>
                    <p className='m-0'>Pergunta sobre a VM</p>
                    <input type="text" name="" id="" placeholder='resposta' />
                    <button className='btn btn-success'>Confirmar</button>
                </form>
            </section>

            <section className='container'>

            </section>
        </>
        
        
    )


}