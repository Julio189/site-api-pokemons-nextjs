
import Image from "next/image"
import Card from "../components/Card"
import Search from "@/components/Search"

export default async function Home() {
  const maxPokemon = 251

  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch (`${api}/?limit=${maxPokemon}`)

  const data = await res.json()
  
  data.results.forEach((item:any, index:number) => {
    item.id = index + 1
  })
  
  const pokemon =  await data.results
 
  return (
    <section>
      <div className="flex text-center justify-center mb-8">
        <h1 className=" text-red-600 text-4xl font-bold"
          >Poke
          <span className="text-black"
            >Next
          </span>
        </h1>
        <Image
          className="ml-3"
          src={'/../public/images/pokeball.png'}
          width={40}
          height={40}
          alt="Pokeball"
        />
    
      </div>
      <Search pokemon={pokemon}/>
        
    </section>
  )
}
