var form = $('#stringForm');
form.submit(function( event ) {
    event.preventDefault();
   var string = $('#text').val();
   var charNum = $('#chars').val();
   var SetWordBoundary= parseInt($('#boundary').val());
   var shortenedString= truncateString(string, charNum, SetWordBoundary);
   var result = $('#result');
   result.html('Result: '+shortenedString);

    
  });


  function truncateString( str, charNum, SetWordBoundary ){
    if (str.length <= charNum) { return str; }
    const subString = str.substr(0, charNum); // the original check
    return (SetWordBoundary 
      ? subString.substr(0, subString.lastIndexOf(" ")) 
      : subString) + "&hellip;";
  };
