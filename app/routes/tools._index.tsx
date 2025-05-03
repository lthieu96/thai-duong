import { Card, CardBody } from '@heroui/react'
import { Icon } from '@iconify/react'
import { Link } from '@remix-run/react'
import { cn } from '~/lib/utils'

interface ToolCardProps {
  title: string
  icon: string
  gradientClass: string
  to: string
}

function ToolCard({ title, icon, gradientClass, to }: ToolCardProps) {
  return (
    <Card
      className="h-full cursor-pointer hover:scale-105 transition-all duration-300 tool-card border-8 border-white"
      shadow="md"
      isPressable
    >
      <Link to={to} className="w-full h-full">
        <CardBody
          className={cn(
            'flex flex-col items-center justify-center p-8 rounded-xl',
            gradientClass,
          )}
        >
          <div className="icon-container">
            <Icon icon={icon} className="text-white w-10 h-10" />
          </div>
          <h3 className="text-white font-semibold text-xl">{title}</h3>
        </CardBody>
      </Link>
    </Card>
  )
}

export default function Tools() {
  return (
    <div className="container mx-auto mb-12">
      <h1 className="text-2xl font-bold mb-6">Công cụ</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        <ToolCard
          title="Mã morse"
          icon="tabler:brand-google-podcasts"
          gradientClass="bg-gradient-to-br from-blue-500 to-blue-700 magicpattern-1"
          to="/tools/morse"
        />
        <ToolCard
          title="Semaphore"
          icon="tabler:flag"
          gradientClass="bg-gradient-to-br from-pink-500 to-purple-700 magicpattern-2"
          to="/tools/semaphore"
        />
        <ToolCard
          title="Mật thư thay thế"
          icon="tabler:replace"
          gradientClass="bg-gradient-to-br from-green-500 to-teal-700 magicpattern-3"
          to="/tools/mat-thu-thay-the"
        />
        <ToolCard
          title="Mật thư dời chỗ"
          icon="tabler:arrows-shuffle"
          gradientClass="bg-gradient-to-br from-amber-500 to-orange-700 magicpattern-4"
          to="/tools/mat-thu-doi-cho"
        />
      </div>
    </div>
  )
}
