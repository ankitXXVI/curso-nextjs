import mysql from 'serverless-mysql'

const db = mysql(
    {
        config: {
            host: process.env.MYSQL_HOST,
            port: process.env.MYSQL_PORT,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PWD,
            database: process.env.MYSQL_DATABASE
        }
    }
);

const query = async ({ query, values }) => {
    try {
        const results = await db.query(query, values);
        await db.end();
        return results;
    } catch (error) {
        return { error };
    }
}

export default query;