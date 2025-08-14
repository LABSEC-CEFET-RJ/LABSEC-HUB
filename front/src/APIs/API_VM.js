
export async function createVM(nameVM, onReady) {
  // Chama POST para iniciar criação da VM
    const res = await fetch(`${import.meta.env.VITE_SERVER}/createvm`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nameVM })
    });
    const data = await res.json();
    const newVM = data.message;

    console.log(`Criando VM: '${newVM}`);

    await new Promise(res => setTimeout(res, 55000)); //quebra galho, ideal é ver o estado da VM antes
  //inicio do pooling
    const interval = setInterval(async () => {
    const statusRes = await fetch(`${import.meta.env.VITE_SERVER}/getip/${newVM}`);
    const statusData = await statusRes.json();

    if (statusData.status === "ready") {
        clearInterval(interval);
        onReady(statusData.message, newVM); 
    }

    if (statusData.status === "error") {
        clearInterval(interval);
        onReady("Erro ao criar VM", nameVM);
    }
    }, 5000);
}

