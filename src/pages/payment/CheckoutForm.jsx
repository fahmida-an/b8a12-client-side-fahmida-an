import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import usePremiumPackage from "../../hooks/usePremiumPackage";
import { AuthContext } from "../../Provider/AuthProvider";
import moment from "moment";
const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSectet] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe();
    const elements = useElements()
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const [premiumPackage] = usePremiumPackage()
    const totalPrice = premiumPackage.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
      if(totalPrice > 0) {
        axiosPublic.post('/create-payment-intent', {price: totalPrice})
        .then(res=> {
         console.log(res.data.clientSecret);
         setClientSectet(res.data.clientSecret)
        })
      }

    }, [axiosPublic, totalPrice])

    const handleSubmit = async (event) => {
    event.preventDefault()
    if(!stripe || !elements){
        return;
    }

    const card = elements.getElement(CardElement)
    if(card === null){
        return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
    })

    if(error){
        console.log('payment error', error);
        setError(error.message);
    }
    else{
        console.log('payment Method', paymentMethod);
        setError('')
    }


    //confirm payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || "anonymous",
                name:user?.displayName || "anonymous" 
            }
        }
    })

    if(confirmError){
        console.log('confirm error');
    }
    else{
        console.log('payment intent', paymentIntent);
        if(paymentIntent.status === "succeeded"){
            console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id)

            //payment saving
            const payment = {
                email: user.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                date:moment().format('MMMM Do YYYY, h:mm'),
                premiumId: premiumPackage.map(item => item._id),
                premiumPackageId: premiumPackage.map(item => item.premiumId),
                status: 'pending'
            }

           const res = await axiosPublic.post('/payments', payment)
           console.log('payment', res);
        
        }
    }

    }
    return (
        <div className="max-w-xl mx-auto mt-20 border-b-2">
            <form onSubmit={handleSubmit}>
            <CardElement 
            options={{
                style: {
                    base:{
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder':{
                            color: '#aab7c4'
                        },
                    },
                    invalid: {
                        color:'#9e2146'
                    }
                    
                }
            }}

            
             />
             <button className="btn bg-fuchsia-900 text-white w-20 my-8 hover:bg-fuchsia-800" disabled={!stripe || !clientSecret} type="submit"> Pay </button>
             <p className="text-red-600">{error}</p>
             {transactionId && <p className="text-green-600"> Success ! Your Transaction id: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;