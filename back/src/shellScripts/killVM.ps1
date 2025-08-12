$poweroffVM = Start-Job -ScriptBlock {
        CD "\Program Files\Oracle\Virtualbox" 
        ./VBoxManage controlvm  "eternalblue2" poweroff
            Start-Sleep -Seconds 10 
    }

Wait-Job -Job $poweroffVM
CD "\Program Files\Oracle\Virtualbox" 
./VBoxmanage unregistervm "eternalblue2" --delete 
