// async await
// await solo se puede utilizar dentro de una funcion async
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    // console.log(data.results)
    data.results.forEach((element) => {
      console.log(element.name);
    });
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemones();
