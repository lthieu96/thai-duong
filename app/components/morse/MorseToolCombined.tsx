import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Textarea,
} from '@heroui/react'
import { Icon } from '@iconify/react'
import React from 'react'

interface MorseToolCombinedProps {
  mode: 'encode' | 'decode'
  inputText: string
  setInputText: (text: string) => void
  result: string
  onProcess: () => void
  onCopy: () => void
  onClear: () => void
  onPlayAudio: () => void
  visualRef: React.RefObject<HTMLDivElement>
}

export function MorseToolCombined({
  mode,
  inputText,
  setInputText,
  result,
  onProcess,
  onCopy,
  onClear,
  onPlayAudio,
  visualRef,
}: MorseToolCombinedProps) {
  return (
    <Card className="mb-6 bg-default-100">
      <CardHeader>
        <h2 className="text-xl font-semibold">
          {mode === 'encode'
            ? 'Mã hóa văn bản thành Morse'
            : 'Giải mã Morse thành văn bản'}
        </h2>
      </CardHeader>
      <CardBody>
        <div className="space-y-6">
          {/* Input Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">
              {mode === 'encode'
                ? 'Nhập văn bản cần mã hóa'
                : 'Nhập mã Morse cần giải mã'}
            </h3>
            <Textarea
              placeholder={
                mode === 'encode'
                  ? 'Nhập văn bản ở đây...'
                  : 'Nhập mã Morse ở đây (ví dụ: .... . .-.. .-.. ---)'
              }
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={4}
              className="w-full"
            />
          </div>

          {/* Process Button */}
          <div className="flex justify-center">
            <Button
              color="default"
              size="lg"
              onPress={onProcess}
              className="px-8"
            >
              {mode === 'encode' ? 'Mã hóa' : 'Giải mã'}
            </Button>
          </div>

          <Divider />

          {/* Result Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Kết quả</h3>
            <Textarea
              readOnly
              value={result}
              rows={4}
              placeholder={
                mode === 'encode'
                  ? 'Kết quả mã Morse sẽ hiển thị ở đây...'
                  : 'Văn bản giải mã sẽ hiển thị ở đây...'
              }
              className="w-full"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button
              color="default"
              onPress={onCopy}
              startContent={<Icon icon="tabler:copy" />}
            >
              Sao chép kết quả
            </Button>
            <Button
              color="default"
              onPress={onClear}
              startContent={<Icon icon="tabler:trash" />}
            >
              Xóa tất cả
            </Button>
            <Button
              color="default"
              onPress={onPlayAudio}
              startContent={<Icon icon="tabler:volume" />}
            >
              Phát âm thanh
            </Button>
          </div>

          {/* Visual representation container */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Hiển thị trực quan</h3>
            <div
              ref={visualRef}
              className="morse-visual-container flex items-center justify-start p-4 overflow-x-auto rounded-md"
            >
              <p className="text-gray-500">
                Hiển thị mô phỏng Morse sẽ xuất hiện ở đây
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
