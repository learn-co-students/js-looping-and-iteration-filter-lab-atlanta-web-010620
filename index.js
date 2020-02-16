// Code your solution in this file
function findMatching(drivers, string) {
    return drivers.filter(function (name) {return name.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function (name) {return name.slice(0, letters.length) === letters;});
}

function matchName(object, string) {
    return object.filter(function (driver) {return driver.name === string;});
}