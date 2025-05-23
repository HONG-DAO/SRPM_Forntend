import * as React from "react";

interface UserDetail {
  label: string;
  value: string;
}

const userDetails: UserDetail[] = [
  { label: "Tên", value: "Nguyễn Văn A" },
  { label: "Giới tính", value: "Nam" },
  { label: "Lớp", value: "CNTTCLC23" },
  { label: "Mã Thành Viên", value: "079********231" },
  { label: "Ngày sinh", value: "24/07/2004" },
  { label: "Email", value: "fe@ut.edu.vn" },
  { label: "Số Điện Thoại", value: "08********" },
  { label: "Mạng xã hội", value: "" },
  { label: "Địa chỉ", value: "Hà Nội" },
  { label: "Trạng thái", value: "Đang hoạt động" },
  { label: "Tham gia từ", value: "01/01/2023" },
  { label: "Thời gian tham gia", value: "1 năm" },
];

export const UserDetailsCard: React.FC = () => {
  return (
    <section className="flex flex-col grow px-14 py-11 rounded-xl border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-xl font-bold text-center text-gray-700">
        Chi tiết người dùng
      </h2>
      <div className="mt-7 text-sm text-gray-700">
        {userDetails.map((detail, index) => (
          <div key={index} className={index > 0 ? "mt-2" : ""}>
            <span className="font-bold text-gray-700">{detail.label}:</span>
            <span className="text-gray-700"> {detail.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
