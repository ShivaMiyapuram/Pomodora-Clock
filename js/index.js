$(document).ready(function(){
  var buzzer = $("#buzzer")[0];
  
  var count = parseInt($("#sessionnum").html());
  var breaktime = parseInt($("#breaknum").html());
 // console.log(breaktime);
  $("#reset").hide();
  $("#start").on("click", function(){
    var counter = setInterval(timer, 1000);
    count*= 60;
    breaktime*= 60;
    function timer(){
      $("#add5clock, #minus5clock, #add5break, #minus5break, #reset, #start, #title1, #title2, #breaknum").hide();
      $("#stimetype").html("Session Time:");
      $("#stimetype").show();
      count-=1;
      if(count === 0){
        // put the audio file
        buzzer.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $("#stimetype").hide();
        $("#sessionnum").hide();
      }
      
      
      if(count%60 >= 10){
         $("#sessionnum").html(Math.floor(count/60) + ":" + count%60);
         }
         else{
         $("#sessionnum").html(Math.floor(count/60) + ":" + "0" + count%60);
         }
        
      // $("#sessionnum").html(count); //
     // $("#breaknum").html(breaktime);
      
      function breakTimer(){
        $("#btimetype").html("Break Time: ");
        $("#breaknum, #btimetype").show();
        breaktime-=1;
        if(breaktime === 0){
          buzzer.play();
          clearInterval(startBreak);
        //  $("#reset").css("margin", "auto");
          $("#reset").show();
          $("#breaknum, #btimetype").hide();
        }
      
        if(breaktime%60 >= 10){
         $("#breaknum").html(Math.floor(breaktime/60) + ":" + breaktime%60);
         }
         else{
         $("#breaknum").html(Math.floor(breaktime/60) + ":" + "0" + breaktime%60);
         }
   //    $("#breaknum").html(breaktime);//
      }
    }
    
    
  });
  
  $("#reset").on("click", function(){
    count = 25;
    breaktime = 25;
    $("#sessionnum").html(count);
    $("#breaknum").html(breaktime);
    $("#reset").hide();
    $("#start, #minus5clock, #add5clock, #minus5break, #add5break, #breaknum, #sessionnum, #title1, #title2").show();
    
  });
  
  $("#minus5clock").on("click", function(){
    if(count > 5)
    count-= 5;
    $("#sessionnum").html(count);
   // console.log(count);
  });

  $("#add5clock").on("click", function(){
    count+= 5;
    $("#sessionnum").html(count);
   // console.log(count);
  });
  
  
  $("#minus5break").on("click", function(){
    if(breaktime > 5)
      breaktime-= 5;
    $("#breaknum").html(breaktime);
   // console.log(count);
  });
  
  $("#add5break").on("click", function(){
    breaktime+= 5;
    $("#breaknum").html(breaktime);
   // console.log(count);
  });

  
  
  
  
  
  
  
  /* $("#minus5clock").on("click", function(){
    console.log(sessionval);
    if(sessionval > 1 && sessionval <= 10){
      sessionval--;
      $("#sessionnum").html(sessionval);
    }
  });
  var sessionval = 5, breakval = 1;
  $("#add5clock").on("click", function(){
    console.log(sessionval);
    if(sessionval < 10){
      sessionval++;
      $("#sessionnum").html(sessionval);
    }
  });
  
  
  
  $("#reset").on("click", function(){
    $("#sessionnum").html('5');
    $("#breaknum").html('1');
  });
  
  // break time
  
    $("#add5break").on("click", function(){
    console.log(breakval);
    if(breakval < 10){
      breakval++;
      $("#breaknum").html(breakval);
    }
  });
  
  $("#minus5break").on("click", function(){
    console.log(breakval);
    if(breakval > 1 && breakval <= 10){
      breakval--;
      $("#breaknum").html(breakval);
    }
  }); */
  
  /*
  var count = sessionval;
  $("#start").click(function(){
    var counter = setInterval(timer, 1000);
    
    $("#add5clock, #minus5clock, #sessionnum, #add5break, #minus5break, #breaknum, #start, #reset").hide();
    $("#title1").html("Session Time:");
    function timer(){
      count-=1;
      if(count === 0){
        clearInterval(counter);
        var startBreak = setInterval(breakval, 1000);
        $("#stime").hide();
      }
      $("#stime").html(count);  
      
      function breakTimer(){
      $("#breaknum").show();
      $("#title1").html("Break Time:"); 
      breakval-= 1;
      if(breakval === 0){
        clearInterval(startBreak);
      }  
    }
    
    }
  });
  */ 
  
  
  
  
});