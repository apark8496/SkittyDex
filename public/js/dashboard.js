var chosen = [];

function addPoke(id){
    if (checkSix()){
        chosen.push(id);
    }

}
function removePoke(id){
    if

}
function checkSix(){
    if (chosen.length<= 5){
        return true;
    } else {
        return false;
    }

}