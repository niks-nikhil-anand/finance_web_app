import CryptoJS from 'crypto-js';

export const generateRandomToken = () => {
    const randomBytes = CryptoJS.lib.WordArray.random(32);
    return randomBytes.toString(CryptoJS.enc.Hex);
};

export const generateResetLink = (token) => {
    const baseUrl = process.env.BASE_URL || "http://localhost:3000"; 
    return `${baseUrl}/resetPassword/?token=${token}`;
};
