import React from "react";

export default function Footer() {
  return (
    <>
    <div className="position-relative bottom-0"> 

     <div className="container mt-3 border border-primary ">
       <div className="row mx-3 mt-3 mb-3">
           
           <div className="col-3 mx-auto my-auto">
               <a href='#' >
               <i className="fa fa-instagram text-danger" style={{fontSize:"30px"}}> </i>
               <p className='text-danger'>instagram</p>
               </a>

           </div>
           <div className="col-3 mx-auto">
               <a href='#' >
               <i className="fa fa-facebook text-danger" style={{fontSize:"30px"}}> </i>
               <p className='text-danger'>facebook</p>
               </a>

           </div>
           <div className="col-3 mx-auto">
               <a href='#' >
               <i className="fa fa-github text-danger" style={{fontSize:"30px"}}> </i>
               <p className='text-danger'>github</p>
               </a>

           </div>
           <div className="col-3 mx-auto">
               <a href='#' >
               <i className="fa fa-linkedin text-danger" style={{fontSize:"30px"}}> </i>
               <p className='text-danger'>linkedin</p>
               </a>

           </div>
       </div>
 
     </div>
     </div>
    </>
  );
}
