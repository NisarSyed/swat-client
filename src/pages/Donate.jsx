import React from 'react';
import { CreditCard, Building, User, Hash, MapPin } from 'lucide-react';
import Banner from '../components/Banner';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

const DonationInfoPage = () => {

  const [bankAccounts, setBankAccount] = useState([]);

  const isingle = bankAccounts.length === 1;

  const fetchBankAccount = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/accounts`);
      setBankAccount(response.data);
    } catch (error) {
      console.error('Error fetching bank account:', error);
    }
  }, []);

  useEffect(() => {
    fetchBankAccount();
  }, [fetchBankAccount]);

  const banner = 

  {
        id: 1,
        image: 'banner.jpg',
        alt: 'Banner 1',
  };
  
  return (
    <div>
    <Banner banner={banner} text="Donate Us" />
    <div className="bg-gray-100 text-gray-800 font-raleway">
      <div className="container mx-auto px-4 py-8">
        <h1 className="sm:text-5xl text-xl font-semibold mb-6 text-center text-indigo-950">Support Our Cause</h1>
        
        <div className={`grid ${isingle ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6 mb-8`}>
          {bankAccounts.map((account, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 sm:text-xl text-sm">
              <h2 className="font-semibold mb-4 text-indigo-950">Bank Account Details for Donations</h2>
              <p className="mb-6">To make a donation, please use the following bank account information:</p>
              
              <div className="grid grid-cols-2 gap-4 sm:text-lg text-sm">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Building className="mr-3 text-red-700 flex-shrink-0 sm:size-6 size-4"  />
                    <div>
                      <p className="font-semibold">Bank Name</p>
                      <p>{account.bankName}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="mr-3 text-red-700 flex-shrink-0 sm:size-6 size-4" />
                    <div>
                      <p className="font-semibold">Account Number</p>
                      <p>{account.accountNumber}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="mr-3 text-red-700 flex-shrink-0 sm:size-6 size-4"  />
                    <div>
                      <p className="font-semibold">Account Holder Name</p>
                      <p>{account.accountHolderName}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-3 text-red-700 flex-shrink-0 sm:size-6 size-4" />
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
        
        <div className="bg-white rounded-lg shadow-lg p-6 sm:text-xl text-sm">
          <h2 className="font-semibold mb-4 text-indigo-950 sm:text-xl text-sm">How to Donate</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 sm:text-xl text-sm">
            <li>Log in to your online banking platform or visit your bank branch.</li>
            <li>Initiate a fund transfer or deposit to {isingle ? 'the' : 'one of the'} account details provided above.</li>
            <li>Use "Donation" as the reference for the transaction.</li>
            <li>After making the donation, please email us at donations@example.com with your transaction details for our records and to receive a donation receipt.</li>
          </ol>
        </div>
        
        <div className="mt-8 text-center text-indigo-950 sm:text-lg text-sm">
          <p className="font-semibold sm:text-xl text-sm">Thank you for your generous support!</p>
          <p>Your contribution helps us make a difference.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DonationInfoPage;