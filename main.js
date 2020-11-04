const today = new Date();



function checkForFriday(day){
  if(day.getDay() === 5){
    document.querySelector('#answer').innerHTMl = 'YES!'
  }
  else {
    document.querySelector('#answer').innerHTMl = 'No!'
  }
}//end of check for friday
checkForFriday(today);
