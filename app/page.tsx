export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-wooden-black/95 backdrop-blur-sm border-b border-wooden-black-lighter">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-wooden-brown rounded-lg flex items-center justify-center">
                <span className="text-wooden-black font-bold text-xl">DL</span>
              </div>
              <span className="text-wooden-brown-lighter font-bold text-xl">DeepLearners</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-wooden-brown-lighter hover:text-wooden-brown transition-colors">About</a>
              <a href="#services" className="text-wooden-brown-lighter hover:text-wooden-brown transition-colors">Services</a>
              <a href="#videos" className="text-wooden-brown-lighter hover:text-wooden-brown transition-colors">Videos</a>
              <a href="#sessions" className="text-wooden-brown-lighter hover:text-wooden-brown transition-colors">1-on-1 Sessions</a>
              <a href="#reviews" className="text-wooden-brown-lighter hover:text-wooden-brown transition-colors">Reviews</a>
              <a href="#contact" className="bg-wooden-brown text-wooden-black px-6 py-2 rounded-lg font-semibold hover:bg-wooden-brown-light transition-all">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-wooden-brown-lighter">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Unique Advanced Layout */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-wooden-brown opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-wooden-brown-dark opacity-10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content with diagonal design */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h1 className="text-6xl lg:text-8xl font-bold text-wooden-black mb-4">
                  DeepLearners
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold text-wooden-black">
                  Agentic AI & Data Science
                </h2>
              </div>

              <div className="bg-wooden-brown-lighter/90 backdrop-blur-sm rounded-xl p-6 border-2 border-wooden-brown">
                <p className="text-lg text-wooden-black-dark leading-relaxed">
                  <span className="font-bold text-wooden-black text-xl block mb-2">Founded & Led by Ahmad Dawood</span>
                  CEO & Chief Instructor | Expert in Agentic AI & Machine Learning
                </p>
              </div>

              <p className="text-xl text-wooden-black-soft leading-relaxed max-w-xl">
                Master the future of AI with expert instruction in Data Science, Machine Learning, and Agentic AI. Remote teaching that adapts to your learning pace.
              </p>

              <div className="flex gap-4 pt-4">
                <a
                  href="#contact"
                  className="bg-wooden-black text-wooden-brown-lighter px-8 py-4 rounded-lg font-semibold hover:bg-wooden-black-light transition-all transform hover:scale-105 shadow-lg"
                >
                  Get Started
                </a>
                <a
                  href="#services"
                  className="bg-transparent text-wooden-black px-8 py-4 rounded-lg font-semibold hover:bg-wooden-brown-lighter hover:text-wooden-black transition-all border-2 border-wooden-black"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right side - Decorative card design */}
            <div className="relative">
              <div className="bg-wooden-brown-dark rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform border-2 border-wooden-brown">
                <div className="bg-wooden-brown-lighter rounded-xl p-6 -rotate-3">
                  <div className="space-y-4 text-wooden-black">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-wooden-black rounded-lg flex items-center justify-center text-wooden-brown font-bold text-xl">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold">Agentic AI</h3>
                        <p className="text-sm text-wooden-black-soft">Advanced AI Systems</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-wooden-black rounded-lg flex items-center justify-center text-wooden-brown font-bold text-xl">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold">Data Science</h3>
                        <p className="text-sm text-wooden-black-soft">Practical Applications</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-wooden-black rounded-lg flex items-center justify-center text-wooden-brown font-bold text-xl">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold">Personal Mentorship</h3>
                        <p className="text-sm text-wooden-black-soft">Hundreds of Sessions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Experience Section */}
      <section id="about" className="py-20 bg-golden-wood-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-black-primary mb-8 text-center">
              About Ahmad Dawood
              <span className="block text-2xl text-black-soft mt-2 font-normal">CEO & Founder of DeepLearners</span>
            </h2>

            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-black-primary mb-4">Qualifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden-wood-dark rounded-full mt-2"></div>
                      <p className="text-black-soft">
                        <span className="font-semibold text-black-primary">Bachelor of Science</span> in Computer Science
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden-wood-dark rounded-full mt-2"></div>
                      <p className="text-black-soft">
                        Major in <span className="font-semibold text-black-primary">Data Science</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black-primary mb-4">Experience</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-golden-wood-dark pl-4">
                      <h4 className="font-bold text-black-primary">Data Science Instructor</h4>
                      <p className="text-black-soft">CIT</p>
                    </div>
                    <div className="border-l-4 border-golden-wood-dark pl-4">
                      <h4 className="font-bold text-black-primary">AI Compliance Lecturer</h4>
                      <p className="text-black-soft">Lagren Academy</p>
                    </div>
                    <div className="border-l-4 border-golden-wood-dark pl-4">
                      <h4 className="font-bold text-black-primary">Personal Coaching</h4>
                      <p className="text-black-soft">Hundreds of 1-on-1 lectures delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-wooden-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-wooden-brown-lighter mb-12 text-center">
            DeepLearners Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-wooden-brown-lighter rounded-xl p-8 hover:transform hover:scale-105 transition-all shadow-lg border-4 border-wooden-brown">
              <div className="w-16 h-16 bg-wooden-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-wooden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-wooden-black mb-4">Agentic AI</h3>
              <p className="text-wooden-black-soft">
                Master the art of building intelligent AI agents that can reason, plan, and act autonomously using cutting-edge techniques.
              </p>
            </div>

            <div className="bg-wooden-brown-lighter rounded-xl p-8 hover:transform hover:scale-105 transition-all shadow-lg border-4 border-wooden-brown">
              <div className="w-16 h-16 bg-wooden-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-wooden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-wooden-black mb-4">Machine Learning</h3>
              <p className="text-wooden-black-soft">
                Master machine learning algorithms, model training, evaluation techniques, and practical implementation strategies.
              </p>
            </div>

            <div className="bg-wooden-brown-lighter rounded-xl p-8 hover:transform hover:scale-105 transition-all shadow-lg border-4 border-wooden-brown">
              <div className="w-16 h-16 bg-wooden-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-wooden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-wooden-black mb-4">Data Science</h3>
              <p className="text-wooden-black-soft">
                From fundamentals to advanced analytics, master the tools and techniques of modern data science and ML.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section id="videos" className="py-20 bg-wooden-brown-lighter/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-wooden-black mb-4">
              YouTube Lectures
            </h2>
            <p className="text-wooden-black-soft text-lg max-w-2xl mx-auto">
              Watch my comprehensive lectures on Data Science, Machine Learning, and Agentic AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* YouTube Video 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105 border-2 border-wooden-brown">
              <div className="aspect-video bg-wooden-black-lighter rounded-t-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/8J2VrpWGT7g"
                  title="3 Parametric NonParametric Models"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-wooden-black mb-2 line-clamp-2">3 Parametric NonParametric Models - Tailored Lecture for General Audience</h3>
                <p className="text-sm text-wooden-black-soft line-clamp-2">Comprehensive explanation of parametric and non-parametric statistical models designed for general understanding</p>
              </div>
            </div>

            {/* YouTube Video 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105 border-2 border-wooden-brown">
              <div className="aspect-video bg-wooden-black-lighter rounded-t-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Be6pAi3bLtU"
                  title="9 overfitting"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-wooden-black mb-2 line-clamp-2">9 Overfitting</h3>
                <p className="text-sm text-wooden-black-soft line-clamp-2">Understanding overfitting in machine learning models and techniques to prevent it</p>
              </div>
            </div>

            {/* YouTube Video 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105 border-2 border-wooden-brown">
              <div className="aspect-video bg-wooden-black-lighter rounded-t-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Sa4t9ONvU4k"
                  title="11 Hyperparameters part1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-wooden-black mb-2 line-clamp-2">11 Hyperparameters Part 1</h3>
                <p className="text-sm text-wooden-black-soft line-clamp-2">Deep dive into hyperparameter tuning and optimization strategies for machine learning models</p>
              </div>
            </div>

            {/* YouTube Video 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105 border-2 border-wooden-brown">
              <div className="aspect-video bg-wooden-black-lighter rounded-t-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/DuqJKgs9QO4"
                  title="Gradient Descent for Linear Regression"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-wooden-black mb-2 line-clamp-2">Gradient Descent for Linear Regression</h3>
                <p className="text-sm text-wooden-black-soft line-clamp-2">Complete walkthrough of gradient descent optimization algorithm for linear regression models</p>
              </div>
            </div>

            {/* YouTube Video 5 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105 border-2 border-wooden-brown">
              <div className="aspect-video bg-wooden-black-lighter rounded-t-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/E11U7FUVzYA"
                  title="Evaluation Metric for Regression"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-wooden-black mb-2 line-clamp-2">Evaluation Metric for Regression</h3>
                <p className="text-sm text-wooden-black-soft line-clamp-2">Essential metrics for evaluating regression models including MSE, RMSE, MAE, and R-squared</p>
              </div>
            </div>

            {/* YouTube Video 6 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105 border-2 border-wooden-brown">
              <div className="aspect-video bg-wooden-black-lighter rounded-t-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/eXUZSNb7260"
                  title="Lasso vs Ridge Regularization"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-wooden-black mb-2 line-clamp-2">Lasso vs Ridge Regularization: A Comprehensive Comparison</h3>
                <p className="text-sm text-wooden-black-soft line-clamp-2">Detailed comparison of L1 and L2 regularization techniques and when to use each approach</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="relative inline-block group">
              <button className="inline-flex items-center gap-3 bg-wooden-black text-wooden-brown-lighter px-10 py-5 rounded-xl font-bold text-lg hover:bg-wooden-black-light transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-wooden-brown">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch Full Playlists on YouTube
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-2xl border-2 border-wooden-brown opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <h3 className="text-lg font-bold text-wooden-black mb-3 border-b-2 border-wooden-brown pb-2">Available Playlists</h3>

                  {/* Playlist 1 */}
                  <a
                    href="https://www.youtube.com/playlist?list=PLaKNY0_6c3C1OZ73d8_mVaxFznmwTiEKE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-wooden-brown-lighter/30 transition-all group/item"
                  >
                    <svg className="w-6 h-6 text-wooden-brown flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <div className="flex-1">
                      <p className="font-semibold text-wooden-black group-hover/item:text-wooden-brown transition-colors">Main Playlist</p>
                      <p className="text-xs text-wooden-black-soft">Complete lecture series</p>
                    </div>
                    <svg className="w-5 h-5 text-wooden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* Playlist 2 */}
                  <a
                    href="https://www.youtube.com/playlist?list=PLaKNY0_6c3C3J9u8091HEot3C6HmEbbBT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-wooden-brown-lighter/30 transition-all group/item mt-2"
                  >
                    <svg className="w-6 h-6 text-wooden-brown flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <div className="flex-1">
                      <p className="font-semibold text-wooden-black group-hover/item:text-wooden-brown transition-colors">Advanced Topics</p>
                      <p className="text-xs text-wooden-black-soft">Specialized ML & AI content</p>
                    </div>
                    <svg className="w-5 h-5 text-wooden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1-on-1 Sessions Section */}
      <section id="sessions" className="py-20 bg-wooden-brown-lighter/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-wooden-black mb-4">
              1-on-1 Client Sessions
            </h2>
            <p className="text-wooden-black-soft text-lg max-w-2xl mx-auto">
              Exclusive recordings from personalized coaching sessions with real clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Google Drive Video 1 - Tutorial with Bana */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105 border-2 border-wooden-brown">
              <div className="aspect-video bg-wooden-black-lighter rounded-t-2xl overflow-hidden">
                <iframe
                  src="https://drive.google.com/file/d/12ZGEf48_rC1jjfzquZs0uM9w9b8eC3kV/preview"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-wooden-black mb-2 line-clamp-2">Machine Learning Fundamentals Session</h3>
                <p className="text-sm text-wooden-black-soft line-clamp-2">Personalized tutorial covering core ML concepts and practical applications</p>
              </div>
            </div>

            {/* Google Drive Video 2 - Tutorial with Glen */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105 border-2 border-wooden-brown">
              <div className="aspect-video bg-wooden-black-lighter rounded-t-2xl overflow-hidden">
                <iframe
                  src="https://drive.google.com/file/d/1Bz4ILEks_36dxAcwy5F76T4jOd9mdpGr/preview"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-wooden-black mb-2 line-clamp-2">ML Challenges: Overfitting & Underfitting Deep Dive</h3>
                <p className="text-sm text-wooden-black-soft line-clamp-2">Comprehensive session on model challenges, regularization techniques, and cross-validation strategies</p>
              </div>
            </div>

            {/* Google Drive Video 3 - Lagren Academy May */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105 border-2 border-wooden-brown">
              <div className="aspect-video bg-wooden-black-lighter rounded-t-2xl overflow-hidden">
                <iframe
                  src="https://drive.google.com/file/d/18_q0pxIAtyDsKfQFmSTyiCzUoW26WMmY/preview"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-wooden-black mb-2 line-clamp-2">AI Compliance & Ethics - Lagren Academy</h3>
                <p className="text-sm text-wooden-black-soft line-clamp-2">Professional training session on AI compliance, ethics, and regulatory frameworks (May 2025)</p>
              </div>
            </div>

            {/* Google Drive Video 4 - Lagren Academy June */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105 border-2 border-wooden-brown">
              <div className="aspect-video bg-wooden-black-lighter rounded-t-2xl overflow-hidden">
                <iframe
                  src="https://drive.google.com/file/d/1j5p4L-I2gJokkL0mIlXNkrXbzHF3n7VJ/preview"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-wooden-black mb-2 line-clamp-2">Advanced AI Applications - Lagren Academy</h3>
                <p className="text-sm text-wooden-black-soft line-clamp-2">Deep dive into advanced AI applications and industry best practices (June 2025)</p>
              </div>
            </div>

            {/* Google Drive Video 5 - Lagren Academy July 6 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105 border-2 border-wooden-brown">
              <div className="aspect-video bg-wooden-black-lighter rounded-t-2xl overflow-hidden">
                <iframe
                  src="https://drive.google.com/file/d/1LU2iOYo7ULleRUvKHGpAhh2msBhjQC5X/preview"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-wooden-black mb-2 line-clamp-2">AI Implementation Strategies - Lagren Academy</h3>
                <p className="text-sm text-wooden-black-soft line-clamp-2">Practical strategies for implementing AI solutions in real-world scenarios (July 2025)</p>
              </div>
            </div>

            {/* Google Drive Video 6 - Lagren Academy July 13 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:transform hover:scale-105 border-2 border-wooden-brown">
              <div className="aspect-video bg-wooden-black-lighter rounded-t-2xl overflow-hidden">
                <iframe
                  src="https://drive.google.com/file/d/1caR5OmRIEidplEEnr3VOsutL-ZSPDkfR/preview"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-wooden-black mb-2 line-clamp-2">AI Model Optimization - Lagren Academy</h3>
                <p className="text-sm text-wooden-black-soft line-clamp-2">Advanced techniques for optimizing AI models and improving performance (July 2025)</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-wooden-black-soft text-lg mb-6">
              Want personalized 1-on-1 sessions? Contact me to schedule your learning journey!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-wooden-black text-wooden-brown-lighter px-10 py-5 rounded-xl font-bold text-lg hover:bg-wooden-black-light transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-wooden-brown"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Session
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-wooden-brown-lighter/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-wooden-black mb-4">
              Client Reviews
            </h2>
            <p className="text-wooden-black-soft text-lg">
              See what my clients say about their learning experience
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-wooden-brown text-2xl">⭐</span>
                ))}
              </div>
              <span className="text-wooden-black font-bold text-xl">5.0/5</span>
              <span className="text-wooden-black-soft">(26 reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Review 1 - tech_ai_007 (Only one from this client) */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border-2 border-wooden-brown">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-wooden-black">tech_ai_007</h3>
                <span className="text-xs bg-wooden-brown text-wooden-black px-2 py-1 rounded-full font-semibold">Repeat Client</span>
              </div>
              <p className="text-xs text-wooden-black-soft mb-3">🇦🇺 Australia</p>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-wooden-brown text-lg">⭐</span>
                ))}
              </div>
              <p className="text-wooden-black-soft italic leading-relaxed line-clamp-4">
                "I am thoroughly impressed by the profound understanding demonstrated by daudsahi. After reviewing the code, it is evident that daudsahi possesses extraordinary expertise in the field of data science. I look forward to the possibility of future collaborations and confidently recommend daudsahi for any project."
              </p>
            </div>

            {/* Review 2 - bana_maher */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border-2 border-wooden-brown">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-wooden-black">bana_maher</h3>
              </div>
              <p className="text-xs text-wooden-black-soft mb-3">🇲🇾 Malaysia</p>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-wooden-brown text-lg">⭐</span>
                ))}
              </div>
              <p className="text-wooden-black-soft italic leading-relaxed line-clamp-4">
                "Exceeded my expectations. He is super good in explaining and delivered all what I wanted. He organized my thoughts and organized my way of working in my project in a flawless way. Got to understand terms that I was confused about. Will complete my lessons with him until I gain strength and knowledge. Was super knowledgeable class. Satisfied client"
              </p>
            </div>

            {/* Review 3 - alexander9494 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border-2 border-wooden-brown">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-wooden-black">alexander9494</h3>
                <span className="text-xs bg-wooden-brown text-wooden-black px-2 py-1 rounded-full font-semibold">Repeat Client</span>
              </div>
              <p className="text-xs text-wooden-black-soft mb-3">🇩🇪 Germany</p>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-wooden-brown text-lg">⭐</span>
                ))}
              </div>
              <p className="text-wooden-black-soft italic leading-relaxed line-clamp-4">
                "One of the best coaching sessions on machine learning. He knows quickly where you are and explains it on this level, so he makes it very understandable for everybody. I would book a coaching with him again at any time."
              </p>
            </div>

            {/* Review 4 - outsourced2015 #1 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border-2 border-wooden-brown">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-wooden-black">outsourced2015</h3>
                <span className="text-xs bg-wooden-brown text-wooden-black px-2 py-1 rounded-full font-semibold">Repeat Client</span>
              </div>
              <p className="text-xs text-wooden-black-soft mb-3">🇺🇸 United States</p>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-wooden-brown text-lg">⭐</span>
                ))}
              </div>
              <p className="text-wooden-black-soft italic leading-relaxed line-clamp-4">
                "Good tutoring pace. Unsupervised learning: very knowledgeable about the concepts of K-Means and hierarchical clustering."
              </p>
            </div>

            {/* Review 5 - outsourced2015 #2 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border-2 border-wooden-brown">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-wooden-black">outsourced2015</h3>
                <span className="text-xs bg-wooden-brown text-wooden-black px-2 py-1 rounded-full font-semibold">Repeat Client</span>
              </div>
              <p className="text-xs text-wooden-black-soft mb-3">🇺🇸 United States</p>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-wooden-brown text-lg">⭐</span>
                ))}
              </div>
              <p className="text-wooden-black-soft italic leading-relaxed line-clamp-4">
                "very good work on kmeans on the project especially the use of scaling to ensure that one of the independent variables does not train with overfitting and others underfitting."
              </p>
            </div>

            {/* Review 6 - outsourced2015 #3 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border-2 border-wooden-brown">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-wooden-black">outsourced2015</h3>
                <span className="text-xs bg-wooden-brown text-wooden-black px-2 py-1 rounded-full font-semibold">Repeat Client</span>
              </div>
              <p className="text-xs text-wooden-black-soft mb-3">🇺🇸 United States</p>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-wooden-brown text-lg">⭐</span>
                ))}
              </div>
              <p className="text-wooden-black-soft italic leading-relaxed line-clamp-4">
                "He is organized with his lessons and solid on the AI/Data Science math."
              </p>
            </div>

            {/* Review 7 - wildmangoose */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border-2 border-wooden-brown">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-wooden-black">wildmangoose</h3>
              </div>
              <p className="text-xs text-wooden-black-soft mb-3">🇳🇬 Nigeria</p>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-wooden-brown text-lg">⭐</span>
                ))}
              </div>
              <p className="text-wooden-black-soft italic leading-relaxed">
                "very committed and passionate about his tutoring"
              </p>
            </div>

            {/* Review 8 - elairproperties */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border-2 border-wooden-brown">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-wooden-black">elairproperties</h3>
                <span className="text-xs bg-wooden-brown text-wooden-black px-2 py-1 rounded-full font-semibold">Repeat Client</span>
              </div>
              <p className="text-xs text-wooden-black-soft mb-3">🇺🇸 United States</p>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-wooden-brown text-lg">⭐</span>
                ))}
              </div>
              <p className="text-wooden-black-soft italic leading-relaxed">
                "This was a great intro session with Ahmad, I'm looking forward to working with you"
              </p>
            </div>

            {/* Review 9 - jav_15 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border-2 border-wooden-brown">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-bold text-wooden-black">jav_15</h3>
              </div>
              <p className="text-xs text-wooden-black-soft mb-3">🇺🇸 United States</p>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-wooden-brown text-lg">⭐</span>
                ))}
              </div>
              <p className="text-wooden-black-soft italic leading-relaxed">
                "very good"
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.fiverr.com/daudsahi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-wooden-black text-wooden-brown-lighter px-10 py-5 rounded-xl font-bold text-lg hover:bg-wooden-black-light transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-wooden-brown"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 12l-4.61 7H16l-4-7V5h11v7zM9 5H0v7h9V5zm0 8H0v6h9v-6z"/>
              </svg>
              View All 26 Reviews on Fiverr
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-wooden-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-wooden-brown-lighter mb-12 text-center">
            Get In Touch
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="mailto:ahmaddawoodsahi225@gmail.com"
                className="bg-wooden-brown-lighter rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all shadow-lg border-2 border-wooden-brown"
              >
                <div className="w-16 h-16 bg-wooden-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-wooden-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-wooden-black mb-2">Email</h3>
                <p className="text-wooden-black-soft text-sm break-words">ahmaddawoodsahi225@gmail.com</p>
              </a>

              <a
                href="https://www.youtube.com/@ahmaddawood_deeplearners"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-wooden-brown-lighter rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all shadow-lg border-2 border-wooden-brown"
              >
                <div className="w-16 h-16 bg-wooden-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-wooden-brown" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-wooden-black mb-2">YouTube</h3>
                <p className="text-wooden-black-soft">@ahmaddawood_deeplearners</p>
              </a>

              <a
                href="https://www.linkedin.com/in/ahmad-dawood-202753216"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-wooden-brown-lighter rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all shadow-lg border-2 border-wooden-brown"
              >
                <div className="w-16 h-16 bg-wooden-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-wooden-brown" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-wooden-black mb-2">LinkedIn</h3>
                <p className="text-wooden-black-soft">Connect with Ahmad Dawood</p>
              </a>
            </div>

            <div className="mt-12 text-center">
              <p className="text-wooden-brown-lighter text-lg">
                Ready to start your learning journey? Reach out today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wooden-black-dark py-12 border-t-2 border-wooden-brown">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-wooden-brown">DeepLearners</h3>
            <p className="text-wooden-brown-lighter">
              Founded and led by Ahmad Dawood | CEO & Chief Instructor
            </p>
            <p className="text-wooden-brown-lighter text-sm">
              Expert instruction in Data Science, Machine Learning, and Agentic AI
            </p>
            <div className="pt-4 border-t border-wooden-black-lighter mt-6">
              <p className="text-wooden-brown-lighter text-sm">
                © 2024 DeepLearners. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
