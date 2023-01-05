import axios from "axios";

const baseUrl = 'https://api.jsonbin.io/v3';
const masterApiKey = "$2b$10$mkcpKxGqOvxy8tKlv6DM3.3CLoyKT9f0to0Z6G8GUbSoZ25cRf5XC";
const accessApiKey = "$2b$10$bZ.HB8pQFWrrqgHxTNoze.gdS/0QMu7xRtyUrLxPpZMGffH/JbyB6";

const baseRequestOptions = {
   headers: {
      'Content-Type': 'application/json',
      "X-Master-Key": masterApiKey,
      'Access-Control-Allow-Origin': '*'
   },
   mode: 'no-cors',
};

export const getExpenseAmount = async () => {
   const requestOptions = {
      ...baseRequestOptions,
      "method": 'GET',
      "X-Access-Key": accessApiKey
   };

   try {
      const response = await axios(`${baseUrl}/b/638e015a8d60a2691e280441`, requestOptions);
      return response;
   } catch (error) {
      return error.response;
   };
};

export const putData = async (moneyObj) => {
   const requestOptions = {
      headers: {
         'Content-Type': 'application/json',
         "X-Master-Key": masterApiKey,
         "X-Access-Key": accessApiKey,
      },
      "method": "PUT",
      data: moneyObj
   };
   try {
      const response = await axios(`${baseUrl}/b/638e015a8d60a2691e280441`, requestOptions);
      return response;
   } catch (error) {
      return error.response;
   };
};

export const getCurrency = async () => {
   const header = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
   }
   try {
      const response = await axios('https://www.nbrb.by/api/exrates/rates?periodicity=0', header);
      return response;
   } catch (error) {
      return error.response;
   };
};

