import { AxiosResponse } from 'axios';
import api from './apiService';

interface Notification {
  id: number;
  title: string;
  message: string;
  type: string;
  relatedEntityType: string;
  relatedEntityId: number;
  isRead: boolean;
  userId: number;
  createdAt: string;
}

interface CreateNotificationDto {
  title: string;
  message: string;
  type: string;
  relatedEntityType?: string;
  relatedEntityId?: number;
  userId: number;
}
interface NotificationQuery {
  page?: number;
  pageSize?: number;
  type?: string;
  isRead?: boolean;
  fromDate?: string;
  toDate?: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
// Lấy thông báo theo ID
// Xóa thông báo theo ID
// Lấy tất cả thông báo
// Lấy danh sách thông báo chưa đọc
// Đánh dấu 1 thông báo là đã đọc
// Đánh dấu tất cả là đã đọc