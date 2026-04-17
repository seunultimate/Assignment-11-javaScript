//Parallel vs Sequential
const contriesClub ={
    England: ["Chelasea", "Manchester", "Liverpool"],
    Spain: ["Barcelona", "Real Madrid", "Atletico Madrid"],
    France: ["PSG", "Inter Milan", "AC Milan"],
    Nigeria: ["Enugu rangers", "Oluyole Warriors", "Kano pillars"]
};

function fetchTeam (Team) {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(Team);
        },2000)
    })
}

//Sequential Execution
async function sequential () {
    const data1  = await fetchTeam (contriesClub.England[0]);
    console.log(data1);
    const data2 = await fetchTeam(contriesClub.Spain[2])
    console.log(data2)
}
sequential();

//Parallel Execution
async function parallel () {
    const team1 = fetchTeam (contriesClub.Nigeria[2]);
    const team2 = fetchTeam (contriesClub.France[1]);
    const data3 = await team1;
    const data4 = await team2;
    console.log(data3);
    console.log(data4);
}
parallel()