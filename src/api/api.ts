import request from '../utils/request'

// POST
export const loginAPI = (data:any) => {
  return request.post('/register', data)
}
