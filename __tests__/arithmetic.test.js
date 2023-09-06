import { isEven, sum } from "../arithmetic.js"


//? example function
function giveMeCat() {
    return 'cat'
}

//? test() takes two arguments. A string, and a cb function.
test('giveMeCat returns the string "cat"', () => {
    expect(giveMeCat()).toBe('cat')
})
//? 'npm run test' in the terminal. This should be passing

describe('Testing the isEven function', () => {
    test('Return true for even numbers.', () => {
        expect(isEven(2)).toBe(true)
    })
    
    test('Returns false for odd numbers.', () => {
        expect(isEven(3)).toBe(false)
    })
})

describe('Testing the sum function', () => {
    test('returns 3 when invoked with 1 and 2', () => {
        expect(sum(1,2)).toBe(3)
    })
    test('returns 0 when we invoke with 1 and -1', () => {
        expect(sum(1,-1)).toBe(0)
    })
})

//? Use toEqual for arrays and objects instead of toBe.
test('object assignment', () => {
    const data = { one: 1 };
    data.two = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

//*Other Matchers
//? Null/Undefined/Truthiness
const value = "";

expect(value).not.toBeNull();
expect(value).toBeDefined();
expect(value).not.toBeUndefined();
expect(value).not.toBeTruthy();
expect(value).toBeFalsy();

//? Numbers
const val = 4;

expect(val).toBeGreaterThan(3);
expect(val).toBeGreaterThanOrEqual(3.5);
expect(val).toBeLessThan(5);
expect(val).toBeLessThanOrEqual(4);

//? To find more matchers, look up 'jest matchers' 