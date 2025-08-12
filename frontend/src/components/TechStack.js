import React from 'react';

const TechStack = () => {
  const frameworks = [
    { name: 'Next.js', icon: '⬅️' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'Nuxt', icon: '💚' },
    { name: 'Settings', icon: '⚙️' }
  ];

  const integrations = [
    { name: 'GitHub', icon: '🐙' },
    { name: 'Vercel', icon: '▲' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Supabase', icon: '⚡' },
    { name: 'AI', icon: '🤖' },
    { name: 'Sparkles', icon: '✨' },
    { name: 'Database', icon: '💾' },
    { name: 'Analytics', icon: '📊' },
    { name: 'More', icon: '➕' }
  ];

  return (
    <div className="py-16 text-center">
      {/* Frameworks Section */}
      <div className="mb-12">
        <h3 className="text-lg font-medium text-gray-900 mb-6">
          Frameworks we support
        </h3>
        <div className="flex justify-center items-center space-x-8">
          {frameworks.map((framework, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl hover:bg-gray-200 transition-colors cursor-pointer">
                {framework.icon}
              </div>
              <span className="text-sm text-gray-600">{framework.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Integrations Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-6">
          Integrations we support
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-2xl mx-auto">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl hover:bg-gray-200 transition-colors cursor-pointer"
              title={integration.name}
            >
              {integration.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;