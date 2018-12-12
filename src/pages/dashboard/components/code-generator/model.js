export const ASSERTION = {
    NOT: {
        V: 'not',
        API: 'https://www.chaijs.com/api/bdd/#method_not'
    },
    A: {
        V: 'a',
        API: 'https://www.chaijs.com/api/bdd/#method_a'
    },
    EQUAL: {
        V: 'equal',
        API: 'https://www.chaijs.com/api/bdd/#method_equal'
    },
    EQL: {
        V: 'eql',
        API: 'https://www.chaijs.com/api/bdd/#method_eql'
    },
    LENGTH_OF: {
        V: 'lengthOf',
        API: 'https://www.chaijs.com/api/bdd/#method_lengthof'
    },
    ABOVE: {
        V: 'above',
        API: 'https://www.chaijs.com/api/bdd/#method_above'
    },
    LEAST: {
        V: 'least',
        API: 'https://www.chaijs.com/api/bdd/#method_least'
    }
};

export const VAR_TYPE = {
    STRING: 'STRING',
    NUMBER: 'NUMBER',
    OBJECT: 'OBJECT'
};

export const EXPECT_VALUE = {
    STRING: 'matman',
    NUMBER: 10086,
    OBJECT: {
        name: 'matman',
        age: 1,
        isPublished: true
    }
};

export class CodeDemo {
    constructor(varType, assertion, code, commend) {
        // 需要检查的变量类型
        this.varType = varType;

        // 涉及到的断言方法
        this.assertionList = Array.isArray(assertion) ? assertion : [assertion];

        // 代码
        this.code = code;

        // 代码注释
        this.commend = commend;
    }

    getCodeDemo() {
        let isContainNot = this.checkIfContainNot();

        let value = EXPECT_VALUE[this.varType];

        switch (this.varType) {
            case VAR_TYPE.STRING:
                value = isContainNot ? `'${value + value}'` : `'${value}'`;
                break;
            case VAR_TYPE.NUMBER:
                value = isContainNot ? `${value * 2}` : `${value}`;
                break;
            case VAR_TYPE.OBJECT:
                value = isContainNot ? {
                    ...value,
                    imNotExist: true
                } : value;

                value = JSON.stringify(value, null, 2);
                break;
            default:
                break;
        }

        return this.code.replace('value', value);
    }

    checkIfContainNot() {
        return this.assertionList.indexOf(ASSERTION.NOT) > -1;
    }
}