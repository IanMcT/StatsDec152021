function readFile(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        processContents(reader.result);
    reader.close;
    }
}

function processContents(contents){
    var lines = contents.split('\n');
    var output = "";
    var lowestScore = Number.MAX_SAFE_INTEGER;
    var highestScore = Number.MIN_SAFE_INTEGER;
    var total = 0;
    var countScores = 0;

    for (line of lines){
        console.log(line);
        output += line + "<br />";
        var studentInfo = line.split(",");    
        if(parseInt(studentInfo[1])<lowestScore ){
          lowestScore = parseInt(studentInfo[1]);
        }
        if(parseInt(studentInfo[1])>highestScore)
        {
          highestScore = parseInt(studentInfo[1]);
        }
        total += parseInt(studentInfo[1]);
        countScores++;
    }
    output += "Lowest score: " + lowestScore + "<br />";
    output += "Highest score: " + highestScore + "<br />";
    output += "Average score: " + (total/countScores);
    document.getElementById("output").innerHTML += output;
}