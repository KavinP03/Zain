import React from 'react'
import './Upload.css'
import 'react-toastify/ReactToastify.css'
import {toast,ToastContainer} from 'react-toastify';

const Upload = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const des=form.des.value;
        const food=form.food.value;
        const quantity=1;

        if (title ===""|| img===""|| price===""||des===""||food===""||quantity==="")
        {
            toast.warn("Fill the required fields")
        }
        const foodObj = {title,img,price,des,food,quantity};
        console.log(foodObj)

        fetch("http://localhost:6030/cas",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(foodObj)
        })
        .then ((res)=> res.json())
        .then((data)=>{
            toast.success("data added successfully")
            form.reset()
            window.location.href='/update';
        })
    }
  return (
    <div>
      <ToastContainer/>
      <div className="card upload">
      <div className='card-body upload3'>
        <form onSubmit={handleSubmit}>
          <h2>UPLOAD</h2>
          <div className='up'>
          <div className='upl1'>
            <label value="title">Title</label><br/>
            <input type='text' name="title"></input>
          </div>
          <div className='upl1'>
            <label value="img">Img</label><br/>
            <input type='img' name="img"></input>
          </div>
          <div className='upl1'>
            <label value="price">Price</label><br/>
            <input type='text' name="price"></input>
          </div>
          <div className='upl1'>
            <label value="des">Des</label><br/>
            <input type='text' name="des"></input>
          </div>
          <div className='upl1'>
            <label value="food">Food</label><br/>
            <input type='text' name="food"></input>
          </div>
          <div className='upl1'>
            <button type="submit">Submit</button>
          </div>
          </div>
        </form>
      </div>
     </div>
        
      
    </div>
  )
}

export default Upload
