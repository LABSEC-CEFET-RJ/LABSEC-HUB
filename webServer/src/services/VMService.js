import { exec } from 'child_process';
import { promisify } from 'util';
import 'dotenv/config'

export default class VMService{

    static async createVM  (nameVM) {
        const execPromise = promisify(exec);
        const newVM = nameVM +  Math.floor(Math.random() * 90000) //cria um numero aleatorio para que não aja conflito com cache do VMbox ao criar uma nova VM
        
        // const command = `src/shellScripts/createVM.sh "${nameVM}" "${newVM}"`; comando para shell script
        const command = `powershell -NoProfile -NoLogo -ExecutionPolicy Bypass -File "src/shellScripts/createVM.ps1" -nameVM "${nameVM}" -newVM "${newVM}" ` ;
        console.log("ligando"+nameVM)
        
            try {

                const { stdout, stderr } = await execPromise(command); //espera a execucao do script
    
                console.log(stdout);
    
                if (stderr) {
                    console.warn(`Aviso:\n${stderr}`);
                }

                // this.KillVM(newVM); 
                return newVM;
    
            } catch (error) {
    
                console.error(`Erro ao executar o script para criar a VM: ${error.message}`);
                
                return error; 
            }
    }

    static async returnIPVM(newVM) {
        return new Promise((resolve, reject) => {
                exec(`powershell -NoProfile -NoLogo -ExecutionPolicy Bypass -File "src/shellScripts/returnIPVM.ps1" -newVM "${newVM}"`,
                (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Erro ao chamar o script: ${error.message}`);
                        reject(error);
                        return;
                    }
                    if (stderr) {
                        console.error(`Erro ao buscar o IP da VM: ${stderr}`);
                        reject(new Error(stderr));
                        return;
                    }
                    console.log(`IP da VM: ${stdout.trim()}`);
                    resolve(stdout.trim());
                });
        });
    }

    static async KillVM(newVM) {
        
        exec(`powershell -NoProfile -NoLogo -ExecutionPolicy Bypass -File "src/shellScripts/killVM.ps1" -newVM "${newVM}"`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Erro ao chamar o script: ${error.message}`);
        return;
    }
    if(stderr){
        console.error(`Erro ao derrubar a VM: ${stderr}`);
        return;
    }
    console.log(`VM derrubada!!`);
    return("VM Derrubada");
    });
    }


    static returnAnswer(nameVM, answer){
        const env = nameVM+ "Answer";
        console.log(process.env[env])
        console.log(answer)
        if(answer === process.env[env]  ){
            return true;
            console.log("entrei")
        }
        else{
            return false;
        }   
    }


} 
