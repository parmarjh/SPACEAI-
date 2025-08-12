import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      title: 'Prompt',
      description: 'Ask space.AI in your natural language or give requirements. Or import Figma URL/file to convert.',
      icon: '💬'
    },
    {
      title: 'Develop', 
      description: 'space.AI will generate stunning and well researched website/app or convert your design into code.',
      icon: '⚡'
    },
    {
      title: 'Iterate',
      description: 'Customise your app - iterate in your natural language or make changes to code via console.',
      icon: '🔄'
    },
    {
      title: 'Deploy',
      description: 'Download your code, deploy on web, or push to GitHub as you wish and take it forward.',
      icon: '🚀'
    }
  ];

  return (
    <div className="py-16">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        {steps.map((step, index) => (
          <React.Fragment key={step.title}>
            <div className="text-center max-w-xs">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
            
            {index < steps.length - 1 && (
              <ArrowRight className="hidden md:block w-6 h-6 text-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;