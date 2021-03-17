export const homeActions = {
    setGames: (games) => ({type: 'homePage/SET_GAMES', games}),
    setPageNumber: (pageNumber) => ({type: 'homePage/SET_PAGE_NUMBER', pageNumber}),
}