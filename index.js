const wrapperEle = document.getElementById("wrapper");

const freelancers = [];
function generateFreelancer(num) {
  const names = ["luke", "selene", "kratos", "sly", "aloy", "krennic", "jyn"];
  const occupations = [
    "teacher",
    "programmer",
    "thief",
    "cute dog",
    "hunter",
    "racer",
    "writer",
  ];
  const startingPrices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  for (let i = 0; i < num; i++) {
    const fl = { name: "", occupation: "", startingPrice: 0 };
    fl.name = names[Math.floor(Math.random() * names.length)];
    fl.occupation = occupations[Math.floor(Math.random() * occupations.length)];
    fl.startingPrice =
      startingPrices[Math.floor(Math.random() * startingPrices.length)];
    freelancers.push(fl);
  }
}

generateFreelancer(10);

const titleEle = document.createElement("h1");
titleEle.innerHTML = "Freelancer Forum";
wrapperEle.appendChild(titleEle);

function avgPrices(fl) {
  const averagePricesEle = document.createElement("p");
  const average =
    fl.reduce((acc, cv) => acc + cv.startingPrice, 0) / freelancers.length;
  console.log(average);
  averagePricesEle.innerHTML = `The average starting price is $${average}`;
  wrapperEle.appendChild(averagePricesEle);
}

avgPrices(freelancers);

function availableFreelancer(fl) {
  const freelancersWrapperEle = document.createElement("div");
  const freelancersTitleEle = document.createElement("h1");
  freelancersTitleEle.innerHTML = "Available Freelancers";

  const freelancerTable = document.createElement("div");
  const titlesEle = document.createElement("div");
  titlesEle.style.display = "flex";
  titlesEle.style.justifyContent = "space-around";
  let titles = "";

  for (let prop in fl[0]) {
    titles = titles + `<h1>${prop}</h1>`;
  }

  titlesEle.innerHTML = titles;
  freelancerTable.appendChild(titlesEle);

  fl.forEach((i) => {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "space-around";
    let info = "";
    for (let p in fl[0]) {
      info = info + `<h1>${i[p]}</h1>`;
    }
    row.innerHTML = info;
    freelancerTable.appendChild(row);
  });

  freelancersWrapperEle.appendChild(freelancersTitleEle);
  freelancersWrapperEle.appendChild(freelancerTable);

  wrapperEle.appendChild(freelancersWrapperEle);
}

availableFreelancer(freelancers);