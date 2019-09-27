import React from 'react'
import styles from './styles.css'
function Ripple () {
  return (
    <>
      <style>{`${styles}`}</style>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default Ripple
