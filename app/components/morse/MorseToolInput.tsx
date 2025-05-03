import { Card, CardBody, CardHeader, Textarea } from '@heroui/react'
import React from 'react'

interface MorseToolInputProps {
  mode: 'encode' | 'decode'
  inputText: string
  setInputText: (text: string) => void
}

export function MorseToolInput({ mode, inputText, setInputText }: MorseToolInputProps) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <h2 className="text-xl font-semibold">
          {mode === 'encode'
            ? 'Nhập văn bản cần mã hóa'
            : 'Nhập mã Morse cần giải mã'}
        </h2>
      </CardHeader>
      <CardBody>
        <Textarea
          placeholder={
            mode === 'encode'
              ? 'Nhập văn bản ở đây...'
              : 'Nhập mã Morse ở đây (ví dụ: .... . .-.. .-.. ---)'
          }
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={5}
          className="w-full"
        />
      </CardBody>
    </Card>
  )
}
