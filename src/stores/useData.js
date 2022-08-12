import create from 'zustand'

const useData = create((set) => ({
    data: "",

    setData: (data) => {
        set(() => ({data: data}))
    },
}))

export default useData