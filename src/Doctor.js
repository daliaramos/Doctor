import $ from 'jquery';

export class doctorSearch {

  getDS(disease, drSearch) {

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${disease}&location=or-portland&gender=female&skip=0&limit=10&user_key=ed2ecce59160c9536487ba1383974f35`)
    .then(response => {
      drSearch(response);
    })
    .fail(() => {
      $('#error').text("ERROR")
    });
  }
}
