import React, { useEffect } from 'react'
import s from './HomePage.module.css'
import GameCard from '../../components/GameCard/GameCard'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useDispatch, useSelector } from 'react-redux'
import { requestGames } from '../../redux/thunks/home-thunks'
import { getCurrentPage, getGames, getGamesCount, getIsFetching } from '../../redux/selectors/home-selectors'
import { homeActions } from '../../redux/actions/home-actions'
import { useParams } from 'react-router'
import Pagination from '../../components/Pagination/Pagination'
import NoResults from '../../components/NoResults/NoResults'
import Preloader from '../../components/Preloader/Preloader'

const HomePage = () => {
  const isFetching = useSelector(getIsFetching)
  const currentPage = useSelector(getCurrentPage)
  const games = useSelector(getGames(currentPage))
  const totalGamesCount = useSelector(getGamesCount)

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    if (params?.query) {
      dispatch(requestGames(params.query, 50))
    } else {
      dispatch(requestGames())
    }
  }, [params])

  const onPageSelect = (page) => {
    dispatch(homeActions.setPageNumber(page))
  }

  if(isFetching) return <Preloader/>
  if(games?.length === 0) return <NoResults requestText={params.query}/>

  return (
    <div className={s.home}>
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
