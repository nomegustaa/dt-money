import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-vercel-git-develop-nomegustaas-projects.vercel.app/',
})
