const initialState = {
    desk : {
        id: Date.now,
        targets: [{}],
    }
}

const deskReducer = (state = initialState, action) => {
    switch(action.type) {
        
        default: return state;
    }
}

export default deskReducer;