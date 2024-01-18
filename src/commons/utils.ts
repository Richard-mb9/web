export function removeEmptyFields(obj: any){
    return Object.keys(obj)
    .filter((k) => obj[k] !== null)
    .filter((k) => obj[k] !== undefined)
    .filter((k) => obj[k] !== '')
    .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
}