export const homeActions = {
  setGames: games => ({ type: 'homePage/SET_GAMES', games }),
  setIsFetching: isFetching => ({ type: 'homePage/SET_IS_FETCHING', isFetching }),
  setPageNumber: pageNumber => ({
    type: 'homePage/SET_PAGE_NUMBER',
    pageNumber,
  }),
}
