import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import styles from './reviews/reviews.module.css'

export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <header className={styles.header}>
            <h1 className={styles.title}>World Reviews</h1>
      <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <a
                href={`/api/auth/signin`}
                className={styles.signIn}
                onClick={(e) => {
                  e.preventDefault()
                  signIn("worldcoin") // when worldcoin is the only provider
                  // signIn() // when there are multiple providers
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>0x16dcb664696c3233f14cb48a314e2bdffa3e7b098a56b566c4e314e1549d4a23</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.signIn}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
    </header>
  )
}
