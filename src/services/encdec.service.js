import * as CryptoJS from 'crypto-js';

export function encrypt(data) {
    if (!data) return null;
    let encJson = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.VUE_APP_ENC_KEY).toString();
    let encData = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encJson))
    return encData
}

export function decrypt(data) {
    if (!data) return null;
    let decData = CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8)
    let bytes = CryptoJS.AES.decrypt(decData, process.env.VUE_APP_ENC_KEY).toString(CryptoJS.enc.Utf8)
    return JSON.parse(bytes)

}