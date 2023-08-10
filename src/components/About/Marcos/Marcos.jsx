import style from './Marcos.module.css'

export default function Marcos(params) {
  return(
    <div className={style.container}>
      <br />
      <div>
        <ul className={style.contList}> 
          <li>
            <a href="https://github.com/MEC-97" target='_blank'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>Git</span>
            </a> 
          </li>
          <li>
            <a href="https://www.linkedin.com/in/marcos-cornejo-81718b16a" target='_blank'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>in</span>
            </a> 
          </li>
          <li>
            <a href="https://instagram.com/marcos_cornejo21?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank'>
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