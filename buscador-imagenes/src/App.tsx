
import CardImage from "./components/CardImage";
import Form from "./components/Form";


function App() {
  return (
    <>
    <h1 className="bg-indigo-600 p-6 font-extrabold text-lg">Buscador de imagenes</h1>
    <Form/>

    <div>
      <CardImage/>
    </div>
    </>
  )
}

export default App
