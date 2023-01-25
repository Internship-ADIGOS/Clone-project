import React from 'react'
import logowhite from "../media/logowhite.svg"

const Footer = () => {

    const datascout = [
        "Submit an issue",
        "Contribut",
        "chat",
        "Discussions",
        "Staking",
        "Gnosis",
    ]
    const MainData = [
        "Submit an issue",
        "Contribut",
        "chat",
        "Discussions",
        "Staking",
        "Gnosis",
    ]
    const TestData = [
        "Submit an issue",
        "Contribut",
        "chat",
        "Discussions",
        "Staking",
        "Gnosis",
    ]
    const ApiData = [
        "Submit an issue",
        "Contribut",
        "chat",
        "Discussions",
        "Staking",
        "Gnosis",
    ]
    const BridgesData = [
        "Submit an issue",
        "Contribut",
        "chat",
        "Discussions",
        "Staking",
        "Gnosis",
    ]
  return (
    <div className='h-full w-full bg-gradient-to-b from-dark to-light'>
       <div id='logo' className='flex m-2 p-2 rounded-lg'>
        <img src={logowhite} alt="logo"/>
      </div>
      
      <div className='flex justify-around'>
      <div className='w-28 text-blue-200'>
        <p>Blockscout is a tool for innspecting and analyzing EVM based blockchains. Blockchain explorer for ethereum Networks</p>
      </div>
      <div className=''>
        <h1>BlockScout</h1>
        {datascout.map((data)=>{
            return(
            <ul>
                <li key={data} className="list-disc text-white">{data}</li>
            </ul>
            )
        })}
      
    </div>
      <div>
        <h1>Main Networks</h1>
        {MainData.map((data)=>{
            return(
            <ul>
                <li key={data}>{data}</li>
            </ul>
            )
        })}
      
    </div>
      <div>
        <h1>Test Networks</h1>
        {TestData.map((data)=>{
            return(
            <ul>
                <li key={data}>{data}</li>
            </ul>
            )
        })}
      
    </div>
      <div>
        <h1>APIs</h1>
        {ApiData.map((data)=>{
            return(
            <ul>
                <li key={data}>{data}</li>
            </ul>
            )
        })}
      
    </div>
      <div>
        <h1>Bridges</h1>
        {BridgesData.map((data)=>{
            return(
            <ul>
                <li key={data}>{data}</li>
            </ul>
            )
        })}
    </div>
    </div>
    </div>
  )
}

export default Footer