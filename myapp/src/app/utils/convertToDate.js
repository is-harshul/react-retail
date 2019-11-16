export const convertToDate = (timeStamp) => {
    const d = new Date(timeStamp)
    let age = d.getFullYear().toString() + d.getMonth() + d.getDate()
    return (age);
}
