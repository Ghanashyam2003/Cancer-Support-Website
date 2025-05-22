import axios from 'axios';

export const initiateDonation = async (req, res) => {
  const { name, email, amount } = req.body;

  try {
    const response = await axios.post(
      'https://www.instamojo.com/api/1.1/payment-requests/',
      {
        purpose: 'Donation for Cancer Support',
        amount,
        buyer_name: name,
        email,
        redirect_url: 'http://localhost:3000/thankyou', // Update this if hosted
      },
      {
        headers: {
          'X-Api-Key': process.env.INSTAMOJO_API_KEY,
          'X-Auth-Token': process.env.INSTAMOJO_AUTH_TOKEN,
        }
      }
    );

    res.status(200).json({ paymentUrl: response.data.payment_request.longurl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Payment initiation failed' });
  }
};
