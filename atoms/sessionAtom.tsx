import { atom } from "recoil";
import Cookies from "js-cookie";

const userId = Cookies.get('userId') || "";

export const sessionAtom = atom({
    key: "sessionAtom",
    default: {
        id: userId,
    }
})

