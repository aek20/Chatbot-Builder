import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import {useState,useEffect} from "react"

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3)
    }
}));
// generate order data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}
export default function Orders() {
let arrData=[""]
    const [info, setData] = useState([{}]);
const [questions ,setQuestions]=([])
    useEffect(async () => {
try{
    await fetch('http://localhost:4053/show/dashboard', {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            console.log('hi')
            setData(json);
        })
} catch(err){
console.log(err)
}
  



    }, [])


    // //////
    // const rows = info.map(item => createData(
    //     item.chatbotname,
    //     item.email
    //  ))
   
      
    const classes = useStyles();
    return (

        <React.Fragment>
            <Title>Recent Questions</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>DATE</TableCell>
                        <TableCell>question</TableCell>
                        <TableCell>state</TableCell>
                        <TableCell>user </TableCell>
                        <TableCell align="right">answer</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
               
                        <TableRow key={info}>
                            <TableCell>{info}</TableCell>
                          {/* <TableCell>{info.email}</TableCell> */}
                          
                        
                        {/* <TableCell>{info.questions.stories}</TableCell>  */}
                
                       
                       
                        {/* {info.questions.map(row => (<TableCell>{row}</TableCell>))}  */}
                            {/* <TableCell>{row.paymentMethod}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>  */} 
                        </TableRow> 
                   
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="javascript:;">
                    See more orders
                </Link>
            </div>
    
        </React.Fragment>
    );
}
