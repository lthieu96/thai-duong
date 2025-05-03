import { useDisclosure } from '@heroui/react'
import { useRef, useState } from 'react'
import { MorseReferenceTable } from '~/components/morse/MorseReferenceTable'
import { MorseToolCombined } from '~/components/morse/MorseToolCombined'
import { MorseToolHeader } from '~/components/morse/MorseToolHeader'
import { MorseToolInfo } from '~/components/morse/MorseToolInfo'
import { MorseToolModeSelector } from '~/components/morse/MorseToolModeSelector'
import { MorseToolOptions } from '~/components/morse/MorseToolOptions'
import '~/styles/morse.css'
import {
  decodeFromMorse,
  encodeToMorse,
  playMorseAudio,
} from '~/utils/morse-code'

export default function MorseTool() {
  // State for input text and result
  const [inputText, setInputText] = useState('')
  const [result, setResult] = useState('')
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')

  // State for Morse options
  const [wpm, setWpm] = useState(15)
  const [handleSpaces, setHandleSpaces] = useState(true)
  const [outputFormat, setOutputFormat] = useState('/')

  // State for reference table modal
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Function to handle encoding/decoding
  const handleProcess = () => {
    if (mode === 'encode') {
      setResult(
        encodeToMorse(inputText, {
          supportVietnamese: false,
          handleSpaces,
          outputFormat,
        }),
      )
    } else {
      setResult(
        decodeFromMorse(inputText, { supportVietnamese: false, handleSpaces }),
      )
    }
  }

  // Function to copy result to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result)
  }

  // Function to clear all inputs and results
  const clearAll = () => {
    setInputText('')
    setResult('')
  }

  // Function to play audio
  const playAudio = () => {
    if (result) {
      try {
        playMorseAudio(result, wpm)
      } catch (error) {
        console.error('Error playing audio:', error)
      }
    } else {
      alert('Vui lòng tạo mã Morse trước khi phát âm thanh')
    }
  }

  // Reference for visual representation
  const visualRef = useRef<HTMLDivElement>(null)

  return (
    <div className="container mx-auto py-4 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <MorseToolHeader />

        <MorseToolModeSelector mode={mode} setMode={setMode} />

        <MorseToolCombined
          mode={mode}
          inputText={inputText}
          setInputText={setInputText}
          result={result}
          onProcess={handleProcess}
          onCopy={copyToClipboard}
          onClear={clearAll}
          onPlayAudio={playAudio}
          visualRef={visualRef}
        />

        <MorseToolOptions
          wpm={wpm}
          setWpm={setWpm}
          handleSpaces={handleSpaces}
          setHandleSpaces={setHandleSpaces}
          outputFormat={outputFormat}
          setOutputFormat={setOutputFormat}
        />

        <MorseToolInfo onOpenReferenceTable={onOpen} />

        <MorseReferenceTable isOpen={isOpen} onClose={onClose} />
      </div>
    </div>
  )
}
