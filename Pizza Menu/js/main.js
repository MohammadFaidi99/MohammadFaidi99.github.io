let cheese = document.getElementById("cheese");
let salami = document.getElementById("salami");
let spinach = document.getElementById("spinach");
let ananas = document.getElementById("ananas");
let olives = document.getElementById("olives");
let garlic = document.getElementById("garlic");
let largepizza = document.getElementById("large");
let normalpizza = document.getElementById("normal");
let sum = 0;
let sum2 = 0;
let toppings = document.getElementsByName("top");
let checkedtoppings = [];
let psize = null;

function submitbut() {
  var addr = document.forms["pizzaform"]["addressfield"].value;
  if (addr == "" || addr == null) {
    alert("Please Enter The Delivery Address");
    return false;
  }
}
function pizza() {
  console.log("insidepizza");
  sum2 = 0;
  if (normalpizza.checked == true) {
    sum2 = 5;
    psize = normalpizza;
  } else {
    sum2 = 6.5;
    psize = largepizza;
  }
  console.log(psize);
}

let message = `you have ordered a ${psize.id} with the following toppings: `;

//   function price(){
//     sum=0;
//     if(cheese.checked==true){
//       sum+=parseFloat(cheese.value);
//     }
//     if(salami.checked==true){
//       sum+=parseFloat(salami.value);}
//     if(spinach.checked==true){
//       sum+=parseFloat(spinach.value);

//     }
//     if(ananas.checked==true){
//       sum+=parseFloat(ananas.value);
//     }
//     if(olives.checked==true){
//       sum+=parseFloat(olives.value);}
//     if(garlic.checked==true){
//       sum+=parseFloat(garlic.value);
//     }
// }

function price() {
  sum = 0;
  toppings.forEach((topping) => {
    if (topping.checked == true) {
      sum += parseFloat(topping.value);
      checkedtoppings.push(topping.id);
    }
  });
}

// function order(){
//   pizza();
//   let total=sum+sum2;
//   let selecteditem;
//   let items='';
//   var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
//   var markedSelected = document.querySelector('input[type="radio"]:checked');
//   for (var checkbox of markedCheckbox) {
//         items+=checkbox.id+'\n';

//   }

//      alert('You Ordered a ' + markedSelected.id   + '-Sized Pizza With the following toppings :' + '\n' +
//      items+ 'Your Total is ' + `${total}` + ' Euros')

// }

function order() {
  pizza();
  let total = sum + sum2;
  if (checkedtoppings.length == 0) {
    message += "no toppings \n";
  } else {
    checkedtoppings.forEach((topping) => {
      message += `${topping.id}\n`;
    });
  }
  message += `Total: ${total} Euros`;
  alert(message);
}
