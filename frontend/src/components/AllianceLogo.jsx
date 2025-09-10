const AllianceLogo = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div className="w-12 h-12 bg-alliance-gold rounded-lg flex items-center justify-center shadow-lg">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="w-7 h-7 text-alliance-navy"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 2L3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7L12 2Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M9 21V12H15V21" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      {/* Logo Text */}
      <div className="text-white">
        <h2 className="text-2xl font-bold tracking-tight">Alliance</h2>
        <p className="text-sm text-blue-100 font-medium tracking-wide">UNIVERSITY</p>
      </div>
    </div>
  );
};

export default AllianceLogo;
