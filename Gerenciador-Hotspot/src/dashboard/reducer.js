const INITIAL_STATE = { hotspot: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, hotspot: action.payload }
        case 'SEARCHED':
            return { ...state, list: action.payload }
        case 'CLEAR':
            return { ...state, hotspot: '' }
        default:
            return state
    }
}