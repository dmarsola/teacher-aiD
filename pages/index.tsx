import BaseLayout from '@/src/components/BaseLayout'
import router from 'next/router'
import { Button } from 'primereact/button'

export default function Home() {
  return (
    <BaseLayout>
      <div className="container-fluid overflow-hidden text-center pt-5">
        <div className="row g-5">
          <div className="col">
            <Button className="px-5 fs-4 fw-bold" label="I'm a teacher" onClick={() => router.push('/teacher')} />
          </div>
          <div className="col">
            <Button className="px-5 fs-4 fw-bold" label="I'm a student" onClick={() => router.push('/student')} />
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}
