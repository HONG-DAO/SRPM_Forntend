"use client";
import React, { useState } from "react";
import {
  ProjectTypeSection,
  UserInfoSection,
  ProjectDetailsSection,
  TeamMembersSection,
} from "@cnpm/components/Du An/Tao Du An/ProjectFormSections";
import { createProject, addMemberToProject } from "@cnpm/services/projectService";

interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    objectives: "",
    expectedOutcomes: "",
    startDate: "",
    endDate: "",
    researchTopicId: 1,
    isBusinessSponsored: false,
    members: [] as Member[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const requiredFields = {
      title: "Tên dự án",
      description: "Mô tả dự án", 
      objectives: "Mục tiêu",
      expectedOutcomes: "Kết quả mong đợi",
      startDate: "Ngày bắt đầu",
      endDate: "Ngày kết thúc"
    };

    for (const [field, label] of Object.entries(requiredFields)) {
      if (!formData[field as keyof typeof formData] || 
          String(formData[field as keyof typeof formData]).trim() === "") {
        alert(`Vui lòng nhập ${label}`);
        return false;
      }
    }

    // Validate dates
    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);
    
    if (startDate >= endDate) {
      alert("Ngày kết thúc phải sau ngày bắt đầu");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Tạo dự án trước
      const projectData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        objectives: formData.objectives.trim(),
        expectedOutcomes: formData.expectedOutcomes.trim(),
        startDate: formData.startDate,
        endDate: formData.endDate,
        researchTopicId: formData.researchTopicId,
      };

      const createdProject = await createProject(projectData);
      console.log("Dự án được tạo:", createdProject);

      // Thêm thành viên vào dự án (nếu có)
      if (formData.members && formData.members.length > 0) {
        console.log(`Đang thêm ${formData.members.length} thành viên vào dự án...`);
        
        for (const member of formData.members) {
          try {
            // Lưu ý: API cần userId thực tế, hiện tại chỉ có thông tin name/email
            // Cần implement logic để tìm userId từ email hoặc tạo user mới
            console.log(`Thông tin thành viên cần thêm:`, member);
            
            // Uncomment khi có userId thực tế
            // await addMemberToProject(createdProject.id, {
            //   userId: member.userId, // Cần có userId thực tế
            //   role: member.role
            // });
          } catch (memberError) {
            console.error(`Lỗi khi thêm thành viên ${member.name}:`, memberError);
          }
        }
      }

      alert("Tạo dự án thành công!");
      
      // Reset form
      setFormData({
        title: "",
        description: "",
        objectives: "",
        expectedOutcomes: "",
        startDate: "",
        endDate: "",
        researchTopicId: 1,
        isBusinessSponsored: false,
        members: [],
      });

    } catch (error) {
      console.error("Lỗi khi tạo dự án:", error);
      alert("Tạo dự án thất bại! Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col self-center px-9 py-8 max-w-full bg-white rounded-xl border border-solid border-slate-200 shadow-lg w-[900px] max-md:px-5 mx-auto"
      >
        <h1 className="self-center text-3xl font-bold text-gray-700 mb-2">
          Tạo dự án mới
        </h1>
        <p className="self-center text-center text-sm text-gray-500 mb-6 max-md:max-w-full">
          Điền đầy đủ thông tin bên dưới để tạo dự án mới. <br />
          Các trường có dấu (*) là bắt buộc.
        </p>

        <ProjectTypeSection formData={formData} setFormData={setFormData} />
        <UserInfoSection />
        <ProjectDetailsSection formData={formData} setFormData={setFormData} />
        <TeamMembersSection formData={formData} setFormData={setFormData} />

        <div className="flex gap-4 justify-center mt-8">
          <button
            type="button"
            onClick={() => {
              if (confirm("Bạn có chắc muốn hủy? Tất cả dữ liệu sẽ bị mất.")) {
                setFormData({
                  title: "",
                  description: "",
                  objectives: "",
                  expectedOutcomes: "",
                  startDate: "",
                  endDate: "",
                  researchTopicId: 1,
                  isBusinessSponsored: false,
                  members: [],
                });
              }
            }}
            className="px-8 py-3 text-lg font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            disabled={isSubmitting}
          >
            Hủy
          </button>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 text-lg font-bold text-white rounded-lg transition-colors ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-teal-500 hover:bg-teal-600"
            }`}
          >
            {isSubmitting ? "Đang tạo..." : "Tạo dự án"}
          </button>
        </div>

        {/* Debug info */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 p-4 bg-gray-100 rounded-lg">
            <summary className="cursor-pointer text-sm font-medium text-gray-600">
              Debug: Form Data (chỉ hiện ở development)
            </summary>
            <pre className="mt-2 text-xs text-gray-600 overflow-auto">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </details>
        )}
      </form>
    </div>
  );
};