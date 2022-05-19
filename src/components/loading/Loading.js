import React from 'react'
import loading from '../../img/loading.jpg'
import './loading.css'
import complete from '../../img/complete.png'
export default function Loading() {
    let condition=true
    let load =()=>{
        if(condition){
            return <img src={loading} />
        }
        else {
            return <img src={complete} />
        }
    }
  return (
      <div>
{load()}
      </div>
  )
}
