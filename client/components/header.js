import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ userName, userAvatar, repositoryName }) => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
        <div>
          <div className="flex items-center flex-shrink-0 text-white">
            <img className=" h-16 rounded" src={`${userAvatar}`} alt="" />
            <span className="font-semibold text-3xl tracking-tight ml-3">{userName}</span>
          </div>
        </div>
        <div>
          <Link
            to="/"
            id="go-back"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-600 hover:bg-white mt-4 lg:mt-0 mr-3"
          >
            Back to Main
          </Link>
          {repositoryName && (
            <Link
              to={`/${userName}`}
              id="go-back"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-600 hover:bg-white mt-4 lg:mt-0"
            >
              Back to Repos
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Header
