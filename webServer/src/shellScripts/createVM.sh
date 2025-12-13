#!/bin/bash

NAME_VM_ORIGEM="$1"
NEW_VM="$2"

echo "Iniciando processo de clone para a VM: $NAME_VM_ORIGEM"
VBoxManage clonevm "$NAME_VM_ORIGEM" --name="$NEW_VM" --register

if [ $? -eq 0 ]; then
    echo "VM '$NEW_VM' clonada com sucesso."
    echo "Iniciando a VM '$NEW_VM'..."
    
    VBoxManage startvm "$NEW_VM"

    if [ $? -eq 0 ]; then
        echo "VM '$NEW_VM' iniciada com sucesso."
    else
        echo "Erro ao iniciar a VM '$NEW_VM'."
        exit 1
    fi
else
    echo "Erro ao clonar a VM '$NAME_VM_ORIGEM'."
    exit 1
fi

echo "VM levantada!"