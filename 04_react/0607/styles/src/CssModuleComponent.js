import React from 'react'
import styles from './styles/cssModule.module.css'

// CSS Module
// - 클래스 명 중복 방지
// - css 파일명 : .module.css
// - 리액트 컴포넌트 파일에서 해당 css 파일을 불러올 때
//      css 파일에 선언한 클래스 이름들이 모두 고유해짐
// - 고유css 클래스 이름들이 만들어지는 과정에서 사용되는 값은
//      파일 경로, 파일이름, 클래스 이름, 해쉬값 등
export default function CssModuleComponent() {
    console.log(styles);
  return (
    <div className={styles.container}>
        <div className={[styles.box, styles.red].join(' ')}></div>
        <div className={[styles.box, styles.orange].join(' ')}></div>
        {/* 이렇게 해도됨 */}
        <div className={`${styles.box} ${styles.yellow}`}></div>
    </div>
  )
}
