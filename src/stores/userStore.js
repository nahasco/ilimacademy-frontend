import create from 'zustand'

const useStore = create((set) => ({
    username: "",
    isAuthenticated: null,
    token: "",
    isLoading: false,
    user: null,
    authenticating: false,

    // login: (key) => {
    //     set(() => ({isAuthenticated: true, key: key}))
    // },
    
    // logout: () => {
    //     set(() => ({isAuthenticated: false, key:""}))
    // },

    setLoading: (status) => {
        set(() => ({isLoading: status}))
    },

    setUser: (user) => {
        set(() => ({user: user}))
    },

    setAuthenticated: (status) => {
        set(() => ({isAuthenticated: status}))
    },

    setToken: (token) => {
        set(() => ({token: token}))
    },

    setAuthenticating: (status) => {
        set(() => ({authenticating: status}))
    }
}))

export default useStore