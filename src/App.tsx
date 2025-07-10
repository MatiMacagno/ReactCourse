import { useState, useEffect } from 'react'
import './App.css'

function App() {  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  const consoleLoader = (loadingValue: boolean) => {
    setLoading(loadingValue)
    console.info(loading)
  }
  const fetchData = async () => {
    consoleLoader(true)
    try {
      const response = await fetch("https://api.example.com/data")

      if (!response.ok) {
        throw new Error("Error al obtener datos.")
      }

      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      setError(error as string)
    } finally {
      consoleLoader(false)
    }
  }

  if(loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Ups! Hay un error: {error}</div>
  }

  // Para que usamos useEffect?
  // comunicarnos con un endpoint - entidad externa al componente
  // operaciones async
  // parametros de entrada

  // sync con entidades externas.  
  useEffect(() => {
  // logica? que logica? cuando se ejecuta esta logica?
  //1 - cuando se monta el componente
  //2 - cada vez que se modifique uno de los valores del state, ¿cuales? los del arreglo de dependencias.  
  
  return () => {
    // Se ejecuta cuando se destruye el componente.
    // se usa para manejar el estado de la memoria.
    }  
  }, [])

  useEffect(() => {
    fetchData()
  }, [])

  // Este useEffect esta mal utilizado porque loading no es una entidad externa. Pertenece al componente App.
  useEffect(() => {
    console.info(loading)
  }, [loading])

  
  
  return (
    <div>{JSON.stringify(data)}</div>
  )
  
}

export default App
