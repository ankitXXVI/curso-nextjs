import { useState } from "react"

const NoteCard = ({data, handleChange, handleDelete}) => {

    const [noteTitle, setNoteTitle] = useState(data.title)
    const [noteData, setNoteData] = useState(data.note)

    return <>
        {
            !data.edit ?         
                <div className="short card" key={data.id}>
                    <div className="btn btn3" onClick={() => {handleDelete(data.id)}}></div>
                    <a href={`/${encodeURIComponent(data.id)}`}>
                        <h2>{noteTitle}</h2>
                    </a>
                    <p>{noteData.substring(0, 100)}</p>
                </div>
            :   
                <a className="short card" key={data.id}>
                    <div className="btn btn2" onClick={() => {handleChange(noteTitle, noteData)}}></div>
                    <h2 contentEditable onBlur={(e) => { setNoteTitle(e.target.innerHTML) }}>{noteTitle}</h2>
                    <textarea
                        className="text-input" 
                        onChange={(e) => {
                            setNoteData(e.target.value);
                        }}
                        placeholder="Write something..."
                    >
                    </textarea>
                </a>
        }
    </>
}

export default NoteCard