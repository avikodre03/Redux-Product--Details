import { ELECTRONICS } from "../ActionTypes/ActionTypes"

const electronicActionCreater = (data) => {
    return {
        type: ELECTRONICS,
        payload: data
    }
}
export default electronicActionCreater;