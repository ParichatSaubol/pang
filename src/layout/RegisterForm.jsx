import { useState } from "react";

export default function RegisterForm() {

 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r ">
      <div className="p-8 w-full max-w-lg border rounded-lg shadow-xl bg-white">
        <h2 className="text-3xl text-center mb-4 text-gray-700">แบบฟอร์มลงทะเบียน</h2>
        <form className="space-y-6" >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="label-text text-gray-700">ชื่อ</label>
              <input
                id="firstName"
                type="text"
                className="input input-bordered w-full p-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="firstName"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="label-text text-gray-700">นามสกุล</label>
              <input
                id="lastName"
                type="text"
                className="input input-bordered w-full p-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="lastName"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="label-text text-gray-700">เบอร์โทรศัพท์</label>
              <input
                id="phoneNumber"
                type="text"
                className="input input-bordered w-full p-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="phoneNumber"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="label-text text-gray-700">อีเมล</label>
              <input
                id="email"
                type="text"
                className="input input-bordered w-full p-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="label-text text-gray-700">รหัสผ่าน</label>
            <input
              id="password"
              type="password"
              className="input input-bordered w-full p-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="password"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="label-text text-gray-700">ยืนยันรหัสผ่าน</label>
            <input
              id="confirmPassword"
              type="password"
              className="input input-bordered w-full p-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="confirmPassword"
            />
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary w-full p-3 mt-4 text-white font-semibold bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
              สมัครสมาชิก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
