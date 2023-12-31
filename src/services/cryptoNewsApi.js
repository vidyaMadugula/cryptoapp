import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders={
    // 'X-BingApis-SDK': 'true',
    // 'X-RapidAPI-Key': 'a509383ffemshbaf4fcb8d099232p114cb9jsn6abd751f5e8a',
    // 'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'a509383ffemshbaf4fcb8d099232p114cb9jsn6abd751f5e8a',
    'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
}
// const baseUrl='https://bing-news-search1.p.rapidapi.com';
const baseUrl='https://google-api31.p.rapidapi.com/';
const createRequest=(url)=>({url,headers:cryptoNewsHeaders});
export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        GetCryptoNews:builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),

});
export const {useGetCryptoNewsQuery}=cryptoNewsApi;



// Google Api

// const axios = require('axios');
// const options = {
//   method: 'POST',
//   url: 'https://google-api31.p.rapidapi.com/',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': 'a509383ffemshbaf4fcb8d099232p114cb9jsn6abd751f5e8a',
//     'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
//   },
//   data: {
//     text: 'Europe',
//     region: 'wt-wt',
//     max_results: 25
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }