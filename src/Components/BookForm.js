import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, styled, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { addBook, updateBook } from '../Services/ApiService';



const BackButton = styled(Button)`
    color: #fff; 
    border-radius: 20px;
`

const BookForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [book, setBook] = useState({
        title: '',
        author: '',
        publishedYear: '',
        _id: null
    });

    const { register, setValue, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            title: book?.title,
            author: book?.author,
            publishedYear: book?.publishedYear
        },
        mode: "onTouched",
    });

    useEffect(() => {
        if (location?.state) setBook(location.state.book);
    }, [location]);

    useEffect(() => {
        if (book) {
            setValue('title', book.title);
            setValue('author', book.author);
            setValue('publishedYear', book.publishedYear);
        }
    }, [book]);

    useEffect(() => {
        const subscription = watch((value) => console.log("Form Value ----->", value));
        return () => subscription.unsubscribe();
    }, [watch]);

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setBook({ ...book, title: e.target.value })
    }

    const onSubmit = async (formVal) => {
        console.log("Form Submitted ===>", formVal, 'book ===>', book);
        try {
            let res;
            if (location?.state) {
                res = await updateBook(book._id, book);
            }
            else {
                res = await addBook(book);
            }
            console.log("res", res);
            navigate('/books');
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className='page_wrapper'>
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', height: '100vh', mb: 2, padding: 5, backgroundColor: '#ddd' }}>
                    <h2 style={{ marginBottom: '2rem' }}>{location?.state?.book ? 'Edit Book' : 'Add Book'}</h2>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ mt: 1 }}>
                        <TextField
                            {...register('title', {
                                required: 'Title is required'
                            })}
                            fullWidth
                            margin="normal"
                            label="Book Title"
                            id="title"
                            autoFocus
                            value={book?.title}
                            // onChange={(e) => setBook({ ...book, title: e.target.value })}
                            onChange={(e) => handleChange(e)}
                            error={Boolean(errors.title)}
                            helperText={errors.title && errors.title.message}
                        />
                        <TextField
                            {...register('author', {
                                required: 'Author is required'
                            })}
                            fullWidth
                            margin="normal"
                            label="Author"
                            id="author"
                            value={book?.author}
                            onChange={(e) => setBook({ ...book, author: e.target.value })}
                            error={Boolean(errors.author)}
                            helperText={errors.author && errors.author.message}
                        />
                        <TextField
                            {...register('publishedYear', {
                                required: 'Published Year is required',
                                pattern: {
                                    value: /^[0-9]{4}$/,
                                    message: 'Invalid year format (e.g., 2024)'
                                }
                            })}
                            fullWidth
                            margin="normal"
                            label="Published Year"
                            id="publishedYear"
                            value={book?.publishedYear}
                            onChange={(e) => setBook({ ...book, publishedYear: e.target.value })}
                            error={Boolean(errors.publishedYear)}
                            helperText={errors.publishedYear && errors.publishedYear.message}
                        />
                        <Box display="flex" justifyContent="space-between" padding={2} sx={{ boxShadow: '0 0 50px', color: 'pink' }}>
                            <BackButton type="submit" variant="contained" color="primary" onClick={() => navigate(-1)}>Back</BackButton>
                            <Button className='custom_button' type="submit" variant="contained" color="primary">{location?.state?.book ? 'Update' : 'Create'}</Button>
                        </Box>
                    </form>
                </Paper>
            </Box>
        </div>
    );
};

export default BookForm;
