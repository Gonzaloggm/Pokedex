const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");

    let pokeInput = pokeName.value.toLowerCase();

    poke2=parseInt (pokeInput);
    evolucion=poke2+1;


    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    const url2 = `https://pokeapi.co/api/v2/pokemon/${evolucion}`;


    
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./error.jpg");
        }
        else {
            return res.json();
        }
        
        
    

    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
         
            console.log(pokeImg);
            pokeImage(pokeImg);

     
        }
    })
    





    fetch(url2).then((res2) => {
        if (res2.status != "200") {
            console.log(res);
            pokeImage2("./error.jpg");
        }
        else {
            return res2.json();
        }
        
        
    

    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg2 = data.sprites.front_default;
         
            console.log(pokeImg2);
            pokeImage2(pokeImg2);

     
        }
    })
    





}


const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokeImage2 = (url2) => {
    const pokeImg2 = document.getElementById("pokeImg2");
    pokeImg2.src = url2;
}




