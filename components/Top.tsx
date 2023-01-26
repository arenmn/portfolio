import styles from '../styles/Top.module.css'
import Link from "next/link";

export default function Top() {
    return (
        <>
            <div className={styles.global}>
                <center>
                    <h1 className={styles.title}>Hi, I&apos;m Aren.</h1>
                    <div className={styles.navigation}>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="/projects" className={styles.link}>Personal Projects</Link>
                        <Link href="/university" className={styles.link}>University Projects</Link>
                    </div>
                </center>
            </div>
        </>
    )
}