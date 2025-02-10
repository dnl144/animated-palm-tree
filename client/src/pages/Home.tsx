import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "Where Is The Start";
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
      <div className="w-full max-w-6xl mx-auto">
        <img 
          src="../../attached_assets/centrelogo.png" 
          alt="Entrepreneurship starts somewhere logo" 
          className="w-full max-w-4xl mx-auto h-auto"
        />
      </div>
    </main>
  );
}
