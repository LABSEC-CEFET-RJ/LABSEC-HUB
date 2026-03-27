import { HttpError } from "@/errors/error.config.ts";
import knexInstance from "../database/knex.ts";
import knex from "knex";

export class NewsService {


    getAllNews = async () =>{
        try{
            const getAllNews = await knexInstance("news").select("*").orderBy("created_at", "desc");
            return getAllNews;
        }catch(err:any){
            if(err instanceof HttpError){
                throw err;
            }
        }
    }

    createNews = async (title:string,subtitle:string,body:string, userId:string,slug:string) => {
        try{

            const getPrivateId = await knexInstance("user").select("id").where({public_id:userId}).first();
            const slugBase = slug.toLowerCase().replace(/ /g, "-");
            const slugAlt = `${slugBase}-${Date.now()}`;
            const news = await knexInstance("news").insert({
                title,
                subtitle,
                body,
                created_at: knexInstance.fn.now(),
                created_by: getPrivateId.id,
                slug: slugAlt,
                updated_by: getPrivateId.id
            })
            if(!news) throw new Error("Erro ao criar notícia");


            return "Criada com sucesso!"
        }catch(err: any){
            throw err;
        }

    }

    updateNews = async (title:string,subtitle:string,body:string, userId:string, slugParam:string) => {
        try{
            console.log("Slug recebido no serviço:", slugParam);
            const getPrivateId = await knexInstance("user").select("id").where({public_id:userId}).first();

            //const existing = await knexInstance("news").where({ slug: slugParam }).first();
            //console.log("Existe?", existing);
        
            const news = await knexInstance("news").update({
                title: title,
                subtitle: subtitle,
                body: body,
                updated_at: knexInstance.fn.now(),
                updated_by: getPrivateId.id
            }).where({slug:slugParam})

            if(!news) throw new Error("Erro ao atualizar notícia");
            console.log("aaaaa")

    

            return news;
        }catch(err:any){    
            throw err;
        }
    }

    deleteNews = async (slugParam:string) =>{
        try{
            const news = await knexInstance("news").where({slug: slugParam}).del();
            console.log("Notícia deletada:", news);
            console.log("Slug da notícia deletada:", slugParam);
            if(!news) throw new Error("Erro ao deletar notícia");

            return news;
        }catch(err:any){
            throw err;
        }
    }
}