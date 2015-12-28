/* open each txt file and output the result to a json */

fs = require('fs');

fs.readFile('./txt/201512/723_201512.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //console.log(data);
  var rawString = data;
  var regex = /[\s]{0,}[\d]{1,2}[\s]{1,}.*/gi;
  var regexStringArray = rawString.match(regex);
  //console.log(regexStringArray);
  
  regexStringArray.map(function(line,index,ary){
      //console.log( (index+1) +"\n"+line);
      console.log(line.split(/\s+/).filter(Boolean));
      
      //http://stackoverflow.com/questions/19888689/remove-empty-strings-from-array-while-keeping-record-without-loop
      
  });
});