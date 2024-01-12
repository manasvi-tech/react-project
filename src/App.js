
import { useState,useEffect } from 'react'
import Header from './Header'
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
function App() {

  const API_URL='http://localhost:3500/items'

const [items, setItems] = useState(
  JSON.parse(localStorage.getItem('shoppinglist')) ?? []
); //"??" uses the value next to it when the value before it becomes null otherwise gets items from the local storage

  const[newItem,setNewItem] = useState('')

  const[search,setSearch] = useState('') //empty Strings

  useEffect(()=>{
    localStorage.setItem('shoppinglist', JSON.stringify(items));  
  },[items])


  const addItem = (item) =>{ 
    const id = items.length ? items[items.length-1].id +1 : 1;
    const myNewItem = {id,checked:false,item};
    const listItems = [...items,myNewItem]
    setItems(listItems)  //saves the new changes
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item); 
    setItems(listItems);  //set the listItems. 
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem); //the value that was passed
    setNewItem(' ')
  }

  return (
    <div className="App">
      <Header />
      <SearchItem
      search={search}
      setSearch={setSearch}>
        
      </SearchItem>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        />
      <Content items={items.filter(item => ((item.item).toLowerCase()).includes(
        search.toLowerCase()))} 
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
   
  );
}



export default App;
 



