import { create } from "zustand"

interface loginModelStore {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

const useLoginModel = create<loginModelStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))