import Image from "next/image"
import Link from "next/link"


interface PokemonProps {
    props: {
      pokemon:any
        name:any
        id: string
    }
}

export default function Card({props:{ name, id }}:PokemonProps) {
  return (
    <>
    <div className="flex items-center justify-center flex-col p-4 mb-7 w-[48%] md:w-[30%] rounded-2xl border-2 border-red-600 bg-gray-900 text-white md:mx-2">
      <Image 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites//master/sprites/pokemon/${id}.png`}
        width={150}
        height={150}
        alt={name}
      />
      <p className="bg-red-600 py-1 px-2 font-bold mb-2"
        >#{id}
      </p>
      <h3 className="text-xl capitalize mb-2"
        >{name}
      </h3>
      <Link className="bg-white text-black 
      px-2 py-1 md:px-4 md:py-2 rounded-md font-bold hover:bg-red-600 hover:text-white ease-in-out duration-300"
        href={`/pokemons/${id}`}
        >Detalhes
      </Link>
    </div>
    <div>

    </div>
    </>
  )
}
