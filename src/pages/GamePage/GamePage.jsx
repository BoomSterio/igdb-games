import React, {useEffect} from 'react'
import s from './GamePage.module.css'
import {useParams} from 'react-router'
import 'react-circular-progressbar/dist/styles.css'
import Rating from '../../components/Rating/Rating'
import {requestGameInfo} from '../../redux/thunks/game-thunks'
import {useDispatch, useSelector} from 'react-redux'
import {getCompanies, getCover, getInfo, getScreenshots} from '../../redux/selectors/game-selectors'
import Screenshot from '../../components/Screenshot/Screenshot'

const GamePage = () => {
    const info = useSelector(getInfo)
    const cover = useSelector(getCover)
    const companies = useSelector(getCompanies)
    const screenshots = useSelector(getScreenshots)

    const dispatch = useDispatch()
    const params = useParams()
    const {id} = params

    useEffect(() => {
        dispatch(requestGameInfo(id))
    }, [])

    const devs = companies?.filter(c => c.developer)
    const publishers = companies?.filter(c => c.publisher)
    const porters = companies?.filter(c => c.porting)

    return (
        <div className={s.page}>
            <div className={s.container}>
                <h2>{info?.name}</h2>
                <div className={s.info}>
                    <img className={s.image}
                         src={cover?.image_id && `https://images.igdb.com/igdb/image/upload/t_cover_small_2x/${cover.image_id}.jpg`}
                         alt={`cover`}/>
                    <div className={s.details}>
                        <div className={s.rating}>
                            <p>IGDB:</p><Rating rating={info?.rating}/>
                            <p>Critics score:</p><Rating rating={info?.total_rating}/>
                        </div>
                        <p className={s.detail}>Release date:
                            <strong>{new Date(info?.created_at * 1000).toLocaleDateString()}</strong>
                        </p>
                        {devs?.length > 0 &&
                        <p className={s.detail}>
                            Developer{devs.length > 1 && 's'}:<strong>{devs.map(c => c.name).join(', ')}</strong>
                        </p>}
                        {publishers?.length > 0 &&
                        <p className={s.detail}>
                            Publisher{publishers.length > 1 && 's'}:<strong>{publishers.map(c => c.name).join(', ')}</strong>
                        </p>}
                        {porters?.length > 0 &&
                        <p className={s.detail}>
                            Porter{porters.length > 1 && 's'}:<strong>{porters.map(c => c.name).join(', ')}</strong>
                        </p>}
                    </div>
                </div>
            </div>
            {info?.summary &&
            <div className={s.summary}>
                <h3>Description:</h3>
                <p>{info?.summary}</p>
            </div>}
            {screenshots && screenshots.length > 0 &&
            <div className={s.screenshots}>
                <h3>Screenshots:</h3>
                <div className={s.screenshotsGrid}>
                    {screenshots?.map(sc => <Screenshot imageId={sc.image_id}/>)}
                </div>
            </div>}
        </div>
    )
}

export default GamePage
