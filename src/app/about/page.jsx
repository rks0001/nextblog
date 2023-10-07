import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill={true} alt='' className={styles.img}/>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital StoryTellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
        <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima ipsum, perspiciatis quaerat tempora excepturi expedita sunt neque exercitationem voluptates. Vel, pariatur. Magni odio minima provident nostrum, doloremque molestias excepturi.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima ipsum, perspiciatis quaerat tempora excepturi expedita sunt neque exercitationem voluptates. Vel, pariatur. Magni odio minima provident nostrum, doloremque molestias excepturi.
          
          <br/>
          <br/>
          --Story
          <br/>
          <br/>
          --Nomad
          </p>
          <Button url='contact' text='Contact'/>
          </div>  

      </div>
    </div>
  )
}

export default About