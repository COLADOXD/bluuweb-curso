const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    // console.log(data.results)
    const arrayName = data.results.filter((poke) => {
      return poke.name !== "bulbasaur";
    });
    console.log(arrayName);
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemones();
