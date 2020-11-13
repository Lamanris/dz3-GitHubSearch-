import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ReadMe = () => {
  const { userName } = useParams()
  const { repositoryName } = useParams()
  const [repoInfo, setRepoInfo] = useState([])
  useEffect(() => {
    axios(`https://api.github.com/repos/${userName}/${repositoryName}/readme`).then(({ data }) =>
      setRepoInfo(data)
    )
  }, [userName, repositoryName])
  return (
    <div id="description" className="flex justify-center flex-col items-center">
      <h3 className="text-center text-2xl mt-3">
        {' '}
        Repository: <b>{repositoryName}</b>
      </h3>
      <div className="text-center">{repoInfo.name}</div>
      <div className="bg-blue-500 inline-block rounded p-1 hover:bg-blue-400 text-center w-1/5 mt-3 mb-5">
        <a href={`${repoInfo.html_url}`}>GitHub Link</a>
      </div>
      <div className="text-xs text-center">{repoInfo.content}</div>
    </div>
  )
}

export default ReadMe
