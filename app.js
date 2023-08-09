const btn = document.querySelector('#btn');
const h2 = document.querySelector('#h2');
btn.addEventListener('click', function(){
    
  const newColor = randomColorGeneration();
    document.body.style.backgroundColor = newColor;
    h2.innerText = newColor;
})

const randomColorGeneration = () =>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
     return `rgb(${r}, ${g}, ${b})`;
}


