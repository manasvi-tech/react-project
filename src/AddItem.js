import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';
const AddItem = ({newItem,setNewItem,handleSubmit}) => {
    const inputRef = useRef()

  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem"> Add Item </label>
        <input 
            autoFocus
            ref={inputRef}
            id="addItem"
            type="text" 
            placeholder="Add Item"
            required
            value={newItem} //will pass it to newItem
            onChange={(e) => setNewItem(e.target.value)} //as we type in this 
            //field it will set the new state for the new item.
            />
        <button
            type="submit"
            aria-label="Add Item"
            onClick={()=>inputRef.current.focus()}>  {/* to get the focus back on the type text area. read more about it */}  
            <FaPlus/>

        </button>

    </form>
  )
}

export default AddItem
