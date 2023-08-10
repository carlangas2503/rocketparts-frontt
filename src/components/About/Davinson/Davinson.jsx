import style from './Davinson.module.css'

export default function Davinson(params) {
  return(
    <div className={style.container}>
      <br />
      <div>
        <ul className={style.contList}> 
          <li>
            <a href="https://github.com/Akadus23" target='_blank'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>Git</span>
            </a> 
          </li>
          <li>
            <a href="https://www.linkedin.com/in/davinson-villa/" target='_blank'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>in</span>
            </a> 
          </li>
          <li>
            <a href="https://instagram.com/echelegafas?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" target='_blank'>
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