import style from './Fauter.module.css'

export default function Fauter(params) {
  return(
    <div className={style.container}>
      <br />
      <div>
        <ul className={style.contList}> 
          <li>
            <a href="https://github.com/Fauter" target='_blank'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>Git</span>
            </a> 
          </li>
          <li>
            <a href="https://www.linkedin.com/in/fausto-lalia-monteros-62692a226/" target='_blank'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>in</span>
            </a> 
          </li>
          <li>
            <a href="https://www.instagram.com/fauslm_/" target='_blank'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>📷</span>
            </a> 
          </li>
      </ul>  
    </div>
</div>
)
}