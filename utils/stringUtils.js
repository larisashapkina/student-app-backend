
function repeatNTimesWithSpace(string,n){
    return (string + ' ').repeat(n);
}

function capitilizeFirstLetter(string){
    return string[0].toUpperCase() + string.slice(1);
}
module.exports = {repeatNTimesWithSpace, capitilizeFirstLetter};