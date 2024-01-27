/* eslint-disable no-undef */
// import { useState } from 'react'
import './App.css'
import { useGetUsersQuery } from './store/service/Service'

function App() {
  // const [user, setUser] = useState([])
  const userName = `zol`
  const pages = 2
  const { data } = useGetUsersQuery(userName, pages)

  console.log(data)
  return (
    <div className="App">
      <p>Тут будут данные</p>
      
    </div>
  )
}

export default App
