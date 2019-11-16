export const calculateAge = (dob) => {
    const year = Number(dob.substr(0, 4));
    const month = Number(dob.substr(4, 2)) - 1;
    const day = Number(dob.substr(6, 2));
    const today = new Date();
    let age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
        age--;
    }

    return (age);
}
