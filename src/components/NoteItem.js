import { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import NoteContext from "../contexts/note/notecontext";
const NoteItem = (props) => {
    const { note, editNote } = props;
    const { deleteNote } = useContext(NoteContext);

    const handleUpdate = () => {
        editNote(note)
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure?")) {
            deleteNote(note.notes_id);
        }
    };

    return (
        <>
            <div className="card my-1 position-relative">
                <span className="z-1 position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger">
                    {note.tags}
                </span>
                <span class="visually-hidden">Note tag</span>
                <div className="card-body">
                    <div className="note">
                        <div className="d-flex justify-content-sm-between">
                            <h4>{note.title}</h4>
                            <div>
                                <FaRegEdit className="mx-1" onClick={handleUpdate} />
                                <AiOutlineDelete className="mx-1" onClick={handleDelete} />
                            </div>
                        </div>
                        <p>{note.description}</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default NoteItem;
