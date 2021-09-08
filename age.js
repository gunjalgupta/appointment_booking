function age(birth) {
    var today = new Date();
    birth = new Date(birth);
    const b = async () => {
        return (today.getFullYear() - birth.getFullYear());
        console.log(today)
        console.log(birth)
    }
    return b
}
exports =age()