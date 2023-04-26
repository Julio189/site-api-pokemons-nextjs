'use client'

import Card from "./Card"
import { useState } from "react"

  const Search = ({pokemon}:any) => {
  const [search, setSearch] = useState<any>([]);

  const filterPokemons = [];

  for (const filter of pokemon) {
    if (filter.name.toLocaleLowerCase().includes(search))
    filterPokemons.push(filter);
  }
  console.log(filterPokemons)

  return (
    <>
      <div className="max-w-4xl mx-auto mb-4 ">
        <input className='w-[90%] border-2 ml-4 rounded-md mt-1 outline-none py-1 px-2'   type="search"name="search" value={search} placeholder="Buscar Pokemon"
        onChange={(event) => {
          setSearch(event.target.value)
        }}
        />
      </div>
      
       <div className="flex items-center flex-wrap justify-between max-w-5xl mx-auto">
      {filterPokemons.map((pokemon:any) => (
          <Card 
            key={pokemon.id}
            props={pokemon}
          />
        ))}
        
      </div>
  </>
  )
} 
 export default Search