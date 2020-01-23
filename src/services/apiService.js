const API_KEY = '6ec4908ac5mshe0e74eeaacc0751p1d027ejsnc7d9d64fd17b';
const URL='https://api-football-v1.p.rapidapi.com/v2/';
const host='api-football-v1.p.rapidapi.com';

export async function getAllCountries(){
    try {
       
        const requestUrl =URL +'countries';
        console.log(requestUrl);
        const response = await fetch(requestUrl
          ,{
          method:'GET',
          headers:{
          "x-rapidapi-host": host,
          "x-rapidapi-key": API_KEY}
        });

        console.log(response);
        if (!response.ok) {
          throw new Error('Error fetching countries');
        }
        //console.log( response);
        const data = await response.json();
//        console.log(data.api.countries);
        return data.api.countries; 
       
    }
    catch(error){
        console.error(error.message);
        throw error;
    }
}
