import React from 'react'
import logowhite from "../media/logowhite.svg"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {BsTelegram} from "react-icons/bs"
import {VscGraph} from "react-icons/vsc"


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
        "Ethereum",
        "Ethereum Classic",
        "Optimism on Gnosis Chain",
        "POA",
        "RSK",
        "ARTIS Σ",
        "LUKSO L14"
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
    <div className='bottom-0 w-full  bg-gradient-to-b from-dark to-light font-sans'>
       <div id='logo' className='flex m-2 p-2 rounded-lg'>
        <img src={logowhite} alt="logo"/>
      </div>
      
      <div className='block md:flex text-xs md:text-base justify-between'>
      <div className='w-32 text-blue-200 mx-8'>
        <p>Blockscout is a tool for innspecting and analyzing EVM based blockchains. Blockchain explorer for ethereum Networks</p>
        <div className='flex text-3xl justify-between w-48 py-12'>
            <AiFillGithub />
            <AiOutlineTwitter />
            <BsTelegram />
            <VscGraph />
        </div>
      </div>
      <div>
        <h1>BlockScout</h1>
        {datascout.map((data)=>{
            return(
            <ul>
                <li key={data} className="list-disc text-sky-200">{data}</li>
            </ul>
            )
        })}
      
    </div>
      <div>
        <h1>Main Networks</h1>
        {MainData.map((data)=>{
            return(
            <ul>
                <li key={data} className="list-disc text-sky-200">{data}</li>
            </ul>
            )
        })}
      
    </div>
      <div>
        <h1>Test Networks</h1>
        {TestData.map((data)=>{
            return(
            <ul>
                <li key={data} className="list-disc text-sky-200">{data}</li>
            </ul>
            )
        })}
      
    </div>
      <div>
        <h1>APIs</h1>
        {ApiData.map((data)=>{
            return(
            <ul>
                <li key={data} className="list-disc text-sky-200">{data}</li>
            </ul>
            )
        })}
      
    </div>
      <div className='pr-12'>
        <h1>Bridges</h1>
        {BridgesData.map((data)=>{
            return(
            <ul>
                <li key={data} className="list-disc text-sky-200">{data}</li>
            </ul>
            )
        })}
    </div>
    </div>
    </div>
  )
}

export default Footer