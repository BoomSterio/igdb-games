import React, { useState } from 'react'
import s from './Header.module.css'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import { SearchOutlined } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { requestGames } from '../../redux/thunks/home-thunks'
import { useHistory } from 'react-router'
import joystick from '../../assets/images/joystick.png'

const Header = () => {
  const [query, setQuery] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const searchGames = e => {
    e.preventDefault()

    if (query) {
      history.push(`/search/${query}`)
      dispatch(requestGames(query, 50))

      setQuery('')
    }
  }

  const handleQueryChange = e => setQuery(e.target.value)

  return (
    <div className={s.header}>
      <img
        className={s.logo}
        src={joystick}
        alt={'logo'}
        onClick={() => history.push('')}
      />
      <Paper component="form" className={s.search} onSubmit={searchGames}>
        <InputBase
          className={s.input}
          value={query}
          onChange={handleQueryChange}
          placeholder="Search Games"
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton onClick={searchGames} aria-label="search">
          <SearchOutlined />
        </IconButton>
      </Paper>
    </div>
  )
}

export default Header
