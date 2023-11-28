import React from 'react';
import './App.css';
import Header from './header';
import AddContact from './addContact';
import contactCard from './contactCard';
import ContactList from './contactList';
function App() {
  const contacts=[
    {
      id:"1",
      name: "Siddharth",
      email:"sidd@Sid.sid",

    },
    {
      id:"2",
      name: "Nikesh",
      email:"sid@Sid.sid",

    },
    
  ]
  return (
    <div className='ui container'>
       <Header />
       <AddContact />
       <ContactList contacts={contacts}/>
    </div>
    
   
  );
}

export default App;
