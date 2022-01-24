import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(
        0,
        "16 Mar, 2019",
        "what is work hours",
        "answered",
        "az2933",
        "from 4pm to 12 pm"
    ),
    createData(
        1,
        "16 Mar, 2019",
        "how pay by credit card",
        "answered",
        "fsweqeq",
       "can I change my account email"
    ),
    createData(
        2,
        "16 Mar, 2019",
        "if I subscribe to a new service can I get access to all promotion",
        "not answered",
        "mohammad1999",
       "yes you can"
    ),
    createData(
        3,
        "16 Mar, 2019",
        "how  change pick up information",
        "answered",
        "yasseng",
        "1- go to >>>>  2- click on >>>>>>>>>>>"
    ),
    createData(
        4,
        "15 Mar, 2019",
        "can I change my account email",
        "answered",
        "omar2222",
        "yes you can"
    )
];

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3)
    }
}));

export default function Orders() {
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
