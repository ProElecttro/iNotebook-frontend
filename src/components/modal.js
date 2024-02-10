// import { useContext, useEffect, useRef, useState } from "react";
// import NoteContext from "../contexts/note/notecontext";

// function Modal(props) {
//     const { note, modal } = props;
//     const [ newNote, setnewNote ] = useState( note );

//     const { updateNote } = useContext(NoteContext);

//     const ref = useRef()

//     if(modal.isModal){
//         ref.current.click()
//         modal.setIsModal(false)
//     }

//     const handleSubmit = () => {
//         updateNote( newNote )
//         ref.current.click()
//     }

//     const handleOnChange = (event) => {
//         setnewNote({
//             ...newNote, 
//             [event.target.name]: event.target.value
//         })
//     }

//     useEffect(() => {
//         setnewNote(note);
//     }, [note]);    

//     return (
//         <div>
//             <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
//                 Launch modal
//             </button>

//             <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <div className="mb-3">
//                                 <label htmlFor="title" className="form-label">Title</label>
//                                 <input type="text" className="form-control" id="title" name="title" value={newNote.title} onChange={handleOnChange} />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="description" className="form-label">Description</label>
//                                 <input type="text" className="form-control" id="description" name="description" value={newNote.description} onChange={handleOnChange} />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="tags" className="form-label">Tag</label>
//                                 <input type="text" className="form-control" id="tags" name="tags" value={newNote.tags} onChange={handleOnChange} />
//                             </div>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Modal
