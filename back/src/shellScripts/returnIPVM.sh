#!/bin/bash

VM_NAME="$1"
GUEST_PROPERTY="/VirtualBox/GuestInfo/Net/0/V4/IP"
IP_ADDRESS=$(VBoxManage guestproperty get "$VM_NAME" "$GUEST_PROPERTY")
echo $IP_ADDRESS