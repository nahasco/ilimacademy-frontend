import create from 'zustand'

const useStore = create((set) => ({
    username: "",
    isLoggedIn: false,
    key: "",
    isLoading: true,

    login: (username, key) => {
        set(() => ({isLoggedIn: true, username: username, key: key}))
        set((state) => (localStorage.setItem("key", state.key)))
    },
    
    logout: () => {
        set(() => ({isLoggedIn: false, username: "", key:""}))
        set(() => (localStorage.clear()))
    }
}))

export default useStore