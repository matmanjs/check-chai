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
    STRING: 'string',
    NUMBER: 'number'
};

export const EXPECT_VALUE = {
    STRING: 'matman',
    NUMBER: 10086
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
}