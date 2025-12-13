param(
    [string]$nameVM,
    [string]$newVM
)

CD "\Program Files\Oracle\Virtualbox"

./VBoxManage clonevm $nameVM --name="$newVM" --register
./VBoxManage startvm "$newVM"

