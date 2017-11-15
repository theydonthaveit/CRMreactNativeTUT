import firebase from 'firebase'

export const selectPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        payload: peopleId
    }
}

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED'
    }
}

export const formUpdate = ({props, value}) => {
    return {
        type: 'FORM_UPDATE',
        payload: { props, value }
    }
}

export const createNewContact = ({ first_name, last_name, phone, email, company, project, notes }) => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/people`)
    }
}