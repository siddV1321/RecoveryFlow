import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function RecoveryRow({ incident, onPress }) {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'recovered': return { bg: 'bg-[#10B981]/10', text: 'text-[#10B981]', label: 'Recovered' };
      case 'failed': return { bg: 'bg-[#EF4444]/10', text: 'text-[#EF4444]', label: 'Failed' };
      default: return { bg: 'bg-[#F59E0B]/10', text: 'text-[#F59E0B]', label: `Retrying (${incident.attempt})` };
    }
  };

  const statusConfig = getStatusStyle(incident.status);

  return (
    <TouchableOpacity 
      onPress={onPress}
      className="bg-[#12141C] border border-[#1E2235] rounded-xl p-4 mb-3 flex-row justify-between items-center"
      activeOpacity={0.7}
    >
      <View className="flex-1 pr-3">
        <Text className="text-white font-semibold text-base mb-0.5">{incident.customerName}</Text>
        <Text className="text-[#64748B] text-xs font-medium">{incident.product} • ${incident.amount.toFixed(2)}</Text>
        <Text className="text-[#475569] text-[10px] mt-1.5 font-mono">{incident.date}</Text>
      </View>
      
      <View className="items-end">
        <View className={`${statusConfig.bg} px-2.5 py-1 rounded-full mb-1`}>
          <Text className={`${statusConfig.text} text-[11px] font-bold uppercase tracking-wider`}>
            {statusConfig.label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}