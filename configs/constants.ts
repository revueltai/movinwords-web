import { Breakpoint, Example } from "@/types"

export const BREAKPOINTS: Breakpoint[] = ['m', 't', 'd', 'mt', 'td']

export const MW_EXAMPLES: Example[] = [
  {
    id: 'basicUsage',
    label: 'Basic Usage',
    sentence: 'Programming is not about typing, it\'s about thinking',
    predefinedOptions: {},
    fields: [
      {
        type: 'text',
        id: 'sentence',
        label: 'Dynamic Sentence',
        placeholder: 'Enter a sentence...',
        initialValue: null,
      },
      {
        type: 'select',
        id: 'initialDelay',
        label: 'Initial Delay',
        options: [0, 100, 200, 500, 800, 1000, 2000],
        initialValue: 0,
      },
      {
        type: 'select',
        id: 'textAlignment',
        label: 'Text Alignment',
        options: ['left', 'right', 'center', 'start', 'end', 'inherit', 'initial'],
        initialValue: 'center',
      },
      {
        type: 'select',
        id: 'transition',
        label: 'Transitions',
        options: [
          'slideInTop',
          'slideInBottom',
          'slideInLeft',
          'slideInRight',
          'revealInTop',
          'revealInBottom',
          'fadeIn'
        ],
        initialValue: 'slideInTop',
      },
      {
        type: 'select',
        id: 'offset',
        label: 'Transition Offset',
        options: [0, 10, 20, 50, 100],
        initialValue: 10,
      },
      {
        type: 'select',
        id: 'duration',
        label: 'Duration (ms)',
        options: [0, 100, 200, 500, 800, 1000, 2000],
        initialValue: 1000,
      },
      {
        type: 'select',
        id: 'delay',
        label: 'Delay (ms)',
        options: [0, 100, 200, 500, 800, 1000, 2000],
        initialValue: 500,
      },
    ],
  },
  {
    id: 'wordsAndLetters',
    sentence: 'The only way to go fast is to go well',
    label: 'Words and Letters',
    predefinedOptions: {
      // intersectionStart: true,
      textAlignment: 'center',
      transition: 'slideInBottom',
    },
    fields: [
      {
        type: 'select',
        id: 'wordSpacing',
        label: 'Word Spacing',
        options: [0, 10, 20, 50, 100],
        initialValue: 10,
      },
      {
        type: 'select',
        id: 'letterSpacing',
        label: 'Letter Spacing',
        options: [0, 10, 20, 50, 100],
        initialValue: 0,
      },
      {
        type: 'checkbox',
        id: 'reverseTransition',
        label: 'Reverse transitions',
        initialValue: false,
      },
      {
        type: 'checkbox',
        id: 'reverseOrder',
        label: 'Reverse Order',
        initialValue: false,
      },
      {
        type: 'checkbox',
        id: 'animateLetters',
        label: 'Animate Letters',
        initialValue: false,
      },
      {
        type: 'checkbox',
        id: 'highlight',
        label: 'Highlight words',
        initialValue: false,
      },
    ],
  },
  {
    id: 'events',
    label: 'Events',
    sentence: 'Code never lies, comments sometimes do',
    showLog: true,
    predefinedOptions: {
      events: {},
      textAlignment: 'center',
      duration: 400,
      delay: 800,
    },
    fields: [
      {
        type: 'checkbox',
        id: 'eventsShow',
        label: 'Show Events Log',
        initialValue: false,
      },
      {
        type: 'checkbox',
        id: 'intersectionOptions',
        label: 'Trigger On Intersection Events',
        initialValue: false,
      },
      {
        type: 'button',
        id: 'pause',
        label: 'Pause',
        props: {
          size: 'sm',
          bgColor: 'purple-400',
          borderColor: 'purple-400'
        }
      },
    ]
  },
  {
    id: 'scrambler',
    label: 'Scrambler',
    sentence: 'Talk is cheap. Show me the code!',
    predefinedOptions: {
      animateLetters: true
    },
    fields: [
      {
        type: 'checkbox',
        id: 'scrambleLetters',
        label: 'Scramble Letters',
        initialValue: false,
      },
      {
        type: 'select',
        id: 'scrambleMode',
        label: 'Scramble Mode',
        options: ['unscramble', 'scramble'],
        initialValue: 'unscramble',
      },
      {
        type: 'text',
        id: 'scrambleChars',
        label: 'Scramble Characters',
        initialValue: 'ABC123',
      },
      {
        type: 'select',
        id: 'scrambleFPS',
        label: 'Scramble FPS',
        options: [4, 16, 30, 60],
        initialValue: 16,
      },
    ],
  },
]
