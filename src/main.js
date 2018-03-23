import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { **insert prototype name** } from './Doctor.js';

$(document).ready(function() {
  $("searchDoctor").submit(function(event){
    event.preventDefault();
  });
});
