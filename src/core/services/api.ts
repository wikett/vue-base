import axios from 'axios'
// To simplify the challenge and that it can be executed without changing any file, we leave the base url of the api here.
// To make it more extensible (dev, test and prod),
// we would put the url base 'https://restcountries.com/v3.1/' in an environment variable (.env) and use it in the instance we created of axios.
// const _baseURL = import.meta.env.VITE_API_ENDPOINT

const _baseURL = 'https://restcountries.com/v3.1/'

const instance = axios.create({
  baseURL: _baseURL
})

export default instance
