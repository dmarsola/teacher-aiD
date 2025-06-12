import BaseLayout from '@/src/components/BaseLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button } from 'primereact/button'
import React from 'react'

export default function Custom404() {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/')
  }

  return (
    <BaseLayout>
      <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-75">
        <h1 className="display-3 text-danger mb-3">🧠 404</h1>
        <p>Error 404 - Bot Lost in Cyberspace</p>
        <h2 className="mb-4">A rogue AI took a wrong turn into the void.</h2>
        <p className="lead mb-4">
          We sent a swarm of neural drones to fetch the missing page,
          <br />
          but they only came back with memes and anxiety.
        </p>

        <img
          src="https://media.giphy.com/media/mxXPuScIwPwK2oyD6i/giphy.gif"
          alt="Lost in Space"
          className="img-fluid mb-4"
          style={{ maxWidth: '280px' }}
        />

        <Button label="Escape to Safety" icon="pi pi-home" className="p-button-outlined p-button-danger" onClick={handleRedirect} />

        <p className="mt-5 text-muted small">Or stay here and ponder the infinite sadness of broken links.</p>
      </div>
    </BaseLayout>
  )
}
