import Image from "next/image"


export default function About() {
  return (
    <section className="flex flex-col text-center">
      <div>
          <h1 className="text-3xl font-bold mb-6"
            >About the Project</h1>
          <p className="w-1/2 mx-auto text-lg mb-6" 
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, non reiciendis. Reiciendis similique labore enim cum aut eos unde animi consectetur amet ipsam autem cupiditate dolore, reprehenderit necessitatibus alias quibusdam.</p>
      </div>
      <div className="mx-auto">
        <Image 
            src={'/../public/images/charizard.png'}
            width={300}
            height={300}
            alt="logo-about"
        />
      </div>
    </section>
  )
}
