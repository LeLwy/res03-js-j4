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
    let tbody = document.querySelector("#ex4 table tbody");
    let count = 0;
    
    btn.addEventListener("click", function(){
       
       let tr = document.createElement("tr");
       let tdName = document.createElement("td");
       let tdSecret = document.createElement("td");
       
       let heroName = document.createTextNode(heroes[count].name);
       let heroSecret = document.createTextNode(heroes[count].secret);
       
       tdName.appendChild(heroName);
       tdSecret.appendChild(heroSecret);
       
       tr.appendChild(tdName);
       tr.appendChild(tdSecret);
       
       tbody.appendChild(tr);
       
       if(count < heroes.length){
           
            count++;
       }
    });
}

function exercice5()
{
    
    let blueBox = document.getElementById("blue");
    let redBox = document.getElementById("red");
    let greenBox = document.getElementById("green");
    
    let btn = document.getElementById("btn-turn");
    
    btn.addEventListener("click", function(){
        
        blueBox.id  = "red";
        redBox.id  = "green";
        greenBox.id  = "blue";
        
    });
}

function exercice6()
{
    
    let ball = document.getElementById("ball");
    let btn = document.getElementById("btn-roll");
    
    btn.addEventListener("click", function(){
        
        ball.classList.toggle("rolling-ball");
        
    });
}

window.addEventListener("DOMContentLoaded", function(){

/***** Exercice 1 *****/

exercice1();

/***** Exercice 2 *****/

exercice2();

/***** Exercice 3 *****/

exercice3();

/***** Exercice 4 *****/

exercice4();

/***** Exercice 5 *****/

exercice5();

/***** Exercice 6 *****/

exercice6();
    
});