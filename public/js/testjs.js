
function scoreLoad() {
    var sc1 = Math.floor(Math.random() * 100);
    var sc2 = Math.floor(Math.random() * 100);
    var sc3 = Math.floor(Math.random() * 100);
    var sc4 = Math.floor(Math.random() * 100);
    var sc5 = Math.floor(Math.random() * 100);
    var sc6 = Math.floor(Math.random() * 100);
    
    
    var allscores = [sc1,sc2,sc3,sc4,sc5,sc6];
    console.log(allscores);
    
    var maxval = Math.max.apply( Math, allscores );
    var maxindex = 0;
    
    for (i = 0; i < allscores.length; i++) {
        console.log("compare -- " + maxval + "&" + allscores[i]);
        if (maxval == allscores[i]) {
            maxindex = i + 1;
            console.log("YES");
            break;
        }
    }
    
    
    console.log( "max value ~~~~ " + maxval);
    console.log( "max ~~~ " + maxindex);
    
    document.getElementById('score1').innerHTML = allscores[0];
    document.getElementById('score2').innerHTML = allscores[1];
    document.getElementById('score3').innerHTML = allscores[2];
    document.getElementById('score4').innerHTML = allscores[3];
    document.getElementById('score5').innerHTML = allscores[4];
    document.getElementById('score6').innerHTML = allscores[5];
    
    var winningstring = "<div id='scorelead'>" + allscores[maxindex-1] + "<P><I>SCORE<P>LEAD </i></div>";
    document.getElementById('score'+maxindex).innerHTML = winningstring;
}
