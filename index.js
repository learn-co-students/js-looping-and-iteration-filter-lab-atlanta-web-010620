function findMatching(array,nameToFind){
    console.log(name);
    const result = array.filter(element => element.toLowerCase() === nameToFind.toLowerCase())
    return result;
}

function fuzzyMatch(array, string){
    const result = array.filter(element => element[0] === string[0])
    return result; 
}

function matchName(array, string){
    const result = array.filter(element => element.name === string); 
    return result; 
}