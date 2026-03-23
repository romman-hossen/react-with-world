
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'
const contriesPromise =fetch("https://openapi.programming-hero.com/api/all")
.then (res => res.json())
// console.log(contriesPromise)

function App() {

  return (
    <>
        <Suspense fallback ={<p>React loading .........</p>}>
              <Countries contriesPromise={contriesPromise}></Countries>
        </Suspense>
    </>
  )
}

export default App
