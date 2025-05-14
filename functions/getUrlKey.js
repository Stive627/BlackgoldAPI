function getUrlKey(url){
    const arr = url.split('/')
    return arr.slice(-1)[0]
}

function getUrlKeys(arr){
    const finalArr = arr.map((elt, indx) => ({Key:decodeURI(getUrlKey(elt))}))
    return finalArr
}
module.exports = getUrlKeys