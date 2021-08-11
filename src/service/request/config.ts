let BASE_URL = ''
let BASE_NAME = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3000'
  BASE_NAME = 'Dk'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://106.12.174.77:3000'
  BASE_NAME = 'Dk'
}
export { BASE_URL, BASE_NAME }
