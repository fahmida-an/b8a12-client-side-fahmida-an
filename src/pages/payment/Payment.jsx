import { loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";
//pkey
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
           <Helmet>
    <title>NewsChannel || Payment</title>
  </Helmet>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
    );
};

export default Payment;