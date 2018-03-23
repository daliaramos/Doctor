import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doctorSearch } from './Doctor.js'
//import { **insert prototype name** } from './Doctor.js';

$(document).ready(function() {
  $("searchDoctor").submit(function(event){
    event.preventDefault();

    let newDoctor = new doctorSearch();
    let promise = newDoctor.DS();
    promise.then(function(event){

    });
    // promise.then(function(response){
    //   let body = JSON.parse(response);
    //   let array = [];
    //   body.
    })
  });
});
