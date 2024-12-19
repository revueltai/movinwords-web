import { useEffect, useState, useRef } from 'react'
import Movinwords from 'movinwords'
import { useModal } from '@/context/ModalContext'
import { Example } from '@/types'
import { isEmptyObject, ensureBoolean, isDefined } from '@/utils/ui'

interface Payload {
  [key: string]: {
    [field: string]: any
  }
}

export default function useExample({ id, sentence, fields, predefinedOptions }: Example) {
  const { openModal } = useModal()
  const mwRef = useRef<Movinwords | null>(null)
  const [pause, setPause] = useState<boolean | null>(false)
  const [formPayload, setFormPayload] = useState<Payload>({})
  const [mwPayload, setMwPayload] = useState<Payload>({})
  const [eventLogs, setEventLogs] = useState<JSX.Element[]>([])

  function appendLog(message: string, color: string = 'green-400') {
    setEventLogs((prevLogs) => [
      ...prevLogs,
      <span key={prevLogs.length} className={`text-${color}`}>
        {message}
      </span>,
    ])
  }

  function getCurrentValue(field: any) {
    return formPayload[field.id] || field.initialValue || ''
  }

  function getOptions(formValues: any) {
    const output = {
      el: `#${id}`,
      autoplay: false,
      sentence,
      ...predefinedOptions,
      ...formValues,
    }

    if (output.highlight) {
      output.highlight = {
        classname: 'highlight',
        tag: 'strong',
        words: ['well', 'fast']
      }
    }

    if (output.eventsShow) {
      output.events = {
        start: (options: unknown) => {
          const message = 'Movinwords has Started!'
          console.log(message, options)
          appendLog(message, 'purple-400')
        },
        end: (options: unknown) => {
          const message = 'Movinwords has Ended!'
          console.log(message, options)
          appendLog(message, 'purple-400')
        },
        pause: (options: unknown) => {
          const message = 'Movinwords is Paused!'
          console.log(message, options)
          appendLog(message, 'red-400')
        },
        resume: (options: unknown) => {
          const message = 'Movinwords has Resumed!'
          console.log(message, options)
          appendLog(message, 'red-400')
        },
        wordTransitionStart: (options: unknown) => {
          const message = 'Word Transition started!'
          console.log(message, options)
          appendLog(message, 'green-400')
        },
        wordTransitionEnd: (options: unknown) => {
          const message = 'Word Transition ended!'
          console.log(message, options)
          appendLog(message, 'green-600')
        }
      }
    }

    if (output.intersectionOptions) {
      output.intersectionStart = true
      output.intersectionOptions = {
        root: null,
        threshold: 0,
        rootMargin: '0px'
      }

      output.events.intersect = (options: unknown) => {
        const message = 'Intersect Triggered!'
        console.log(message, options)
        appendLog(message, 'blue-600')
      }
    }

    return output
  }

  function handleChange(id: string, value: any) {
    const processedValue = isNaN(value)
      ? value
      : Number(value)

    setFormPayload((prev) => ({
      ...prev,
      [id]: processedValue,
    }))
  }

  function handleClick() {
    setPause((prev) => !prev)
  }

  function handleLogClear() {
    setEventLogs([])
  }

  function handleClickCode() {
    const payload = mwPayload
    delete payload.pause
    delete payload.eventsShow

    if (!payload.sentence) {
      delete payload.sentence
    }

    if (payload.events && isEmptyObject(payload.events)) {
      delete payload.events
    }

    if (!payload.intersectionOptions) {
      delete payload.intersectionOptions
    }

    const code = JSON.stringify(payload, (_, value) => {
      const sanitizedValue = ensureBoolean(value)
      return typeof sanitizedValue === 'function'
        ? sanitizedValue
          .toString()
          .replace(/\n/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
        : sanitizedValue
    }, 2)

    const pauseCode = pause
      ? `
setTimeout(() => mw.pause(), 1000);
setTimeout(() => mw.resume(), 2000);` : ''

    openModal(`const mw = new Movinwords(${code});

mw.start();${pauseCode}`)
  }

  useEffect(() => {
    const initialValues = fields.reduce((acc, field) => {
      acc[field.id] = isDefined(field.initialValue)
        ? field.initialValue
        : ''

      return acc
    }, {} as Record<string, any>)

    setFormPayload(initialValues)
  }, [fields])

  useEffect(() => {
    if (mwRef.current) {
      const el = document.getElementById('pause')

      if (el) {
        if (pause) {
          mwRef.current.pause()
          el.innerText = 'Resume'
        } else {
          el.innerText = 'Pause'
          mwRef.current.resume()
        }
      }
    }
  }, [pause])

  useEffect

  useEffect(() => {
    if (mwRef.current) {
      mwRef.current.destroy()
    }

    setMwPayload(getOptions(formPayload))
    mwRef.current = new Movinwords(getOptions(formPayload))

    if (!pause) {
      mwRef.current.start()
    }

    handleLogClear()

    return () => {
      if (mwRef.current) {
        mwRef.current.destroy()
        mwRef.current = null
      }
    }
  }, [formPayload])

  return {
    eventLogs,
    openModal,
    getCurrentValue,
    handleChange,
    handleClick,
    handleLogClear,
    handleClickCode,
  }
}
