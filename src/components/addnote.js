import { useContext, useState } from 'react'
import NoteContext from '../contexts/note/notecontext'
import alertContext from '../contexts/alert/alertcontext'

function AddNote() {
    const [note, setNote] = useState({ title: "", description: "", tags: "" })

    const { addNote } = useContext(NoteContext)
    const { showAlert } = useContext(alertContext)


    const handleOnChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleSaveNote = () => {
        if (localStorage.getItem('auth-token')) {
            if (note.title.length < 3 || note.description.length < 3 || note.tags.length < 3) {
                showAlert("Please fill in all fields with at least 3 characters", "danger");
            } else {
                addNote(note.title, note.description, note.tags);
                setNote({ title: "", description: "", tags: "" });
            }
        } else {
            showAlert("Please Login to add Notes", "danger");
        }
    }

    return (
        <div className="container my-3">
            <div className='d-flex justify-content-sm-between'>
                <h2>Add a Note</h2>
                <button onClick={handleSaveNote} className="btn btn-primary" value="rhebfvhgb" >Submit</button>
            </div>

            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Note Title</label>
                    <input type="text" className="form-control" id="title" name='title' value={note.title} placeholder="Your Title here" onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Note Description</label>
                    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Add a Tag</label>
                    <input type="text" className="form-control" id="tags" name='tags' value={note.tags} onChange={handleOnChange} />
                </div>
            </form>
        </div>
    )
}

export default AddNote
