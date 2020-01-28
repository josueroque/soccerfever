const API_KEY = '6ec4908ac5mshe0e74eeaacc0751p1d027ejsnc7d9d64fd17b';
const URL='https://api-football-v1.p.rapidapi.com/v2/';
const host='api-football-v1.p.rapidapi.com';

export async function getTeams(leagueId){
  try {
     
      const requestUrl =URL +'teams/league/'+leagueId;
      const response = await fetch(requestUrl
        ,{
        method:'GET',
        headers:{
        "x-rapidapi-host": host,
        "x-rapidapi-key": API_KEY}
      });

      if (!response.ok) {
        throw new Error('Error fetching teams');
      }

      const data = await response.json();
      const teams=data.api.teams;
      return teams; 
     
  }
  catch(error){
      console.error(error.message);
      throw error;
  }
}

export async function getFixtures(leagueId){
  try {
     
      const requestUrl =URL +'fixtures/league/'+leagueId;
      const response = await fetch(requestUrl
        ,{
        method:'GET',
        headers:{
        "x-rapidapi-host": host,
        "x-rapidapi-key": API_KEY}
      });

      
      if (!response.ok) {
        throw new Error('Error fetching fixtures');
      }

      const data = await response.json();
      const fixtures=data.api.fixtures.slice(0,9);
      return fixtures; 
     
  }
  catch(error){
      console.error(error.message);
      throw error;
  }
}

export async function getAllSeasons(){
  try {
     
      const requestUrl =URL +'seasons';
      const response = await fetch(requestUrl
        ,{
        method:'GET',
        headers:{
        "x-rapidapi-host": host,
        "x-rapidapi-key": API_KEY}
      });

      if (!response.ok) {
        throw new Error('Error fetching seasons');
      }

      const data = await response.json();
      const seasons=data.api.seasons;
      return seasons; 
     
  }
  catch(error){
      console.error(error.message);
      throw error;
  }
}

export async function getAllLeagues(country){
  try {
     
      const requestUrl =URL +'leagues/country/'+country+'/2018';
      const response = await fetch(requestUrl
        ,{
        method:'GET',
        headers:{
        "x-rapidapi-host": host,
        "x-rapidapi-key": API_KEY}
      });

      if (!response.ok) {
        throw new Error('Error fetching countries');
      }

      const data = await response.json();
      const leagues=data.api.leagues;
      return leagues; 
     
  }
  catch(error){
      console.error(error.message);
      throw error;
  }
}


export async function getAllCountries(){
    try {
       
        const requestUrl =URL +'countries';
        const response = await fetch(requestUrl
          ,{
          method:'GET',
          headers:{
          "x-rapidapi-host": host,
          "x-rapidapi-key": API_KEY}
        });

        if (!response.ok) {
          throw new Error('Error fetching countries');
        }

        //console.log( response);
        const data = await response.json();
//        console.log(data.api.countries);
        const countries=data.api.countries;
        let filteredCountries=[]; 
        filteredCountries=countries.filter(country=>{  
          if (country.country==="Mexico") return true;
          if (country.country==="Spain") return true;
          if (country.country==="Argentina") return true;
          if (country.country==="Honduras") return true;
          if (country.country==="Germany") return true;
          if (country.country==="England") return true;
          if (country.country==="France") return true;
          if (country.country==="Italy") return true;
          
         });
        console.log(filteredCountries);
        return filteredCountries; 
       
    }
    catch(error){
        console.error(error.message);
        throw error;
    }
}
