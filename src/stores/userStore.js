import create from 'zustand'

const useStore = create((set) => ({
    username: "",
    isLoggedIn: false,
    key: "",
    isLoading: true,

    setKey: (key) => {
        set(() => ({key: key}))
        set(() => (localStorage.setItem("key", key)))
    },

    login: (username, key) => {
        set(() => ({isLoggedIn: true, username: username, key: key}))
        set(() => (localStorage.setItem("key", key)))
    },
    
    logout: () => {
        set(() => ({isLoggedIn: false, username: "", key:""}))
        set(() => (localStorage.clear()))
    },
    setLoading: (status) => {
        set(() => ({isLoading: status}))
    }
}))

export default useStore