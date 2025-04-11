export default function CongCu() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Công cụ</h1>
      <div className="prose max-w-none">
        <p className="mb-6">
          Trang này cung cấp các công cụ hỗ trợ cho các hoạt động của GĐPT Thai
          Dương.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Tool cards */}
          <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Thư viện tài liệu</title>
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Thư viện tài liệu</h3>
            </div>
            <p className="mb-3">
              Truy cập kho tài liệu học tập, giáo án và tài liệu sinh hoạt.
            </p>
            <button
              type="button"
              className="text-sm font-medium text-primary hover:underline"
            >
              Truy cập
            </button>
          </div>

          <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Lịch sinh hoạt</title>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Lịch sinh hoạt</h3>
            </div>
            <p className="mb-3">
              Xem lịch sinh hoạt, sự kiện và các hoạt động sắp tới.
            </p>
            <button
              type="button"
              className="text-sm font-medium text-primary hover:underline"
            >
              Xem lịch
            </button>
          </div>

          <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Quản lý đoàn sinh</title>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Quản lý đoàn sinh</h3>
            </div>
            <p className="mb-3">
              Công cụ quản lý thông tin đoàn sinh và huynh trưởng.
            </p>
            <button
              type="button"
              className="text-sm font-medium text-primary hover:underline"
            >
              Truy cập
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
