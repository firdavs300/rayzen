let headsets = document.querySelector(".headsets")
let keyboards = document.querySelector(".keyboards")
let Laptop = document.querySelector(".laptop")
let root = document.querySelector(".root")
let api = "https://razer-api.onrender.com/devices";

const getLaptop = async () => {
  const malumot = await fetch(api);
  const array = await malumot.json();
  AddHtml(array)
};

Laptop.onclick = function () {
 getLaptop();
};

function AddHtml(newArray) {
  const newFilter = newArray.filter((el) => el.category === "Laptop")
  console.log(newFilter);
  let html = "";
  newFilter.map((el) => {
    html += `
        <div class="card">
            <img src=${el.image} alt=${el.title} >
            <h1>${el.desc}</h1>
        <div class="buy"><p>${el.price}$</p>
        <button>buy</button></div>
            </div>
            `;

    root.innerHTML = html;
  });
};


const getKeyboards = async () => {
  const malumot = await fetch(api);
  const array1 = await malumot.json();
  AddHtml1(array1)
};

keyboards.onclick = function () {
  getKeyboards();
};

function AddHtml1(newArray1) {
  const newFilter1 = newArray1.filter((el) => el.category === "Keyboards")
  console.log(newFilter1);
  let html = "";
  newFilter1.map((el) => {
    html += `
        <div class="card">
            <img src=${el.image} alt=${el.title} >
            <h1>${el.desc}</h1>
        <div class="buy"><p>${el.price}$</p>
        <button>buy</button></div>
            </div>
            `;

    root.innerHTML = html;
  });
};


const getHeadsets = async () => {
  const malumot = await fetch(api);
  const array3 = await malumot.json();
  AddHtml2(array3)
};

headsets.onclick = function () {
  getHeadsets();
};

function AddHtml2(newArray2) {
  const newFilter2 = newArray2.filter((el) => el.category === "Headsets")
  console.log(newFilter2);
  let html = "";
  newFilter2.map((el) => {
    html += `
        <div class="card">
            <img src=${el.image} alt=${el.title} >
            <h1>${el.desc}</h1>                                     
        <div class="buy"><p>${el.price}$</p>
        <button>buy</button></div>
            </div> 
            `;

    root.innerHTML = html;
  });
};