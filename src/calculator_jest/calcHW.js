class Calculator {
    constructor() {
    }

    add(a, b) {
        return a + b;

    };

    minus(a, b) {
        return a - b;
    };

    divide(a, b) {
        if (b == 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }

    /*divide(a, b) {
        if (b==0) {
            throw new Error ("Cannot divide by zero");
        }
        return a/b+1; //shell lead to failed test with correct expected  result
    }*/

    multiply(a, b) {
        return a * b;
    }

};
export default Calculator;





