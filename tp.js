function handleSubmit(e) {
    e.preventDefault();
    const formInfo =new FormData (formulario);
    const nombre=formInfo.get("nombre")
    const apellido=formInfo.get("apellido")
    const telefono=formInfo.get("telefono")
    const correo=formInfo.get("correo")
    const comentario=formInfo.get("comentario")
    formulario.reset()
console.log(formInfo)
}

const formulatio= document.getElementById("formulario")
formulario.addEventListener("submit" , handleSubmit)