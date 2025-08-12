import { exec } from 'child_process';
import path from 'path';

export default class VMService{
    static async createVM  () {
        

        exec(`powershell -NoProfile -NoLogo -ExecutionPolicy Bypass -File "src/shellScripts/createVM.ps1"`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Erro ao chamar o script: ${error.message}`);
        return;
    }
    if(stderr){
        console.error(`Erro ao subir a VM: ${stderr}`); //esta considerando o output como erro
        return;
    }
    console.log(stdout);
    return('VM iniciando');
    });
    }

    static async returnIPVM  () {
    
        exec(`powershell -NoProfile -NoLogo -ExecutionPolicy Bypass -File "src/shellScripts/returnIPVM.ps1"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erro ao chamar o script: ${error.message}`);
                return;
            }
            if(stderr){
                console.error(`Erro ao buscar o IP da VM: ${stderr}`);
                return;
            }
            console.log(`IP da VM: ${stdout}`);
            return(stdout);
        });
    }

    static async KillVM  () {
        
        exec(`powershell -NoProfile -NoLogo -ExecutionPolicy Bypass -File "src/shellScripts/killVM.ps1"`, (error, stdout, stderr) => {
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
} 
