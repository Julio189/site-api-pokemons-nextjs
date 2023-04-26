import { FaSpinner } from "react-icons/fa"

export default function loading() {
  return (
    <div className="w-[25%] h-full mx-auto">
        <h1 className="text-6xl flex items-center justify-center h-full mx-auto mr-4"
            >Loading 
            <FaSpinner />
        </h1>
    </div>
  )
}
