// A $( document ).ready() block.
$( document ).ready(function() {
    
    function defaultAnimation(){
        //your code for default animation
        // when it opens add a class open
    }
    
    function reverse(){
        // code for reverse animation
    }
    
    $("#logo").on("click", function(){
        if($(this).class()==="open"){
            reverse()
        }else{
            defaultAnimation()
        }
    })
    
    
    });