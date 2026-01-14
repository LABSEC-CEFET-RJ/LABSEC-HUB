import uvicorn
from fastapi import FastAPI, HTTPException, Header
from config import settings

# Cria a instância da aplicação (igual app = express())
app = FastAPI(
    title="LABSEC VM Server Controller",
    description="API para gerenciar as máquinas virtuais do VirtualBox/KVM e instacias do Docker",
    version="1.0.0"
)


@app.get("/")
def read_root():
    if settings.DEBUG_MODE:
        return {"status": "online", "mode": "DEBUG", "secret_hint": settings.NODE_SECRET_KEY[:2] + "***"}
    return {"status": "online"}

@app.post("/start-vm")
def start_vm(x_api_key: str = Header(None)):
    if x_api_key != settings.NODE_SECRET_KEY:
        raise HTTPException(status_code=403, detail="Acesso Negado: Chave inválida")
    
    return {"message": "VM Iniciando..."}


if __name__ == "__main__":
    print(f"Iniciando servidor em {settings.VM_SERVER_HOST}:{settings.VM_SERVER_PORT}")
    uvicorn.run("main:app", host=settings.VM_SERVER_HOST, port=settings.VM_SERVER_PORT, reload=settings.DEBUG_MODE)