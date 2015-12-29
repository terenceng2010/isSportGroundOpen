// extractSportGroundOpen.js
// ==========
/* open each txt file and output the result to a javascript array */
module.exports = {

  extract: function (inputFileNumber, inputFileYearMouth, callback) {
    fs = require('fs');
    var filenumber = inputFileNumber;
    var fileyearmonth = inputFileYearMouth;
    fs.readFile('../txt/' + fileyearmonth + '/' + filenumber + '_' + fileyearmonth + '.txt', 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      //console.log(data);
      var rawString = data;
      var regex = /[\s]{0,}[\d]{1,2}[\s]{1,}.*/gi;
      var regexStringArray = rawString.match(regex);
      //console.log(regexStringArray);
      var finalArray = [];
      regexStringArray.map(function (line, index, ary) {
        //console.log( (index+1) +"\n"+line);
      
        if (line.indexOf("上午") != -1 || line.indexOf(":") != -1 || line.indexOf("最新更改日期") != -1
          || line.indexOf("-") != -1 || line.indexOf("AM") != -1 || line.indexOf("PM") != -1
          || line.indexOf("am") != -1 || line.indexOf("pm") != -1
          || line.indexOf("Hour") != -1 || line.indexOf("如有節目調動") != -1
          || line.indexOf("發出日期") != -1

          ) {

        } else {
          var toBePushed = line.split(/\s+/).filter(Boolean).filter(unwantString);
        
          //console.log(toBePushed);      
          finalArray.push(toBePushed);
          //if contain will be confined. it is valid
        }

      
        //http://stackoverflow.com/questions/19888689/remove-empty-strings-from-array-while-keeping-record-without-loop
      
      });

      //remove all unrelated data before 1st of a month
      while (parseInt(finalArray[0][0]) != 1) {
        finalArray.shift();
      }

      while (parseInt(finalArray[finalArray.length - 1][0] > 31)) {
        finalArray.pop();
      }

      //remove all unrelated data after 31st of a month.  
      while (finalArray.length > 31) {
        finalArray.pop();
      }

     
      if(callback){
       callback(finalArray);       
      }else{
        console.log(finalArray);
      }

    });
  }
};
function unwantString(element,index,array){
  
  var e = element;
  
  if(e == "(" || e == ")" || e == "/" 
     || e == "Mon" || e == "Tue"  || e == "Wed"
     || e == "Thu" || e == "Thur" || e == "Fri"  || e == "Sat"
     || e == "Sun"   
     || e == "MON" || e == "TUE"  || e == "WED"
     || e == "THU" || e == "THUR"  || e == "FRI"  || e == "SAT"
     || e == "SUN" 
     || e == "一"  || e == "二"  || e == "三"
     || e == "四" || e == "五" || e == "六"
     || e == "日"
     || e == "(一)"  || e == "(二)"  || e == "(三)"
     || e == "(四)" || e == "(五)" || e == "(六)"
     || e == "(日)"     
     || e == "（一）"  || e == "（二）"  || e == "（三）"
     || e == "（四）" || e == "（五）" || e == "（六）"
     || e == "（日）"       
    ){
    return false;
  }else{
    return true;
  }
  
}