

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
function App() {
  
{/* <p>index is where html is hosted and it imports app so app is basically the anchor for 
  all the components you want to insert. press "alt+shift+r" to open the emmet bar and type 
  rafce and delete the import statement
</p> */}
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
   
  );
}



export default App;
 {/* inside return() everything is jsx. Its the combination of javascript and xml.
  jsx allows us to put javascript expressions in the code thats what makes it so powerful.
*/}




