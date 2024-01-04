import {useState} from 'react';

const Content = () => {
    const  [name, setName] = useState('Dave');

    
  const nameChangeHandler = () => {
    const names = ['Manasvi','Sanya','Dave'];
    const num = Math.floor(Math.random()*3);
    setName(names[num]);
  }
  const handleClick = () =>{
    console.log('You clicked the button');
    }
  const handleClick2 = (name) =>{
    console.log(`${name} was clicked `);
    }
  const handleClick3 = (e) =>{
    console.log(e.target.innerText);
    }
  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name} {/* here it is called immediately */}
            </p> 
        <button onClick={nameChangeHandler}>Change Name</button> {/* this works without brackets */}
        <button onClick={() => handleClick2('Dave')}>Click</button>{/*  this isnt called immediately even though it has brackets
        because its inside the anonymous function which is activated on the click of the button */}
        <button onClick={(e) => handleClick3(e)}>Click</button>
    </main>
  )
}

export default Content