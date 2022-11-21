import query from "../../../lib/db";

export default async function handler(req,res){

    if(req.method !== 'DELETE') {
        req.status(405).send()
    }

    try {
        const data = await query({
            query: 'DELETE FROM notes WHERE id = ?',
            values: [ req.body.id ]
        })

        res.status(200).json({message: 'ok'})

    } catch(error) {
        res.status(500).send()
    }
}