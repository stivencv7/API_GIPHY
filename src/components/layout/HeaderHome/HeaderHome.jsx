import React,{useEffect, useState} from 'react'
import InputSearch from '../../ui/InputSearch'
import { Logo } from '../../ui/Logo'
import { GifCard } from '../GifCard/GifCard';

export const HeaderHome = () => {
    
    const url='https://api.giphy.com/v1/gifs/trending?api_key=PCkOodNTdJLNsYI6Ybtm8mS1e1vzGkGE&limit=10&rating=g';
    const api_key='PCkOodNTdJLNsYI6Ybtm8mS1e1vzGkGE'
    const [gif, setGif] = useState([]);
  
    const getApi=async()=>{
        const response=await fetch(url);
        const data=await response.json();
        setGif(data.data)
        return data
    }

    const getGifs=async(event)=>{
        const response=await  fetch('https://api.giphy.com/v1/gifs/search?api_key='+api_key+'&q='+event.target.value+'&limit=10&offset=0&rating=g&lang=en');
        const data=await response.json();
        setGif(data.data)
        return data
    }

    useEffect(() => {
        getApi()
    }, [])

  return (
    <div>
        <header className='header-home'>
            <Logo/>
            <div className='divHeader'>
            <InputSearch action={getGifs} /> 
            </div>
        </header>
        <main className='main'>
         <GifCard cardGif={gif} />
        </main>
        
    </div>
  )
}
