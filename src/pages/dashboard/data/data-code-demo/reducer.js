import { SET_CODE_DEMO, SET_EXECUTE_CODE_RESULT } from './action';

const initialState = {
    code: '',
    isSuccess: true,
    resultMsg: ''
};

export default function codeDemoInfo(state = initialState, action) {
    let { type, data } = action,
        update = {};

    switch (type) {
        case SET_CODE_DEMO:
            update = {
                code: data,
                isSuccess: true,
                resultMsg: ''
            };
            break;

        case SET_EXECUTE_CODE_RESULT:
            update = {
                isSuccess: data.isSuccess,
                resultMsg: data.resultMsg
            };
            break;

        default:
            break;
    }

    return Object.keys(update).length ? Object.assign({}, state, update) : state;
}
