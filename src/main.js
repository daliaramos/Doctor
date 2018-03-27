import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doctorSearch } from './doctor.js';

const drSearch = response => {
  if (response.data.length == 0 ) {
    $('.errors').text("ERROR")
  } else {
    response.data.forEach(data => {
      let firstName = data.profile.first_name;
      let lastName = data.profile.last_name;
      let street = data.practices[0].visit_address.street;
      let state = data.practices[0].visit_address.state;
      let gender = "female";
    $('#viewDr').append(`<p>`+ firstName + " "  + `</p>`
                                + `<p>` + lastName + " " + `</p>`
                                    + `<p>`  + street + `</p>`
                                    + `<p>` + state + " "+ `</p>`
                                  + `<p>` + gender + " " + `</p>`)
    })
  }
}

$(document).ready(function() {
  $('.find').click(e => {
  e.preventDefault();
  let findDoc = $('#doc').val();
  doctorSearch.prototype.getDS(findDoc, drSearch)
  $('#viewDr').empty();
  });
});
