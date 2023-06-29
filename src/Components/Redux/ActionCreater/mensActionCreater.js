import { MENS } from "../ActionTypes/ActionTypes"

const mensActionCreater = (data) => {
    return {
        type: MENS,
        payload: data
    }
}
export default mensActionCreater;