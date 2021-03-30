import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4',
  headers: {
    'Content-Type': 'application/json',
    'Client-ID': 'mr3cuy9uzxoxzas1jylefe3egdgtc6',
    Authorization: 'Bearer zqf945bqxdypif6xq52futsl8jtqke',
  },
})

export const gamesAPI = {
  getPopularGames(maxResults) {
    const date = Math.round(Date.now() / 1000) - 20000000
    return instance
      .post(
        '/games',
        `fields name; 
            sort rating_count desc; 
            where rating > 80 & created_at > ${date}; 
            limit ${maxResults};`
      )
      .then(res => res.data)
      .catch(error => console.log(error))
  },
  getGamesByQuery(query, maxResults) {
    return instance
      .post('/games', `fields name; limit ${maxResults}; search "${query}";`)
      .then(res => res.data)
      .catch(error => console.log(error))
  },
  getGameInfo(id) {
    return instance
      .post(
        '/games',
        `fields name, summary, created_at, rating, total_rating; 
            where id = ${id};`
      )
      .then(res => res.data[0])
      .catch(error => console.log(error))
  },
  getGameCover(id) {
    return instance
      .post('/covers', `fields image_id; where game = ${id};`)
      .then(res => res.data[0])
      .catch(error => console.log(error))
  },
  async getCompanies(id) {
    let companies = []
    await instance
      .post('/involved_companies', `fields *; where game = ${id};`)
      .then(res => {
        companies = res.data
      })
      .catch(error => console.log(error))

    let promises = await companies.map(c => {
      return instance
        .post('/companies', `fields name; where id = ${c.company};`)
    })
    await Promise.all(promises)
      .then(res => {
        companies = companies.map((c, i) => ({...c, name: res[i].data[0].name}))
      })
      .catch(error => console.log(error))

    return companies
  },
  getScreenshots(id) {
    return instance
      .post('/screenshots', `fields image_id; where game = ${id};`)
      .then(res => res.data)
      .catch(error => console.log(error))
  },
}
