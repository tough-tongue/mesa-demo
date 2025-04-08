# Tough Tongue AI Demo - Project Walkthrough

This document provides a comprehensive walkthrough of the Tough Tongue AI Demo application, a Next.js project built with TypeScript and Tailwind CSS.

## Project Overview

The Tough Tongue AI Demo is an application that allows users to:
1. Create practice scenarios for conversational AI training
2. Interact with an AI conversation partner through an embedded interface

The application helps users improve their communication skills by practicing specific conversation scenarios with an AI that simulates human responses.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/              # API route handlers
│   │   ├── openai/       # OpenAI API integration
│   │   └── tough-tongue/ # Tough Tongue API integration
│   └── page.tsx          # Main application page
├── components/           # React components
│   ├── ConversationDemo.tsx    # Component for AI conversation interface
│   └── ScenarioCreator.tsx     # Component for creating scenarios
├── lib/                  # Utility functions and shared code
└── public/               # Static assets
```

## User Flow

1. User visits the application and sees the "Create Scenario" tab active
2. User enters a scenario description or selects a quick scenario
3. User clicks "Create Scenario" button
4. Application generates scenario details using OpenAI
5. Application creates the scenario in Tough Tongue AI platform
6. User is automatically switched to the "Try Conversation" tab
7. User interacts with the AI through the embedded Tough Tongue interface

## Component Breakdown

### Main Page (app/page.tsx)

The main page acts as the container for the application, handling:
- Tab navigation between "Create Scenario" and "Try Conversation"
- State management for the active tab and scenario ID
- Rendering the appropriate component based on the active tab

```tsx
export default function DemoPage() {
  const [activeTab, setActiveTab] = useState('create');
  const [scenarioId, setScenarioId] = useState<string | null>(null);

  const handleScenarioCreated = (id: string) => {
    setScenarioId(id);
    setActiveTab('conversation');
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Tough Tongue AI Demo</h1>
      
      <TabNavigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        scenarioId={scenarioId} 
      />
      
      <TabContent 
        activeTab={activeTab} 
        scenarioId={scenarioId} 
        onScenarioCreated={handleScenarioCreated} 
      />
    </div>
  );
}
```

### ScenarioCreator Component

This component handles the creation of practice scenarios:
- Custom scenario description input
- Quick scenario selection
- API calls to generate and create the scenario

Key functions:
- `handleQuickScenario`: Sets the topic field to a predefined scenario
- `handleCreateScenario`: Processes the two-step API workflow to create a scenario

```tsx
export function ScenarioCreator({ onScenarioCreated }: ScenarioCreatorProps) {
  // State for scenario topic and loading state
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Predefined scenarios for quick selection
  const quickScenarios = [
    { name: "Job Interview", topic: "Practice answering tough interview questions for a software developer role" },
    { name: "Sales Pitch", topic: "Practice pitching a SaaS product to a potential client" },
    { name: "Performance Review", topic: "Practice having a performance review discussion with an employee" }
  ];

  const handleCreateScenario = async () => {
    // 1. Generate scenario content with OpenAI
    // 2. Create scenario in Tough Tongue
    // 3. Return scenario ID to parent component
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create a Practice Scenario</CardTitle>
      </CardHeader>
      <CardContent>
        <TopicForm topic={topic} setTopic={setTopic} />
        <QuickScenarioButtons scenarios={quickScenarios} onSelect={handleQuickScenario} />
        <CreateButton 
          onClick={handleCreateScenario} 
          isDisabled={!topic || isGenerating} 
          isLoading={isGenerating} 
        />
      </CardContent>
    </Card>
  );
}
```

### ConversationDemo Component

This component provides the interface for the AI conversation:
- Embeds the Tough Tongue AI conversation interface
- Handles camera and microphone permissions
- Displays instructions to the user

```tsx
export function ConversationDemo({ scenarioId }: ConversationDemoProps) {
  // Function to get embed URL
  const getEmbedUrl = (id: string) => {
    return `https://app.toughtongueai.com/embed/${id}?bg=black&skipPrecheck=true`;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Practice Conversation</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="bg-gray-100 p-4">
          <p className="text-sm text-gray-600">
            <strong>Instructions:</strong> This embedded conversation will use your microphone and camera.
            Click "Start" when prompted and begin speaking naturally to the AI.
          </p>
        </div>
        
        <div className="w-full" style={{ minHeight: "700px" }}>
          <iframe
            src={getEmbedUrl(scenarioId)}
            title="Tough Tongue Conversation"
            width="100%"
            height="700px"
            frameBorder="0"
            allow="microphone; camera; display-capture"
            className="w-full h-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}
```

## API Integration

### OpenAI Integration (app/api/openai/generate-scenario/route.ts)

This API route sends the user's scenario description to OpenAI to generate detailed scenario data:
- Uses the o1-mini model
- Creates structured data for the scenario name, description, and AI instructions
- Parses the response into a structured format

```tsx
export async function POST(req: Request) {
  // 1. Extract title and description from request
  // 2. Call OpenAI API to generate scenario details
  // 3. Parse the XML-formatted response
  // 4. Return structured scenario data
}
```

### Tough Tongue Integration (app/api/tough-tongue/scenarios/route.ts)

This API route takes the generated scenario data and creates a new scenario in the Tough Tongue AI platform:
- Sets default values for public access and recording
- Sends the request to the Tough Tongue API
- Returns the created scenario ID

```tsx
export async function POST(req: Request) {
  // 1. Extract scenario data from request
  // 2. Format payload for Tough Tongue API
  // 3. Call Tough Tongue API to create scenario
  // 4. Return scenario ID and details
}
```

## Technical Implementation Details

1. **State Management**: Uses React's useState for local state management
2. **Component Architecture**: Modular components with clear separation of concerns
3. **API Integration**: Server-side API routes to protect API keys
4. **UI Design**: Tailwind CSS for styling with responsive design

## Environment Variables

The application requires the following environment variables:
- `OPENAI_API_KEY`: API key for OpenAI integration
- `TOUGH_TONGUE_API_KEY`: API key for Tough Tongue AI platform

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file with the required API keys
4. Run the development server with `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Next Steps and Enhancements

Potential enhancements for the application:
1. User authentication for saving and retrieving scenarios
2. History of previous conversations
3. Feedback and rating system for conversation quality
4. Additional scenario templates and customization options 