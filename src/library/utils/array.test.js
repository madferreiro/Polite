/* 
    Every service must have a test module which validates its implementation 
*/

const arrayHelper = require('./array')

describe('Reject helper function', () => {
    test('An array with [ 1, 2, 3, 4, 5 ], rejecting [ 2, 3, 4 ] should result in [1, 5]', () => {
        let testArray = [ 1, 2, 3, 4, 5 ]
        arrayHelper.reject(testArray, (e) => { return e === 2 || e === 3 || e == 4 } )
        expect(testArray.length).toBe(2)
        expect(testArray[0]).toBe(1)
        expect(testArray[1]).toBe(5)
    })
})
