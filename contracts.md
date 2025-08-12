# Rocket.new Clone - Backend Integration Contracts

## API Endpoints

### 1. App Generation
- **POST /api/generate-app**
  - Body: `{ type: string, prompt: string, attachments?: File[] }`
  - Response: `{ success: boolean, appId: string, message: string, previewUrl?: string }`

### 2. File Attachment
- **POST /api/upload-file**
  - Body: `FormData with file`
  - Response: `{ success: boolean, fileId: string, fileName: string, fileUrl: string }`

### 3. Figma Import
- **POST /api/import-figma**
  - Body: `{ figmaUrl: string }`
  - Response: `{ success: boolean, designData: object, message: string }`

### 4. Get User Apps
- **GET /api/user-apps**
  - Response: `{ apps: Array<GeneratedApp> }`

### 5. Get App Details
- **GET /api/apps/:appId**
  - Response: `{ app: GeneratedApp, code: string }`

## Data Models

### GeneratedApp
```javascript
{
  id: string,
  type: string, // 'Web App', 'Mobile App', etc.
  prompt: string,
  status: 'pending' | 'in_progress' | 'completed' | 'failed',
  createdAt: Date,
  updatedAt: Date,
  previewUrl?: string,
  codeUrl?: string,
  attachments?: string[],
  figmaData?: object
}
```

## Current Mock Data (to be replaced)

### mockData.js
- `mockAppTypes` → Will be static reference data
- `mockFrameworks` → Will be static reference data  
- `mockIntegrations` → Will be static reference data
- `mockPrompts` → Will be removed (user generated)
- `mockGeneratedApps` → Will be replaced with database queries
- `mockApiResponses` → Will be replaced with actual API logic

## Frontend Integration Points

### Components to Update
1. **HeroSection.js**
   - Replace mock toast notifications with actual API calls
   - Add file upload handling for attachments
   - Add Figma URL input and validation
   - Add loading states during app generation

2. **New Components Needed**
   - AppPreview component (for generated apps)
   - LoadingSpinner component
   - FileUpload component
   - AppHistory component (user's generated apps)

### State Management
- Add context for user's generated apps
- Add loading states for async operations
- Add error handling for API failures

## Backend Implementation Plan

### Database Collections
1. **generated_apps** - Store user's generated applications
2. **file_uploads** - Store uploaded files metadata
3. **figma_imports** - Store Figma import data

### Features to Implement
1. **App Generation Logic** - Mock AI app generation (return templates)
2. **File Upload Handling** - Store files and return URLs
3. **Figma Integration** - Parse Figma URLs (mock for now)
4. **Template System** - Return pre-built app templates based on type/prompt
5. **Code Generation** - Generate downloadable code packages

### External Integrations (Future)
- OpenAI API for actual app generation
- Figma API for design import
- GitHub API for code repository creation
- Vercel API for deployment

## Testing Strategy
- Test all CRUD operations for generated apps
- Test file upload functionality
- Test frontend-backend integration
- Verify all UI interactions work with real data