const cartCounter = (store) => (next) => (action) => {
    console.log('current Action', store.getState());
    console.log('Action', action);
    console.log('next', next);
    return 
}
export default cartCounter;