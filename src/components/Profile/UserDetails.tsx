export const UserDetails = () => {
  return (
    <section className="flex flex-col grow px-14 py-11 rounded-xl border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-xl font-bold text-center text-gray-700">
        Chi tiết người dùng
      </h2>

      <div className="mt-7 text-sm text-gray-700">
        <p className="mt-2">
          <strong className="text-gray-700">Tên:</strong>
          <span className="text-gray-700"> Nguyễn Văn A</span>
        </p>

        <p className="mt-2">
          <strong className="text-gray-700">Lớp:</strong>
          <span className="text-gray-700"> CNTTCLC23</span>
        </p>

        <p className="mt-2">
          <strong className="text-gray-700">Mã Thành Viên:</strong>
          <span className="text-gray-700"> 079********231</span>
        </p>

        <p className="mt-2">
          <strong className="text-gray-700">Ngày sinh:</strong>
          <span className="text-gray-700"> 24/07/2004</span>
        </p>

        <p className="mt-2">
          <strong className="text-gray-700">Email:</strong>
          <span className="text-gray-700"> fe@ut.edu.vn</span>
        </p>

        <p className="mt-2">
          <strong className="text-gray-700">Số Điện Thoại:</strong>
          <span className="text-gray-700"> 08********</span>
        </p>

        <p className="mt-2">
          <strong className="text-gray-700">Mạng xã hội:</strong>
        </p>
      </div>
    </section>
  );
};
