export interface DropdownData {
  name: string
  value: string
}

/**
 * Get an environment variable value by name.
 * @param obj - Object to be turned into dropdown label/value pair
 */
export const getDropdownValue = (obj: { [key: string]: string }): DropdownData[] => {
  const result: DropdownData[] = []
  for (const key in obj) {
    result.push({ name: obj[key], value: key })
  }
  return result
}

export const getGradeDropdownValue = (): DropdownData[] => {
  const grades = {
    1: '1st',
    2: '2nd',
    3: '3rd',
    4: '4th',
    5: '5th',
    6: '6th',
    7: '7th',
    8: '8th',
    9: '9th',
    10: '10th',
    11: '11th',
    12: '12th',
  }

  return getDropdownValue(grades)
}
