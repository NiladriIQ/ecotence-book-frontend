import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({setisLoggedIn}) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        setisLoggedIn(false);
        navigate('/signin')
    };

    return (
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='books'>Books</NavLink>
                <Button style={{ float: 'right' }} onClick={() => handleLogout()}>Logout</Button>
            </nav>
        </>
    )
}

export default Navbar