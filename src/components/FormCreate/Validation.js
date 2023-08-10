export const validate_Nombre =  (estado,setErrors)=>{
    if(!estado)setErrors("Ingresa un Nombre")
    else{
        if(estado.length > 20) setErrors("No debe tener tantos caracteres")
        else{
            if(estado.length < 3) setErrors('Minimo de 3 caracteres')
            else setErrors('')
        }
    }   
}
export function validate_Desc(estado,setErrors) {
    if(!estado)setErrors("Ingresa una Descripción")
    else{
        if(estado.length > 130) setErrors("Maximo 130 caracteres")
        else{
            if(estado.length < 20) setErrors("Minimo 20 caracteres")
            else setErrors("")
        }
    }   
}
export function validtade_Precio(estado,setErrors) {
    if(!Number(estado))setErrors('Ingresa un precio Estandar')
    else{
        if(estado >= 2500) setErrors('De momento no manejamos productos tan costosos')
        else setErrors('')
    }
}
export function validtade_Cantidad(estado,setErrors) {
    if(!Number(estado))setErrors('Ingrese la cantidad de productos a la venta')
    else{
        if(!Number.isInteger(Number(estado))) setErrors('Debe ser un numero entero')
        else setErrors('')
    }
}
export function validtade_Categoria(estado,setErrors) {
    if(!estado) setErrors('Ingresa la categoria a la que pertenece tu producto')
    else{
        if(estado.length > 15) setErrors('Maximo 15 caracteres')
        else{
            if(estado.length < 3) setErrors('Minimo 3 caracteres')
            else setErrors('')
        }
    }
}
export function validtade_Marca(estado,setErrors) {
    if(!estado) setErrors('A que marca pertenece tu producto?')
    else{
        if(estado.length > 20) setErrors('Maximo 20 caracterés')
        else{
            if(estado.length < 3) setErrors('Minimo 3 caracterés')
            else setErrors('')
        }
    }
}
    