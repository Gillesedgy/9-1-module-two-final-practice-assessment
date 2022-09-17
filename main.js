const form = document.querySelector("form");
const select = document.querySelector("#selectPerson");
const h4 = document.querySelector("h4");
const option = document.querySelector(".option");
const ul = document.querySelector("ul");
const input = document.querySelector("#shoutout");
const info = document.querySelector("#info");

// const err = document.createElement("section h4");
// console.log(ul)
// // let input = search.value

const Based_URL = "https://ghibliapi.herokuapp.com/people";

fetch(Based_URL)
  .then((response) => response.json())
  .then((resJson) => {
    // console.log(resJson);
    resJson.forEach((person) => {
      //   console.log(person)
      const name = person.name;
      let option = document.createElement("option");
      option.innerHTML = name;
      option.value = person.id; // reference a single person instead of using their name
      //   console.log(option.value)
      select.append(option);
    });
  })
  .catch((err) => console.log(err));
//!
select.addEventListener("change", () => {
  fetch(`${Based_URL}/${select.value}`) //select.value is the name chosen from the selection
    .then((result) => result.json())
    .then((resJson) => {
      console.log(resJson);
      info.innerHTML = ""; //section above the SHOUTOUT, below the submit
      const h4 = document.createElement("h4");
      h4.textContent = resJson.name;

      let age = document.createElement("p");
      age.innerHTML = `<b>Age:</b> ${resJson.age}`;

      let eyeColor = document.createElement("p");
      eyeColor.innerHTML = `<b>Eye Color:</b> ${resJson.eye_color}`;

      let hairColor = document.createElement("p");
      hairColor.innerHTML = `<b>Hair Color:</b> ${resJson.hair_color}`;
      info.append(h4, age, eyeColor, hairColor);
      //!Form
      form.addEventListener("submit", (event) => {
        event.preventDefault();

        const li = document.createElement("li");
        //! STOP Duplication
        const liArr = document.getElementsByTagName("li"); //make the li list into an array so i can looop..
        for (let i = 0; i < liArr.length; i++) {
          if (liArr[i].innerText.includes(`${resJson.name}`)) {
            li.reset();
          }
        }
        const shoutOut = input.value;
        li.innerHTML = `<strong>${resJson.name}:</strong> ${shoutOut}`;
        form.reset();
        ul.append(li);
        //! Error Message

        //!RESET Shoutout
        // const reset = document.createElement("button")
        // reset.setAttribute("id","reset-shoutouts")

        // reset.append(ul)
        // reset.addEventListener("click", ()=>{
        //   ul.innerHTML=''
        //   ul.reset()
        // })
      });
    })
    //!
    .catch((err) => console.log(err));
});

// const fetch = (data) =>{fetch(`${Based_URL}/${select.value}`) //select.value is the name chosen from the selection
// .then((result) => result.json())
// .then((resJson) => {
//   console.log(resJson)
// })
//   .catch((err)=> console.log(err))

//   console.log(dataInfo)
