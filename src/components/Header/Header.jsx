import React, {useState} from 'react'
import s from './Header.module.css'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import {SearchOutlined} from '@material-ui/icons'
import {useDispatch} from 'react-redux'
import {requestGames} from '../../redux/thunks/home-thunks'
import {useHistory, useParams} from 'react-router'

const Header = () => {
    const [query, setQuery] = useState()

    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams()

    const searchGames = () => {
        if(query) {
            history.push(`/search/${query}`)
            dispatch(requestGames(query))
        }
    }

    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div className={s.header}>
            <img className={s.logo} src={'https://i.pinimg.com/originals/20/39/a6/2039a686bc2ecf081f2406faff3b5bab.png'} alt={'logo'}/>
            <Paper component="form" className={s.search}>
                <InputBase
                    className={s.input}
                    value={query}
                    onChange={handleQueryChange}
                    placeholder="Search Games"
                    inputProps={{'aria-label': 'search'}}
                />
                <IconButton onClick={searchGames} aria-label="search">
                    <SearchOutlined/>
                </IconButton>
            </Paper>
        </div>
    )
}

export default Header
