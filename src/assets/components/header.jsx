import Menu from "./menu";

export default function Header() {
    return (
      <div className="md:bg-top h-[600px] bg-gradient-to-br from-pink-600 to-purple-900 text-white font-sans relative">
        {/* Navigation */}
        <nav className="flex justify-between items-center px-10 py-4">
          <div className="flex items-center justify-center space-x-2 p-4">
            <img src="./src/assets/icons/sygnal_logo.png" alt="icon" className="w-15 h-15 mr-2" />
            <h2 className="text-4xl font-serif">Sygnal</h2>
          </div>

          {/* Menu */}
          <Menu />
        </nav>
  
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center px-4 md:px-0 mt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hosting Files</h1>
          <p className="text-lg md:text-xl max-w-xl">
            Host your larger PDFs, images, audio and video files externally. Download them automatically.
          </p>
  
          {/* CTA Buttons */}
          <div className="mt-10 flex gap-4">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded">
              View the Demos
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded">
              Learn More
            </button>
          </div>
        </div>
  
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce text-5xl">
          ↓
        </div>
      </div>
    );
  }
  