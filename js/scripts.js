function checkYear(year){
  if(year%400 === 0)
    return true
  else if(year%100 ===0)
    return false
  else if (year%4 ===0)
    return true
  else
    return false

  // //same thing
  //
  // return year%4 === 0;
}

console.log(checkYear(1904));

$("document").ready(function(){
  $(".inputYear").submit(function(event){
    event.preventDefault();

    var year = $("#inputOne").val();
    var result = checkYear(year);

    $(".result").show()
    $("#year").text(year)
    if(!result){
      console.log("here")
      $("#notAYear").text(" not ");
    }
    else{
      $("#notAYear").hide();
    }
  })
})
