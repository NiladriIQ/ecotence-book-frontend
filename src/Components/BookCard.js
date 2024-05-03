import React from 'react'
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import { deleteBook, getAllBooks, getBookById } from '../Services/ApiService';
import { useNavigate } from 'react-router-dom';


const HeadContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const BookCard = ({ _id, title, author, publishedYear, imageUrl, setBooks }) => {
    const navigate = useNavigate();

    const handelClick = async (type) => {
        switch (type) {
            case 'edit':
                try {
                    const book = await getBookById(_id);
                    navigate(`${_id}/edit`, { state: { book: book } })
                } catch (error) {
                    console.error('Error deleting book:', error);
                }
                break;
            case 'delete':
                try {
                    const res = await deleteBook(_id);
                    window.alert(res);
                    const booksData = await getAllBooks();
                    setBooks(booksData);
                } catch (error) {
                    console.error('Error deleting book:', error);
                }
                break;

            default:
                break;
        }
    }
    return (
        <Card sx={{ maxWidth: 345, minWidth: 297 }}>
            <CardMedia
                component="img"
                height="140"
                // image={'imageUrl'}
                image={'https://picsum.photos/id/237/200/300'}
                alt={title}
            />
            <CardContent>
                <HeadContainer>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Box>
                        <IconButton aria-label="Edit" onClick={() => handelClick('edit')}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="Delete" onClick={() => handelClick('delete')}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </HeadContainer>
                <Typography variant="body2" color="text.secondary">
                    By {author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Published Year: {publishedYear}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default BookCard