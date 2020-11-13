import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  const [user, setUser] = useState('')
  return (
    <div className="flex items-center justify-center h-screen flex-col bg-gray-100">
      <h4 className="mb-3 text-3xl">User`s repository search</h4>
      <input
        id="input-field"
        className="border-solid border-2 border-gray-300 outline-none w-1/3 p-1 rounded-md text-black-600 focus:border-blue-400"
        type="text"
        placeholder="Enter Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <Link
        id="search-button"
        className="bg-blue-600 w-1/3 mt-2 text-center text-white p-1 rounded-md hover:bg-blue-500 transition duration-500 ease-in-out"
        to={`/${user}`}
      >
        Find Repo
      </Link>
    </div>
  )
}

export default Main
