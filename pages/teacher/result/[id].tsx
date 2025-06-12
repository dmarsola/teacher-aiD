import BaseLayout from '@/src/components/BaseLayout'
import { pollForCacheValue } from '@/src/utils/helpers/cachePoll'
import { LessonOutputData } from '@/src/utils/types/lessonOutputData'
import { useRouter } from 'next/router'
import { Card } from 'primereact/card'
import { ProgressSpinner } from 'primereact/progressspinner'
import { useEffect, useState } from 'react'

export default function ResultById() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [lesson, setLesson] = useState<LessonOutputData | undefined>()
  const { id } = router.query

  useEffect(() => {
    pollForCacheValue(id as string)
      .then((value: any) => {
        setLesson(value)
      })
      .catch((err) => {
        console.error('not available, yet?:', err)
      })
      .finally(() => setLoading(false))
  }, [id])

  const getLesson = () => {
    if (lesson) {
      return (
        <BaseLayout>
          <div>
            <h1>{`Grade ${lesson.grade} ${lesson.subject} Lesson on ${lesson.topic}`}</h1>
            {lesson.lesson.map((lessonItem, lessonIndex) => {
              return (
                <>
                  <h2 key={lessonIndex}>{lessonItem.slide}</h2>
                  {lessonItem.content.map((c, i) => {
                    return <p key={i}>{c}</p>
                  })}
                </>
              )
            })}
          </div>
          <div>
            <h1 className="page-break">Practice Exercises:</h1>
            {lesson.exercises.map((exerciseItem, exerciseIndex) => {
              return (
                <>
                  <h2 key={exerciseIndex}>{`${exerciseIndex + 1}) ${exerciseItem.question}`}</h2>
                  {exerciseItem.options?.map((c, i) => {
                    return <p key={i}>{`${String.fromCharCode(65 + i)}) ${c}`}</p>
                  })}
                  {exerciseItem.type == 'free_text' && (
                    <>
                      <br />
                      <br />
                      <br />
                      <br />
                    </>
                  )}
                </>
              )
            })}
          </div>
          <div>
            <h1 className="page-break">Answer Key:</h1>
            {lesson.exercises.map((answerItem, answerIndex) => {
              return (
                <>
                  <p key={answerIndex}>{`${answerIndex + 1}) ${answerItem.question}`}</p>
                  {`Answer: ${answerItem.answer?.reduce((acc, current) => {
                    return acc + '; ' + current
                  })}`}
                </>
              )
            })}
          </div>
        </BaseLayout>
      )
    } else {
      // TODO: display error?
    }
  }

  return (
    <>
      {loading ? (
        <>
          <h2>Hold tight! Our digital slaves are making your lesson plan: {id}</h2>
          <ProgressSpinner />
        </>
      ) : (
        getLesson()
      )}
    </>
  )
}
