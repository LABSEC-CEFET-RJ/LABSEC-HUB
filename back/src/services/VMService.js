import { exec } from 'child_process';

export default class VMService{

    static async createVM  (nameVM) {
        const newVM = nameVM +  Math.floor(Math.random() * 90000) //cria um numero aleatorio para que não aja conflito com cache do VMbox ao criar uma nova VM

        exec(`powershell -NoProfile -NoLogo -ExecutionPolicy Bypass -File "src/shellScripts/createVM.ps1" -nameVM "${nameVM}" -newVM "${newVM}" `, 
        async (error, stdout, stderr) => {
    if (error) {
        console.error(`Erro ao chamar o script: ${error.message}`);
        return;
    }
    /*if(stderr){
        console.error(`Erro ao subir a VM: ${stderr}`); //esta considerando o output como erro
        return;
    }*/
    console.log(stdout);
    this.KillVM(newVM) //chamada do script do powershell que vai esperar 50 min para derrubar a máquina
    });
    return(newVM)
    }

    static returnIPVM(newVM) {
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
} 
