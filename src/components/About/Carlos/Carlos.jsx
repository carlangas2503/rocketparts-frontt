import style from './Carlos.module.css'

export default function Carlos(params) {
    return(
        <div className={style.container}>
          <br />
          <div>
            <ul className={style.contList}> 
              <li>
                <a href="https://github.com/carlangas2503" target='_blank'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span>Git</span>
                </a> 
              </li>
              <li>
                <a href="https://www.linkedin.com/in/carlos-andres-88635b25b/" target='_blank'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span>in</span>
                </a> 
              </li>
              <li>
                <a href="https://instagram.com/candelitovs?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>
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