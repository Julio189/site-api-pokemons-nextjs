
import Image from "next/image"

type PokemonProps = {
    params: {
        id: string
        search:string
    }
}

export default async function PokemonDescription({params:{ id }}:PokemonProps) {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    const pokemon = await data

  return (
    <div className=" flex flex-col items-center">
      <h1 className="text-4xl capitalize bg-black text-white py-3 px-4 rounded-md">
        {pokemon.name}
      </h1>
      <Image 
        className="border-2 shadow-sm shadow-black mt-2"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites//master/sprites/pokemon/${id}.png`}
        width={200}
        height={200}
        alt={pokemon.name}
      />
      <div className="text-center">
        <h3 className="text-xl mt-2">Número: </h3>
        <p className="font-bold"># {id}</p>
      </div>
      <div className="text-center space-y-4">
        <h3 className="text-xl mt-3">Tipo: </h3>
        <div>
          {pokemon.types.map((item:any,index:number) => (
              <span
                className="uppercase p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-2 rounded-md text-white shadow-lg shadow-black" 
                key={index}>
                   {item.type.name} 
              </span>
          ))}
        </div>
      </div>
    </div>
  )
}
