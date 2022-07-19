import React,{useEffect, useState} from 'react'
import InputSearch from '../../ui/InputSearch'
import { Logo } from '../../ui/Logo'
import { GifCard } from '../GifCard/GifCard';

export const HeaderHome = () => {
    const url='https://api.giphy.com/v1/gifs/trending?api_key=PCkOodNTdJLNsYI6Ybtm8mS1e1vzGkGE&limit=3&rating=g';
    const api_key='PCkOodNTdJLNsYI6Ybtm8mS1e1vzGkGE'
    const [gif, setGif] = useState([]);
 /** 
    const getGif=async()=>{
        console.log("hola")
        const responce=await fetch(url);
        const data=responce.json();
        setGif(data)
        console.log(data)
        
    }

**/
const get=()=>{
    console.log("hola")
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data.data)
        setGif(data.data)
       
    }
    )

}

const getGifs=(event)=>{
   
    console.log("hola")
    console.log(event.target.value)
    fetch('https://api.giphy.com/v1/gifs/search?api_key=PCkOodNTdJLNsYI6Ybtm8mS1e1vzGkGE&q='+event.target.value+'&limit=2&offset=0&rating=g&lang=en')
    .then(response=>response.json())
    .then(data=>{
        console.log(data.data)
        setGif(data.data) 
    }
    )

}
    useEffect(() => {
        get()
    }, [])

   

  return (
    <div>
        <header className='header-home'>
            <Logo/>
            <div className='divHeader'>
            <InputSearch action={getGifs} /> 
            </div>
        </header>
        <GifCard cardGif={gif} />
    </div>
  )
}
