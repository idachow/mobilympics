
function scoreLoad() {
    console.log("hello world");
    
    var sc1 = Math.floor(Math.random() * 100);
    var sc2 = Math.floor(Math.random() * 100);
    var sc3 = Math.floor(Math.random() * 100);
    var sc4 = Math.floor(Math.random() * 100);
    var sc5 = Math.floor(Math.random() * 100);
    var sc6 = Math.floor(Math.random() * 100);
    
    
    var allscores = [sc1,sc2,sc3,sc4,sc5,sc6];
    
    var maxval = Math.max.apply( Math, allscores );
    var maxindex = 0;
    
    for (i = 0; i < allscores.length; i++) {
        console.log("compare -- " + maxval + "&" + allscores[i]);
        if (maxval == allscores[i]) {
            maxindex = i + 1;
            console.log("YES");
        }
    }
    
    
    
    console.log( "max value ~~~~ " + maxval);
    console.log( "max ~~~ " + maxindex);
    
    var winning = maxindex.toString;
    

    document.getElementById('score1').innerHTML = sc1;
    document.getElementById('score2').innerHTML = sc2;
    document.getElementById('score3').innerHTML = sc3;
    document.getElementById('score4').innerHTML = sc4;
    document.getElementById('score5').innerHTML = sc5;
    document.getElementById('score6').innerHTML = sc6;
    
    var winningstring = allscores[maxindex - 1] + " <P><P><i><sub>SCORE</sub><P> <sub>LEAD</sub></i>";
    document.getElementById('score'+maxindex).innerHTML = winningstring;
}
