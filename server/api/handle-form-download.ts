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
            'INSERT INTO `download-log`(name, email, phone, position, company, city, company_field, agreement, selected_product, createdAt, updatedAt) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
            [query.name, query.email, query.phone, query.position, query.company, query.city, query.company_field, query.agreement, query.selected_product, date, date]
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