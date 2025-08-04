import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IAuthStore {
  username: string;
  objectId: string;
  setIsAuthLogin: ({
    username,
    objectId,
  }: {
    username: string;
    objectId: string;
  }) => void;
  clear: () => void;
}

const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      username: "",
      objectId: "",
      setIsAuthLogin: ({ username, objectId }) =>
        set({ username: username, objectId: objectId }),
      clear: () => set({ username: "", objectId: "" }),
    }),
    {
      name: "user-objectId", // nama key di localStorage
      partialize: (state) => ({ objectId: state.objectId }), // hanya menyimpan objectId
    },
  ),
);

export default useAuthStore;
