import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import TicTac from './components/TicTac'



function App() {
  const [input, setInput] = useState('')

  //  const arr = [2,23,3]

  //  console.log('keys',arr.keys())
  //   const str = 'str'
  //   const num = 123
  // const o1 = {
  //   name:"sagar",
  //   age:'22'
  // }
  //  const nam =Array.from(o1)
  //  const nam1 =Array.from(str)
  //  const nam2 =Array.from(num)

  //  console.log('hele is at obj',nam ,nam1, nam2)

  // const obj1 = {
  //   name:'sagar',
  //   age:'22'
  // }

  // const ent = Object.entries(obj1)
  // console.log( 'obj1', Object.fromEntries(ent) , 'this from this',ent)

  // let text = "cats. Cats . Cats ."
  // text = text.replaceAll("Cats","Dogs");
  // text = text.replaceAll("cats","dogs");

  // console.log(text)

  // var ee = 1
  // for (var i = 0; i < 5; i++) {

  //   ee += ee
  // }
  // console.log('var', ee)

  // let ees = 1
  // for (let i = 0; i < 5; i++) {
  //   ee += ees
  // }

  // console.log('let', ees)
  // // console.log('this', this) //undefined

  // //if two obj are equal

  // const deepEqual = (obj1, obj2) => {
  //   // ensure that arguments are objects

  //   return (obj1 && obj2 && typeof obj1 === "object" && typeof obj2 === "object"
  //   ) ? (
  //     Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).reduce((prev, curr) => {
  //       return prev && deepEqual(obj1[curr], obj2[curr]);
  //     }, true)
  //   ) : (
  //     obj1 === obj2);

  // }
  // const oo = {
  //   name: 'sagar',
  //   age: '22'
  // }
  // const ood = {
  //   names: 'sagar',
  //   age: '22'
  // }
  // useEffect(() => {
  //   console.log('obj1==obj2', deepEqual(oo, ood))

  // const sme = Object.keys(oo).reduce((prev, curr, i) => {
  //   console.log('pre and cuur', prev, curr, i)
  //   return prev = curr
  // }, '')

  //   console.log('sme', sme)

  // }, [])

  // console.log(Object.keys(oo).length, Object.keys(ood).length)

  // const handler = (e) => {
  //   if (e.target.value.length <= 3) {
  //     setInput(e.target.value)
  //   } else {
  //     return
  //   }
  // }

  return (
    <div className="App">
      {/* <input type="text"
        value={input}
        onChange={handler}
      /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tictac' element={<TicTac />} />
      </Routes>
    </div>
  )
}

export default App
