import { Button, Card, CardBody } from '@heroui/react'
import { Icon } from '@iconify/react'
import React from 'react'

interface MorseToolModeSelectorProps {
  mode: 'encode' | 'decode'
  setMode: (mode: 'encode' | 'decode') => void
}

export function MorseToolModeSelector({
  mode,
  setMode,
}: MorseToolModeSelectorProps) {
  return (
    <Card className="mb-6 bg-default-100">
      <CardBody>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            color="default"
            variant={mode === 'encode' ? 'solid' : 'bordered'}
            onPress={() => setMode('encode')}
          >
            Mã hóa (Văn bản → Morse)
          </Button>
          <Button
            color="default"
            variant={mode === 'decode' ? 'solid' : 'bordered'}
            onPress={() => setMode('decode')}
          >
            Giải mã (Morse → Văn bản)
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
