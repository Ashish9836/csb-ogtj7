blockIds = ['car-5','car-4','car-3','car-2','car-1']
textIds = ['t-5','t-4','t-3','t-2','t-1']

blockIds.forEach(myFunction);
function myFunction(value){
    document.getElementById(value).style.display = 'none';
}
function addFunction(){
    if(blockIds.length==0){
        window.location="/alert.html";
    }
    var bb = document.getElementById('inp-add').value;
    if(bb.length!=0){   
        var aa = blockIds.pop();
    document.getElementById(aa).style.display = 'block';
    document.getElementById(aa).style.opacity = '1';
    document.getElementById(aa).style.transform = 'none';

   
   var cc =textIds.pop();
    document.getElementById(cc).innerHTML = bb;
    }
}
function delTask(bid,tid){
blockIds.push(bid);
textIds.push(tid);
document.getElementById(bid).style.transitionDuration='1.5s';
document.getElementById(bid).style.transitionProperty='all';
document.getElementById(bid).style.backgroundColor='white';
document.getElementById(bid).style.color='black';

document.getElementById(bid).style.opacity = '0';
setTimeout(function(){document.getElementById(blockIds[blockIds.length-1]).style.display='none';},1600);
}
function hide(id){
    document.getElementById(id).style.display = 'none';
}


function done(t){
document.getElementById(t).innerHTML = 'TASK-DONE';
t =  "car"+t[t.length-2]+t[t.length-1];
document.getElementById(t).style.backgroundColor = 'black';
document.getElementById(t).style.color = 'white';
document.getElementById(t).style.transitionDuration='1s';
document.getElementById(t).style.transitionProperty='all';
document.getElementById(t).style.transform='scale(1.2)';
}

