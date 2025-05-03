import { Button, Card, CardBody, CardHeader } from '@heroui/react'
import { Icon } from '@iconify/react'
import React from 'react'

interface MorseToolInfoProps {
  onOpenReferenceTable: () => void
}

export function MorseToolInfo({ onOpenReferenceTable }: MorseToolInfoProps) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <h2 className="text-xl font-semibold">Thông tin về Mã Morse</h2>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          <p>
            Mã Morse là một phương pháp mã hóa văn bản thành chuỗi các tín hiệu
            ngắn và dài, thường được biểu diễn bằng dấu chấm (.) và gạch ngang
            (-). Được phát minh bởi Samuel Morse vào những năm 1830, mã Morse
            ban đầu được sử dụng cho truyền tin điện báo và sau đó được áp dụng
            rộng rãi trong truyền thông vô tuyến.
          </p>
          <p>
            Trong mã Morse, mỗi ký tự (chữ cái, chữ số) được biểu diễn bằng một
            chuỗi duy nhất các dấu chấm và gạch ngang. Khoảng thời gian giữa các
            tín hiệu cũng có ý nghĩa:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Một dấu chấm (.) kéo dài 1 đơn vị thời gian</li>
            <li>Một gạch ngang (-) kéo dài 3 đơn vị thời gian</li>
            <li>
              Khoảng cách giữa các thành phần của cùng một ký tự là 1 đơn vị
              thời gian
            </li>
            <li>
              Khoảng cách giữa các ký tự trong cùng một từ là 3 đơn vị thời gian
            </li>
            <li>Khoảng cách giữa các từ là 7 đơn vị thời gian</li>
          </ul>

          {/* Reference Table Button */}
          <div className="mt-4">
            <Button
              color="default"
              variant="flat"
              startContent={<Icon icon="tabler:table" />}
              onPress={onOpenReferenceTable}
            >
              Xem Bảng Tham chiếu Mã Morse
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
