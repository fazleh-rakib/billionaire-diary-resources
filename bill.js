let more = 0

// loading bill persons from api 
function loadBillPersons() {
    let limit = 15 +more
  const url = `https://forbes400.onrender.com/api/forbes400?limit=${limit}`;
//   we set limit here 
  fetch(url)
    .then((res) => res.json())
    .then((data) => showBillPerson(data)); 

    // call showBillPerson here 
}
// we found persons arraay now we are showing single persons 

function showBillPerson (persons){
    // console.log(persons);
    const personContainer = document.getElementById('personContainer')
    personContainer.innerText =''
   for (const person of persons) {
    // console.log(person);
    const creatDiv = document.createElement('div')
    creatDiv.classList.add('col')
    creatDiv.innerHTML = `
    
    <div class="card h-100">
      <img src="${person.squareImage}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Name : ${person.personName}</h5>
        <p class="card-text"> State : ${person.state}</p>
        <p class="card-text"> Rank: ${person.rank}</p>
        </div>
        <button type="button" onclick="loadModalDetails(${person})"  class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#showLoadModal">
    Details
  </button>
        </div>
       
    
    `
    personContainer.appendChild(creatDiv)
   }
}


const loadModalDetails =() =>{
  const url =(`https://forbes400.onrender.com/api/forbes400/industries/technology`)
    fetch(url)
    .then(res => res.json())
    .then(data => showLoadModal( data))
}
const showLoadModal = (techs)=>{

  console.log(techs,'lkjd');
 for (const tech of techs) {
  console.log(tech,'ttttt');
   const showLoadModal = document.getElementById('showLoadModal')
   showLoadModal.innerHTML =
   `
   <p>City${tech.city}</p>
   `
 }
}
// we add more person list here 
function handelLoadMore(){
    more += 10
    loadBillPersons()
}
const loadMore = document.getElementById('load-more').addEventListener('click', handelLoadMore)

loadBillPersons()

