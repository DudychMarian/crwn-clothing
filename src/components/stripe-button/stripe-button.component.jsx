import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price*100;
  const publishableKey = 'pk_test_51IrmZbExvm24mizlvHNupWxp0baOwewb3CK3rqDoH44rzw5t3ULwYV9mokDQ1IQXJf7Iz9ItWhRbh4c6sBQf7Er6006LERtvQR';

  const onToken = token =>{
    console.log(token)
    alert('Payment Successful');
  };

  return (
    <StripeCheckout 
      label = 'Pay Now'
      name = 'CRWN Clothing LTD.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;