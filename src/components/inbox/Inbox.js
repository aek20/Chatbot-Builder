import React from "react";
import MaterialTable from "material-table";
import "./inbox.css"
import { useState, useEffect } from "react";
export default function Inbox() {


    //
    const [info, setData] = useState([]);

    useEffect(async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
        console.log("hi nigga")


    }, [])
const data= info.map(item => (
    { Name: item.name, Email: item.email, Question: item.username , Date:item.id}  ))
    
const columns =[

    {
        title:'Name', field:'Name'


    },
    {
        title:'Email', field:'Email'   
    },

    {
        title:'Question', field:'Question'   
    },
    {
        title:'Date', field:'Date'   
    }
]

    return(<div>

           <MaterialTable title="Inbox" 
            data={data}
            columns={columns}
            />

    </div>)
}