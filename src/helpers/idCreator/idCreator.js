const randomId = () => {
    const id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    return id;
}

export default randomId;