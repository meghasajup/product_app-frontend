import { create } from 'zustand'

const useLoginStore = create((set) => ({
    isToggle: true,
    setToggle: () => set((state) => ({ isToggle: !state.isToggle })),
}))

export default useLoginStore;