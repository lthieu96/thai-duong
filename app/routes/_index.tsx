import { MaskedImage } from '~/components/ui/masked-image'

export default function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-4 md:py-24">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold font-serif">
                  Giới thiệu về
                  <br />
                  GĐPT Thai Dương
                </h1>
              </div>
              <p className="max-w-md text-lg font-semibold">
                Gia Đình Phật Tử Thai Dương là một tổ chức Đào luyện thanh –
                thiếu – đồng niên tin Phật thành Phật tử chân chính, góp phần
                phụng sự đạo pháp và xây dựng xã hội.
              </p>
              <p className="max-w-md text-lg font-semibold">
                Chúng tôi tập trung vào việc giáo dục và phát triển toàn diện
                cho các em về mặt đạo đức, trí tuệ, thể chất và xã hội thông qua
                các hoạt động sinh hoạt, tu học và phụng sự.
              </p>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <MaskedImage
                src="/main.png"
                alt="Peaceful cottage in mountains"
                width={500}
                height={500}
                variant="shape1"
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
