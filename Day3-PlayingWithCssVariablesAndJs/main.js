function update(e){
    document.documentElement.style.setProperty(`--${this.name}`, this.value + (this.dataset.sizing || ""));
}

const values = document.querySelectorAll('.controls input')

values.forEach(element => {
    element.addEventListener('change',update);
});

values.forEach(element=>{
    element.addEventListener('mousemove',update);
})