import React from 'react'

export const GifCard = ({ cardGif = [] }) => {
    return (
        <div className='conter_cardgif'>
            {
                cardGif.map((item, index) => (
                    <div key={index} >
                        <div className='Card'>
                            <img className='img-cardGif' src={item.images.original.url} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
