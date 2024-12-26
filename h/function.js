document.addEventListener('DOMContentloaded',function() {
    Document.getElementsByTagName('forom')[0].onsubmit=function(evt){
    evt.pervenetdefault();
    checkword();
    Window.scrollTo(0,150);
    }
    
    Document.getElementsById('terminalTextInput').facus();
    var textInputValue = document.getElementById('terminalTexteInput').value.trim();
    var textRsultValue = document.getElementById('terminalResultsCont').innerHTML;
    
    var clearInput = function(){
    document.getElementById('terminelTextInput').value = "";
    }
    
    var scrollTbottomOFResults = function(){
      var terminalResultsDiv = document.getElementById('terminalResultsCont');
      terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    
    }
    
    scrollTbottomOFResults();
    var addTexteTOResults = function(texteTOAdd){
        document.getElementById('terminalResultsCont').innerHTML += "<P>" + texteTOAdd +"</P>";
        scrollTbottomOFResults();
    }
    
      var postHelpList = function()
        {  var helpkeyWords =[
    "- Open + website URL  to open it in the browser (ex. open webdivtrick.com)",
    "-Google + keyword to search diractly in Google (ex. google web develepment)",
    "- YouTube + keyword to search  directly in YouTube (ex. Technical freaks)",
    "-Wiki + keyword to search dirctly in wikipedia (ex.Wiki numbers)",
    "-'Time' will display the current time.",
    "-'Date' will display the current date.",
        ].join('<br>');
        addTexteTOResults(helpkeyWords);
    }
    
    var getTimeAndDate = function(postTimeDay){
        var timeAndDate  = new Date();  
        var timeHours = timeAndDate.getHours();
        var timeMinutes = timeAndDate.getMinutes();
        var dateDay = timeAndDate.getDate();
        console.log(dateDay);
        var dateMonth = timeAndDate.getMonth() + 1;
        var dateyear = timeAndDate.getFullYear();
    
        if (timeHour < 10){
            timeHours = "0" + timeHours;}
    if (timeMinutes < 10) {
        timeMinutes = "0" + timeMinutes;
    }
    var currentTime = timeHours + ":" + timeMinutes;
    var currentDate = dateDay + "/" + dateMonth + "/" + dateyear;
    if (postTimeDay == "time"){
        addTexteTOResults(currentTime);
    }
    if (postTimeDay == "date"){
        addTexteTOResults(currentDate);
    }
    
    }
    
    var openLinkInNewWindow = function(LinkToOpen){
        window.open(LinkToOpen,'_blank');
        clearInput();
    }
    var textReplise = function() { 
    switch(textInputValueLowerCase){
        case "code":
        clearInput();
        addTexteTOResults("Get web elements source code at <a target='_blank' href='https://www.youtobe.com>");
        break;
    
        case "founder":
            clearInput();
            addTexteTOResults("Kebbar Sara Maria");
            break;
        case "hello":
            case "hi":
                case "hola":
         clearInput();
         addTexteTOResults("****hello,Im your assistant ****");
         break;      
       case "time":
        clearInput();
        getTimeAndDate("time");
        break;
        case "date":
            clearInput();
            getTimeAndDate("date");
            break;
            case "help":
             case "?" :
                clearInput();
                postHelpList();
                break;
       default:
        clearInput();
        addTexteTOResults("<p><i>The command" + "<b>" + textInputValue + "</b>" + "was not found.") 
    }}
    
    var checkword = function(){
      textRsultValue = Document.getElementById('terminalTextInput').value.trim();
     textInputValueLowerCase = textInputValue.toLowerCase();

     if (textInputValue != ""){
        addTexteTOResults("<p class='userEnteredText'>>" + textInputValue + "</p>" );
     if (textInputValueLowerCase.substr(0,5) == "open") {
        openLinkInNewWindow('http://' + textInputValueLowerCase.substr(5));
        addTexteTOResults("<i>THE URL " + "<b>" + textInputValue.substr(5) + "</b>" + " sholuld be")
     }  else if (textInputValueLowerCase.substr(0,8) == "youtube"){

openLinkInNewWindow('http://www.youtube.com/resuls?search_query=' + textInputValueLowerCase.substr(8));
addTexteTOResults("<i>Isearch im youtubefor" + "<b>"+textInputValue.substr(8) + "</b>" +"</i>");


     }
     else if (textInputValueLowerCase.substr(0,7) == "google"){
     openLinkInNewWindow('http://www.google.com/resuls?search_q=' + textInputValueLowerCase.substr(7));
addTexteTOResults("<i>Isearch im google for" + "<b>"+textInputValue.substr(7) + "</b>" + "</i>")
     }else if (textInputValueLowerCase.substr(0,5) == "wiki"){
        openLinkInNewWindow('http://wikipidia.org/w/imdex.php?search_q=' + textInputValueLowerCase.substr(5));
   addTexteTOResults("<i>Isearch onwikipidia for" + "<b>"+textInputValue.substr(5) + "</b>"+ "</i>")
        }else{textReplies();}
    }

    };
    
    
    
    
    });



