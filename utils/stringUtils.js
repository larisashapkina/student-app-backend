
function repeatNTimesWithSpace(string,n){
    if(!string) return '';

    const arr = new Array(n).fill(string);

    return arr.join(' ');
}

function capitalizeFirstLetter(string){
    if(!string) return '';
    return string[0].toUpperCase() + string.slice(1);
}
module.exports = {repeatNTimesWithSpace, capitalizeFirstLetter};