import { ASSERTION, CodeDemo, EXPECT_VALUE, VAR_TYPE } from './model';

export const CODE_STRING_LIST = [
    new CodeDemo(VAR_TYPE.STRING, ASSERTION.A, `expect(value).to.be.a('string')`, '为字符串类型'),
    new CodeDemo(VAR_TYPE.STRING, ASSERTION.EQUAL, `expect(value).to.equal('${EXPECT_VALUE.STRING}')`, '相等'),
    new CodeDemo(VAR_TYPE.STRING, [ASSERTION.EQUAL, ASSERTION.NOT], `expect(value).to.not.equal('${EXPECT_VALUE.STRING}')`, '不相等'),
    new CodeDemo(VAR_TYPE.STRING, ASSERTION.LENGTH_OF, `expect(value).to.have.lengthOf(6)`, '字符长度为6')
];

export const CODE_NUMBER_LIST = [
    new CodeDemo(VAR_TYPE.NUMBER, ASSERTION.A, `expect(value).to.be.a('number')`, '为数字类型'),
    new CodeDemo(VAR_TYPE.NUMBER, ASSERTION.EQUAL, `expect(value).to.equal(${EXPECT_VALUE.NUMBER})`, '相等'),
    new CodeDemo(VAR_TYPE.NUMBER, [ASSERTION.EQUAL, ASSERTION.NOT], `expect(value).to.not.equal(${EXPECT_VALUE.NUMBER})`, '不相等')
];

export function getCodeDemoList(varType) {
    let list = [];

    switch (varType) {
        case VAR_TYPE.STRING:
            list = CODE_STRING_LIST;
            break;

        case VAR_TYPE.NUMBER:
            list = CODE_NUMBER_LIST;
            break;

        default:
            break;
    }

    return list;
}