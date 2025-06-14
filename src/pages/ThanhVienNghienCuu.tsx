// src/pages/ThanhVienNghienCuu.tsx
"use client";
import React from "react";
import Sidebar from "@cnpm/components/TrangChuThanhVienNghienCuu/Sidebar";
import Header from "@cnpm/components/Header";
import { ProjectsTable } from "@cnpm/components/TrangChuThanhVienNghienCuu/ProjectsTable";
import { TaskList } from "@cnpm/components/TrangChuThanhVienNghienCuu/TaskList";

const recentProjects = [
	{
		title: 'Hệ thống giao dịch tự động',
		group: 'CNTT22',
		instructor: {
			name: 'Ths. Hồng',
			avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0784ece3d4d4e2c6679bf3be59f520b4edac9fba?placeholderIfAbsent=true'
		},
		progress: 40
	},
	{
		title: 'Bác Sĩ AI',
		group: 'CNTT3',
		instructor: {
			name: 'TS. Minh',
			avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a9425fde5081aecab155e608fb2add02f6e1233?placeholderIfAbsent=true'
		},
		progress: 60
	},
	{
		title: 'Ứng dụng Quản lý tiển trọ',
		group: 'KHDL',
		instructor: {
			name: 'TS. Ngọc',
			avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b760e890be031f90a7c0299e3136fa45f633b532?placeholderIfAbsent=true'
		},
		progress: 80
	}
];

const thongBaoChung = [
	{ message: "Nhiệm vụ 1 sắp tới hạn !" },
	{ message: "Bạn vừa mới được ThS Nguyễn Văn Hồng cập nhật nhiệm vụ 3" },
];

export const ThanhVienNghienCuu = () => {
	return (
		<main className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen w-full">
			<div className="flex flex-row min-h-screen">
				{/* Sidebar */}
				<div className="w-[18%] border-r border-slate-200 bg-gray-50">
					<Sidebar />
				</div>
				
				{/* Main content */}
				<div className="w-[110%] flex flex-col">
					<Header />
					
					<section className="flex-1 overflow-y-auto">
						<div className="max-w-7xl mx-auto px-6 py-8">
							{/* Welcome Section */}
							<div className="mb-8">
								<h1 className="text-4xl font-bold text-gray-800 mb-2">
									Xin chào, tên !
								</h1>
								<p className="text-lg text-gray-600">
									Chúc bạn một ngày làm việc hiệu quả
								</p>
							</div>

							{/* Tasks and Notifications Section */}
							<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
								<div className="xl:col-span-2">
									<TaskList />
								</div>
								
								<div className="xl:col-span-1">
									<div className="bg-white rounded-2xl border border-slate-200 shadow-sm h-full">
										<div className="p-6 border-b border-slate-100">
											<h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
												<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
												Thông báo chung
											</h2>
										</div>
										
										<div className="p-6 space-y-4 max-h-80 overflow-y-auto">
											{thongBaoChung.map((tb, idx) => (
												<div
													key={idx}
													className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-200"
												>
													<div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
														<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
														</svg>
													</div>
													<p className="text-sm text-gray-700 leading-relaxed flex-1">
														{tb.message}
													</p>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>

							{/* Projects Section */}
							<div className="mb-8">
								<ProjectsTable projects={recentProjects} />
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
};

export default ThanhVienNghienCuu;