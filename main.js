// const apiKey = '95efbeb02d5f499e805183236231404'

// const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}=Germany`;


// fetch(query).then((response)  {
   // return response.json()

//}).then((data) {

//console.log(data);
//})


/*Получаем названи города */


const form = document.querySelector('#form');
const input = document.querySelector('#inputCity');
let city;


// Слушаем отправку формы
 form.onsubmit = function (e)  {
    //Отменяем отправку формы
    e.preventDefault();

    // 
     citu = input.value.trim();
     console.log(city)

 }