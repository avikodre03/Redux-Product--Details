import { WOMEN } from "../ActionTypes/ActionTypes"

const womenActionCreater = (data) => {
    return {
        type: WOMEN,
        payload: data
    }
}

export default womenActionCreater;