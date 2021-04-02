import React, { useCallback, useMemo } from 'react'
import s from './Pagination.module.css'
import classNames from 'classnames'

const Pagination = ({ currentPage = 1, pageSize = 10, total, handleSelect }) => {
  let pagesCount = useMemo(() => Math.ceil(total / pageSize),
    [total, pageSize])
  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let now = currentPage

  const setPaginationBtnClasses = useCallback(
    (p, firstButton, lastButton) => {
      return classNames({
        [s.selectedPage]: now === p,
        [s.unselectedPage]: firstButton,
        [s.unselectedPage]: lastButton,
      })
    }, [now])

  return (
    <div className={s.paginator}>
      {pages.map(p => {
        if ((p < now + 3 && p > now - 3) || p === 1 || p === pages.length) {
          return (
            <div key={p} className={setPaginationBtnClasses(p, now > p + 3, p === pages.length && now < p - 4)} onClick={() => handleSelect(p)}>
              {p}
            </div>
          )
        } else return ''
      })}
    </div>
  )
}

export default Pagination
