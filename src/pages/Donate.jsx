import React from 'react';
import { CreditCard, Building, User, Hash, MapPin } from 'lucide-react';
import Banner from '../components/Banner';
import axios from 'axios';
import { useEffect, useState } from 'react';

  

const DonationInfoPage = () => {

  const [bankAccounts, setBankAccount] = useState([]);

  const isingle = bankAccounts.length === 1;

  useEffect(() => {
    const fetchBankAccount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/accounts');
        setBankAccount(response.data);
      } catch (error) {
        console.error('Error fetching bank account:', error);
      }
    }
    fetchBankAccount();
  }
  , [bankAccounts]);

  console.log(bankAccounts);
    
  const banner = 

  {
        id: 1,
        image: 'JacobJaviad_24/2024-04-14_16-53-03_UTC_5.jpg',
        alt: 'Banner 1',
  };
  
  return (
    <div>
    <Banner banner={banner} text="Donate Us" />
    <div className="bg-gray-100 min-h-screen text-gray-800 font-raleway">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-semibold mb-6 text-center text-indigo-950">Support Our Cause</h1>
        
        <div className={`grid ${isingle ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6 mb-8`}>
          {bankAccounts.map((account, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-950">Bank Account Details for Donations</h2>
              <p className="mb-6">To make a donation, please use the following bank account information:</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Building className="mr-3 text-red-700 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold">Bank Name</p>
                      <p>{account.bankName}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="mr-3 text-red-700 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold">Account Number</p>
                      <p>{account.accountNumber}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="mr-3 text-red-700 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold">Account Holder Name</p>
                      <p>{account.accountHolderName}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-3 text-red-700 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold">Branch Name</p>
                      <p>{account.branchName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-950">How to Donate</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Log in to your online banking platform or visit your bank branch.</li>
            <li>Initiate a fund transfer or deposit to {isingle ? 'the' : 'one of the'} account details provided above.</li>
            <li>Use "Donation" as the reference for the transaction.</li>
            <li>After making the donation, please email us at donations@example.com with your transaction details for our records and to receive a donation receipt.</li>
          </ol>
        </div>
        
        <div className="mt-8 text-center text-indigo-950">
          <p className="text-xl font-semibold">Thank you for your generous support!</p>
          <p>Your contribution helps us make a difference.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DonationInfoPage;