import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IAuthStore {
  username: string;
  objectId: string;
  role: string;
  setIsAuthLogin: ({
    username,
    objectId,
    role,
  }: {
    username: string;
    objectId: string;
    role: string;
  }) => void;
  clear: () => void;
}

const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      username: "",
      objectId: "",
      role: "",
      setIsAuthLogin: ({ username, objectId, role }) =>
        set({ username: username, objectId: objectId, role: role }),
      clear: () => set({ username: "", objectId: "", role: "" }),
    }),
    {
      name: "user-objectId", // nama key di localStorage
      partialize: (state) => ({ objectId: state.objectId }), // hanya menyimpan objectId
    },
  ),
);

export default useAuthStore;
