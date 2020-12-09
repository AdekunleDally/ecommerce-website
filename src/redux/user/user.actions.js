import {UserActionTypes} from "./user.types";

export const setCurrentUser =user=>({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user //The user object which could be the auth object or snapshot object
});