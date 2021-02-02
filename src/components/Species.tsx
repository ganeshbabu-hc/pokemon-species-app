import React, { useEffect, useState } from "react";
import { HOST_URL } from "../utils/constants";
import { Species } from "../utils/types";
import { Link } from "react-router-dom";

const SpeciesList = () => {
  const [pokemonList, setPokemonList] = useState<Species[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const paintPokemanList = async () => {
    try {
      const listUrl: string = `${HOST_URL}/pokemon`;
      setLoading(true);
      const response: any = await fetch(listUrl);
      const data: any = await response.json();
      setLoading(false);
      const results: Species[] = data.results;
      setPokemonList(results);
    } catch (err) {
      console.log(err);
    }
  };

  const getPokemonIdFromUrl = (url: string): number => {
    let splitArry: string[] = url.split("/");
    let id = Number(splitArry[splitArry.length - 2]);
    return id;
  };

  useEffect(() => {
    paintPokemanList();
  }, []);

  if (loading) {
    return <h5>Loading...</h5>;
  }

  return (
    <>
      {pokemonList.length > 0 && (
        <ul className="species">
          {pokemonList.map((species: Species, index: number) => {
            return (
              <Link to={`/species/${getPokemonIdFromUrl(species.url)}`}>
                <li className="species__item" key={`species-${index}`}>
                  {species.name}
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SpeciesList;
