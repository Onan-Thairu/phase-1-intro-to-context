function createEmployeeRecord(array) {
    if (array.length === 0) {
        return {
            timeInEvents: [],
            timeOutEvents: []
        }
    } else {
        return {
            firstName: array[0],
            familyName: array[1],
            title: array[2],
            payPerHour: array[3],
            timeInEvents: [],
            timeOutEvents: []
        }
    }
}

function createEmployeeRecords(arrOfArrays) {
    let EmployeeRecords = []
    arrOfArrays.map(array => EmployeeRecords.push(createEmployeeRecord(array)))
    return EmployeeRecords
}

