import { useDispatch,useSelector } from "react-redux"
import { useEffect,useCallback,useState } from "react";
import { Link, useParams } from "react-router-dom";
import { buscarId } from "../../redux/actions";
import { useDropzone } from "react-dropzone";
import style from './FormEdit.module.css'
import axios from "axios";
import {
  validate_edit_nombre,
  validate_edit_precio,
  validate_edit_cate,
  validate_edit_marca,
  validate_edit_pd,
  validate_edit_desc
} from './ValidationEdit'
import {URL,name_cloudinary} from '../../constantes'
export default function FormCreate(params) {
    const {id} = useParams()
    const dispatch = useDispatch();
    const detalle = useSelector(state=>state.detail)
    const [fotoprinc,setFotoprinc] = useState('')
    const [errorImagen, setErrorImagen] = useState('')
    const [ editProd, setEditar ] = useState({
        nombreproducto:'',//
        descproducto:'',//
        precioproducto:'',//
        categoria:'',
        marca:'',
        disponibproducto:''
    })
    const [errorNombre,setErrorNombre] = useState('')
    const [errorPrecio,setErrorPrecio] = useState('')
    const [errorCategoria,setErrorCategoria] = useState('')
    const [errorMarca,setErrorMarca] = useState('')
    const [errorPD,setErrorPD] = useState('')
    const [errorDesc,setErrorDesc] = useState('')
    const onSubmit = async(event)=>{
        event.preventDefault()
        if(!editProd.nombreproducto && !editProd.precioproducto && !editProd.categoria && !editProd.marca && !editProd.descproducto && !editProd.disponibproducto && !fotoprinc){
          return alert('No hay nada por editar')
        }
        if(editProd.nombreproducto.length > 40 || editProd.nombreproducto.length < 3 && editProd.nombreproducto.length !== 0) return alert(`Error en el Nombre`)
        if(editProd.precioproducto > 2000 )return alert(`Error en el precio`)
        if(editProd.categoria.length > 15 || editProd.categoria.length < 3 && editProd.categoria.length !==0) return alert('Error en Categoria')
        if(editProd.marca.length > 20 || editProd.marca.length < 3 && editProd.categoria.length !== 0) return alert('Error en Marca')
        if(editProd.descproducto.length > 130 || editProd.descproducto.length < 20 && editProd.descproducto.length !== 0)return alert('Error en Descripción')
        if(!Number.isInteger(Number(editProd.disponibproducto))||Number(editProd.disponibproducto) === 0 && editProd.disponibproducto !== '')return alert('Error en Productos disponibles')
        try {
            const res = await axios.put(`${URL}editarProducto/${detalle.id}`,{
                nombreproducto:editProd.nombreproducto || detalle.nombreproducto,
                descproducto:editProd.descproducto || detalle.descproducto,
                fotoprinc: fotoprinc || detalle.fotoprinc,
                precioproducto: editProd.precioproducto || detalle.precioproducto,
                categoria: editProd.categoria.toUpperCase() || detalle.categoria.toUpperCase(),
                marca:editProd.marca.toUpperCase() || detalle.marca.toUpperCase(),
                disponibproducto:editProd.disponibproducto || detalle.disponibproducto
            })
            alert('Producto modificado')
            return res.data
        } catch (error) {
            
        }
    }
    const handleInput = (event)=>{
        if(event.target.value < 0)return
        const newEdit = {...editProd}
        newEdit[event.target.id] = event.target.value
        setEditar(newEdit)
        validate_edit_nombre(newEdit.nombreproducto,setErrorNombre)
        validate_edit_precio(newEdit.precioproducto,setErrorPrecio)
        validate_edit_cate(newEdit.categoria,setErrorCategoria)
        validate_edit_marca(newEdit.marca,setErrorMarca)
        validate_edit_pd(newEdit.disponibproducto,setErrorPD)
        validate_edit_desc(newEdit.descproducto,setErrorDesc)
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
           setErrorImagen('Error al procesar el archivo')
          }
        } catch (error) {
          setErrorImagen('Archivo no valido')
        }
        
      },[])
    const{ getRootProps, getInputProps,isDragActive} = useDropzone({onDrop})
    const revertir = ()=>{
        setFotoprinc('')
      }
    useEffect(()=>{
        dispatch(buscarId(id))
    },[dispatch])
    return(
        <div>
            <form className={style.containerForm} onSubmit={onSubmit}>
              <Link to={`/Detalle/${detalle.id}`}><span className={style.butonVolver}>🡸</span></Link>
              <br />
              <br />
              <h1 className={style.title}>Editar producto</h1>
              <br />
              <br />
              <span>Nombre</span>
              <input className={style.inputs} type="text" id='nombreproducto' placeholder={detalle.nombreproducto} value={editProd.nombreproducto} onChange={handleInput}/>
              <span>{errorNombre || '✔'}</span>
              <br />
              <br />
              <span>Precio</span>
              <input className={style.inputs} type="number" id='precioproducto' placeholder={detalle.precioproducto} value={editProd.precioproducto} onChange={handleInput}/>
              <span>{errorPrecio|| '✔'}</span>
              <br />
              <br />
              <span>Categoria</span>
              <input className={style.inputs} type="text" placeholder={detalle.categoria} id='categoria' value={editProd.categoria}  onChange={handleInput}/>
              <span>{errorCategoria || '✔'}</span>
              <br />
              <br />
              <span>Marca</span>
              <input className={style.inputs} type="text" placeholder={detalle.marca} id='marca' value={editProd.marca}  onChange={handleInput}/>
              <span>{errorMarca || '✔'}</span>
              <br />
              <br />
              <span>Productos disponibles</span>
              <input className={style.inputs} type="number" placeholder={detalle.disponibproducto} id="disponibproducto" value={editProd.disponibproducto} onChange={handleInput}/>
              <span>{errorPD || '✔'}</span>
              <br />
              <br />
              <span>Descripción</span>
              <textarea className={style.inputs} placeholder={detalle.descproducto} id='descproducto' value={editProd.descproducto}  onChange={handleInput}></textarea>
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
                <button type="submit" className={style.butonInterno}>Editar</button>
                <br />
                <br />
                <h3>Nota: recuerda que los campos que no edites permaneceran igual</h3>
                <br />
                <br />
            </form>

        </div>
    )
}