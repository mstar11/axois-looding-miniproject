import React ,{useState} from "react";




const FinalPage = (props)=>{


    return <>
      <div >{props.data.map((item,index)=>{
          return <div key={index}>{item.title}</div>
        })}</div>

    </>
}
export {FinalPage} ;