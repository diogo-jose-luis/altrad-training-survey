import React from 'react'

interface Props{
    params:{id: number; photoId: number;}
}

const PhotoPage = ({params : {id, photoId}}:Props) => {
  return (
    <div>Photo Detail Id - {id} / Photo - {photoId} </div>
  )
}

export default PhotoPage