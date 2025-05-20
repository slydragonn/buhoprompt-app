export default function ErrorComponent({
  errorMessage,
  isFullScreen,
}: Readonly<{ errorMessage: string; isFullScreen: boolean }>) {
  return (
    <div
      className={`w-full ${isFullScreen ? 'h-screen' : 'h-full'} flex items-center justify-center text-red-400`}
    >
      Error: {errorMessage}
    </div>
  );
}
