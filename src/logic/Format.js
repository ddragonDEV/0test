// convert given minutes to HH:mm:ss format
const minutesToTime = minutes =>{
    var m =  Math.trunc(minutes%60);
    var h = Math.trunc(minutes/60);
    var s = Math.trunc(minutes*60%60);
    var mm = oneToTwoDigits(m);
    var ss = oneToTwoDigits(s);

    if(h!=0){
        if( m==0 && s==0){
            return h + " h";
        }
        return h + ":" + mm;
    } 
    else if(m!=0){
        if(s==0){
            return m + " m";
        }
        return m + ":" + ss;
    }
    else{
        return s + " s";
    }
}

const oneToTwoDigits = one =>{
    return one>9?one:'0'+one;
}

export default minutesToTime;