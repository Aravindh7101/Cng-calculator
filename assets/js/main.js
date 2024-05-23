const tripDistance = document.getElementById("Trip-distance");
const fueleffi = document.getElementById("Fuel-efficiency");
const fuelcost = document.getElementById("Fuel-cost");
const calculater = document.querySelector("#calculate");

// console.log(calculater);
// console.log(tripDistance.value);
// console.log(fueleffi.value);
// console.log(fuelcost.value);

// if (trip_Distance == "") {
// alert("Please enter the trip distance");
// } else {
calculater.addEventListener("click", (event) => {
  event.preventDefault();
  if (tripDistance.value =="") {
    alert("Please enter trip distance");
  } else {
    const trip_Distance = tripDistance.value;
    const fuel_efficiency = fueleffi.value;
    const fuel_cost = fuelcost.value;

    const result = (trip_Distance / fuel_efficiency) * fuel_cost;

    console.log(result);
  }
});
// }

// console.log(document.getElementById("guestName").innerText);
// const firstName =prompt("what is your first name?")
// const lastName =prompt("what is your last name ?")

// const guuestName =document.getElementById("guestName")

// guuestName.textContent =firstName +' '+ lastName

// console.log(guuestName);
// if(firstName && lastName != null){
//   guuestName.textContent =firstName +' '+ lastName +' , '
// }

// alert('Hello')
// prompt('prompting')
// confirm('conforming')

// dom == ("document object model")

// const firstName =prompt("what is your first name")
// const lastName =prompt("what is your last name ")
// const age =prompt("what is your age")

// console.log(firstName , lastName ,age);
