import chai from 'chai';

// 将其挂载在全局
window.chai = chai;
window.expect = chai.expect;

export const SET_CODE_DEMO = 'SET_CODE_DEMO';
export const SET_EXECUTE_CODE_RESULT = 'SET_EXECUTE_CODE_RESULT';

export function setCodeDemo(data) {
    return {
        type: SET_CODE_DEMO,
        data: data
    };
}

export function executeCode(code) {
    try {
        eval('(' + code + ')');

        return {
            type: SET_EXECUTE_CODE_RESULT,
            data: {
                isSuccess: true,
                resultMsg: '校验通过！'
            }
        };

    } catch (e) {
        console.log(e);

        let resultMsg = e.toString();

        if (resultMsg.match('AssertionError')) {
            resultMsg = `校验不通过：${e.message}`;
        } else if (resultMsg.match('TypeError')) {
            resultMsg = resultMsg.replace('TypeError:', '').replace('is not a function', '语法错误');
        } else if (resultMsg.match('Error: Invalid Chai property')) {
            resultMsg = resultMsg.replace('Error: Invalid Chai property:', '').replace('Did you mean', '不是Chai的API，你需要的是');
        }

        return {
            type: SET_EXECUTE_CODE_RESULT,
            data: {
                isSuccess: false,
                resultMsg: resultMsg
            }
        };
    }
}
