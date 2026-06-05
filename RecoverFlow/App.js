import React, { createContext, useState, useContext } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import Dashboard from './src/screens/Dashboard';
import Recoveries from './src/screens/Recoveries';
import Settings from './src/screens/Settings';

// Global Simulation State Context
export const AppContext = createContext();

export default function App() {
  const [isDemoMode, setIsDemoMode] = useState(true);
  const [currentTab, setCurrentTab] = useState('Dashboard');
  const [apiKeys, setApiKeys] = useState({ stripe: '', whatsapp: '', twilio: '' });

  return (
    <AppContext.Provider value={{ isDemoMode, setIsDemoMode, currentTab, setCurrentTab, apiKeys, setApiKeys }}>
      <SafeAreaView className="flex-1 bg-[#090A0F]">
        <StatusBar barStyle="light-content" backgroundColor="#090A0F" />
        
        {/* Main Application Router View */}
        <View className="flex-1">
          {currentTab === 'Dashboard' && <Dashboard />}
          {currentTab === 'Recoveries' && <Recoveries />}
          {currentTab === 'Settings' && <Settings />}
        </View>

        {/* Global Bottom Tab Bar Navigation System */}
        <View className="flex-row h-20 bg-[#12141C] border-t border-[#1E2235] justify-around items-center pb-4 px-2">
          <TouchableOpacity 
            onPress={() => setCurrentTab('Dashboard')}
            className="items-center justify-center flex-1 py-2"
            activeOpacity={0.7}
          >
            <Text className={`text-xs font-semibold ${currentTab === 'Dashboard' ? 'text-[#10B981]' : 'text-[#64748B]'}`}>
              📊 Dashboard
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => setCurrentTab('Recoveries')}
            className="items-center justify-center flex-1 py-2"
            activeOpacity={0.7}
          >
            <Text className={`text-xs font-semibold ${currentTab === 'Recoveries' ? 'text-[#10B981]' : 'text-[#64748B]'}`}>
              ⚡ Recoveries
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => setCurrentTab('Settings')}
            className="items-center justify-center flex-1 py-2"
            activeOpacity={0.7}
          >
            <Text className={`text-xs font-semibold ${currentTab === 'Settings' ? 'text-[#10B981]' : 'text-[#64748B]'}`}>
              ⚙️ Settings
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </AppContext.Provider>
  );
}