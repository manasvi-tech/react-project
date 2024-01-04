import {useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa' /* importing trash can icon */

const Content = () => {
    const  [items, setItems] = useState([ /* Array that contains three objects */
    {
        id:1,
        checked:true,
        item:"One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
        id:2,
        checked:false,
        item:"Item 2",
    },
    {
        id:3,
        checked:false,
        item:"item 3"
    }
]);
const handleCheck = (id) =>
{
   const listItems = items.map((item)=>item.id ===id ? {...item,
checked : !item.checked } : item);
setItems(listItems);
localStorage.setItem('shoppinglist',JSON.stringify(listItems));
}    
/* uses the map method on the items array to create a new array (listItems) based on the existing items array.
 For each item in the array, it checks if the id matches the provided id. 
 If there's a match, it creates a new object using the spread operator ({ ...item }) to copy all existing
properties of the item and toggles the checked property using !item.checked. If there's no match, it simply
 returns the original item. */

const handleDelete= (id) => {
    const listItems = items.filter((item) => item.id !==id); 
   /*  uses the filter method to create a new array listItems that includes only the items
    whose id does not match the provided 'id'. In other words, it removes the item with the specified id from the array. */
    setItems(listItems);
localStorage.setItem('shoppinglist',JSON.stringify(listItems));
}
  
  return (
    <main>
        {items.length ? (
            <ul>
                {items.map((item)=>(
                    <li className='item' key={item.id}>
                        <input 
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked = {item.checked}
                        />
                        <label 
                            onDoubleClick={()=>handleCheck(item.id)}
                            style={(item.checked) ? {textDecoration:
                            'line-through'} : null}
                        >{item.item}</label>
                        <FaTrashAlt /* it was imported using react-icons */
                            onClick={() =>handleDelete(item.id)}
                            role='button ' 
                            tabIndex = '0' 
                        />
                    </li>
                ))}
            </ul>
        ) : (
            <p style ={{marginTop: '2rem'}}>Your list is empty</p>
        )}
    </main>
  )
}

export default Content