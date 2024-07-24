import React, { useEffect, useState } from 'react'
import { Avatar, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { deleteProduct, getAllProduct } from '../apis/Index';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function MyTable() {

    const [lists, setLists] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        let res = await getAllProduct();
        setLists(res.data)
    };

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            let updatedList = lists.filter((list) => list._id !== id);
            setLists(updatedList);
            toast.success("Delete Success")
        } catch (error) {
            toast.error("Delete Failed")
        }
    };


    const handleEdit = async (id) => {
        navigate('/edit-form')
    }

    return (
        <div>
            <Container sx={{ padding: 5 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Sl.no</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {lists.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell><Avatar alt={row.title} src={row.image} /></TableCell>
                                    <TableCell>{row.title}</TableCell>
                                    <TableCell>{row.category}</TableCell>
                                    <TableCell>{row.quantity}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell><Button onClick={() => { handleEdit(row._id) }}>Edit</Button></TableCell>
                                    <TableCell><Button onClick={() => { handleDelete(row._id) }}>Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}
