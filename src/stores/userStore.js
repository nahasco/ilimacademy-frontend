import create from 'zustand'

const useStore = create((set) => ({
    username: "",
    isAuthenticated: false,
    key: "",
    isLoading: true,

    login: (key) => {
        set(() => ({isAuthenticated: true, key: key}))
        set(() => (localStorage.setItem("key", key)))
    },
    
    logout: () => {
        set(() => ({isAuthenticated: false, key:""}))
        set(() => (localStorage.clear()))
    },

    setLoading: (status) => {
        set(() => ({isLoading: status}))
    }
}))

export default useStore