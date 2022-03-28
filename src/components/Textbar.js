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
                
                <button type="button" class="btn btn-outline-dark" style={{
                   
                   display: "flex",
                   justifyContent:"flex-end",
                    // position: "absolute",
                    // margin:'0 auto'
                    right:'0'
                  // left:'50px'
                  //  alignItems:"end"
                   
                    
                  }}
                  onClick={copytxt}>Copy</button> 
                {/* <button  >copy</button> */}
                  {/* </div> */}
                  
               
          {/* console.log(props.mode); */}
      <div className='myid'>  
      {/*  */}
        
      
        <p id={props.id}>{props.text}</p>
        {/* <Copyimg /> */}
        <div>
        
      
    </div>
        
</div>  
      </div>
     
      
    </>
  )
}
