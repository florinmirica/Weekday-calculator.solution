import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './calculator.js';

$(document).ready( function() {
    $('form#calculator-form').submit(function(event){
        event.preventDefault();
        let dateInput = new Date($('#theDate').val());
        let day = dateInput.getDate()+1;
        let month = dateInput.getMonth()+1;
        let year = dateInput.getFullYear();
        let date = new Calculator(day, month, year);
        let result = date.getWeekday();
        $('#output').prepend(result);
    });
});
