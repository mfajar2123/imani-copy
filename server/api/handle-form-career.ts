// Get the client
import mysql from 'mysql2/promise';
const config = useRuntimeConfig();
export default defineEventHandler(async (event) => {
    try {
        const connection = await mysql.createConnection({
            host: config.public.db_host,
            user: config.public.db_user,
            password: config.public.db_pass,
            database: config.public.db_name
        });

        const date = new Date();

        const query = await readBody(event);
        await connection.query(
            'INSERT INTO `contact-career`(name,email,posisi,cover_letter,createdAt,updatedAt) VALUES(?,?,?,?,?,?)',
            [query.name, query.email, query.position, query.cover_letter, date, date]
        )
        return {
            success: true
        }
    } catch (error) {
        return {
            success: false,
            error
        }
    }
})