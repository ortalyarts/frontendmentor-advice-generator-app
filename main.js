// 2 Examples for using Fetch from https://youtu.be/37vxWr0WgQk?si=zJfVVQ-2YFlRA3ZW

const button = document.querySelector('#button');
const adviceHolder = document.querySelector('#advice-text');
const adviceId = document.querySelector('#advice-id');

// Same function for inserting image src when typing Pokemon name:

button.addEventListener('click', ()=> {
    //const pokemonName = input.value.toLowerCase(); 
    fetchData(); //fetch data is called with the requested name as parameter
})
async function fetchData(pokemonName){
    try{
        const response = await fetch(`https://api.adviceslip.com/advice`)
        //const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
        const data = await response.json(); // returns a promise
        //console.log(data.slip.advice);
        //const adviceText = data.sprites.front_default;
        adviceHolder.innerText = `${data.slip.advice}`;
        adviceId.innerText = `${data.slip.id}`;
    }
    catch(error){
        console.log(error);
    }
}