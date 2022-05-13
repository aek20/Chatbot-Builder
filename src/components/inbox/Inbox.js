import React from "react";
import MaterialTable from "material-table";
import "./inbox.css"
import { useState, useEffect } from "react";
export default function Inbox() {


    //
    const [info, setData] = useState([{}]);

    useEffect(async() => {

        await fetch('http://localhost:4173/show/inbox')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setData(json.questions.userQuestions);
            })
  


    }, [])
const data= info.map(item => (
    { Name: item.question, Email: item.date, Question: item.answer , Date:item.status}  ))
    
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