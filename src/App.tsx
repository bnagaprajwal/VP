import React from 'react';
import { useState } from 'react';
import { Moon, Info, ChevronDown, X, CreditCard, ArrowUpDown, Coins, Zap, Shield, BookOpen, HelpCircle, MessageCircle, Briefcase, Twitter, Github, Youtube, Instagram, Linkedin, Sparkles, TrendingUp } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [developerOpen, setDeveloperOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-[#F5F1EB] via-orange-50 to-purple-50 text-gray-900'
    }`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${
          isDarkMode ? 'bg-purple-500' : 'bg-orange-300'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 animate-bounce ${
          isDarkMode ? 'bg-blue-500' : 'bg-pink-300'
        }`} style={{ animationDuration: '3s' }}></div>
        <div className={`absolute top-1/2 left-1/4 w-32 h-32 rounded-full opacity-30 animate-ping ${
          isDarkMode ? 'bg-cyan-400' : 'bg-yellow-300'
        }`} style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Header */}
      <div className={`px-6 lg:px-8 pt-6 relative z-50 transform transition-all duration-700 ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
      }`}>
        <header className={`px-6 py-4 rounded-2xl shadow-lg border backdrop-blur-sm transition-all duration-500 hover:shadow-xl ${
          isDarkMode 
            ? 'bg-gray-800/80 border-gray-700 hover:bg-gray-800/90' 
            : 'bg-white/80 border-gray-100 hover:bg-white/90'
        }`}>
          {/* Top Header Bar */}
          <div className="flex items-center justify-between">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg">
                  <div className="w-5 h-5 bg-white rounded-sm transform transition-transform duration-300 group-hover:rotate-45"></div>
                </div>
                <span className={`text-xl font-bold transition-all duration-300 group-hover:scale-105 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>MetaMask</span>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {/* Features Dropdown */}
                <div className="relative">
                  <button 
                    onClick={toggleFeatures}
                    className={`flex items-center space-x-1 font-medium transition-all duration-300 hover:scale-105 hover:opacity-70 ${
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
                    className={`flex items-center space-x-1 font-medium transition-all duration-300 hover:scale-105 hover:opacity-70 ${
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
                <a href="#" className={`font-medium transition-all duration-300 hover:scale-105 hover:opacity-70 ${
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
                className={`p-2 transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Moon size={20} />
              </button>
              <button className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isDarkMode 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}>
                VIEW METAMASK WEB
              </button>
            </div>
          </div>

          {/* Dropdown Content - Inside Header */}
          {(featuresOpen || developerOpen) && (
            <div className="mt-6 pb-2 animate-in slide-in-from-top-2 duration-300">
              {/* Close button */}
              <button 
                onClick={() => {
                  setFeaturesOpen(false);
                  setDeveloperOpen(false);
                }}
                className={`absolute top-6 right-6 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 ${
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
                  <div className="group bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-6 text-white relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">Buy</h3>
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                          <CreditCard size={24} className="group-hover:animate-pulse" />
                        </div>
                      </div>
                      <p className="text-orange-100 mb-4">Turn cash to crypto</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium group-hover:scale-110 transition-transform duration-300">$4,000 USD</span>
                        <TrendingUp size={16} className="opacity-70 group-hover:animate-bounce" />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles size={16} className="animate-pulse" />
                    </div>
                  </div>

                  {/* Earn Card */}
                  <div className="group bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-in fade-in-50 slide-in-from-bottom-4 duration-700" style={{ animationDelay: '100ms' }}>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">Earn</h3>
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                          <Coins size={24} className="group-hover:animate-spin" style={{ animationDuration: '2s' }} />
                        </div>
                      </div>
                      <p className="text-purple-100 mb-4">Receive rewards</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium group-hover:scale-110 transition-transform duration-300">3.00254 ETH</span>
                        <TrendingUp size={16} className="opacity-70 group-hover:animate-bounce" />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles size={16} className="animate-pulse" />
                    </div>
                  </div>

                  {/* Swaps Card */}
                  <div className="group bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-in fade-in-50 slide-in-from-bottom-4 duration-700" style={{ animationDelay: '200ms' }}>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">Swaps</h3>
                        <ArrowUpDown size={24} className="group-hover:rotate-180 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <p className="text-green-100 mb-4">Exchange any token</p>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg p-2 group-hover:bg-opacity-30 group-hover:scale-105 transition-all duration-300">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">$</div>
                          <span className="text-sm">USD Coin</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg p-2 group-hover:bg-opacity-30 group-hover:scale-105 transition-all duration-300">
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">Ξ</div>
                          <span className="text-sm">Ethereum</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Snaps Card */}
                  <div className="group bg-gradient-to-br from-indigo-500 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-in fade-in-50 slide-in-from-bottom-4 duration-700" style={{ animationDelay: '300ms' }}>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">Snaps</h3>
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                          <Zap size={24} className="group-hover:animate-pulse group-hover:text-yellow-300" />
                        </div>
                      </div>
                      <p className="text-indigo-100">Enhance your wallet with third-party built features</p>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles size={16} className="animate-pulse" />
                    </div>
                  </div>

                  {/* Bridge Card */}
                  <div className="group bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-in fade-in-50 slide-in-from-bottom-4 duration-700" style={{ animationDelay: '400ms' }}>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">Bridge</h3>
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                          <Shield size={24} className="group-hover:animate-pulse" />
                        </div>
                      </div>
                      <p className="text-cyan-100">Move tokens between networks</p>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles size={16} className="animate-pulse" />
                    </div>
                  </div>

                  {/* Card Feature */}
                  <div className="group bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-6 text-white relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-in fade-in-50 slide-in-from-bottom-4 duration-700" style={{ animationDelay: '500ms' }}>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">Card</h3>
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                          <CreditCard size={24} className="group-hover:animate-pulse" />
                        </div>
                      </div>
                      <p className="text-pink-100">Spend crypto for daily purchases</p>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles size={16} className="animate-pulse" />
                    </div>
                  </div>
                </div>
              )}

              {developerOpen && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Documentation Card */}
                  <div className="group bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                          <BookOpen size={32} className="group-hover:animate-pulse" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">Documentation</h3>
                          <p className="text-blue-100">Complete developer guides and API references</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles size={20} className="animate-pulse" />
                    </div>
                  </div>

                  {/* SDK Card */}
                  <div className="group bg-gradient-to-br from-green-500 to-emerald-700 rounded-2xl p-8 text-white relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-in fade-in-50 slide-in-from-bottom-4 duration-700" style={{ animationDelay: '100ms' }}>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                          <Briefcase size={32} className="group-hover:animate-pulse" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">SDK</h3>
                          <p className="text-green-100">Development toolkit and libraries</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles size={20} className="animate-pulse" />
                    </div>
                  </div>

                  {/* API Card */}
                  <div className="group bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8 text-white relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-in fade-in-50 slide-in-from-bottom-4 duration-700" style={{ animationDelay: '200ms' }}>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                          <Zap size={32} className="group-hover:animate-pulse group-hover:text-yellow-300" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">API</h3>
                          <p className="text-purple-100">Integration endpoints and webhooks</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles size={20} className="animate-pulse" />
                    </div>
                  </div>

                  {/* Community Card */}
                  <div className="group bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-in fade-in-50 slide-in-from-bottom-4 duration-700" style={{ animationDelay: '300ms' }}>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                          <MessageCircle size={32} className="group-hover:animate-pulse" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">Community</h3>
                          <p className="text-orange-100">Developer support and forums</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles size={20} className="animate-pulse" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </header>
      </div>

      {/* Main Content */}
      <main className={`flex flex-col items-center justify-center px-6 py-16 lg:py-24 relative z-10 transform transition-all duration-1000 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Hero Text */}
        <div className="text-center mb-16 relative">
          <h1 className={`metamask-font text-6xl lg:text-8xl xl:text-9xl leading-none tracking-tight transition-all duration-500 hover:scale-105 cursor-default ${
            isDarkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#3D065F] via-purple-600 to-orange-500'
          }`}>
            YOUR HOME
            <br />
            IN WEB3
          </h1>
          {/* Floating elements around text */}
          <div className="absolute -top-8 -left-8 opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
            <Sparkles size={24} className={isDarkMode ? 'text-purple-400' : 'text-orange-400'} />
          </div>
          <div className="absolute -top-4 -right-12 opacity-40 animate-pulse" style={{ animationDelay: '2s' }}>
            <Zap size={20} className={isDarkMode ? 'text-cyan-400' : 'text-purple-500'} />
          </div>
          <div className="absolute -bottom-6 left-12 opacity-30 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
            <Coins size={18} className={isDarkMode ? 'text-pink-400' : 'text-orange-400'} />
          </div>
        </div>

        {/* CTA Button */}
        <button className={`px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 mb-16 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-1 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white' 
            : 'bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black'
        }`}>
          VIEW METAMASK WEB
        </button>

        {/* Geometric Shape */}
        <div className="relative animate-in fade-in-50 slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '500ms' }}>
          <div className="w-64 h-32 relative overflow-hidden transform hover:scale-110 transition-transform duration-500">
            {/* Orange geometric shape - simplified version */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-pulse">
              <div className="w-32 h-24 bg-gradient-to-br from-orange-400 to-red-600 transform rotate-45 rounded-lg shadow-2xl hover:shadow-orange-500/50 transition-shadow duration-300"></div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-x-8 animate-pulse" style={{ animationDelay: '1s' }}>
              <div className="w-24 h-20 bg-gradient-to-br from-orange-500 to-red-700 transform rotate-12 rounded-lg shadow-xl hover:shadow-red-500/50 transition-shadow duration-300"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Info Icon */}
      <div className="fixed bottom-8 right-8">
        <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl ${
          isDarkMode 
            ? 'bg-gradient-to-br from-white to-gray-100 text-black hover:from-gray-100 hover:to-white' 
            : 'bg-gradient-to-br from-black to-gray-800 text-white hover:from-gray-800 hover:to-black'
        }`}>
          <Info size={20} className="hover:animate-pulse" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 border-t p-4 backdrop-blur-sm transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-800/80 border-gray-700' 
          : 'bg-white/80 border-gray-200'
      }`}>
        <div className="flex justify-center space-x-8">
          <button className={`font-medium transition-all duration-300 hover:scale-105 hover:opacity-70 ${
            isDarkMode 
              ? 'text-gray-300' 
              : 'text-gray-700'
          }`}>
            Features
          </button>
          <a href="#" className={`font-medium transition-all duration-300 hover:scale-105 hover:opacity-70 ${
            isDarkMode 
              ? 'text-gray-300' 
              : 'text-gray-700'
          }`}>Developer</a>
          <a href="#" className={`font-medium transition-all duration-300 hover:scale-105 hover:opacity-70 ${
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