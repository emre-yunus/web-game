import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import {useState} from "react";

export function LeaderBoardContent(props) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const columns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'bottleAmount',
            label: 'Bottles',
            minWidth: 170,
            format: (value => value.toLocaleString('nl-BE')),
        },
        {
            id: 'capitalAmount',
            label: 'Total Capital (current + spent)',
            minWidth: 170,
            format: (value) => value.toLocaleString('nl-BE'),
        },
        {
            id: 'score',
            label: 'Score (bottles + total capital)',
            minWidth: 170,
            format: (value) => value.toLocaleString('nl-BE'),
        },
    ];

    //TODO: Take data from database and put name, bottleAmount, totalCapitalAmount (--> is current capital and
    // capital spent) in rows
    // AND SORT BY SCORE! (--> maybe give id and use id as key)
    function createData(name, bottleAmount, capitalAmount) {
        const score = bottleAmount + capitalAmount;
        return {name, bottleAmount, capitalAmount, score};
    }
    const rows = [
        createData('Emre', 5560, 1354),
        createData('Ahmet', 452, 500365),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
        createData('Mehmet', 0, 3973),
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={2}>
                            Name
                        </TableCell>
                        <TableCell align="center" colSpan={3}>
                            Details
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ top: 57, minWidth: column.minWidth }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            page={page}
            count={rows.length}
        />
    </Paper>
}