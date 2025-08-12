param(
    [string]$nameVM,
    [string]$newVM
)

CD "\Program Files\Oracle\Virtualbox"

./VBoxManage clonevm $nameVM --name="$newVM" --register
./VBoxManage startvm "$newVM"



CD "\Program Files\Oracle\Virtualbox" 
./VBoxmanage clonevm WS2016-eternalblue --name="eternalblue2" --register
./VBoxManage startvm "eternalblue2"