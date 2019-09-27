import React from 'react'
import styles from './styles.css'
export default function Ellipsis () {
  return (
    <>
      <style>{`${styles}`}</style>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}
