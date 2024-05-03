import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box className='page_wrapper'>
      <div>Welcome to Ecotence</div>
      <Button onClick={() => navigate('books')}>Go to book list</Button>
    </Box>
  )
}

export default Home