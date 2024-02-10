import React, { useContext, useRef, useState } from 'react';
import NoteContext from '../contexts/note/notecontext';

import spinner from '../loadingSpinner.gif';
import NoteItem from './NoteItem';
import AddNote from './addnote';

function Notes() {
    const { notes, loading, updateNote } = useContext(NoteContext);

    const [note, setNote] = useState({})
    const ref = useRef()
    const refClose = useRef()

    const editNote = (currentNote) => {
        ref.current.click()
        setNote(currentNote)
    }

    const handleOnChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        refClose.current.click()
        updateNote(note)
    }

    return (
        <>
            <AddNote />

            <div>
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch modal
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={handleOnChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={handleOnChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tags" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="tags" name="tags" value={note.tags} onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {loading ? <div className="container text-center fixed-bottom my-5">
                <img src={spinner} alt="Loading..." />
                <p>Loading Notes...</p>
            </div> :
                <div>
                <h2>Your Notes</h2>
                    {notes ?
                        <div className="container my-3">
                            <div className="row">
                                {notes.notes.map((note, index) => (
                                    <div className="col-md-4" key={index}>
                                        <NoteItem note={note} editNote={editNote} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        :
                        <p>No Notes Found</p>}
                </div>
            }
        </>
    )
}

export default Notes
