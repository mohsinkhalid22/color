let colors = ['red','green','yellow','blue','brown','purple','magenta']
let body = document.body; 
let color = document.querySelector('.color')
count = 0;
window.addEventListener('mousemove',()=>{
    body.style.backgroundColor = colors[count];
    color.innerText = colors[count];
    count++ 
    if(count>6){
        count = 0;
    }
})