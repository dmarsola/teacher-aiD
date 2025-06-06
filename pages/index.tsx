import BaseLayout from '@/src/components/BaseLayout'
import router from 'next/router'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'

export default function Home() {
  return (
    <BaseLayout>
      <Card>
        <Button label="I'm a teacher" onClick={() => router.push('/teacher')} />
        <Button label="I'm a student" onClick={() => router.push('/student')} />
      </Card>
    </BaseLayout>
  )
}
