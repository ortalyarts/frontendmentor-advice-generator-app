

const button = document.querySelector('#button');
const adviceHolder = document.querySelector('#advice-text');
const adviceId = document.querySelector('#advice-id');


button.addEventListener('click', ()=> {

    fetchData(); 
})
async function fetchData(pokemonName){
    try{
        const response = await fetch(`https://api.adviceslip.com/advice`)

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
        const data = await response.json();
        adviceHolder.innerText = data.slip.advice;
        adviceId.innerText = `${data.slip.id}`;
    }
    catch(error){
        console.log(error);
    }
}