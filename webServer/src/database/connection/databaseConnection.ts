import knex, { Knex } from "knex";
import knexConfig from "../../../knexfile";

/**
 * @fileoverview Módulo de conexão com o banco de dados utilizando Knex.js.
 * @module database/connection/databaseConnection
 */

/**
 * Classe responsável por gerenciar a conexão com o banco de dados.
 * Utiliza o padrão Singleton para garantir que apenas uma instância
 * de conexão seja criada durante o ciclo de vida da aplicação.
 * 
 * @class DatabaseConnection
 * 
 * @example
 * // Obtendo a instância de conexão
 * const db = DatabaseConnection.getInstance();
 * const users = await db('users').select('*');
 * 
 * @example
 * // Testando a conexão na inicialização
 * const isConnected = await DatabaseConnection.testConnection();
 * if (!isConnected) {
 *   process.exit(1);
 * }
 */
export default class DatabaseConnection {
    private static instance: Knex | null = null

    /**
     * Retorna a instância única de conexão com o banco de dados.
     * Se a instância ainda não existir, cria uma nova utilizando
     * as configurações do knexfile.
     * 
     * @returns {Knex} Instância da conexão Knex
     */
    public static getInstance(): Knex {
        if (!this.instance) {
            this.instance = knex(knexConfig)
        }
        return this.instance
    }

    /**
     * Testa a conexão com o banco de dados executando uma query simples.
     * Útil para verificar se o banco está acessível durante a inicialização.
     * 
     * @returns {Promise<boolean>} `true` se a conexão foi bem-sucedida, `false` caso contrário
     */
    public static async testConnection(): Promise<boolean> {
        try {
            const connection = this.getInstance()
            await connection?.raw("SELECT 1")

            console.log("Conexão com o banco de dados bem-sucedida!");
            return true;
        } catch (error) {
            console.error("Falha na conexão ao banco de dados: ", error)
            return false;
        }
    }

    /**
     * Encerra a conexão com o banco de dados e limpa a instância.
     * Deve ser chamado durante o shutdown graceful da aplicação.
     * 
     * @returns {Promise<void>}
     */
    public static async closeConnection(): Promise<void> {
        if (this.instance) {
            await this.instance.destroy();
            this.instance = null;
        }
    }
}