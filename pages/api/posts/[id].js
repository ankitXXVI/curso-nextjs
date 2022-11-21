import query from "../../../lib/db";

export default async function handler(req,res){

    if(req.method !== 'GET'){
        res.status(405).send()
    }

    try {
        const data = await query({
            query: 'SELECT * FROM notes WHERE id = ?',
            values: [ req.query.id ],
        });

        res.status(200).json(data)

    } catch (error) {
        res.status(500).send()
    }
}