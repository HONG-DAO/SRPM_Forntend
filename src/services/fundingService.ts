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

interface CreateFundingRequest {
  title: string;
  description: string;
  amount: number;
  purpose: string;
  justificationDocumentUrl: string;
  projectId: number;
}

// Tạo yêu cầu cấp vốn
export const createFundingRequest = async (data: CreateFundingRequest): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.post('/FundingRequests', data);
    return response.data;
  } catch (error) {
    console.error('Lỗi tạo yêu cầu:', error);
    throw error;
  }
};

// Lấy danh sách yêu cầu cấp vốn
export const getFundingRequests = async (): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.get('/FundingRequests');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch funding requests:', error);
    throw error;
  }
};

// Lấy yêu cầu cấp vốn theo ID
export const getFundingRequestById = async (id: number): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.get(`/FundingRequests/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi lấy yêu cầu ID ${id}:`, error);
    throw error;
  }
};

// Cập nhật yêu cầu cấp vốn
export const updateFundingRequest = async (
  id: number,
  data: Partial<FundingRequest>
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.put(`/FundingRequests/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi cập nhật yêu cầu ID ${id}:`, error);
    throw error;
  }
};

// Xóa yêu cầu cấp vốn
export const deleteFundingRequest = async (id: number): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.delete(`/FundingRequests/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi xoá yêu cầu ID ${id}:`, error);
    throw error;
  }
};

// Lấy yêu cầu cấp vốn theo projectId
export const getFundingRequestsByProject = async (projectId: number): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.get(`/FundingRequests/project/${projectId}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi lấy yêu cầu theo projectId ${projectId}:`, error);
    throw error;
  }
};

// Lấy yêu cầu cấp vốn theo người yêu cầu
export const getFundingRequestsByRequester = async (userId: number): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.get(`/FundingRequests/requested-by/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi lấy yêu cầu theo userId ${userId}:`, error);
    throw error;
  }
};

// Lọc yêu cầu cấp vốn theo trạng thái
export const getFundingRequestsByStatus = async (status: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.get(`/FundingRequests/status/${status}`);
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi lấy yêu cầu theo status ${status}:`, error);
    throw error;
  }
};

// Duyệt yêu cầu (approve)
export const approveFundingRequest = async (id: number): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.post(
      `/FundingRequests/${id}/approve`,
      {}, // body rỗng
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi duyệt yêu cầu ID ${id}:`, error);
    throw error;
  }
};

// Từ chối yêu cầu (reject)
export const rejectFundingRequest = async (id: number, reason: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.post(
      `/FundingRequests/${id}/reject`,
      { reason }, // gửi lý do từ chối
    );
    return response.data;
  } catch (error) {
    console.error(`Lỗi khi từ chối yêu cầu ID ${id}:`, error);
    throw error;
  }
};



