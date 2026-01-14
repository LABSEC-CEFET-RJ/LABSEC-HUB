# LABSEC-HUB SEPEX 2025.2 VERSION
<p align="center">
  <img alt="ReactJS" src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img alt="Vitual Box" src="https://img.shields.io/badge/Virtual_Box-2F61B4.svg?style=for-the-badge&logo=virtualbox&logoColor=white">
  <img alt="Python" src="https://img.shields.io/badge/Python-FFD43B.svg?style=for-the-badge&logo=python&logoColor=3776AB">
</p>

This is the first functional version of the Labsec Hub website. The Labsec Hub will serve as an online platform for students of CEFET-RJ to learn and test their pentesting, bugbounty, and network defense skills in a secure environment separate from other networks.

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

BunnyAnswer = {Answer for Bunny VM}

EchoAnswer = {Answer for Echo VM}

SauronAnswer = {Answer for Sauron VM}

```
**Warning:** The Port Number is your Server Port and should be the same you put in the VITE_SERVER.

Make sure you have Virtual Box install
```
Get-Package -Name *VirtualBox*
```
**Warning:** This version of the Server is builded to work on a windows 10/11 enviroment with powershell enabled. If you want to run in a linux enviroment, you will need to change the code to call for the .sh files instead of .ps

Download the Virtual Machines (This version only has 3 Vunerable Virtual Machine)

[**Click here to download the VMs**](https://drive.google.com/drive/folders/1tuTy3_YV-UJpq4-SsHPmAg2A-3K5s8Hg?usp=drive_link)

**A Video guide for the Virtual machines is in progress**
 
**Warning:** These VMs are vulnarable and should only be used for project and learn purposes. Do not put any personal information or use the Virtual Machine for daily routine

Deployed the Machine in your Virtual Box by command line or use the Graphic interface of Virtual Box to Import the .ova

Now you are ready to run the Server:
```
npm run start
```


