let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://106.12.174.77:3000'
}
export { BASE_URL, TIME_OUT }
