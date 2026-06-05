import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppContext } from '../../App';

export default function EmptyState() {
  const { setCurrentTab } = useContext(AppContext);

  return (
    <View className="flex-1 justify-center items-center px-6 py-12">
      <View className="w-16 h-16 bg-[#1E2235] rounded-full justify-center items-center mb-4">
        <Text className="text-2xl">🔒</Text>
      </View>
      <Text className="text-white text-xl font-bold text-center mb-2">No Live Webhooks Connected</Text>
      <Text className="text-[#64748B] text-sm text-center mb-8 max-w-sm">
        Your production environment is completely empty. Connect your Stripe billing pipeline to start actively tracking card failures.
      </Text>
      <TouchableOpacity 
        onPress={() => setCurrentTab('Settings')}
        className="bg-[#10B981] px-6 py-3 rounded-xl w-full max-w-xs items-center"
        activeOpacity={0.8}
      >
        <Text className="text-[#090A0F] font-bold text-base">Setup Gateway Credentials</Text>
      </TouchableOpacity>
    </View>
  );
}