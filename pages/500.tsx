import BaseLayout from '@/src/components/BaseLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button } from 'primereact/button'
import React from 'react'

export default function Custom500() {
  const router = useRouter()

  const handleReboot = () => {
    alert('⚡ Reboot command sent. AI minions are panicking...')
    setTimeout(() => {
      router.push('/')
    }, 1500)
  }

  return (
    <BaseLayout>
      <Head>
        <title></title>
      </Head>
      <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="display-3 text-warning mb-3">💥 500</h1>
        <h2 className="mb-4">AI meltdown detected.</h2>
        <p className="lead mb-4">Our content-generating digital slaves just encountered a fatal exception.</p>
        <p className="lead mb-4">They're currently arguing whose fault it was.</p>

        <img
          src="https://media.giphy.com/media/l2JehQ2GitHGdVG9y/giphy.gif"
          alt="AI meltdown"
          className="img-fluid mb-4"
          style={{ maxWidth: '280px' }}
        />

        <Button label="Reboot the AI" icon="pi pi-refresh" className="p-button-danger" onClick={handleReboot} />

        <p className="mt-5 text-muted small">If that doesn't work, try bribing it with GPU time.</p>
      </div>
    </BaseLayout>
  )
}
