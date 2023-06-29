import { JEWELERY } from "../ActionTypes/ActionTypes"

const jeweleryActionCreater = (data) => {
    return {
        type: JEWELERY,
        payload: data
    }
}

export default jeweleryActionCreater;