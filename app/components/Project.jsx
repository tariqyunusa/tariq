import React from 'react'
import styles from "../styles/project.module.css"

const Project = ({projects}) => {
  return (
    <div>
      {projects.map((project, idx) => (
        <div key={idx} className={styles.project}>
            <h1>{project.name}</h1>
            <div className={styles.stack}>{project.stack.map((stack, idx) => (
                <p key={idx} className={styles.stack__item}>{stack},</p>
            ))}</div>
            <div className={styles.filler}></div>
        </div>
      ))}
    </div>
  )
}

export default Project
