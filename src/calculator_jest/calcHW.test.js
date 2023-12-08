import Calculator from './calcHW';;
//Arrange
const calc = new Calculator();


describe("Math suite", () => {

  /* let nums = [a, b];
  beforeEach(() => {
    function numCheck(num) {
      return typeof (num) === 'number' &&
        isFinite(num) &&
        Math.round(num) === num;
    }
    expect(numCheck.num).toBeTruthy();
  });// doesn't work part of test (idea is to check if the varaiable value is a finit round number before calculation to avoid infinit calculating) */

  test("add two positive numbers, and expect the result to be the correct one", () => {
    //Act
    console.log(`result = ${calc.add(1, 2)}`);
    //Assert
    expect(calc.add(1, 2)).toBe(3); //test shell be passed  due to correct toBe
  });

  test("add positive and negative integer numbers, and expect the result to be the correct one", () => {
    console.log(`result = ${calc.add(1, -5)}`);
    expect(calc.add(1, -5)).toBe(-4); //test shell be passed  due to correct toBe
  });

  test("add positive not integer numbers, and expect the result to be the correct one", () => {
    console.log(`result = ${calc.add(1.5, 2.7)}`);
    expect(calc.add(1.5, 2.7)).toBe(4.2); //test shell be passed  due to correct toBe
  });

  test("sumstract two positive numbers (a<b), and expect the result to be the correct one", () => {
    console.log(`result = ${calc.minus(1, 2)}`);
    expect(calc.minus(1, 2)).toBe(1); //test shell be failed  due to incorrect toBe
  });

  test("sumstract two positive numbers (a<b), and expect the result to be the correct one", () => {
    console.log(`result = ${calc.minus(1, 2)}`);
    expect(calc.minus(1, 2)).toBe(-1); //test shell be passed  due to correct toBe
  });

  test("sumstract two positive numbers (a=b), and expect the result to be the correct one", () => {
    console.log(`result = ${calc.minus(1, 1)}`);
    expect(calc.minus(1, 1)).toBe(0); //test shell be passed due to correct toBe
  });

  //Multiply
  test('Multiply func', () => {
    //Act
    const result = calc.multiply(5, 3);

    //Assert
    console.log(`result = ${result}`);
    expect(result).toBe(15);
  });

  //Divide
  test('Divide func', () => {
    //Act
    const result = calc.divide(6, 3);

    //Assert
    console.log(`result = ${result}`);
    expect(result).toBe(2);
  });

  //Divide (Param test)
  test.each([[6, 1, 6], [6, 2, 3], [6, 3, 2]])
    ('Divide func', (a, b, expectedResult) => {
      // Act
      const actualResult = calc.divide(a, b);
      console.log(`result = ${actualResult}`);

      // Assert
      expect(actualResult).toBe(expectedResult);
    });

  //Divide on zero (Param test)
  test.each([[6, 1, 6], [6, 0, 3], [6, 3, 2]])
    ('Divide func)', (a, b, expectedResult) => {
      // Act
      const actualResult = calc.divide(a, b);
      console.log(`result = ${actualResult}`);

      // Assert
      expect(actualResult).toBe(expectedResult);
    });

});

