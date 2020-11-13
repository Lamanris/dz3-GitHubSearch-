import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const RepoList = ({ repoList, userName }) => {
  return (
    <div>
      <Header userName={userName} userAvatar={repoList.map((el) => el.owner.avatar_url)} />
      {repoList.map((repo) => {
        return (
          <div
            key={repo.id}
            className="m-3 flex justify-between border-solid border-2 border-gray-500 items-center p-2"
          >
            <div className="mainInfo w-1/3 text-center">
              <Link
                className="text-blue-500 text-2xl hover:text-red-400 transition duration-300 ease-in-out"
                to={`/${userName}/${repo.name}`}
              >
                {repo.name}
              </Link>
              <div>{repo.description}</div>
            </div>
            <div className="dates w-1/3 text-center text-gray-700">
              <span>
                <b>Created:</b> {repo.created_at}
              </span>
              <br />
              <span>
                <b>Updated:</b> {repo.updated_at}
              </span>
              <br />
              <span>
                <b>Last pushed:</b> {repo.pushed_at}
              </span>
            </div>
            <div className="readme w-1/3 text-center text-xl text-blue-600 hover:text-red-400 transition duration-300 ease-in-out">
              <Link to={`/${userName}/${repo.name}`}>View ReadMe</Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RepoList
