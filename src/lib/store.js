import { writable, derived } from 'svelte/store'

export const show = writable(true)
export const navWidth = derived(show, ($show) => ($show ? 80 : 40))
