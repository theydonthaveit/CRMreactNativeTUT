import people from './people.json'

const initialState = {
    people,
    detailView: false,
    personSelected: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SELECTED_PERSON': {
            return {
                ...state,
                detailView
            }
        }
        default:
            return state
    }
}