import { useContext, useEffect, useState } from "react";
import NoteContext from "./notecontext";
import alertContext from "../alert/alertcontext";

const NoteState = (props) => {
  const { showAlert } = useContext(alertContext)

  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(false)

  const jwt = localStorage.getItem('auth-token')

  const fetchNotes = async () => {
    try {
      setLoading(true)
      const url = "https://i-notebook-backend-sandy.vercel.app:4000/api/v1/notes/getNotes";

      const headers = {
        'Accept': '*/*',
        'auth-token': jwt,
        'Content-Type': 'application/json',
      };

      const response = await fetch(url, { headers });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setNotes({ notes: data.notes });
      setLoading(false)
    } catch (error) {
      console.log(`Error fetching notes: ${error.message}`);
    }
    setLoading(false)
  };

  const addNote = async (title, description, tags) => {
    let url = "https://i-notebook-backend-sandy.vercel.app:4000/api/v1/notes/addNotes"

    const method = "POST"

    const headers = {
      'auth-token': jwt,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const body = JSON.stringify({
      title: title,
      description: description,
      tags: tags
    })

    const response = await fetch(url, { method, headers, body });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    showAlert( "Added Note Successfully", "success")
    await fetchNotes()
  }

  const updateNote = async (editNote) => {
    const url = `https://i-notebook-backend-sandy.vercel.app:4000/api/v1/notes/updateNotes/${editNote.notes_id}`

    const method = 'PUT'
    const headers = {
      'Accept': '*/*',
      'auth-token': jwt,
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      title: editNote.title,
      description: editNote.description,
      tags: editNote.tags,
    })

    const response = await fetch(url, { method, headers, body });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    await response.json();

    showAlert( "Updated Note Successfully", "success")
    await fetchNotes()
  }

  const deleteNote = async (notes_id) => {
    const url = `https://i-notebook-backend-sandy.vercel.app:4000/api/v1/notes/deleteNotes/${notes_id}`

    const method = 'DELETE'
    const headers = {
      'Accept': '*/*',
      'auth-token': jwt,
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, { method, headers });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    await response.json();
    showAlert("Deleted Note Successfully", "success")
    await fetchNotes()
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <NoteContext.Provider value={{ loading, notes, fetchNotes, addNote, updateNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
