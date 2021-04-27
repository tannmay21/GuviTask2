var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    
    let total = 0 
    let countrydata = JSON.parse(this.response);

    for(let i in countrydata){
        total+= countrydata[i].population
    }

    console.log('Total Population',total);
    
} 