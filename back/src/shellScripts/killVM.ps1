param(
    [string]$newVM
)
Start-Sleep -Seconds 100
$poweroffVM = Start-Job -ScriptBlock {
        CD "\Program Files\Oracle\Virtualbox" 
        ./VBoxManage controlvm  "${newVM}" poweroff
            Start-Sleep -Seconds 10 
    }

Wait-Job -Job $poweroffVM
CD "\Program Files\Oracle\Virtualbox" 
./VBoxmanage unregistervm "${newVM}" --delete 
