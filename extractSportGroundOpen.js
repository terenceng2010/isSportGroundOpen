/* open each txt file and output the result to a json */

fs = require('fs');
var filenumber = process.argv[2];
var fileyearmonth = process.argv[3];
fs.readFile('./txt/'+fileyearmonth+'/'+filenumber+'_'+fileyearmonth+'.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //console.log(data);
  var rawString = data;
  var regex = /[\s]{0,}[\d]{1,2}[\s]{1,}.*/gi;
  var regexStringArray = rawString.match(regex);
  //console.log(regexStringArray);
  var finalArray = [];
  regexStringArray.map(function(line,index,ary){
      //console.log( (index+1) +"\n"+line);
      
      if(line.indexOf("上午") !=-1 || line.indexOf(":") !=-1 || line.indexOf("最新更改日期") !=-1
          || line.indexOf("-") !=-1 || line.indexOf("AM") !=-1 || line.indexOf("PM") !=-1
          || line.indexOf("Hour") !=-1 || line.indexOf("如有節目調動") !=-1
        ){
        
      }else{
        console.log(line.split(/\s+/).filter(Boolean).filter(unwantString));      
      }

      
      //http://stackoverflow.com/questions/19888689/remove-empty-strings-from-array-while-keeping-record-without-loop
      
  });
});

function unwantString(element,index,array){
  
  var e = element;
  
  if(e == "(" || e == ")" || e == "/" 
     || e == "MON" || e == "TUE"  || e == "WED"
     || e == "THU" || e == "FRI"  || e == "SAT"
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