import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';
// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51OjhqLA9COylcz7rZqzoIlAQnBFCF1lZYb9R1g0Bo3FxLNQPtmEkk5A1T9TDxM7Zam6TEXcapjnPPt11gKL8rjBJ00JUd45Ojl');

function Payment() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}

export default Payment