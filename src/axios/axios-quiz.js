import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-e3749-default-rtdb.firebaseio.com/'
})