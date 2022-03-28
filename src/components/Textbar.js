import React from 'react'
import pic from '../images/copyimg.jpg'



export default function Textbar(props) {

    let mystyle={
        color:props.mode==='dark'?'white':'white',
        backgroundColor:props.mode==='dark'?'#042743':props.basiccolor,
    }

    const copytxt=() =>{
      // var text1=document.getElementsByClassName('myid');
      // var text1=document.getElementById(`${props.id}`);
      // console.log(text1);
      // text1.value.select();
      // // text1.setSelectionRange(0,999);
      // navigator.clipboard.writeText(text1.value)
      // document.getSelection().removeAllRanges()
      // props.showAlert("You have copy the text ","success")

      var r = document.createRange();
      r.selectNode(document.getElementById(`${props.id}`)); 
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(r);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      
      // document.selection.empty();;
     
    }
  return (
    <>
      <div className="container-fluid mt-3 border border-danger" style={mystyle}>
      {/* <div  */}
                <div className="d-flex justify-content-end" style={{right:'-50'}}>
                <button type="button" className={`btn btn-outline-${props.mode==='dark'?'danger':'dark'} bg-${props.mode==='dark'?'#042743':props.basiccolor}` } style={{position:'absolute',width:'10',height:'auto'  
                  }}
                  onClick={copytxt}>Copy</button> </div>
                
                  
               
        
      
        <p id={props.id} >{props.text}</p>
       
      </div>
     
      
    </>
  )
}
