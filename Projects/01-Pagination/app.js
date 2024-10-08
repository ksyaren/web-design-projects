const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const previous = document.getElementById("previous");
const next = document.getElementById("next");


let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update();
});

previous.addEventListener("click", () => {
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
    }

    update();
});

function update(){
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active');
        } else{
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll(".active");

    //console.log(actives.length, circles.length);
    //console.log(actives.length / circles.length);
    //3 tane ilerleme çubuğu var ve progress'de ayarlanan width değerinin 33.33 civarında çıkması gerekiyor
    //console.log ((actives.length -1)/ (circles.length-1) * 100 + "%");
    progress.style.width = (actives.length -1)/ (circles.length-1) * 100 + "%";

    if(currentActive == 1){
        previous.disabled = true;
    }
    else if(currentActive == circles.length)
    {
        next.disabled= true;
    }
    else
    {
        previous.disabled = false;
        next.disabled =false;
    }
}