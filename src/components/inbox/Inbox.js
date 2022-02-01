import React from "react";
import MaterialTable from "material-table";


export default function Inbox() {

const data=[

    {Name:"ahmed" , Email:"ahmed@gmail.com", Question:"hello? " , Date:"1/24/2022"},
    {Name:"khlid" , Email:"khild@gmail.com", Question:" can i get help? " , Date:"4/1/2022"},
    {Name:"ali" , Email:"ali@gmail.com", Question:"where is my dlivery?  " , Date:"5/1/2022"}
]

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