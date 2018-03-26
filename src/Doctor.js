export class doctorSearch{
  constructor(disease){
    this.disease = disease;
  }

  DS(disease){
    return new promise(function(resolve, reject){
      let request = new XMLHTTPRequest();
      let url =  `https://api.betterdoctor.com/2016-03-01/doctors?query=${disease}&location=PDX&user_location=45.5231%2C%20122.6765&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

      request.onload = function(){
        if(this.status === 200){
          resolve(request.response);
        }else{
          reject(ERROR(request.statusText));
        }
      }
      request.open("GET",  url, true);
      request.send();
    });
  }
}
