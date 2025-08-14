param(
    [string]$newVM
)

CD "\Program Files\Oracle\Virtualbox" 
./VBoxManage guestproperty get "${newVM}" "/VirtualBox/GuestInfo/Net/0/V4/IP"