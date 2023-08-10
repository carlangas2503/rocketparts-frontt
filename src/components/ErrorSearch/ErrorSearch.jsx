import style from './ErrorSearch.module.css'

export default function ErrorSearch({error}) {
    return(
        <div className={style.container}>
            <h1>{error} :c</h1>
        </div>
    )
}