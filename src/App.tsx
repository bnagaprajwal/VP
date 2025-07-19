import React from 'react';
import { useState } from 'react';
import { Moon, Info, ChevronDown, X, CreditCard, ArrowUpDown, Coins, Zap, Shield, BookOpen, HelpCircle, MessageCircle, Briefcase, Twitter, Github, Youtube, Instagram, Linkedin } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [developerOpen, setDeveloperOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleFeatures = () => {
    setFeaturesOpen(!featuresOpen);
    setDeveloperOpen(false);
  };

  const toggleDeveloper = () => {
    setDeveloperOpen(!developerOpen);
    setFeaturesOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-[#F5F1EB] text-gray-900'
    }`}>

      {/* Header */}
      <div className="px-6 lg:px-8 pt-6">
        <header className={`flex items-center justify-between px-6 py-4 rounded-2xl shadow-sm border transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-100'
        }`}>
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>MetaMask</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Features Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleFeatures}
                className={`flex items-center space-x-1 font-medium transition-colors duration-300 hover:opacity-70 ${
                  isDarkMode 
                    ? 'text-gray-300' 
                    : 'text-gray-700'
                }`}
              >
                <span>Features</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Developer Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleDeveloper}
                className={`flex items-center space-x-1 font-medium transition-colors duration-300 hover:opacity-70 ${
                  isDarkMode 
                    ? 'text-gray-300' 
                    : 'text-gray-700'
                }`}
              >
                <span>Developer</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${developerOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Cryptocurrencies Link */}
            <a href="#" className={`font-medium transition-colors duration-300 hover:opacity-70 ${
              isDarkMode 
                ? 'text-gray-300' 
                : 'text-gray-700'
            }`}>
              Cryptocurrencies
            </a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 transition-colors duration-300 ${
              isDarkMode 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Moon size={20} />
          </button>
          <button className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-white text-black hover:bg-gray-200' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}>
            VIEW METAMASK WEB
          </button>
        </div>
        </header>
      </div>

      {/* Dropdown Content on Main Page */}
      {(featuresOpen || developerOpen) && (
        <div className="fixed top-24 left-6 right-6 z-50 px-0 lg:px-2">
          <div className={`rounded-2xl shadow-2xl border p-8 transition-all duration-300 transform ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-100'
          } animate-in slide-in-from-top-4`}>
            {/* Close button */}
            <button 
              onClick={() => {
                setFeaturesOpen(false);
                setDeveloperOpen(false);
              }}
              className={`absolute top-4 right-4 p-2 rounded-full transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <X size={20} />
            </button>
            
            {featuresOpen && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Buy Card */}
                <div className="group bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-6 text-white relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">Buy</h3>
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                        <CreditCard size={24} />
                      </div>
                    </div>
                    <p className="text-orange-100 mb-4">Turn cash to crypto</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">$4,000 USD</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
                </div>

                {/* Earn Card */}
                <div className="group bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">Earn</h3>
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                        <Coins size={24} />
                      </div>
                    </div>
                    <p className="text-purple-100 mb-4">Receive rewards</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">3.00254 ETH</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
                </div>

                {/* Swaps Card */}
                <div className="group bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">Swaps</h3>
                      <ArrowUpDown size={24} className="group-hover:rotate-180 transition-transform duration-300" />
                    </div>
                    <p className="text-green-100 mb-4">Exchange any token</p>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg p-2 group-hover:bg-opacity-30 transition-all duration-300">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">$</div>
                        <span className="text-sm">USD Coin</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg p-2 group-hover:bg-opacity-30 transition-all duration-300">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">Ξ</div>
                        <span className="text-sm">Ethereum</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Snaps Card */}
                <div className="group bg-gradient-to-br from-indigo-500 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">Snaps</h3>
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                        <Zap size={24} className="group-hover:animate-pulse" />
                      </div>
                    </div>
                    <p className="text-indigo-100">Enhance your wallet with third-party built features</p>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
                </div>

                {/* Bridge Card */}
                <div className="group bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">Bridge</h3>
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                        <Shield size={24} />
                      </div>
                    </div>
                    <p className="text-cyan-100">Move tokens between networks</p>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
                </div>

                {/* Card Feature */}
                <div className="group bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-6 text-white relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">Card</h3>
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                        <CreditCard size={24} />
                      </div>
                    </div>
                    <p className="text-pink-100">Spend crypto for daily purchases</p>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
                </div>
              </div>
            )}

            {developerOpen && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Documentation Card */}
                <div className="group bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                        <BookOpen size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Documentation</h3>
                        <p className="text-blue-100">Complete developer guides and API references</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
                </div>

                {/* SDK Card */}
                <div className="group bg-gradient-to-br from-green-500 to-emerald-700 rounded-2xl p-8 text-white relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                        <Briefcase size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">SDK</h3>
                        <p className="text-green-100">Development toolkit and libraries</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
                </div>

                {/* API Card */}
                <div className="group bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8 text-white relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                        <Zap size={32} className="group-hover:animate-pulse" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">API</h3>
                        <p className="text-purple-100">Integration endpoints and webhooks</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
                </div>

                {/* Community Card */}
                <div className="group bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                        <MessageCircle size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Community</h3>
                        <p className="text-orange-100">Developer support and forums</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Backdrop overlay */}
      {(featuresOpen || developerOpen) && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            setFeaturesOpen(false);
            setDeveloperOpen(false);
          }}
        />
      )}

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 py-16 lg:py-24">
        {/* Hero Text */}
        <div className="text-center mb-16">
          <h1 className={`metamask-font text-6xl lg:text-8xl xl:text-9xl leading-none tracking-tight transition-colors duration-300 ${
            isDarkMode ? 'text-purple-300' : 'text-[#3D065F]'
          }`}>
            YOUR HOME
            <br />
            IN WEB3
          </h1>
        </div>

        {/* CTA Button */}
        <button className={`px-8 py-3 rounded-full font-medium text-lg transition-colors duration-300 mb-16 ${
          isDarkMode 
            ? 'bg-white text-black hover:bg-gray-200' 
            : 'bg-black text-white hover:bg-gray-800'
        }`}>
          VIEW METAMASK WEB
        </button>

        {/* Geometric Shape */}
        <div className="relative">
          <div className="w-64 h-32 relative overflow-hidden">
            {/* Orange geometric shape - simplified version */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-24 bg-gradient-to-br from-orange-400 to-red-600 transform rotate-45 rounded-lg"></div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-x-8">
              <div className="w-24 h-20 bg-gradient-to-br from-orange-500 to-red-700 transform rotate-12 rounded-lg"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Info Icon */}
      <div className="fixed bottom-8 right-8">
        <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-white text-black hover:bg-gray-200' 
            : 'bg-black text-white hover:bg-gray-800'
        }`}>
          <Info size={20} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 border-t p-4 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="flex justify-center space-x-8">
          <button className={`font-medium transition-colors duration-300 hover:opacity-70 ${
            isDarkMode 
              ? 'text-gray-300' 
              : 'text-gray-700'
          }`}>
            Features
          </button>
          <a href="#" className={`font-medium transition-colors duration-300 hover:opacity-70 ${
            isDarkMode 
              ? 'text-gray-300' 
              : 'text-gray-700'
          }`}>Developer</a>
          <a href="#" className={`font-medium transition-colors duration-300 hover:opacity-70 ${
            isDarkMode 
              ? 'text-gray-300' 
              : 'text-gray-700'
          }`}>Crypto</a>
        </div>
      </div>
    </div>
  );
}

export default App;