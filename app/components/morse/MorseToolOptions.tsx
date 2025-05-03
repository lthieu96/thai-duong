import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Input,
  Slider,
} from '@heroui/react'
import React from 'react'

interface MorseToolOptionsProps {
  wpm: number
  setWpm: (wpm: number) => void
  handleSpaces: boolean
  setHandleSpaces: (handle: boolean) => void
  outputFormat: string
  setOutputFormat: (format: string) => void
}

export function MorseToolOptions({
  wpm,
  setWpm,
  handleSpaces,
  setHandleSpaces,
  outputFormat,
  setOutputFormat,
}: MorseToolOptionsProps) {
  return (
    <Card className="mb-6 bg-default-100">
      <CardHeader>
        <h2 className="text-xl font-semibold">Tùy chọn nâng cao</h2>
      </CardHeader>
      <CardBody>
        <div className="space-y-6">
          {/* WPM Speed Control */}
          <div>
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-1/3 md:w-1/4">
                <Input
                  type="number"
                  label="Tốc độ phát (WPM)"
                  value={wpm.toString()}
                  onChange={(e) => setWpm(Number.parseInt(e.target.value) || 1)}
                  min={1}
                  max={50}
                />
              </div>
              <div className="w-full sm:w-2/3 md:w-3/4">
                <Slider
                  label="Điều chỉnh tốc độ"
                  step={1}
                  minValue={1}
                  maxValue={50}
                  value={wpm}
                  onChange={(value) => {
                    // Handle both number and number[] cases
                    if (Array.isArray(value)) {
                      setWpm(value[0])
                    } else {
                      setWpm(value)
                    }
                  }}
                  className="max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Checkbox Options */}
          <div className="flex flex-col gap-2">
            <Checkbox isSelected={handleSpaces} onValueChange={setHandleSpaces}>
              Xử lý khoảng trắng/dấu câu
            </Checkbox>
          </div>

          {/* Output format selection */}
          <div className="flex flex-col">
            <h3 className="text-sm font-medium mb-2">Định dạng đầu ra Morse</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                color="default"
                variant={outputFormat === '/' ? 'solid' : 'bordered'}
                onPress={() => setOutputFormat('/')}
                className="flex-1 min-w-[120px]"
              >
                Phân cách bằng "/"
              </Button>
              <Button
                size="sm"
                color="default"
                variant={outputFormat === '|' ? 'solid' : 'bordered'}
                onPress={() => setOutputFormat('|')}
                className="flex-1 min-w-[120px]"
              >
                Phân cách bằng "|"
              </Button>
              <Button
                size="sm"
                color="default"
                variant={outputFormat === ' ' ? 'solid' : 'bordered'}
                onPress={() => setOutputFormat(' ')}
                className="flex-1 min-w-[120px]"
              >
                Chỉ dùng khoảng trắng
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
