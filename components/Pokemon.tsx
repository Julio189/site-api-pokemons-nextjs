interface Props {
    props: {
      pokemon:any
      name:string
    }
  }


export default function pokemon({props:{pokemon}}:Props) {
    console.log(pokemon)
  return (
    <div>
      <h1></h1>
    </div>
  )
}