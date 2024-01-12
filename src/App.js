
import { useState,useEffect } from 'react'
import Header from './Header'
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
function App() {

  const API_URL='http://localhost:3500/items'

const [items, setItems] = useState([]); 
  const[newItem,setNewItem] = useState('')

  const[search,setSearch] = useState('') //empty Strings
  const [fetchError,setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    
    const fetchItems = async () =>{
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error ("Did not recieve expected data")
        const listItems = await response.json();
        
        setItems(listItems)
        setFetchError(null)
      } catch (err){
       
        setFetchError(err.message)
      } finally{
        setIsLoading(false);
      }
      
    }
    setTimeout(() => {
      (async () => await fetchItems())(); /* This is an asynchronous arrow function. The async keyword indicates that the function will contain asynchronous operations, and the await fetchItems() part means that the function will wait for the completion of the asynchronous fetchItems function. */
    },2000)

    
  },[])


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
        <main>
          {isLoading && <p> Loading Items..</p>}
          {fetchError && <p style={{color: 'red'}}>{`Error : ${fetchError}`}</p>}
          {!fetchError && !isLoading && <Content items={items.filter(item => ((item.item).toLowerCase()).includes(
          search.toLowerCase()))} 
          handleCheck={handleCheck}
          handleDelete={handleDelete}/>}
      </main>
      <Footer length={items.length}/>
    </div>
   
  );
}



export default App;
 



