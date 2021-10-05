export const getStorage = (key: string) => {
    let result: any
    result = localStorage.getItem(key)
    result = JSON.parse(result)
    return result ? result : false
}

export const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const removeStorage = (key: string) => {
    localStorage.removeItem(key)
}
