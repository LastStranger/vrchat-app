import { MMKV } from "react-native-mmkv";
import { StateStorage } from "zustand/middleware";

export const storage = new MMKV({
    id: "user-storage",
});

export const zustandStorage: StateStorage = {
    setItem: (name, value) => storage.set(name, value),
    getItem: name => {
        const value = storage.getString(name);
        return value ?? null;
    },
    removeItem: name => {
        return storage.delete(name);
    },
};
