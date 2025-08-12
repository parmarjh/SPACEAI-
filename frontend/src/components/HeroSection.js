import React, { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { ArrowRight, Paperclip } from 'lucide-react';

const HeroSection = () => {
  const [selectedType, setSelectedType] = useState('Web App');
  const [prompt, setPrompt] = useState('');
  const { toast } = useToast();

  const appTypes = [
    'Web App',
    'Mobile App', 
    'Internal Tool',
    'Website',
    'Dashboard',
    'Landing page'
  ];

  const handleBuild = () => {
    if (!prompt.trim()) {
      toast({
        title: "Please describe your app",
        description: "Tell us what you want to build today",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Building your app!",
      description: `Creating a ${selectedType.toLowerCase()} based on your description...`,
    });
    
    // Mock building functionality
    setTimeout(() => {
      toast({
        title: "App generated successfully!",
        description: "Your app is ready for customization",
      });
    }, 3000);
  };

  const handleAttach = () => {
    toast({
      title: "File attachment",
      description: "Attach feature will be available soon",
    });
  };

  const handleImportFigma = () => {
    toast({
      title: "Figma import",
      description: "Import from Figma will be available soon",
    });
  };

  return (
    <div className="text-center py-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-12">
        What do you want to build today?
      </h1>
      
      {/* App Type Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {appTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedType === type
                ? 'bg-gray-200 text-gray-900 shadow-sm'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Main Input Area */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
          <Textarea
            placeholder="What can Rocket build for you today?"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[200px] text-lg border-none resize-none focus:ring-0 placeholder:text-gray-400"
          />
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost" 
                size="sm"
                onClick={handleAttach}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Paperclip className="w-4 h-4 mr-2" />
                Attach
              </Button>
              
              <Button
                variant="ghost"
                size="sm" 
                onClick={handleImportFigma}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <div className="w-4 h-4 mr-2 bg-orange-500 rounded-sm"></div>
                Import Figma
              </Button>
            </div>
            
            <Button
              onClick={handleBuild}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;