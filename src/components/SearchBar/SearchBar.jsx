import {useState,useEffect} from "react";
import axios from "axios";
import style from './SearchBar.module.css'
import { URL } from "../../constantes";

export default function SearchBar({onSearch}){
    const[ helpSearch, setHelpSearch ] = useState([])
    const[ renderHelp, setRenderHelp ] = useState([])
    const[ bar, setBar ] = useState("")
    const[ noVer, setNoVer ] = useState(true)
    function handleChange(event){
        setBar(event.target.value)
        filtrar(event.target.value)
        if(!event.target.value)return setNoVer(false)
        setNoVer(true)
    }
    useEffect(()=>{
        async function axiosData(){
            const resApi = await axios(`${URL}products`)
            if(resApi.data){
                setHelpSearch(resApi.data.productos)
            }
        }
        axiosData()
    },[])

    const takeValueSearch = (event)=>{
        setBar(event.target.id)
        setNoVer(false)
        onSearch(event.target.id)
        setBar('')
    }
    const takeValueNoSearch = (event)=>{
        setBar(event.target.id)
        filtrar(event.target.id)
    }

    const filtrar = (termino) => {
        const ayu =[] 
        helpSearch?.filter((ele)=>{
            if(ele.nombreproducto.toString().toLowerCase().includes(termino.toLowerCase())){
                return ayu.push(ele)
            }
        })

        return setRenderHelp(ayu)
    }
    return(
        <div className={style.allcotainer}>
            <div className={style.inputSearch}>
            <button className={style.onSearch} onClick={()=>{onSearch(bar);setBar('');setNoVer(false)}} type="search">🔍</button>
                <input className={style.barra} type="text" value={bar} onChange={handleChange}/>
            </div>
            
            {renderHelp?.map((ele)=>{
                return(
                    <div className={noVer?style.contSearch:null} key={ele.id}>
                        <div>
                           {noVer?<div onClick={takeValueSearch} id={ele.nombreproducto} className={style.clickSearch}>{ele.nombreproducto}</div>:null} 
                        </div>
                        <div>
                           {noVer?<div onClick={takeValueNoSearch} id={ele.nombreproducto} className={style.clickNoSearch}>🡬</div>:null} 
                        </div>
                    </div>
                )
            }).splice(0,8)}
        </div>
    )
}