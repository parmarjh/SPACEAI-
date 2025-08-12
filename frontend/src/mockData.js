// Mock data for rocket.new clone
export const mockAppTypes = [
  'Web App',
  'Mobile App', 
  'Internal Tool',
  'Website',
  'Dashboard',
  'Landing page'
];

export const mockFrameworks = [
  { name: 'Next.js', description: 'React framework for production' },
  { name: 'HTML5', description: 'Standard markup language' },
  { name: 'Nuxt', description: 'Vue.js framework' },
  { name: 'Settings', description: 'Configuration options' }
];

export const mockIntegrations = [
  { name: 'GitHub', description: 'Version control platform' },
  { name: 'Vercel', description: 'Deployment platform' },
  { name: 'Figma', description: 'Design collaboration tool' },
  { name: 'Stripe', description: 'Payment processing' },
  { name: 'Supabase', description: 'Backend as a service' },
  { name: 'AI', description: 'Artificial intelligence services' },
  { name: 'Analytics', description: 'Data analytics tools' },
  { name: 'Database', description: 'Data storage solutions' }
];

export const mockPrompts = [
  "Build a task management app with drag and drop functionality",
  "Create a landing page for a SaaS product with pricing tiers", 
  "Design a dashboard for e-commerce analytics",
  "Build a social media app with real-time messaging",
  "Create a portfolio website for a photographer"
];

export const mockGeneratedApps = [
  {
    id: 1,
    type: 'Web App',
    prompt: 'Task management app',
    status: 'completed',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    type: 'Landing page',
    prompt: 'SaaS product landing page',
    status: 'in_progress',
    createdAt: new Date().toISOString()
  }
];

// Mock API responses
export const mockApiResponses = {
  build: {
    success: true,
    message: 'App generated successfully!',
    appId: 'app_123',
    previewUrl: '#'
  },
  attach: {
    success: false,
    message: 'File attachment will be available soon'
  },
  importFigma: {
    success: false,
    message: 'Figma import will be available soon'
  }
};