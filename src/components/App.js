import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import react ,{useState ,useEffect} from "react";

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts]=useState([]);

  const addContactHandler=(contact)=>{
    console.log(contacts)
    setContacts([...contacts, contact]);
  }
  useState(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts]);
  return (
    <div className=''>
    <Header/>
    youtube video time 38:22 <br/>
    https://www.youtube.com/watch?v=0riHps91AzE&ab_channel=DipeshMalvia      <AddContact addContactHandler={addContactHandler}/>
     <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
