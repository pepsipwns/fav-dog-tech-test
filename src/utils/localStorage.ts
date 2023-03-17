import Cookies from 'js-cookie';

export const setLocalStorage = (key: string, value: any) => {
    if (typeof window !== "undefined"){
        localStorage.setItem(key, JSON.stringify(value));
    } else {
        Cookies.set(key, JSON.stringify(value));
    }
};

export const getLocalStorage = (key: string) => {
    if (typeof window !== "undefined"){
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } else {
        return Cookies.get(key);
    }
};