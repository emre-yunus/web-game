import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import {useEffect, useState} from "react";
import {getCollectionFromDb} from "../services/firestoreCollection";

const COLLECTION_USERS = "users";

export function LeaderBoardContent(props) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [usersFromDb, setUsersFromDb] = useState([]);

    const loadUsers = async () => {
        const users = await getCollectionFromDb(COLLECTION_USERS);
        setUsersFromDb(users);
    }

    useEffect(() => loadUsers(), []);

    //console.log(usersFromDb);

    //usersFromDb.map(u => (console.log(u)));

    const columns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'bottleAmount',
            label: 'Bottles',
            minWidth: 170,
            format: (value => value.toLocaleString('en-US')),
        },
        {
            id: 'totalCapital',
            label: 'Total Capital (current + spent)',
            minWidth: 170,
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'score',
            label: 'Score (bottles + total capital)',
            minWidth: 170,
            format: (value) => value.toLocaleString('en-US'),
        },
    ];

    // userFromDb adds score value to every user, then the array gets sorted by score (descending) --> leaderboard now puts best player on top
    const rows = usersFromDb.map((u, i) => ({
        ...u,
        score: u.bottleAmount + u.totalCapital
    })).sort((a, b) => parseFloat(b.score) - parseFloat(a.score));

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
                        .map((row, key) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={key}>
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