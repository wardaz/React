import './App.css';
import AutoLayoutExample from './components/Containers';
import Find from './components/find';
import BasicExample from './components/card';
// import MYSLIDER from "./components/slider";
import Card2 from './components/card2';


function App() {
  return (
   <>
   <div class="first">
   <h1>TOP COMPANIES</h1>
   <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
  
   <AutoLayoutExample/>
   
  
   </div>

<div className='mb-5 second'>
   <h1>NEW JOBS</h1>
   <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
   <BasicExample/>
   </div>

<div className='bottom' style={{height: "326px" , width: "1315px" , alignSelf:"center", margin:"auto"}}><Find/></div>
   

    <div className='third'>
   <h1>READY TO JOIN</h1>
   <p>Featured employees profile</p>
   <Card2/>
   </div>
   

   </>
  );
}

export default App;
