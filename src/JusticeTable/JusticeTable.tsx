import React, {useEffect} from "react";
import {header, justiceTableRowType, Soldier} from "../App/types/types";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel} from "@mui/material";
import {headers} from "./Config/consts";
import styles from './styles.module.css';

type Props = {
    Soldiers: Soldier[]
};

const R = require('ramda');
const optionsPerPage = [10, 20, 30];

const mapRawSoldiersToObjects = (data: Soldier[]) => {
    return data?.map((soldier): justiceTableRowType => {
        return {
            personalNumber: soldier?.personal_number,
            name: `${soldier?.first_name} ${soldier?.last_name}`,
            mador: soldier?.mador,
            points: soldier?.points,
            rank: soldier?.rank,
            serviceType: soldier?.service_type
        };
    });
};

const JusticeTable: React.FC<Props> = ({Soldiers}) => {
    const [tableData, setTableData] = React.useState<justiceTableRowType[]>(mapRawSoldiersToObjects(Soldiers));
    const [page, setPage] = React.useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    const [filteredRows, setFilteredRows] = React.useState(tableData);
    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, tableData?.length);
    const [tableHeadersObjects, setTableHeadersObjects] = React.useState<header[]>(headers);

    useEffect(() => {
        setPage(0);
        setFilteredRows(tableData.slice(from, to));
        console.log('render - useEffect');
    }, [itemsPerPage, tableData]);

    useEffect(() => {
        setFilteredRows(tableData.slice(from, to));
    }, [page]);

    const sortByHeader = (header: header) => {
        let updatedHeaders: header[] = tableHeadersObjects;
        let updatedHeader: header = header;
        updatedHeader.isAscending = !updatedHeader.isAscending;
        updatedHeaders[updatedHeaders.findIndex((value) => value.propertyName === header.propertyName)] = updatedHeader;

        setTableHeadersObjects(updatedHeaders);
        const sortByPropFunction = R.sortBy(R.prop(header.propertyName));
        const sortedArray = sortByPropFunction(tableData);
        setTableData(header.isAscending ? sortedArray : R.reverse(sortedArray));
    };

    const tableRows = filteredRows.map((row) => {
        return (<TableRow key={row.personalNumber}>
            <TableCell align={"center"}>{row.name}</TableCell>
            <TableCell align={"center"}>{row.mador}</TableCell>
            <TableCell align={"center"}>{row.points}</TableCell>
            <TableCell align={"center"}>{row.rank}</TableCell>
            <TableCell align={"center"}>{row.serviceType}</TableCell>
        </TableRow>)
    });

    const tableHeaders = tableHeadersObjects.map((header) => {
        return (
            <TableCell key={header.propertyName} align="center" onClick={() => sortByHeader(header)}
                       className={styles.centeredContent}
                       sortDirection={header.isAscending ? "asc" : "desc"}>
                <TableSortLabel active={true} direction={header.isAscending ? "asc" : "desc"}/>
                {header.displayName}
            </TableCell>
        );
    });

    return (
        <TableContainer component={Paper} className={styles.container} elevation={4}>
            <Table className={styles.table} aria-label="simple table" dir={"rtl"}>
                <TableHead>
                    <TableRow>
                        {tableHeaders}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableRows}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default JusticeTable;
