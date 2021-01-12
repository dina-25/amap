import React from 'react'
import lightStyle from '../styles/christmas.module.scss'


const ChristmasLights = () => {
  return(
    <div>
      <div className={lightStyle.snowflakes} aria-hidden="true">
          <div className={lightStyle.snowflake}>
          ❅
          </div>
          <div className={lightStyle.snowflake}>
          ❅
          </div>
          <div className={lightStyle.snowflake}>
          ❆
          </div>
          <div className={lightStyle.snowflake}>
          ❄
          </div>
          <div className={lightStyle.snowflake}>
          ❅
          </div>
          <div className={lightStyle.snowflake}>
          ❆
          </div>
          <div className={lightStyle.snowflake}>
          ❄
          </div>
          <div className={lightStyle.snowflake}>
          ❅
          </div>
          <div className={lightStyle.snowflake}>
          ❆
          </div>
          <div className={lightStyle.snowflake}>
          ❄
          </div>
        </div>
      </div>
  )
}

export default ChristmasLights
