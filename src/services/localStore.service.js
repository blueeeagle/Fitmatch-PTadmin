import {encrypt, decrypt} from '@/services/encdec.service';

// Set local storage
export function setLocalStorage(key, data) {
    const encryptedData = encrypt(data);
    localStorage.setItem(key, encryptedData)
}
// Get local storage
export function getLocalStorage(key) {
    let data = localStorage.getItem(key);
    if (data) {
        return decrypt(data);
    } else {
        return null;
    }
}

// Remove local storage
export function removeLocalStorage(key) {
    localStorage.removeItem(key);
}