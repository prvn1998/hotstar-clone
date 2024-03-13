import React from 'react'
import MovieList from './MovieList'

const GenerMovies = () => {

    const gener=[
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id":12,
            "name": "Adventure"
        },
        {
            "id":16,
            "name": "Animation"
        },
        {
            "id":35,
            "name":"Comedy"
        },
        {
            "id":80,
            "name":"Crime"
        }
    ]

  return (

    <div>
        {gener.map((item)=>(
            <div className='p-8 px-8 md:px-16'>
                <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                <MovieList generID={item.id}/>
            </div>
        ))}
    </div>
  )
}

export default GenerMovies