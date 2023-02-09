import type { NextApiRequest, NextApiResponse } from 'next';
import { web3 } from '@/utils/transaction';

interface Data {
  balance: number;
}

interface ResponseError {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ResponseError>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Only POST requests allowed',
    });
  }

  const { accountAddress } = req.body;

  const balanceWei = await web3.eth.getBalance(accountAddress);
  const balanceEther = await web3.utils.fromWei(balanceWei, 'ether');
  const balanceEtherNumber: number = +balanceEther;

  /*
  Assignment 2:  Now we have a Next.js API response handler that returns a JSON response containing the user's current balance.  We will return a 200 OK API response
  containing a JSON Response body with one field, the balanceEtherNumber.

  Check out the docs for more info:  https://web3js.readthedocs.io/en/v1.8.2/web3.html
  If you need help check out the Infura blog:  https://blog.infura.io/post/getting-started-with-infura-28e41844cc89#module-2-3-transaction-code-implementation
  */

  // Your code goes here!



}
