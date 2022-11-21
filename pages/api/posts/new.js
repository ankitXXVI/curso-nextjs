import query from "../../../lib/db";

export default async function handler(req, res){

    if(req.method !== 'POST'){
        res.status(405).send();
    }

    try {
        const data = await query({
            query: 'INSERT INTO notes (title, note) VALUES (?, ?)',
            values: [req.query.title, req.query.note]
        });
        
        res.status(200).json(data)

    } catch (error) {
        res.status(500).send()
    }
}