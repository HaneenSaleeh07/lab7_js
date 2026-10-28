document.addEventListener('DOMContentLoaded', function () {


 document.querySelector('form') .onsubmit = function () { // when pres supmit
     const color = document.querySelector('#color').value; //take the color
     document.querySelector('#hello').style.color = color;// change the header color
     document.querySelector('#color').value = ''; // delete the box after change
     return false; // prevent the form from reloud the page




     }




});