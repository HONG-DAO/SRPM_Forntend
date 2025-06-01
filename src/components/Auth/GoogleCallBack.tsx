import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { googleAuthService } from '../../services/googleAuthService';
import { authService } from '../../services/authService';

const GoogleCallback: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const code = queryParams.get('code');
        const state = queryParams.get('state');
        const error = queryParams.get('error');

        if (error) {
          setError(`Authentication error: ${error}`);
          setLoading(false);
          return;
        }

        if (!code) {
          setError('No authentication code received');
          setLoading(false);
          return;
        }

        // Xác định xem đây là callback đăng nhập hay đăng ký
        const isSignUp = location.pathname.includes('signup');

        if (isSignUp) {
          const userData = await googleAuthService.handleGoogleSignUpCallback(
            code
          );

          if (userData.needsAdditionalInfo) {
            // Nếu cần thêm thông tin, chuyển đến form đăng ký với Google
            navigate('/signup', {
              state: {
                googleUserData: {
                  email: userData.email,
                  name: userData.name,
                  picture: userData.picture,
                },
              },
            });
          } else {
            // Nếu đăng ký thành công và không cần thêm thông tin
            navigate('/signin', {
              state: { message: 'Registration successful! Please sign in.' },
            });
          }
        } else {
          // Xử lý callback đăng nhập
          const loginData = await googleAuthService.handleGoogleSignInCallback(
            code
          );

          if (loginData.accessToken) {
            sessionStorage.setItem('accessToken', loginData.accessToken);
            await authService.fetchAndStoreUserProfile();
            navigate('/thanhviennghiencuu');
          } else {
            setError('Failed to sign in with Google');
          }
        }
      } catch (error: any) {
        console.error('Error handling Google callback:', error);
        setError(error.message || 'An error occurred during authentication');
      } finally {
        setLoading(false);
      }
    };

    handleCallback();
  }, [location, navigate]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1569CB]"></div>
        <p className="mt-4 text-gray-600">Processing authentication...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
        <button
          onClick={() => navigate('/signin')}
          className="mt-4 px-4 py-2 bg-[#1569CB] text-white rounded hover:bg-[#1254A3]"
        >
          Return to Sign In
        </button>
      </div>
    );
  }

  return null;
};

export default GoogleCallback;
