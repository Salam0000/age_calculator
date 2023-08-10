let year = document.getElementById('Year');
let month = document.getElementById('Month');
let day = document.getElementById('Day');
let result = document.querySelectorAll("span");
let inputs = document.querySelectorAll('input');
let button = document.querySelector(".button");
console.log(result);
console.log(year, month, day);
function validateform() {
    if (year.value == "" && month.value == "" && day.value == "") {
        inputs.forEach(element => {
            element.style.borderColor = 'hsl(0, 100%, 67%)';
        });
        document.getElementById('errorMsgYear').innerHTML = "required filed";
        document.getElementById('errorMsgDay').innerHTML = "required filed";
        document.getElementById('errorMsgMonth').innerHTML = "required filed";
    }
    if (year.value == "") {
        inputs.forEach(element => {
            element.style.borderColor = 'hsl(0, 100%, 67%)';
        });
        document.getElementById('errorMsgYear').innerHTML = "required filed";
        return false;
    }
    if (month.value == "") {
        inputs.forEach(element => {
            element.style.borderColor = 'hsl(0, 100%, 67%)';
        });
        document.getElementById('errorMsgMonth').innerHTML = "required filed";
        return false;
    }
    if (day.value == "") {
        inputs.forEach(element => {
            element.style.borderColor = 'hsl(0, 100%, 67%)';
        });
        document.getElementById('errorMsgDay').innerHTML = "required filed";
        return false;
    }
    if (year.value >= 2023 || year.value < 1990) {
        inputs.forEach(element => {
            element.style.borderColor = 'hsl(0, 100%, 67%)';
        });
        document.getElementById('errorMsgYear').innerHTML = "un-valid year";
        return false;
    }
    if (month.value > 12) {
        inputs.forEach(element => {
            element.style.borderColor = 'hsl(0, 100%, 67%)';
        });
        document.getElementById('errorMsgMonth').innerHTML = "un-valid month";
        return false;
    }
    if (day.value > 32) {
        inputs.forEach(element => {
            element.style.borderColor = 'hsl(0, 100%, 67%)';
        });
        document.getElementById('errorMsgDay').innerHTML = "un-valid day";
        return false;
    }
    return oncalc();
}

function oncalc() {
    let today = new Date();
    console.log(today);
    console.log(today.getFullYear());
    console.log(today.getMonth());
    console.log(today.getDay());
    console.log(parseInt(year));
    let yearNow = today.getFullYear() - parseInt(year.value);
    let monthNow = today.getMonth() - parseInt(month.value);
    let dayNow = today.getDay() - parseInt(day.value);

    result[0].innerHTML = yearNow;
    result[1].innerHTML = monthNow;
    result[2].innerHTML = dayNow;
    return true;
}