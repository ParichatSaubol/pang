import { Link } from 'react-router-dom';  // ใช้ Link จาก react-router-dom

export default function LoginForm() {
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r">
      <div className="w-full max-w-md p-8 border rounded-lg shadow-xl bg-white">
        <div className="text-3xl font-bold text-center text-gray-700 mb-6">เข้าสู่ระบบ</div>
        <form className="space-y-6" >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">อีเมล</label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full p-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full p-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full p-3 mt-4 text-white font-semibold bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">เข้าสู่ระบบ</button>

          <div className="text-center mt-4">
          </div>

          <div className="text-center text-sm text-gray-500 mt-4">
            <a href="#" className="text-blue-500 hover:underline">ลืมรหัสผ่าน?</a>
            <span className="mx-2">|</span>
            <Link to="/register" className="text-blue-500 hover:underline">สมัครสมาชิก</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
