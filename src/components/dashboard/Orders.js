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

    const [info, setData] = useState([]);

    useEffect(async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
   


    }, [])


    //////
    const rows = info.map(item => createData(
        item.id,
        item.id,
  item.email,
        "answered",
        item.username,
       item.address.street))
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
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.shipTo}</TableCell>
                            <TableCell>{row.paymentMethod}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                        </TableRow>
                    ))}
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
