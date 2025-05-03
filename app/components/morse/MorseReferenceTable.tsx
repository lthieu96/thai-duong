import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
} from '@heroui/react'
import React from 'react'
import { morseReferenceTable } from '~/utils/morse-code'

interface MorseReferenceTableProps {
  isOpen: boolean
  onClose: () => void
}

export function MorseReferenceTable({
  isOpen,
  onClose,
}: MorseReferenceTableProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalContent>
        <ModalHeader>Bảng Tham chiếu Mã Morse</ModalHeader>
        <ModalBody className="max-h-[70vh]">
          <ScrollShadow>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Chữ cái</h3>
                <div className="overflow-x-auto">
                  <table className="morse-reference-table">
                    <thead>
                      <tr>
                        <th>Ký tự</th>
                        <th>Mã Morse</th>
                      </tr>
                    </thead>
                    <tbody>
                      {morseReferenceTable.letters
                        .slice(0, 13)
                        .map(([char, code]) => (
                          <tr key={char}>
                            <td>{char}</td>
                            <td>{code}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Chữ cái (tiếp)</h3>
                <div className="overflow-x-auto">
                  <table className="morse-reference-table">
                    <thead>
                      <tr>
                        <th>Ký tự</th>
                        <th>Mã Morse</th>
                      </tr>
                    </thead>
                    <tbody>
                      {morseReferenceTable.letters
                        .slice(13)
                        .map(([char, code]) => (
                          <tr key={char}>
                            <td>{char}</td>
                            <td>{code}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Số và Dấu câu</h3>
                <div className="overflow-x-auto">
                  <table className="morse-reference-table">
                    <thead>
                      <tr>
                        <th>Ký tự</th>
                        <th>Mã Morse</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Numbers */}
                      {morseReferenceTable.numbers.map(([char, code]) => (
                        <tr key={char}>
                          <td>{char}</td>
                          <td>{code}</td>
                        </tr>
                      ))}

                      {/* Punctuation */}
                      {Object.entries(morseReferenceTable.punctuation)
                        .slice(0, 3)
                        .map(([char, code]) => (
                          <tr key={char}>
                            <td>{char}</td>
                            <td>{code}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </ScrollShadow>
        </ModalBody>
        <ModalFooter>
          <Button color="default" onPress={onClose}>
            Đóng
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
