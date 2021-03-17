import React, {useEffect, useState} from 'react'
import s from './GameCard.module.css'
import {gamesAPI} from '../../api/api'
import {Link} from 'react-router-dom'

const GameCard = ({id, name}) => {
    const [imageId, setImageId] = useState(null)

    useEffect(() => {
        async function fetchCover() {
            let data = await gamesAPI.getGameCover(id)
            setImageId(data && data?.image_id)
        }

        fetchCover()
    }, [id])

    return (
        <div className={s.card}>
            <Link to={`/game/${id}`} className={s.imgLink}>
                <img className={s.cover}
                     src={imageId && `https://images.igdb.com/igdb/image/upload/t_720p/${imageId}.jpg`} alt={`cover`}/>
            </Link>
            <h3>{name}</h3>
        </div>
    )
}

export default GameCard
