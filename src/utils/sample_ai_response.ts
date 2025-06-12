export const sample = {
  grade: '5',
  subject: 'Math',
  topic: 'Decimals',
  lesson: [
    {
      slide: 'Introduction to Decimals',
      content: [
        'Decimals are numbers that represent parts of a whole using a decimal point.',
        'A decimal has two parts: the whole number part (to the left of the decimal point) and the fractional part (to the right).',
        'Example: 4.25 means 4 wholes and 25 hundredths.',
      ],
    },
    {
      slide: 'Decimal Place Value',
      content: [
        'Each digit in a decimal has a place value.',
        'To the right of the decimal point:',
        '  Tenths (0.1), Hundredths (0.01), Thousandths (0.001), etc.',
        'Example: In 5.307, 3 is in the tenths place, 0 in the hundredths, 7 in the thousandths.',
      ],
    },
    {
      slide: 'Comparing and Ordering Decimals',
      content: [
        'To compare decimals, first compare the whole-number part.',
        'If those are equal, compare digits in the tenths place, then hundredths, and so on.',
        'Example: 3.45 > 3.405 because at the tenths place they’re both 3, at the hundredths 4 > 0.',
      ],
    },
    {
      slide: 'Rounding Decimals',
      content: [
        'To round a decimal to a given place, look at the digit to the right of that place.',
        'If that digit is 5 or more, round up; if it’s 4 or less, round down.',
        'Example: Round 0.637 to the nearest tenth: look at the hundredths digit (3). → 0.6',
      ],
    },
    {
      slide: 'Adding and Subtracting Decimals',
      content: [
        'Line up the decimal points before you add or subtract.',
        'Add zeros as placeholders if needed.',
        'Example: 3.75 + 2.4 → 3.75 + 2.40 = 6.15',
      ],
    },
    {
      slide: 'Multiplying and Dividing by Powers of Ten',
      content: [
        'When you multiply a decimal by 10, 100, 1,000, move the decimal point right by 1, 2, 3 places respectively.',
        'When you divide by 10, 100, 1,000, move the decimal point left by 1, 2, 3 places respectively.',
        'Example: 0.6 × 100 = 60.0 → 60',
      ],
    },
  ],
  exercises: [
    {
      type: 'multiple_choice',
      question: 'What digit is in the hundredths place of 5.307?',
      options: ['3', '0', '7', '5'],
      answer: ['0'],
    },
    {
      type: 'multiple_choice',
      question: 'Which of these decimals is the greatest?',
      options: ['0.45', '0.405', '0.5', '0.495'],
      answer: ['0.5'],
    },
    {
      type: 'multiple_choice',
      question: 'Round 0.637 to the nearest tenth.',
      options: ['0.6', '0.63', '0.64', '0.7'],
      answer: ['0.6'],
    },
    {
      type: 'free_text',
      question: 'Calculate: 3.75 + 2.4 = ?',
      answer: ['6.15'],
    },
    {
      type: 'free_text',
      question: 'Calculate: 7.2 − 3.56 = ?',
      answer: ['3.64'],
    },
    {
      type: 'multiple_choice',
      question: 'When you divide a decimal by 10, the decimal point moves:',
      options: ['One place to the left', 'One place to the right', 'Two places to the left', 'Two places to the right'],
      answer: ['One place to the left'],
    },
    {
      type: 'free_text',
      question: 'Calculate: 0.6 × 100 = ?',
      answer: ['60', '60.0'],
    },
    {
      type: 'free_text',
      question: 'A rope costs $1.20 per meter. How much for 2.5 meters?',
      answer: ['3.00', '3', '3.0'],
    },
  ],
}
