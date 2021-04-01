import React, { useEffect, useState } from 'react'
import s from './GameCard.module.css'
import { gamesAPI } from '../../api/api'
import { Link } from 'react-router-dom'
import gameImg from '../../assets/images/gameImg.png'

const GameCard = ({ id, name }) => {
  const [imageId, setImageId] = useState(null)

  useEffect(() => {
    let isMounted = true

    async function fetchCover() {
      let data = await gamesAPI.getGameCover(id)

      if(data && isMounted)
        setImageId(data?.image_id)
    }

    fetchCover()

    return () => {
      isMounted = false
    }
  }, [id])

  return (
    <div className={s.card}>
      <Link to={`/game/${id}`} className={s.imgLink}>
        <img
          className={imageId ? s.cover : s.coverAlt}
          src={imageId
              ? `https://images.igdb.com/igdb/image/upload/t_720p/${imageId}.jpg`
              : gameImg}
          alt={'cover'}
        />
      </Link>
      <h3>{name}</h3>
    </div>
  )
}

export default GameCard
