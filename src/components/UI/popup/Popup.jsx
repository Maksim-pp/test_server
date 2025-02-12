import React  from 'react'
import styles from './Popup.module.css'

export const Popup = ({children, popup}) => {

    const rootPopup = [styles.Popup]
    if(popup.show){
        rootPopup.push(styles.active)
    }

  return (
    <div className={rootPopup.join(' ')}>
        <div className={styles.Popup__content} onClick={e => e.stopPropagation()}>
          {children}
        </div>
    </div>
  )
}
