import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doctorSearch } from './dDctor.js';

const DS = response => {
  if (response.data.length == 0 ) {
    $('#errors').text("ERROR")
  } else {
    response.data.forEach(data => {
      let firstName = data.profile.first_name;
      // let lastName = data.profile.last_name;


  })
  }
}
