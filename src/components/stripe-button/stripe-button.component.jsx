import React from 'react';
import './stripe-button.styles.scss';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceForStripe= price * 100;
    const publishableKey="pk_test_51I2lnVBKMBba2dPJ4KHQIOa5OqYtu2h5lxHuG2BEps1wtfPVNFbJVlwgrEg0XmmPmhWLHmZNoB8v988pNLXiz8ob00wC45lbMj"
    
    const onToken=token=>{
        console.log(token);
        alert('Payment Successful')
    }
    return(
        <StripeCheckout 
          label="Pay Now"
          name="Meeyna Luxury"
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`your total is $${price}`}
          amount={priceForStripe}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;