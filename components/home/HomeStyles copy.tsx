export default function HomeStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&family=Allura&display=swap');
      
      .font-serif-display {
        font-family: 'Playfair Display', serif;
      }
      .font-sans-body {
        font-family: 'Montserrat', sans-serif;
      }
      .font-script {
        font-family: 'Allura', cursive;
      }
      .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1); 
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #f59e0b;
      }
      input[type="date"]::-webkit-calendar-picker-indicator {
          background: transparent;
          bottom: 0;
          color: transparent;
          cursor: pointer;
          height: auto;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          width: auto;
      }
    `}</style>
  );
}

