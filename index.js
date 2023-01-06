function exercice1()
{
    let redBox = document.getElementById("box1");
    let btn = document.getElementById("btn-change-color");
    
    btn.addEventListener("click", function(){
        
        redBox.style.backgroundColor = "blue";
    });
}

function exercice2()
{
    let ball = document.getElementById("box2");
    let btn = document.getElementById("btn-move");
    
    btn.addEventListener("click", function(){
        
        ball.classList.add("move");
    });
}

function exercice3()
{
    let ingredients = ["Salade", "Tomate", "Oignon"];
    let list = document.querySelector("#ex3 ul");
    let btn = document.getElementById("btn-add-ingredients");
    
    btn.addEventListener("click", function(){
        
        for(let i=0; i<ingredients.length; i++){
            
            let li = document.createElement("li");
            let txt = document.createTextNode(ingredients[i]);
            li.appendChild(txt);
            list.appendChild(li);
        }
    });
}

function exercice4()
{
    let heroes = [
        {
            name : "Clark Kent",
            secret : "Superman"
        },
        {
            name : "Diana Prince",
            secret : "Wonder Woman"
        },
        {
            name : "Tony Stark",
            secret: "Iron Man"
        }
    ];
    
    let btn = document.getElementById("btn-add-hero");
    let table = document.querySelector("#ex4 table tbody");
    
    
}

function exercice5()
{

}

function exercice6()
{

}

window.addEventListener("DOMContentLoaded", function(){

/***** Exercice 1 *****/

exercice1();

/***** Exercice 2 *****/

exercice2();

/***** Exercice 3 *****/

exercice3();

/***** Exercice 4 *****/

/***** Exercice 5 *****/

/***** Exercice 6 *****/
    
});