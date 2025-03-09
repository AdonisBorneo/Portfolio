import React from 'react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold text-primary">My Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-primary">About</a>
              <a href="#projects" className="hover:text-primary">Projects</a>
              <a href="#skills" className="hover:text-primary">Skills</a>
              <a href="#contact" className="hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              Hi, I'm [Your Name]
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              A passionate developer creating modern web experiences
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300">
                I'm a full-stack developer with expertise in building modern web applications.
                I specialize in React, TypeScript, and Node.js, with a strong focus on creating
                clean, maintainable code and delightful user experiences.
              </p>
            </div>
            <div>
              {/* Placeholder for image or additional content */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Project Title</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Brief description of the project and technologies used.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">Live Demo</a>
                <a href="#" className="text-primary hover:text-primary/80">Source Code</a>
              </div>
            </div>
            {/* Repeat project cards as needed */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Skill Items */}
            <div className="text-center">
              <div className="text-4xl mb-2">💻</div>
              <h3 className="font-bold">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-300">React, TypeScript, Tailwind</p>
            </div>
            {/* Repeat skill items as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-primary focus:border-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-primary focus:border-primary"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-primary focus:border-primary"
              ></textarea>
              <button
                type="submit"
                className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-gray-900">
        <div className="text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} [Your Name]. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
