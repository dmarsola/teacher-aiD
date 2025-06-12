interface Lesson {
  slide: string // the title or subject of the slide
  content: string[] // an array with the lesson slide contents
}

interface Exercise {
  type: string // possible exercise types are multiple_choice or free_text
  question: string // the question to be presented to the student
  options?: string[] // if the type is multiple choice, these are the answer options
  answer?: string[] // an array of possible answers to compare with the answer given by the student'
}

export interface LessonOutputData {
  grade: string
  subject: string
  topic: string
  lesson: Lesson[] // lesson content divided in different explanation slides
  exercises: Exercise[] // practice exercises related to the lesson content
}
