// import logo from './logo.svg';
// import './App.css';
import React, { useState }  from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function createNotes (newNotes) {
  return <Note 
      key = {newNotes.id}
      title = {newNotes.title}
      content = {newNotes.content} />
};


var userIsRegistered = true;
const now = new Date().toLocaleTimeString();


function App() {

  const [items, setItems] = useState([])
  const [notes, setNotes] = useState([]);
 

        function addItem(inputText) {
          setItems( (prevItems) => {
            return [...prevItems, inputText];
          })
        }

        function deleteItem(id) {
          setItems( (prevItems) => {
            return prevItems.filter(
              (item, index) => {
                return index !== id;
              });
          })
        }

        function addNote(newNote) {
          setNotes(prevNotes => {
            return [...prevNotes, newNote];
          })
        }

        function deleteNote(id) {
          setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
              return index !== id;
            });
          })
        }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd = {addNote}
      />
      {notes.map((noteItem, index) => {
        return <Note key = {index} id = {index} title = {noteItem.title} content = {noteItem.content}  onDelete = {deleteNote} />
      })}
      <Footer />
    </div>
    )
  }

export default App;
