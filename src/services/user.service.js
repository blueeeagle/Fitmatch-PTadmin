import api from "@/services/api.service"
import APIS from '@/models/api.model';
import { LOCAL_STORE_KEYS } from '@/models/app.model';
import { setLocalStorage, getLocalStorage, removeLocalStorage } from '@/services/localStore.service';

// ****************************** TOKEN **********************************
// Save Auth Token
export function updateToken(token) {
    setLocalStorage(LOCAL_STORE_KEYS.AUTH_TOKEN, token)
}
// Get Auth Token
export function getToken() {
    return getLocalStorage(LOCAL_STORE_KEYS.AUTH_TOKEN);
}

// ****************************** LOGGED USER DETAIL **********************************

// Save Logged User Details
export function updateLoggedUserDetail(data) {
    setLocalStorage(LOCAL_STORE_KEYS.USER_DETAIL, data)
}

// Get Logged User Details
export function getLoggedUserDetail() {
    return getLocalStorage(LOCAL_STORE_KEYS.USER_DETAIL);
}

// ****************************** User Servie **********************************

// Login
export async function login({email, password}) {
    return await api.post(APIS.LOGIN, {email, password});
}

// Logout
export async function logout() {
    removeLocalStorage(LOCAL_STORE_KEYS.USER_DETAIL);
    removeLocalStorage(LOCAL_STORE_KEYS.AUTH_TOKEN);
}