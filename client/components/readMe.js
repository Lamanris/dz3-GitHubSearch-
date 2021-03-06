import React from 'react'
import Markdown from 'markdown-to-jsx'
import Header from './header'

const ReadMe = ({ repositoryName, repoInfo, userName, repoList }) => {
  console.log(repoInfo.name)
  return (
    <div>
      <Header
        userName={userName}
        userAvatar={repoList.map((el) => el.owner.avatar_url)}
        repositoryName={repositoryName}
      />
      <div id="description" className="flex justify-center flex-col items-center">
        <h3 className="text-center text-2xl mt-3">
          Repository: <b>{repositoryName}</b>
        </h3>
        <div className="w-1/5">
          <a className='bg-blue-500 inline-block rounded p-1 hover:bg-blue-400 text-center mt-3 mb-5 cursor-pointer w-full' href={`https://github.com/${userName}/${repositoryName}`}>GitHub Link</a>
        </div>
        <div className="markdown-body">
          <Markdown>{repoInfo}</Markdown>
        </div>
      </div>
    </div>
  )
}

export default ReadMe
