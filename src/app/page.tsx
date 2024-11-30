'use client';

export default function HomePage() {
  const resetRedirectCookie = () => {
    console.log('button clicked. resetting redirect cookie...');
    
    document.cookie = "redirected=false; path=/; max-age=86400";
  };

  return (
    <>
      Hello
      <button className="size-20 bg-blue-500 hover:bg-blue-600" onClick={resetRedirectCookie}>
        Clear redirect cookie
      </button>
    </>
  )
};
