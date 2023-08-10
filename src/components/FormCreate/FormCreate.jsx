import style from './FormCreate.module.css'
import { useCallback, useState } from 'react'
import axios from 'axios'
import {useDropzone} from 'react-dropzone'
import {
  validate_Nombre,
  validate_Desc,
  validtade_Precio,
  validtade_Cantidad,
  validtade_Categoria,
  validtade_Marca
} from './Validation'
import {Link } from 'react-router-dom'
import { URL ,name_cloudinary} from '../../constantes'

export default function FormCreate() {
  const [errorImagen, setErrorImagen] = useState('')
  const [ crearProd, setCrearProd ] = useState({
    nombreproducto:'',
    descproducto:'',
    precioproducto:'',
    disponibproducto:'',
    categoria:'',
    marca:'',
  })
  const [fotoprinc,setFotoprinc] = useState('')
  async function submit(event){
    event.preventDefault()
    if(crearProd.nombreproducto && crearProd.descproducto && fotoprinc && crearProd.precioproducto && crearProd.categoria && crearProd.marca && crearProd.disponibproducto){
      if(crearProd.nombreproducto.length > 20 || crearProd.nombreproducto.length < 3) return alert(`Error en el Nombre`)
      if(crearProd.precioproducto > 2000 || Number(crearProd.precioproducto) === 0)return alert(`Error en el precio`)
      if(!Number(crearProd.disponibproducto) || !Number.isInteger(Number(crearProd.disponibproducto))) return alert('Error en Productos disponibles')
      if(crearProd.categoria.length > 15 || crearProd.categoria.length < 3) return alert('Error en Categoria')
      if(crearProd.marca.length > 20 || crearProd.marca.length < 3) return alert('Error en Marca')
      if(crearProd.descproducto.length > 130 || crearProd.descproducto.length < 20)return alert('Error en Descripción')
      try {
      const api = await axios.post(`${URL}products`,{
        nombreproducto:crearProd.nombreproducto,
        descproducto:crearProd.descproducto,
        fotoprinc:fotoprinc,
        precioproducto:crearProd.precioproducto,
        disponibproducto:crearProd.disponibproducto,
        categoria:crearProd.categoria,
        marca:crearProd.marca,
        dispoboleano:crearProd.disponibproducto?true:false
      })
      alert(`Producto ${crearProd.nombreproducto} creado exitosamente`)
      return api.data
    } catch (error) {
      setErrorImagen('')
    }
  }else{
    return alert('Todos los campos en la creacion de un producto son obligatorios')
  }    
}
  const HandleInputs = (event)=>{
    if(event.target.value < 0)return
    const newProd = {...crearProd}
    newProd[event.target.id] = event.target.value
    setCrearProd(newProd)
    validate_Nombre(newProd.nombreproducto,setErrorNombre)
    validate_Desc(newProd.descproducto,setErrorDesc)
    validtade_Precio(newProd.precioproducto,setErrorPrecio)
    validtade_Cantidad(newProd.disponibproducto,setErrorCant)
    validtade_Categoria(newProd.categoria,setErrorCategoria)
    validtade_Marca(newProd.marca,setErrorMarca)
  }
  const onDrop = useCallback(async(acceptedFiles,rejectFiles)=>{
    try {
      if(acceptedFiles){
      const file = acceptedFiles[0]
      const formData = new FormData();
      formData.append("file",file)
      formData.append("upload_preset","imagenes")
      const res = await axios.post(`https://api.cloudinary.com/v1_1/${name_cloudinary}/image/upload`,formData)
      if(res.data){
        setFotoprinc(res.data.secure_url)
      }
      }else{
      console.log(rejectFiles);
      }
    } catch (error) {
      console.log(error.request.responseText.split(':')[2].split('}')[0]);
    }
    
  },[])
  const{ getRootProps, getInputProps,isDragActive} = useDropzone({onDrop})
  const revertir = ()=>{
    setFotoprinc('')
  }

  const [errorNombre,setErrorNombre] = useState('Ingresa un Nombre')
  const [errorDesc,setErrorDesc] = useState('Ingresa una Descripción')
  const [errorPrecio,setErrorPrecio] = useState('Ingresa un precio Estandar')
  const [errorCant, setErrorCant] = useState('Ingrese la cantidad de productos a la venta')
  const [errorCategoria,setErrorCategoria] = useState('A que tipo de mercado pertenece tu producto')
  const [errorMarca,setErrorMarca] = useState('A que marca pertenece tu producto?')
    return(
        <div class='text-zinc-100'>
            <form className={style.containerForm} action="" onSubmit={(event)=>submit(event)}>
              <Link to='/Tienda'><span className={style.butonVolver}>🡸</span></Link>
              <br />
              <br />
                  <span>Nombre del producto</span>
                  <input 
                  className={style.inputs}
                  onChange={HandleInputs} 
                  type="text" 
                  id = 'nombreproducto'
                  placeholder=''
                  value={crearProd.nombreproducto}
                  />
                  <span>{errorNombre || '✔'}</span>
                  <br />
                  <br />
                  <span>Precio</span>
                  <input
                  className={style.inputs}
                  onChange={HandleInputs}
                  id='precioproducto' 
                  value={crearProd.precioproducto} 
                  type="number" />
                  <span>{errorPrecio || '✔'}</span>
                  <br />
                  <br />
                  <span>Productos disponibles</span>
                  <input
                  className={style.inputs} 
                  onChange={HandleInputs}
                  id='disponibproducto' 
                  value={crearProd.disponibproducto} 
                  type="number" />
                  <span>{errorCant || '✔'}</span>
                  <br />
                  <br />
                  <span>Categoria</span>
                  <input
                  className={style.inputs} 
                  onChange={HandleInputs}
                  id='categoria' 
                  value={crearProd.categoria} 
                  type="text" />
                  <span>{errorCategoria || '✔'}</span>
                  <br />
                  <br />
                  <span>Marca</span>
                  <input
                  className={style.inputs} 
                  onChange={HandleInputs}
                  id='marca' 
                  value={crearProd.marca} 
                  type="text" />
                  <span>{errorMarca || '✔'}</span>
                  <br />
                  <br />
                  <span>Descripción</span>
                  <textarea
                  className={style.inputs}
                  onChange={HandleInputs} 
                  id='descproducto' 
                  value={crearProd.descproducto} 
                  type="Text" />
                  <span>{errorDesc || '✔'}</span>
                  <br />
                  <br />
                {!fotoprinc?<div  className={style.drop} {...getRootProps()}>
                  <input id='fotoprinc' {...getInputProps()}/>
                  {isDragActive?'Agregar imagen':'Esperando imagen'}
                </div>:null}
                {fotoprinc?<span className={style.butonInterno} onClick={revertir}>Cambiar foto</span>:null}
                {fotoprinc?'✔':errorImagen}
                <br />
                <br />
                <button type='submit' className={style.butonInterno}>Crear</button>
                <br />
                <br />
            </form>
        </div>
    )
}