import React from 'react'
import pic from '../images/copyimg.jpg'

export default function Copyimg() {
  return (
    <div>
      <button className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'><img src={pic} alt="my image" style={{width:'10px',height:'auto',marginRight:'0'}}/></button>
    </div>
  )
}
