    var quoteList = [
        "'The Lord will fight for you, and you shall hold your peace.'", 
        "'He gives power to the weak, and to those who have no might He increases strength.'", 
        "'Therefore if the Son makes you free, you shall be free indeed.'",
        "'You, Lord, keep my lamp burning, my God turns my darkness into light.'",
        "'For I am the LORD your God who takes hold of your right hand and says to you : do not fear, I will help you.' ",
        "'If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.'",
        "'You, by the help of your God, return, Observe mercy and justice, And wait on your God continually.'",
        "'Now may the God of hope fill you with all joy and peace in believing, that you may abound in hope by the power of the Holy Spirit.'",
        ];

     var authorList = [
     "Exodus 14:14",
     "Isaiah 40:29",
     "John 8:36",
     "Psalm 18:28",
     "Isaiah 41:13",
     "James 1:5",
     "Hosea 12:6",
     "Romans 15:13",
     ];
     
     var quote = document.getElementById("quote"); 
     
     var author = document.getElementById("author");
     
     var button = document.getElementById("switch");
    
     var randomNumberBetween0andQuoteListlength;
     
     

  
  $( document ).ready(function() {
 
 
     //This is just in case the user wants to tweet the initial quote
       var tweetInit = quote.textContent + " " + " - " + author.textContent;    
       $(".twitter-share-button").click(function() {
                  
       $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + tweetInit );
    
  });     

     button.onclick = (function () {
         
           randomNumberBetween0andQuoteListlength = Math.floor(Math.random() * quoteList.length);
           quote.innerHTML = quoteList[randomNumberBetween0andQuoteListlength] ;
           author.innerHTML = authorList[randomNumberBetween0andQuoteListlength];
           var tweet = quote.textContent + " " + " - " + author.textContent;
        
        
          $(".twitter-share-button").click(function() {
        $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + tweet );
    
            });

     });

  
 });
 
