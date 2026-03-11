import { useState, useEffect } from "react";

const fetchPokemon = async (name) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();

  const speciesRes = await fetch(data.species.url);
  const speciesData = await speciesRes.json();

  const flavorEntry = speciesData.flavor_text_entries.find(
    (e) => e.language.name === "en"
  );

  return {
    id: data.id,
    title: data.name.charAt(0).toUpperCase() + data.name.slice(1),
    text: flavorEntry?.flavor_text.replace(/\f/g, " ") ?? "",
    image: data.sprites.other["official-artwork"].front_default,
    url: `https://www.pokemon.com/us/pokedex/${data.name}`,
  };
};

const useApi = (pokemonNames) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.all(pokemonNames.map(fetchPokemon))
      .then(setItems)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { items, loading, error };
};

export default useApi;