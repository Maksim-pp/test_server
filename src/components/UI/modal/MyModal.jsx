import React  from 'react'
import styles from './MyModal.module.css'

export const MyModal = ({children, modal}) => {

    const rootModal = [styles.MyModal]
    if(modal.show){
      rootModal.push(styles.active)
    }

  return (
    <div className={rootModal.join(' ')}>
        <div className={styles.MyModal__content} onClick={e => e.stopPropagation()}>
          {children}
        </div>
    </div>
  )
}
