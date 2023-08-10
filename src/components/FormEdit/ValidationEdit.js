
export const validate_edit_nombre =(estado,setError)=>{
    if(estado.length > 40) setError('Maximo 40 caracteres')
    else {
        if(estado.length < 3 && estado.length !== 0) setError('Minimo 3 caracteres')
        else setError('')
    }
}
export const validate_edit_precio = (estado,setError)=>{
    if(estado > 2000) setError('Precio Maximo por producto de 2000$')
    else setError('')
}
export const validate_edit_cate = (estado,setError)=>{
    if(estado.length > 15 ) setError('Maximo 15 caracteres')
    else{
        if(estado.length < 3 && estado.length !== 0) setError('Minimo 3 caracteres')
        else setError('')
    }
}
export const validate_edit_marca = (estado,setError)=>{
    if(estado.length > 20) setError('Maximo 20 caracteres')
    else {
        if(estado.length < 3 && estado.length !== 0) setError('Minimo 3 caracteres')
        else setError('')
    }
}
export const validate_edit_pd = (estado,setError)=>{
    if(!Number.isInteger(Number(estado))) setError('Debe ser un Numero entero')
    else setError('')
}
export const validate_edit_desc = (estado,setError)=>{
    if(estado.length > 130) setError('Maximo 130 caracteres')
    else {
        if(estado.length < 20 && estado.length !== 0) setError('Minimo 20 caracteres')
        else setError('')
    }
}
