const form = document.querySelector("form");
const select = document.querySelector("#selectPerson");
const h4 = document.querySelector("h4");
const option = document.querySelector(".option");
const ul = document.querySelector("ul");
const input = document.querySelector("#shoutout");
const info = document.querySelector("#info");
const body = document.querySelector("body");
const Based_URL = "https://ghibliapi.herokuapp.com/people";
let pplData; // saved resJson

fetch(Based_URL)
  .then((response) => response.json())
  .then((resJson) => {
    pplData = resJson;
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
const personData= pplData.find((person)=>{
    person
})
  info.innerHTML = ""; //section above the SHOUTOUT, below the submit
  const h4 = document.createElement("h4");
  //   h4.textContent = resJson.name;

  let age = document.createElement("p");
  //   age.innerHTML = `<b>Age:</b> ${resJson.age}`;

  let eyeColor = document.createElement("p");
  //   eyeColor.innerHTML = `<b>Eye Color:</b> ${resJson.eye_color}`;

  let hairColor = document.createElement("p");
  //   hairColor.innerHTML = `<b>Hair Color:</b> ${resJson.hair_color}`;
  //   info.append(h4, age, eyeColor, hairColor);
});
//!Form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const li = document.createElement("li");
  //! STOP Duplication
  const shoutOut = input.value;
  li.innerHTML = `<strong>${select.value}:</strong> ${shoutOut}`;
  ul.append(li);

  form.reset();
  //! Error Message
});

//! RESET Button -> Shoutout
const reset = document.createElement("button");
reset.setAttribute("id", "reset-shoutouts");
reset.innerText = "Remove Shoutouts";
reset.style.backgroundColor = "grey";
reset.style.fontFamily = "Quicksand";
reset.style.color = "white";
reset.style.textDecoration = "underline";
body.after(reset);
reset.addEventListener("click", () => {
  ul.innerHTML = "";
});

// const fetch = (data) =>{fetch(`${Based_URL}/${select.value}`) //select.value is the name chosen from the selection
// .then((result) => result.json())
// .then((resJson) => {
//   console.log(resJson)
// })
//   .catch((err)=> console.log(err))

//   console.log(dataInfo)
