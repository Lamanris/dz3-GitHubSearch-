import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const RepoList = () => {
  const { userName } = useParams()
  const [repoList, setRepoList] = useState([])
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => setRepoList(data))
  }, [userName])
  return (
    <div>
      {repoList.map((repo) => {
        return (
          <div key={repo.id}>
            <Link to={`/${userName}/${repo.name}`}>{repo.name}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default RepoList
