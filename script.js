const panels = document.querySelectorAll('.panel');

panels.forEach((panel) =>{
    panel.addEventListener('click', () =>{
        removeExpandClass();
        panel.classList.add('expand');
    })
})

function removeExpandClass() {
    panels.forEach((panel) =>{
        panel.classList.remove('expand');
    })
}