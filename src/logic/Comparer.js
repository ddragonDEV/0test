function haveSimilarity(str1, str2){

    let string1 = str1;
    let string2 = str2;
    var len1 = str1.length;
    var len2 = str2.length;
    var substrs = [];
    for(var i=0; i< len1 ; i++){
        var match = "";
        for(var j=0; j< len2 ; j++){
            if(i + j < len1 && str1[i+j]==str2[j]){
                substrs.push(str2[j]);
            }
        }
    }
    var counter = 0;
    debugger;
    var intersection = str1.split('').filter(value => substrs.join("").split('').includes(value))
    var intersectWithLooking = str2.split('').filter(value => str1.split('').includes(value))
    debugger;
    var regularExpression = "";
    var sum = 0;
    let boolReturn = false;
    intersection.forEach(letter => {
        if(counter==intersection.length-1){

            regularExpression=regularExpression+"(.*)"+letter;
            counter = counter +1;
            if(string1.match(regularExpression)[0].length>0){
                sum = sum + 1;
            }
            debugger;


            boolReturn = ((sum == counter) && (string2.length-intersectWithLooking.length)<=1);
        }
        else if(counter==0){
            regularExpression=letter;
            counter = counter +1;
            sum = sum + 1;
        }
        else{
            debugger;
            regularExpression=regularExpression+"(.*)"+letter;
            counter = counter +1;
            if(string1.match(regularExpression)[0].length>0){
                sum = sum + 1;
            }
        }
    });
    debugger;
    return boolReturn;
}
// If have exact coincidences
function haveIndexOf(str1, str2)
{
    return (str1.toLowerCase().indexOf(str2.toLowerCase())!=-1);
}

// If have similar coincidences
function similarCoincidences(list, lookingFor) 
{ 
    var sameChars =  list.filter(item => haveSimilarity(item.name.toLowerCase().replace(/ /g,''),
            lookingFor.toLowerCase().replace(/ /g,'')));
    
    if(sameChars.length > 0) 
        return sameChars;
    
    return [];
    
} 

// First look for exact coincidences then for similar coincidences
function filterLookginFor(list, lookingFor,isReady)
{
    if(!isReady)
    return list;

    var listFiltered =  list.filter(item => haveIndexOf(removeAccents(item.name.replace(/ /g,'')).toLowerCase(),removeAccents(lookingFor.replace(/ /g,'').toLowerCase())));
    var count = listFiltered.length;

    return count > 0 ? listFiltered : similarCoincidences(list,lookingFor);
}

// This code is from github https://gist.github.com/alisterlf/3490957
function removeAccents(strAccents) {
    var strAccents = strAccents.split('');
    var strAccentsOut = new Array();
    var strAccentsLen = strAccents.length;
    var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    for (var y = 0; y < strAccentsLen; y++) {
        if (accents.indexOf(strAccents[y]) != -1) {
            strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
        } else
            strAccentsOut[y] = strAccents[y];
    }
    strAccentsOut = strAccentsOut.join('');
    return strAccentsOut;
}


export default filterLookginFor;

