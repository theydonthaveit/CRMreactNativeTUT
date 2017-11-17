import people from './people.json'

const initialState = {
    people,
    detailView: false,
    personSelected: null,
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    company: '',
    project: '', 
    notes: '',
    loadingPeople: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SELECTED_PERSON':
            return {
                ...state,
                detailView: true,
                personSelected: action.payload
            }
        case 'NONE_SELECTED':
            return {
                ...state,
                detailView: false,
                personSelected: null
            }
        case 'FORM_UPDATE':
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }
        case 'NEW_CONTACT':
            return {
                ...state,
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                company: '',
                project: '', 
                notes: ''
            }
        case 'ADD_PERSON':
            return {
                ...state,
                ...action.newPerson
            }
        case 'INITIAL_FETCH':
            return {
                ...state,
                people: action.payload
            }
        default:
            return state
    }
}