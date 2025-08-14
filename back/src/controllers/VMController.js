import VMService from './../services/VMService.js';
export default class VMController {

    static async createVM(req, res) {

        try {
            if (!req.body) {
                return res.json({ erro: "Nome da VM não foi passada" });
            }
            const nameVM = req.body.nameVM
            const message = await VMService.createVM(nameVM);
        
            return res.json({message: message})
        } catch (e) {
            res.json({ erro: e.message });
        }
    }

    static async returnIPVM(req, res){
        try {
            const newVM = req.params.newvm;
            console.log(newVM)
            const message = await VMService.returnIPVM(newVM);
            return res.json({status: "ready",message: message})
        } catch (error) {
            res.json({ erro: error.message });
        }

        }


}