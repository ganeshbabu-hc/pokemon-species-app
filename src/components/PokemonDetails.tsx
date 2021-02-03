import React, { useEffect, useState } from "react";
import { Pokemon } from "../utils/types";
import { HOST_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { id }: { id: string } = useParams<any>();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState<boolean>(false);

  const getPokemonDetails = async () => {
    try {
      const listUrl: string = `${HOST_URL}/pokemon/${id}`;
      setLoading(true);
      const response: any = await fetch(listUrl);
      const pokemon: Pokemon = await response.json();
      setLoading(false);
      setPokemon(pokemon);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPokemonDetails();
  }, []);

  if (loading) {
    return <h5>Loading...</h5>;
  }

  return (
    <>
      {pokemon && (
        <div className="pokeman">
          <img
            className="pokeman__img"
            alt={`image_${pokemon.species.name}`}
            src={pokemon.sprites.front_default}
            style={{ height: `${pokemon.height * 10}px` }}
          />
          <Link className="pokeman__nav" to="/">
            Back
          </Link>
        </div>
      )}
    </>
  );
};

export default PokemonDetails;
