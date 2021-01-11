export default {
  local: {
    set (key, value) {
      localStorage.setItem(key, JSON.stringify(value))
    },

    get (key) {
      return JSON.parse(localStorage.getItem(key))
    },

    remove (key) {
      localStorage.removeItem(key)
    }
  },
  session: {
    set (key, value) {
      sessionStorage.setItem(key, JSON.stringify(value))
    },
    get (key) {
      return JSON.parse(sessionStorage.getItem(key))
    },
    remove (key) {
      sessionStorage.removeItem(key)
    }
  }

}
