# LABSEC-HUB
<p align="center">
  <img alt="ReactJS" src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img alt="Vitual Box" src="https://img.shields.io/badge/Virtual_Box-2F61B4.svg?style=for-the-badge&logo=virtualbox&logoColor=white">
  <img alt="Express.js" src="https://img.shields.io/badge/Shell-4EAA25.svg?style=for-the-badge&logo=gnubash&logoColor=white">
</p>

This is the first version of the Labsec Hub website. The Labsec Hub will serve as an online platform for students of CEFET-RJ to learn and test their pentesting, bugbounty, and network defense skills in a secure environment separate from other networks.

## How to Run the Project in dev mode

There are two folders in this repository: The Front folder hold the web user Interface application and the Back folder hold the server with the shells APIs and Rest APIs.

### How to Run the Front-end:
Open the folder and install the packages necessary to run the project (you need to have either a npm or a another node packages managers previous install in the system)
```
npm i
```
make a .env in the front directory with:
```
VITE_SERVER = http://{IP Server}:{Server Port}
```
Now you are ready to run the Front:
```
npm run dev
```
### How to Run the Back-end:
Open the folder and install the packages necessary to run the project (you need to have either a npm or a another node packages managers previous install in the system)
```
npm i
```
make a .env in the back directory with:
```
PORT = {Port Number}
```
**Warning:** That is your Server Port and should be the same you put in the VITE_SERVER

Make sure you have Virtual Box install
```
Get-Package -Name *VirtualBox*
```
**Warning:** This version of the Server only has the Shell Scripts for powershell. So it will only works in a Windows 10 - 11 enviroment

Download the Bunny Virtual Machine (That version only has one Vunerable Virtual Machine)

[**Clique aqui para baixar a VM**](https://drive.google.com/file/d/1IraYBIgoGIsl2pnwfRAtmeVea7eELTC2/view?usp=sharing) 
**Warning:** That VM is vulnarable and should only be used for this project. Do not put any personal information or use the Virtual Machine for daily routine

Deployed the Machine in your Virtual Box by command line or use the Graphic interface of Virtual Box to Import the .ova

Now you are ready to run the Server:
```
npm run start
```


