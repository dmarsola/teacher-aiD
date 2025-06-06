import BaseLayout from '@/src/components/BaseLayout'
import ErrorMessage from '@/src/components/ErrorMessage'
import { subjects } from '@/src/utils/constants/subjects'
import { getDropdownValue, getGradeDropdownValue } from '@/src/utils/dropdown'
import { TeacherFormData } from '@/src/utils/types/teacherInputData'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { Message } from 'primereact/message'
import { Controller, FieldValues, UseFormHandleSubmit, useForm } from 'react-hook-form'

export default function Teacher() {
  // const { subject, errors, clearErrors, handleSubmit, control, onSubmit } = useContext(TeacherInputContext)

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: FieldValues) => {
    console.log('Submitted data:', data)
  }

  return (
    <BaseLayout>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
          <>
            <label htmlFor="subject" className="block mb-1">
              Subject
            </label>
            <Controller
              name="subject"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Dropdown
                  value={field.value}
                  options={getDropdownValue(subjects)}
                  onChange={(e) => field.onChange(e.value)}
                  onBlur={field.onBlur}
                  placeholder="Select a Subject"
                  optionLabel="name"
                  className={`w-full ${errors.subject ? 'p-invalid' : ''}`}
                />
              )}
            />
            {errors.subject && ErrorMessage('Subject is required!')}
          </>
          <>
            <label htmlFor="grade" className="block mb-1">
              Grade
            </label>
            <Controller
              name="grade"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Dropdown
                  value={field.value}
                  options={getGradeDropdownValue()}
                  onChange={(e) => field.onChange(e.value)}
                  onBlur={field.onBlur}
                  placeholder="Select a Grade"
                  optionLabel="name"
                  className={`w-full ${errors.subject ? 'p-invalid' : ''}`}
                />
              )}
            />
            {errors.subject && ErrorMessage('Grade is required!')}
          </>
          <>
            <label htmlFor="topic" className="block mb-1">
              Specific Topic
            </label>
            <Controller
              name="topic"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputText
                  {...field}
                  onBlur={field.onBlur}
                  className={`w-full ${errors.topic ? 'p-invalid' : ''}`}
                  placeholder="Enter the specific topic"
                />
              )}
            />
            {errors.subject && ErrorMessage('Topic is required!')}
          </>

          <Button
            type="submit"
            label="Make my lesson plan"
            icon="pi pi-check"
            className="p-button-text"
            // loading={disabledSubmit}
            // disabled={disabledSubmit}
          />
        </form>
      </Card>
    </BaseLayout>
  )
}

// questions teacher
// What would you like to teach?
// 1. Age group or grade
// 2. Subject matter (math, language, geography, history, chemstry, biology, physics, social studies, religion, gym/physical education, music, art)
// 3. Specific subject
// 4. Practice activity (y/n)
// 5. Presentation (y/n)
// 6. Handout (y/n)
