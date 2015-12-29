var express = require('express');
var router = express.Router();
var extractor = require('../../extractSportGroundOpen.js');
console.log(typeof extractor.extract);
/* GET home page. */
router.get('/:sportgroundId/:sportgroundName', function(req, res, next) {
  var sportgroundId = req.params.sportgroundId;
  var sportgroundName = req.params.sportgroundName; 
  var specificYearMonth =req.query.yearmonth; 
  var sepcificDay =  req.query.day; 
  var today = new Date();
  var fullYear = today.getFullYear().toString();
  var month = (today.getMonth() +1);
  var monthInString;
  if(month <10){
    monthInString = "0" + month;
  }else{
    monthInString = month.toString();    
  }
  
  //e.g 201512 , 201601
  var yearMonth;
  if(specificYearMonth){
    yearMonth = specificYearMonth;
  }else{
    yearMonth = fullYear +monthInString;      
  }

  var todayDate; 
  if(sepcificDay){
    todayDate = sepcificDay;    
  }else{
    todayDate = today.getDate(); 
  }

   
  extractor.extract(sportgroundId,yearMonth,function(result){

    var doesItOpen = "unknown";
    console.log(result);
    for(var i=0; i < result.length ;i++){
      if( parseInt(result[i][0]) == todayDate){
        if(result[i].length>1){
          doesItOpen = "maybe not";
        }else{
          doesItOpen = "yes";
        }
        break;
      }
    }
    res.render('sportground',
              { sportgroundName: sportgroundName,
                doesItOpen:     doesItOpen,
                yearMonth :     yearMonth,
                sportgroundId:  sportgroundId
                }
  );    
    
  });

});

module.exports = router;
