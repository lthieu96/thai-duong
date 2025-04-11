export default function MatThu() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mật thư</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          Đây là nơi chia sẻ các mật thư và thông điệp quan trọng từ GĐPT Thai
          Dương.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {/* Sample message cards - these would be dynamically generated in a real app */}
          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-2">
              Thông báo sinh hoạt tháng 4
            </h3>
            <p className="text-sm text-gray-600 mb-2">Ngày đăng: 05/04/2025</p>
            <p className="mb-3">
              Lịch sinh hoạt và các hoạt động trong tháng 4 năm 2025...
            </p>
            <button
              type="button"
              className="text-sm font-medium text-primary hover:underline"
            >
              Xem chi tiết
            </button>
          </div>

          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-2">Thông báo trại hè 2025</h3>
            <p className="text-sm text-gray-600 mb-2">Ngày đăng: 01/04/2025</p>
            <p className="mb-3">
              Thông tin về trại hè năm 2025 sẽ được tổ chức vào tháng 7...
            </p>
            <button
              type="button"
              className="text-sm font-medium text-primary hover:underline"
            >
              Xem chi tiết
            </button>
          </div>

          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-2">Kết quả thi Huynh Trưởng</h3>
            <p className="text-sm text-gray-600 mb-2">Ngày đăng: 25/03/2025</p>
            <p className="mb-3">
              Danh sách các anh chị đã vượt qua kỳ thi Huynh Trưởng...
            </p>
            <button
              type="button"
              className="text-sm font-medium text-primary hover:underline"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
