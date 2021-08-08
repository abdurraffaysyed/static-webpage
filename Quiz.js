var s;
var answer={
    1:'i',
    2:'ii',
    3:'i',
    4:'i',
    5:'i'
}
function init()
{
    s=0;
}
function handleclick(question,ans) {
    if(question=='1'){
        if(ans==answer['1']){
            s++;
        }


    }
    else if(question=='2'){
        if(ans==answer['2']){
            s++;
        }
    }
    else if(question=='3'){
        if(ans==answer['3']){
            s++;
        }
    }
    else if (question == '4') {
        if (ans == answer['4']) {
            s++;
        }
    }
    else if (question == '5') {
        if (ans == answer['5']) {
            s++;
        }
    }


    
}
function submitted(){
    alert("you score for the quiz is "+ s);
    window.location.reload();
}

