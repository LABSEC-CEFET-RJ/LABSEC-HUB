import { HttpCode, HttpError } from "@/errors/error.config.ts";
import {NewsService} from "../service/NewsService.ts";
import { Request, Response } from 'express';
import { AuthenticatedUserRequest } from "@/middleware/authenticate.ts";


export class NewsController{
    private readonly newsService = new NewsService();

    getAllNews = async (req:Request,res:Response) => {
        try{
            const news = await this.newsService.getAllNews();
            if(!news) throw new Error("Nenhuma notícia encontrada")
            return res.status(HttpCode.OK).json({response: news})
        }catch(err:any){
            if(err instanceof HttpError){
                res.status(HttpCode.INTERNAL_SERVER_ERROR).json({message: err.message})
            }
        }
    }

    createNews = async (req: Request, res: Response) =>{
        try{
           
            const userId = req.user?.public_id
            console.log("User ID:", ); 
            if(!userId) {
                return res.status(401).json({ message: 'Usuário não autenticado' });
            }

            const {title,subtitle,body,slug} = req.body;
            const result = await this.newsService.createNews(title,subtitle,body,userId,slug);

            return res.status(HttpCode.CREATED).json({response: result, message: "Notícia criada com sucesso" });
        }catch(error:any){
            console.error(error)
            res.status(500).json({message:"Erro interno do servidor"});
        }
    }

    updateNews = async (req:Request, res:Response) => {
        try{
            const userId = req.user?.public_id
            if(!userId) {
                return res.status(401).json({ message: 'Usuário não autenticado' });
            }

            const {title,subtitle,body} = req.body;

            const {slug} = req.params;
            const slugParam = String(slug)

            if(title.length > 45){
                return res.status(400).json({message:"O título só pode ter até 45 caracteres"});
            }
            if(!slugParam) {
                return res.status(400).json({ message: 'Slug da notícia é obrigatório' });
            }
            
            const result = await this.newsService.updateNews(title,subtitle,body,userId,slugParam);

            return res.status(HttpCode.OK).json({response: result, message: "Notícia atualizada com sucesso" });
        }catch(err:any){
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({message: err.message})
            
        }
    }

    deleteNews = async (req:Request, res:Response) =>{
        try{
            const {slug} = req.params;

            if(!slug){
                return res.status(400).json({message:"Obrigatório informar o slug"})
            }

            const slugParam = String(slug) 

            const result = await this.newsService.deleteNews(slugParam)

            return res.status(HttpCode.OK).json({response: result, message: "Notícia deletada com sucesso" });
        }catch(err:any){
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({message: err.message})
        }
    }
}