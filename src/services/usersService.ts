import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

// Axios instance để cấu hình các thiết lập chung cho tất cả các yêu cầu API
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

interface User {
  id: string;
  email: string;
  name: string;
  avatarURL: string;
  backgroundURL: string;
  socialLinks: string[];
  roles: string[];
  isGoogleUser: boolean;
  createdAt: string;
}

// Service liên quan đến người dùng
const usersService = {
  // Lấy thông tin người dùng theo ID
  getUserById: async (id: string): Promise<User> => {
    try {
      const response = await api.get(`/Users/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw error;
    }
  },

  // Lấy thông tin người dùng hiện tại (đang đăng nhập)
  getCurrentUser: async (): Promise<User> => {
    try {
      const response = await api.get(`/Users/me`);
      return response.data;
    } catch (error) {
      console.error('Error fetching current user:', error);
      throw error;
    }
  },

  // Lấy tất cả người dùng
  getAllUsers: async (): Promise<User[]> => {
    try {
      const response = await api.get(`/Users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching all users:', error);
      throw error;
    }
  },

  // Lấy vai trò của người dùng
  getUserRole: async (userId: string, roleName: string): Promise<any> => {
    try {
      const response = await api.get(`/Users/${userId}/role/${roleName}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user role:', error);
      throw error;
    }
  },

  // Cập nhật thông tin hồ sơ người dùng
  updateProfile: async (profileData: User): Promise<User> => {
    try {
      const response = await api.put(`/Users/profile`, profileData);
      return response.data;
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  },

  // Thêm vai trò cho người dùng
  addRoleToUser: async (userId: string, roleName: string): Promise<void> => {
    try {
      await api.post(`/Users/${userId}/roles`, { roleName });
    } catch (error) {
      console.error('Error adding role to user:', error);
      throw error;
    }
  },

  // Xóa vai trò của người dùng
  deleteRoleFromUser: async (userId: string, roleName: string): Promise<void> => {
    try {
      await api.delete(`/Users/${userId}/roles/${roleName}`);
    } catch (error) {
      console.error('Error deleting role from user:', error);
      throw error;
    }
  },
};

export default usersService;
