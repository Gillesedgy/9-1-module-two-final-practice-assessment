const form = document.querySelector("form");
const select = document.querySelector("#selectPerson");
const h4 = document.querySelector("h4");
const option = document.querySelector(".option");
const ul = document.querySelector("ul");
const input = document.querySelector("#shoutout");
const info = document.querySelector("#info")
const error = document.getElementById("err")
const Based_URL = "https://ghibliapi.herokuapp.com/people";
let pplData; // saved resJson

fetch(Based_URL)
  .then((response) => response.json())
  .then((resJson) => {
    pplData = resJson;
 console.log(pplData)
    resJson.forEach((person) => {
    const name = person.name;
    let option = document.createElement("option");
    option.innerHTML = name;
    option.value = name;
    select.append(option);
  })
  })
  .catch((err) => console.log(err));

//!
select.addEventListener("change", () => {
    console.log(pplData)
const personData = pplData.find((el)=> el.name === select.value)
console.log(personData) 
info.innerHTML = ""; //section above the SHOUTOUT, below the submit
  const h4 = document.createElement("h4");
    h4.textContent =personData.name;

  let age = document.createElement("p");
    age.innerHTML = `<b>Age:</b> ${personData.age}`;

  let eyeColor = document.createElement("p");
    eyeColor.innerHTML = `<b>Eye Color:</b> ${personData.eye_color}`;

  let hairColor = document.createElement("p");
    hairColor.innerHTML = `<b>Hair Color:</b> ${personData.hair_color}`;
    info.append(h4, age, eyeColor, hairColor);

})
//!Form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  error.innerHTML=""
  //! Error Message
  //? shout w/o person
  if(!select.value ){
     const err =  document.createElement('p')
     err.innerText= "Please Select a name"
     error.append(err) 
  }
  else if(!input.value){
    const err2 =  document.createElement('p')
 err2.innerHTML =`Please add a message for ${select.value}` 
 error.append(err2)
 //* to remove err message when typing for shoutout --> can create err out
input.addEventListener("input", ()=>{
    err2.innerHTML=""
})
  }
  else{
      const li = document.createElement("li");
      const shoutOut = input.value;
      li.innerHTML = `<strong>${select.value}:</strong> ${shoutOut}`;
      ul.append(li);
  }
//? person no shout
form.reset();
});
//! RESET Button -> Shoutout
const reset = document.createElement("button");
reset.setAttribute("id", "reset-shoutouts");
reset.innerText = "Remove Shoutouts";
reset.style.backgroundColor = "grey";
reset.style.fontFamily = "Quicksand";
reset.style.color = "white";
reset.style.textDecoration = "underline";
ul.append(reset);
reset.addEventListener("click", () => {
  ul.innerHTML= ""
});
