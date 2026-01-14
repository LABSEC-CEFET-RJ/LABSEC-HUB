# config.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    VM_SERVER_HOST: str 
    VM_SERVER_PORT: int
    NODE_SECRET_KEY: str
    DEBUG_MODE: bool 

    class Config:
        # Diz para o Pydantic ler do arquivo .env
        env_file = ".env"
        env_file_encoding = "utf-8"

# Instancia as configurações para serem importadas
settings = Settings()