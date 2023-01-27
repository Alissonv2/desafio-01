import styles from './Header.module.css'
import HeaderLogo from '../../assets/Logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={HeaderLogo} alt="logo" />
        </header>
    )
}