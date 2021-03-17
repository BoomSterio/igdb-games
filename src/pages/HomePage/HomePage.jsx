import React, {useEffect} from 'react'
import s from './HomePage.module.css'
import GameCard from '../../components/GameCard/GameCard'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {useDispatch, useSelector} from 'react-redux'
import {requestGames} from '../../redux/thunks/home-thunks'
import {getCurrentPage, getGames, getGamesCount} from '../../redux/selectors/home-selectors'
import {homeActions} from '../../redux/actions/home-actions'
import {useParams} from 'react-router'
import CssBaseline from '@material-ui/core/CssBaseline'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import Pagination from 'material-ui-flat-pagination'

const theme = createMuiTheme();

const HomePage = () => {
    const currentPage = useSelector(getCurrentPage)
    const games = useSelector(getGames(1))
    const totalGamesCount = useSelector(getGamesCount)

    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        if (params?.query) {
            dispatch(requestGames(params.query))
        } else {
            dispatch(requestGames())
        }
    }, [params])

    const onPageSelect = (e, offset, page) => {
        dispatch(homeActions.setPageNumber(page))
    }

    return (
        <div className={s.home}>
            <TransitionGroup className={s.games}>
                {games && games?.map(g => (
                    <CSSTransition
                        key={g.id}
                        in={true}
                        timeout={200}
                        classNames="fade"
                    >
                        <GameCard id={g.id} name={g.name}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            {totalGamesCount > 10 &&
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Pagination page={currentPage} limit={10} offset={0}
                            total={totalGamesCount / 10} onClick={onPageSelect}/>
            </MuiThemeProvider>}
        </div>
    )
}

export default HomePage
