import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import RepoList from './repoList'
import Main from './main'
import ReadMe from './readMe'

const Home = () => {
  const { userName, repositoryName } = useParams()
  const [repoList, setRepoList] = useState([])
  const [repoInfo, setRepoInfo] = useState('')
  useEffect(() => {
    if (repositoryName) {
      axios(`https://api.github.com/repos/${userName}/${repositoryName}/readme`, {
        headers: { Accept: 'application/vnd.github.VERSION.raw' }
      }).then(({ data }) => setRepoInfo(data))
    }
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => setRepoList(data))
  }, [userName, repositoryName])
  return (
    <div>
      <Route exact path="/" component={() => <Main />} />
      <Route
        exact
        path="/:userName"
        component={() => <RepoList repoList={repoList} userName={userName} />}
      />
      <Route
        exact
        path="/:userName/:repositoryName"
        component={() => (
          <ReadMe
            repoInfo={repoInfo}
            repositoryName={repositoryName}
            repoList={repoList}
            userName={userName}
          />
        )}
      />
    </div>
  )
}

Home.propTypes = {}

export default Home
