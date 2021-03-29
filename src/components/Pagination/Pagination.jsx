import React from 'react'
import s from './Pagination.module.css'
import classNames from 'classnames'

const Pagination = ({
  currentPage = 1,
  pageSize = 10,
  total,
  handleSelect,
}) => {
  let pagesCount = Math.ceil(total / pageSize)
  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const setPaginationBtnClasses = (p, firstButton, lastButton) => {
    return classNames({
      [s.selectedPage]: now === p,
      [s.unselectedPage]: firstButton,
      [s.unselectedPage]: lastButton,
    })
  }

  let now = currentPage

  return (
    <div className={s.paginator}>
      {pages.map(p => {
        if ((p < now + 3 && p > now - 3) || p === 1 || p === pages.length) {
          return (
            <div
              key={p}
              className={setPaginationBtnClasses(
                p,
                now > p + 3,
                p === pages.length && now < p - 4
              )}
              onClick={() => handleSelect(p)}
            >
              {p}
            </div>
          )
        } else return ''
      })}
    </div>
  )
}

export default Pagination
