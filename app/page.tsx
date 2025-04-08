// app/demo/page.tsx
'use client';

import { useState } from 'react';
import { ScenarioCreator } from '@/components/ScenarioCreator';
import { ConversationDemo } from '@/components/ConversationDemo';

const TabNavigation = ({ 
  activeTab, 
  setActiveTab, 
  scenarioId 
}: { 
  activeTab: string; 
  setActiveTab: (tab: string) => void; 
  scenarioId: string | null;
}) => (
  <div className="mb-8">
    <div className="flex border-b border-gray-200">
      <button 
        className={`py-2 px-4 font-medium ${activeTab === 'create' 
          ? "text-blue-600 border-b-2 border-blue-600" 
          : "text-gray-500 hover:text-gray-700"}`}
        onClick={() => setActiveTab('create')}
      >
        Create Scenario
      </button>
      <button 
        className={`py-2 px-4 font-medium ${activeTab === 'conversation' 
          ? "text-blue-600 border-b-2 border-blue-600" 
          : "text-gray-500 hover:text-gray-700"}`}
        onClick={() => scenarioId && setActiveTab('conversation')}
        disabled={!scenarioId}
      >
        Try Conversation
      </button> 
    </div>
  </div>
);

const TabContent = ({
  activeTab,
  scenarioId,
  onScenarioCreated
}: {
  activeTab: string;
  scenarioId: string | null;
  onScenarioCreated: (id: string) => void;
}) => {
  if (activeTab === 'create') {
    return <ScenarioCreator onScenarioCreated={onScenarioCreated} />;
  }
  
  if (activeTab === 'conversation' && scenarioId) {
    return <ConversationDemo scenarioId={scenarioId} />;
  }
  
  return null;
};

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