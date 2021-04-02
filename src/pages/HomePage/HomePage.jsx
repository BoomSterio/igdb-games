import React, { Suspense, useEffect, useState } from 'react'
import s from './HomePage.module.css'
import GameCard from '../../components/GameCard/GameCard'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useDispatch, useSelector } from 'react-redux'
import { requestGames } from '../../redux/thunks/home-thunks'
import { getCurrentPage, getGames, getGamesCount } from '../../redux/selectors/home-selectors'
import { homeActions } from '../../redux/actions/home-actions'
import { useParams } from 'react-router'
import Pagination from '../../components/Pagination/Pagination'
import Preloader from '../../components/Preloader/Preloader'

const NoResults = React.lazy(() => import('../../components/NoResults/NoResults'));

const HomePage = () => {
  const [isFetching, setIsFetching] = useState(false)
  const currentPage = useSelector(getCurrentPage)
  const games = useSelector(getGames())
  const totalGamesCount = useSelector(getGamesCount)

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    setIsFetching(true)
    let promise

    if (params?.query) {
      promise = dispatch(requestGames(params.query, 50))
    } else {
      promise = dispatch(requestGames())
    }

    promise.then(() => {
      setIsFetching(false)
    })
  }, [params])

  const onPageSelect = (page) => {
    dispatch(homeActions.setPageNumber(page))
  }

  if(isFetching) return <Preloader/>
  if(games?.length === 0) return <Suspense fallback={<Preloader/>}>
    <NoResults requestText={params.query}/>
  </Suspense>

  return (
    <div className={s.home}>
      {params.query &&
        <h2>Search results "{params.query}"</h2>
      }
      {totalGamesCount > 10 && (
        <Pagination currentPage={currentPage} total={totalGamesCount} pageSize={10} handleSelect={onPageSelect}/>
      )}
      <TransitionGroup className={s.games}>
        {games &&
          games?.map(g => (
            <CSSTransition key={g.id} in={true} timeout={200} classNames="fade">
              <GameCard id={g.id} name={g.name} />
            </CSSTransition>
          ))}
      </TransitionGroup>
      {totalGamesCount > 10 && (
        <Pagination currentPage={currentPage} total={totalGamesCount} pageSize={10} handleSelect={onPageSelect}/>
      )}
    </div>
  )
}

export default HomePage
