import { AxiosResponse } from 'axios';
import api from './apiService';

interface FundingRequest {
  id: number;
  title: string;
  description: string;
  amount: number;
  status: string;
  purpose: string;
  justificationDocumentUrl: string;
  projectId: number;
  projectTitle: string;
  requestedById: number;
  requestedByName: string;
  approvedById: number | null;
  approvedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

// Tạo yêu cầu
export const createFundingRequest = async (data: {
  title: string;
  description: string;
  amount: number;
  purpose: string;
  justificationDocumentUrl: string;
  projectId: number;
}) => {
  try {
    const response = await api.post('/funding-requests', data);
    return response.data;
  } catch (error) {
    console.error('Lỗi tạo yêu cầu:', error);
    throw error;
  }
};

//  lấy danh sách yêu cầu cấp vốn
export const getFundingRequests = async () => {
  try {
    const response = await api.get('/funding-requests');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch funding requests:', error);
    throw error;
  }
};

// Xem chi tiết yêu cầu
export const getFundingRequestById = async (id: number) => {
  try {
    const response = await api.get(`/funding-requests/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi lấy yêu cầu ID ${id}:`, error);
    throw error;
  }
};
// Cập nhật yêu cầu
export const updateFundingRequest = async (
  id: number,
  data: Partial<FundingRequest>
) => {
  try {
    const response = await api.put(`/funding-requests/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi cập nhật yêu cầu ID ${id}:`, error);
    throw error;
  }
};
// Xóa Yêu cầu
export const deleteFundingRequest = async (id: number) => {
  try {
    const response = await api.delete(`/funding-requests/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi xoá yêu cầu ID ${id}:`, error);
    throw error;
  }
};

// Tìm yêu cầu bằng Id Project
export const getFundingRequestsByProject = async (projectId: number) => {
  try {
    const response = await api.get(`/funding-requests/project/${projectId}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi lấy yêu cầu theo projectId ${projectId}:`, error);
    throw error;
  }
};

// Lấy yêu cầu theo người yêu cầu
export const getFundingRequestsByRequester = async (userId: number) => {
  try {
    const response = await api.get(`/funding-requests/requested-by/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi lấy yêu cầu theo userId ${userId}:`, error);
    throw error;
  }
};

// Lọc yeu cầu theo trạng thái
export const getFundingRequestsByStatus = async (status: string) => {
  try {
    const response = await api.get(`/funding-requests/status/${status}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi lấy yêu cầu theo status ${status}:`, error);
    throw error;
  }
};

// Duyệt yêu cầu (approve)
export const approveFundingRequest = async (id: number) => {
  try {
    const response = await api.post(`/funding-requests/${id}/approve`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi duyệt yêu cầu ID ${id}:`, error);
    throw error;
  }
};

// Từ chối yêu cầu (reject)
export const rejectFundingRequest = async (id: number) => {
  try {
    const response = await api.post(`/funding-requests/${id}/reject`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi từ chối yêu cầu ID ${id}:`, error);
    throw error;
  }
};
