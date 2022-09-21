export const rootReducer = (state = { "courses": [], "users": []}, actions) => {
    switch(actions.type) {
        case "LOAD_COURSES":
            return {
                ...state,
                courses: actions.payload
            }
        case "LOAD_ENQUIRIES": 
            return {
                ...state,
                users: actions.payload
            }
        default:
            return state;  
    }
}