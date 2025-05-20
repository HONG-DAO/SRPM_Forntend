interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div
    role="alert"
    className="p-3.5 mb-6 text-base font-bold text-center text-red-900 bg-rose-200 rounded-lg"
  >
    {message}
  </div>
);
