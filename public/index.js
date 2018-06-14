const app = function(){
  const url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);

};

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const requestComplete = function(){
  if (this.status !== 200) return;
  const beers = JSON.parse(this.response);
  populateList(beers);
}

const populateList = function (beers) {
  const select = document.querySelector('#select');
  select.addEventListener('change', displayDetails);
  beers.forEach(function(beer){
    const option = document.createElement('option');
    // const img = document.createElement('img')
    option.textContent = beer.name;
    // img.src = beer.image_url;
    // img.width = 100;
    option.value = JSON.stringify(beer);
    select.appendChild(option);
    // ol.appendChild(img);
  });
}

const displayDetails = function(){
  const beer = JSON.parse(this.value);
  const ul = document.querySelector('#beer-list');
  const li = document.createElement('li');
  const description = document.createElement('li')
  const img = document.createElement('img');
  img.src = beer.image_url;
  img.width = 50;
  li.textContent = beer.name;
  description.textContent = beer.description;
  ul.appendChild(li);
  ul.appendChild(description);
  ul.appendChild(img);

}
//
// const displayDetails = function(){
//   // console.log(this.value);
//   //   const country = JSON.parse(this.value);
//     const ul = document.querySelector('#country-list');
//     const li = document.createElement('li');
//     li.textContent = country.name + ", " + country.capital + ", " + country.population;
//     ul.appendChild(li);
//     save(li);
// };


window.addEventListener('load', app);
