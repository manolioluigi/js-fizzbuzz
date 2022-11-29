//dichiarazione variabili
let num, div;
const container = document.getElementById(`contenitore`);

//ciclo for
for(let i=1; i <= 100; i++){

    num = i;
    if(num % 3 == 0){
        if(num % 5 == 0){
            div = '<div class="cubetto red">FizzBuzz</div>';
            console.log("FizzBuzz");
        }else{
            div = '<div class="cubetto aquamarine">Fizz</div>';
            console.log("Fizz");
        }
        
    }
    else if(num % 5 == 0){
        div = '<div class="cubetto yellow">Fizz</div>';
        console.log("Buzz")
    }

    else{
        div = `<div class="cubetto blue">${num}</div>`;
        console.log(num);
    }

    container.innerHTML += div;
}