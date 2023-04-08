import config from '../config/index.js'

export default {
  setItem(key:any, val:any) {
    const storage = this.getStorage()
    storage[key] = val
    localStorage.setItem(config.nameSpace, JSON.stringify(storage))
  },
  getItem(key:any) {
    return this.getStorage()[key]
  },
  getStorage() {
    return JSON.parse(localStorage.getItem(config.nameSpace)!) || {}
  },
  clearItem(key:any) {
    const storage = this.getStorage()
    delete storage[key]
    localStorage.setItem(config.nameSpace, JSON.stringify(storage))
  },
  claearAll() {
    localStorage.claearAll()
  }
}
