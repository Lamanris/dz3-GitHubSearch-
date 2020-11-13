import React from 'react'
import Markdown from 'markdown-to-jsx'
import Header from "./header";

const ReadMe = ({ repositoryName, repoInfo, userName, repoList }) => {
  return (
    <div>
      <Header userName={userName} userAvatar={repoList.map((el) => el.owner.avatar_url)} repositoryName={repositoryName} />
      <div id="description" className="flex justify-center flex-col items-center">
        <h3 className="text-center text-2xl mt-3">
          Repository: <b>{repositoryName}</b>
        </h3>
        <div className="text-center">{repoInfo.name}</div>
        <div className="bg-blue-500 inline-block rounded p-1 hover:bg-blue-400 text-center w-1/5 mt-3 mb-5">
          <a href={`${repoInfo.html_url}`}>GitHub Link</a>
        </div>
        <div className="">
          <Markdown>{repoInfo}</Markdown>
        </div>
      </div>
    </div>
  )
}

export default ReadMe
