import React from 'react'

export const GifCard = ({ cardGif = [] }) => {
    return (
        <div className='conter_car'>
            {
                cardGif.map((item, index) => (
                    <div key={index} >
                        <div className='car'>
                            <img className='img-cardGif' src={item.images.original.url} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
