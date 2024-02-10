import { useContext, useEffect } from 'react';
import Notes from '../components/Notes';
import NoteContext from '../contexts/note/notecontext';

const Home = () => {
  const { fetchNotes } = useContext(NoteContext)

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <>
      <Notes />
    </>
  );
};

export default Home;
