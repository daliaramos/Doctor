export class DoctorSearch{

  DS(firstName, lastName, location){
    return new promise(function(resolve, reject){
      let request = new XMLHTTPRequest();
      let url =  `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&location=PDX&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

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
