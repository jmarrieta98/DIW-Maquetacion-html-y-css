function cambiar_modo() {
    if(document.body.getAttribute('class')=='modo-oscuro'){
        document.body.removeAttribute('class');
    }else{
        document.body.setAttribute('class','modo-oscuro');
    }
}