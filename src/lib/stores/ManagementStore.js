import { browser } from "$app/environment";
import { writable } from "svelte/store";

function createStore(initVal) {
    const {subscribe, update, set} = writable(initVal);

    return {
        subscribe,
        update,
        set,
    }
}

export const IsUserLogin = createStore(browser && localStorage.getItem('IsUserLogin') || '');
IsUserLogin.subscribe(val => browser && localStorage.setItem('IsUserLogin', val))

export const Role = createStore(browser && localStorage.getItem('Role') || 'patient');
Role.subscribe(val => browser && localStorage.setItem('Role', val))

/* const formatter = new Intl.DateTimeFormat(undefined, {dateStyle: 'full'})
const diff = new Date();
console.log(formatter.format(diff, 'days')); */