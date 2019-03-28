$(document).ready(function() {

  let isAdult = false;
  var favColor;
  $('#colorPick').change(function(){
    favColor = $('#colorPick').val();
  });

  $("#quiz").submit(function(event) {
    event.preventDefault();
    console.log("submit being called");
    var age = parseInt($("#age").val());
    console.log("Age is " + age);
    var gender = $("#gender").val();
    console.log("Gender is "+gender);
    var orientation = $("select#orientation").val();
    isAdult=ageCheck(age);
    if(!isAdult) {
      console.log('Age is too Young!');
      //$('#tooYoung').show();
      return;
    }
    genderPath(gender, orientation);
    hobbyPath(favColor);
  });

  function ageCheck(myAge) {
    if(myAge>=18) {
      return true;
    }else{
      return false;
    }
  }
  function genderPath(myGender, orientation) {
    switch (myGender) {
      case 'male':
        console.log("case is male");
        maleAlg(orientation);
        break;
      case 'female':
        console.log("case is female");
        femaleAlg(orientation);
        break;
      case 'nonbinary':
        console.log("case is nonbinary");
        nonbinaryAlg(orientation);
        break;


    }
  }
  function maleAlg(ori){
    switch (ori) {
      case 'straight':
        $("#showAnswer > div:not('.straightM')").hide();
        $('#showAnswer').find('.straightM').show();
        break;
      case 'queer':
        $("#showAnswer > div:not('.queerM')").hide();
        $('#showAnswer').find('.queerM').show();
        break;
    }
  }
  function femaleAlg(ori){
    switch (ori){
      case 'straight':
        $("#showAnswer > div:not('.straightF')").hide();
        $('#showAnswer').find('.straightF').show();
        break;
      case 'queer':
        $("#showAnswer > div:not('.queerF')").hide();
        $('#showAnswer').find('.queerF').show();
        break;
    }
  }

  function nonbinaryAlg(ori){
    switch (ori){
      case 'straight':
        $("#showAnswer > div:not('.straightNB')").hide();
        $('#showAnswer').find('.straightNB').show();
        break;
      case 'queer':
        $("#showAnswer > div:not('.queerNB')").hide();
        $('#showAnswer').find('.queerNB').show();
        break;
    }
  }
  function hobbyPath(color){
    $('#showAnswer').find('h1').css('color', color)
  }
});
