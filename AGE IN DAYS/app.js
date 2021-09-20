function ageInDays() {
    var age=prompt("what is your birth year?????");
    var ageInDayss=(2021-age)*365;
    var h1=document.createElement('h1');
    var ans=document.createTextNode("you are " + ageInDayss + " days old");
    h1.setAttribute('id','ageindays');
    h1.appendChild(ans);
    document.getElementById('flex-box-result').appendChild(h1);
    
}
function reset() {
    document.getElementById('ageindays').remove();
    
}
