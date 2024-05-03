import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../Services/ApiService';
import { Box, Button, Paper, Typography } from '@mui/material';
import BookCard from './BookCard';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
const ListContainar = styled(Box)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
`

const BookList = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksData = await getAllBooks();
                setBooks(booksData);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className='page_wrapper'>
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', height: '100vh', mb: 2, padding: 5, backgroundColor: '#ddd' }}>
                    <Header>
                        <Typography sx={{ fontWeight: 600 }} variant="h5" id="listTitle" component="div">Book List</Typography>
                        <Button className='custom_button' variant="contained" onClick={() => navigate('add')}>Add Book</Button>
                    </Header>
                    <ListContainar>
                        {books && books.map(({ _id, title, author, publishedYear, imageUrl }, index) =>
                            <BookCard key={index} _id={_id} title={title} author={author} publishedYear={publishedYear} imageUrl={imageUrl} setBooks={setBooks} />)
                        }
                    </ListContainar>
                </Paper>
            </Box>
        </div>
    );
};

export default BookList;
