
import { useState } from 'react'
import Header from './Header'
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
function App() {
  
{/* <p>index is where html is hosted and it imports app so app is basically the anchor for 
  all the components you want to insert. press "alt+shift+r" to open the emmet bar and type 
  rafce and delete the import statement
</p> */}
  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
        id: 2,
        checked: false,
        item: "Item 2"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    }
  ]);
  const[newItem,setNewItem] = useState('')

  const[search,setSearch] = useState('') //empty Strings

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const addItem = (item) =>{ 
    const id = items.length ? items[items.length-1].id +1 : 1;
    const myNewItem = {id,checked:false,item};
    const listItems = [...items,myNewItem]
    setAndSaveItems(listItems)  //saves the new changes
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item); /* map through the items array and if you find 
    the id corresponding to the one clicked make the check mark as marked */
    setAndSaveItems(listItems);  //set the listItems. 
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
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
        search.toLowerCase()))} //used for search feature if there is change it will be re-rendered and the items that match the searchbox will only be visible
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
   
  );
}



export default App;
 {/* inside return() everything is jsx. Its the combination of javascript and xml.
  jsx allows us to put javascript expressions in the code thats what makes it so powerful.
*/}




