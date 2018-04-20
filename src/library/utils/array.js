/*
    Several array manipulation helper functions
*/

const functions = {}

/// Removes any element from array that corresponds to the selector
functions.reject = (array, selector) => {
    const nonRejected = array.filter( e => { return !selector(e) })
    array.splice(0)
    array.push(...nonRejected)
}

module.exports = functions