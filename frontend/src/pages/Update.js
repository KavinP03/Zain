
import React,{ useState,useEffect } from 'react'
import { toast } from 'react-toastify'
import { CiEdit } from "react-icons/ci";
import './Update.css'
import { Link } from 'react-router-dom';

const Update = () => {
    const [productsItems,setProdcutsItems] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:6030/meow")
        .then((res)=>res.json())
        .then((data)=>
        setProdcutsItems(data))
        console.log(productsItems);
    },[]);

    const DeleteItems = (id)=>{
        fetch(`http://localhost:6030/cals/${id}`,{
            method:"DELETE"
        })
        .then((res)=>res.json())
        .then((data)=>{
            toast.error("deleted successfully");
            setProdcutsItems ((prevProductsItems) => prevProductsItems.filter((Item)=>Item._id!==id));
        }
    )}
  return (
    <div>
      <div className="card-body">
            <table>
                <div className="table1">
                    <tr>
                        <th>TITLE</th>
                        <th>IMAGE</th>
                        <th>DES</th>
                        <th>PRICE</th>
                        <th>SHOE TYPE</th>
                        <th>QUANTITY</th>
                        <th>ACTIONS</th>
                    </tr>
                    {productsItems.map((Item)=>(
                        <tr key={Item._id}>
                            <td>{Item.title}</td>
                            <td><img src={Item.img}/></td>
                            <td>{Item.des}</td>
                            <td>{Item.price}</td>
                            <td>{Item.food}</td>
                            <td>{Item.quantity}</td>
                            <button className="table1" placeholder='delete' onClick={()=>DeleteItems(Item._id)}>Delete</button>
                          <Link to={`/edit/${Item._id}`}>  <button><CiEdit /></button></Link>
                        </tr>

                    ))}
                </div>
            </table>
        </div>
      </div>
    
  )
}

export default Update
