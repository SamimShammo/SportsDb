const getSports = () => {
    const sportInput = document.getElementById('sportInput');
    const sports = sportInput.value;
    // sportInput.textContent =''
    sportInput.value = '';
    console.log(sports);
    if (sports == 0) {

    } 
    else {
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${sports}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => sportTeam(data.teams))

    }
   
}
// getSports();
const sportTeam = data => {
 
    const sportsDb = document.getElementById('sportsDb');
    sportsDb.textContent = '';

    data.forEach(datar => {
        // console.log(datar)
        const div = document.createElement('div')
        div.classList.add('styleSport')
        div.innerHTML = `
        <div onclick="getTeamId(${datar.idTeam})" class="card" style="width: 18rem;">
            <img style="width:200px;" src="${datar.strTeamBadge}" class="card-img-top" alt="">
            <div class="card-body">
                <h1 class="card-title">${datar.strTeam}</h1>
                <h1 class="card-title">${datar.strCountry}</h1>
              
                
        </div>`;
        sportsDb.appendChild(div)

    });

}

const getTeamId = (idTeam) => {
    // console.log(idTeam)
  const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
    fetch(url)
    .then(res => res.json())
    .then(data => getId(data.teams[0]))
}

const getId = team => {
    console.log(team)
    const newContainer = document.getElementById('newCon')
    newContainer.textContent = '';
    const div = document.createElement('div')
    div.classList.add('styleSport')
    div.innerHTML = `
    <div onclick="getTeamId(${team.idTeam})" class="card" style="background-color: aqua;
    width: 40%;
    margin: auto; padding: 20px">
        <img src="${team.strTeamBadge}" class="card-img-top" alt="" style="width: 280px;
        margin-left: auto;
        margin-right: auto; ">
        <div class="card-body">
            <h5 class="card-title">${team.strTeam}</h5>
            <p class="card-text">${team.strStadiumDescription.slice(0, 100)}</p>
            
        </div>
    </div>`;
    newContainer.appendChild(div)
    newContainer.value = '';
    
}