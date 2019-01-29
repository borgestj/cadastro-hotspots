import axios from 'axios'

const URL = 'http://localhost:3003/api/hotspots'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const hotspot = getState().hotspot.hotspot
        const search = hotspot ? `&hotspot__regex=/${hotspot}/` : ''
        const request = axios.get(`${URL}?sort=+createdAt${search}`)
            .then(resp => dispatch({type: 'SEARCHED', payload: resp.data}))
    }
}

export const add = (hotspot) => {
    return dispatch => {
        axios.post(URL, {hotspot})
            .then(resp => dispatch(search()))
    }
}

export const remove = (hotspot) => {
    return dispatch => {
        axios.delete(`${URL}/${hotspot._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'CLEAR' }, search()]
}