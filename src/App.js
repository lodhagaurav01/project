
import { useState } from 'react';
import './App.css';
import Copyimg from './components/Copyimg';
import Navbar from './components/Navbar';
import Textbar from './components/Textbar';

function App() {


  let text="Welcome  Welcome to the EasyPython!! interactive Python tutorial. Whether you are an experienced programmer or not, this website is intended for everyone who wishes to learn the Python programming language.  You are welcome to join our group on Facebook for questions, discussions and updates. After you complete the tutorials, you can get certified at LearnX and add your certification to your LinkedIn profile. Just click on the chapter you wish to begin from, and follow the instructions. Good luck!" 
  let text1="Welcome dddddddddddddddd  Welcome to the EasyPython!! interactive Python tutorial. Whether you are an experienced programmer or not, this website is intended for everyone who wishes to learn the Python programming language.  You are welcome to join our group on Facebook for questions, discussions and updates. After you complete the tutorials, you can get certified at LearnX and add your certification to your LinkedIn profile. Just click on the chapter you wish to begin from, and follow the instructions. Good luck!" 
  let text2="Welcome  ssssssssssssssssss Welcome to the EasyPython!! interactive Python tutorial. Whether you are an experienced programmer or not, this website is intended for everyone who wishes to learn the Python programming language.  You are welcome to join our group on Facebook for questions, discussions and updates. After you complete the tutorials, you can get certified at LearnX and add your certification to your LinkedIn profile. Just click on the chapter you wish to begin from, and follow the instructions. Good luck!" 


  const [mode,setmode]=useState('light')

  const togglemode=()=>{
    if(mode=== 'light'){
      setmode('dark')
      document.body.style.background="#666666"}
      
    else{
      setmode('light')
      document.body.style.background='white'
      
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={togglemode} />
 
    <Textbar mode={mode} basiccolor='orange' text={text}  id="one" />

    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
        <Textbar mode={mode}  basiccolor='red' text={text1} id="two"/>
        {/* <Textbar mode={mode} /> */}
        </div>
        <div className="col-6">
        <Textbar mode={mode} basiccolor='green' text={text2} id="three"/>
        </div>
      </div>
    </div>
    {/* <Copyimg/> */}
    </>
  );
}

export default App;
