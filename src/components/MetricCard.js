import React from 'react';
import { View, Text } from 'react-native';

export default function MetricCard({ title, value, subtext, colorStyle, isTrendUp }) {
  return (
    <View className="bg-[#12141C] border border-[#1E2235] rounded-2xl p-5 mr-3 w-[170px]">
      <Text className="text-[#64748B] text-xs font-medium mb-2 uppercase tracking-wider">{title}</Text>
      <Text className={`text-2xl font-bold mb-1 ${colorStyle}`}>
        {value}
      </Text>
      <View className="flex-row items-center">
        <Text className="text-[#94A3B8] text-xs">
          {isTrendUp ? '▲ ' : ''}{subtext}
        </Text>
      </View>
    </View>
  );
}