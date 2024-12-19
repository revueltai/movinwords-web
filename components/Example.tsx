'use client'

import type { Example, FormField } from "@/types"
import useExample from '@/hooks/useExample'
import FormFieldComponent from '@/components/FormField'
import Divider from '@/components/Divider'
import NextLink from './NextLink'
import Icon from './Icon'

export default function Example({
  id,
  sentence,
  label,
  fields,
  predefinedOptions,
  showLog
}: Example) {
  const {
    eventLogs,
    getCurrentValue,
    handleChange,
    handleClick,
    handleLogClear,
    handleClickCode,
  } = useExample({
    id,
    sentence,
    fields,
    predefinedOptions
  })

  return (
    <div className="example flex flex-col gap-24">
      <Divider text={label as string} />

      <div className="grid grid-cols-3 gap-16 m:grid-cols-1">
        <div className="sentence relative col-span-2 bg-indigo-400_50 rounded-16 w-full p-32 flex items-center">
          <NextLink
            className="absolute z-10 top-0 left-0 ml-16 mt-16"
            type="link"
            size="sm"
            onClick={handleClickCode}
          >
            <Icon
              name="code"
              size="md"
              type="stroke"
              color="white"
              strokeWidth="2"
            />
          </NextLink>

          <div className="w-full">
            <div
              id={id}
              className="text-white text-lg text-bold"
            />

            {showLog &&
              <div className="flex flex-col gap-16 items-start">
                <pre className='u-t w-full select-none leading-5 overflow-x-hidden overflow-y-scroll rounded-12 bg-indigo-400_50 text-sm min-h-96 max-h-[200px] mt-32 pl-16 pr-8 py-8'>
                  <code>
                    {eventLogs.map((log, index) => (
                      <div key={index}>{log}</div>
                    ))}
                  </code>
                </pre>

                <NextLink
                  type="button"
                  size="sm"
                  onClick={handleLogClear}
                >
                  Clear
                </NextLink>
              </div>
            }
          </div>
        </div>

        <aside className="aside flex flex-col gap-16">
          {fields.map((field: FormField, keyField: number) => (
            <FormFieldComponent
              key={keyField}
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
              label={field.label}
              options={field.options}
              props={field.props}
              value={getCurrentValue(field)}
              onChange={handleChange}
              onClick={handleClick}
            />
          ))}
        </aside>
      </div>
    </div>
  )
}
