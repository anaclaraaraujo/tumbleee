import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1471282465966-5dd12d0de2e2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/anaclaraaraujo.png"/>
        <strong>Ana Clara Araujo</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}