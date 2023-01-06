function dropMenu(){
    
    let btn = document.getElementById("d-down");
    let hiddenList = document.getElementById("hidden-list");
    
    btn.addEventListener("click", function(){
       
       hiddenList.classList.toggle("d-on");
       
       window.addEventListener("click", function(e){
           
           if(e.target !== btn){
               
               hiddenList.classList.remove("d-on")
           }
           
       });
    });
}

window.addEventListener("DOMContentLoaded", function(){
    
    dropMenu();
})