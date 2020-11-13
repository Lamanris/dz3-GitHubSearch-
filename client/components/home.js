import React from 'react'
import { Route } from 'react-router-dom'
import ReadMe from './readMe'
import RepoList from './repoList'
import Header from './header'
import Main from './main'

const Home = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={() => <Main />} />
      <Route exact path="/:userName" component={() => <RepoList />} />
      <Route exact path="/:userName/:repositoryName" component={() => <ReadMe />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
