//rafce is the shortcut. Delete the first line
const SearchItem = ({search,setSearch}) => {
  return (
    <form action="" className="searchForm" onSubmit={(e)=> e.preventDefault()}> {/* prevent Default prevents the page
     from reloading when submit is clicked or enter is pressed */}
        <label htmlFor="search">Search</label>
        <input 
            id="search"
            type="text"
            role="searchbox" 
            placeholder="Search Items"
            value={search}
            onChange={(e)=>setSearch(e.target.value)} //e is the event object that is being handled to the event handler function.
            /* This event object (e in this case) contains information about the event, such as the target element and the value of the input field that triggered the event. */         />

    </form>
  )
}

export default SearchItem
