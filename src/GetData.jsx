import React ,{useState} from "react"
import Looding from "./Loding"
import axios from 'axios'
import "./Card.css"


const GetData = ()=>{
    const [data,setData] = useState([])
    const [looding,setLoding] = useState (false); 
    const [valid,setvalid]= useState(false);
    const [isvalid,seIsValid] = useState(false)
    const getData= async ()=>{
        setLoding(true)
      try{
          const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos")
          setData (data)
          if(data){
              console.log(data)
              setLoding(false)
              setvalid(true)
              seIsValid(false)

              

            }
        }catch (er){
            console.log("somthing wrrong")
            seIsValid(true)
        }
    }
    console.log(looding)
        return <>
        <div >
       
        {!looding ? <button className="btn1" onClick={getData} style={{display:!valid ?"block" : "none"}}>Get List </button> : null }
        {isvalid ? <button className="btn1" onClick={getData} style={{display:!valid ?"block" : "none"}}>Get List </button> : null }

        
        <span className="error"> {isvalid ? "SomthingWrong !!" : null}  </span>

       
        {looding ? <Looding loding={looding} setLoding={setLoding}/> : null }
       
        {looding ?  null : <div className="cardf">{data.map((item,index)=>{
            return <div className="card" key={index}>
            <h1>{item.id}</h1>

            <div className="wrppaer-p">
                <p className={item.completed ? "p_don" : "p_undon" }> {item.title} </p>
            </div>
            <div className="btn">
                <button className={item.completed ? "r" : ["r-hiden"]} onClick={()=>{
                    setData((last)=>{
                        let p =[...last]
                        p.splice(index,1)
                        return p
                    })

                }}>Delete</button>
                <button className={item.completed ? "g" : "r"}
                
                onClick={()=>{
                    const state = item.completed
                    setData((last)=>{
                        let p = [...last]
                        p[index].completed = !state
                        return p
                    })
                }}
                >{item.completed ? "unDon" : "Don"}</button>

            </div>
            
            </div>
        })}</div>  }
        </div>
    
    
        </>
}

export default GetData ;