import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { createOrder, validatePayment } from '../Services/ApiService';

const Home = () => {
  const navigate = useNavigate();

  const paymentHandler = async (e) => {
    let body = {
      ammount: 500,
      currency: 'INR',
      receptId: 'rec_123456',
    }
    const order = await createOrder(body);
    console.log('Order created: ', order);

    if (order) {
      const options = {
        key: "rzp_test_JcjQAkARoiYuMl", // Enter the Key ID generated from the Dashboard
        amount: order.ammount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: order.currency,
        name: "NC Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          let body = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature
          }
          const res = validatePayment(body);
          console.log('Validation Response', res);
        },
        prefill: {  // Logged in user details
          "name": "Customar Name",
          "email": "customar@yopmail.com",
          "contact": "9134656767"
        },
        notes: {
          "address": "Razorpay Corporate Office"
        },
        theme: {
          "color": "#3399cc"
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
      rzp1.open();
      e.preventDefault();
    }
  }

  return (
    <Box className='page_wrapper'>
      <div>Welcome to Ecotence</div>
      <Button onClick={() => navigate('books')}>Go to book list</Button>
      <Button onClick={paymentHandler}>Pay Now</Button>
    </Box>
  )
}

export default Home