import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { AppContext } from '../../App';
import MetricCard from '../components/MetricCard';
import EmptyState from '../components/EmptyState';
import { MOCK_CHART_DATA } from '../constants/mockData';

const { width } = Dimensions.get('window');

export default function Dashboard() {
  const { isDemoMode, setIsDemoMode } = useContext(AppContext);

  // Performance calculations aggregated dynamically for visual validation
  const totalRecovered = isDemoMode ? "$1,420.00" : "$0.00";
  const activeLeakage = isDemoMode ? "$249.00" : "$0.00";
  const recoveryRate = isDemoMode ? "84.5%" : "0.0%";

  return (
    <ScrollView className="flex-1 bg-[#090A0F] px-5" showsVerticalScrollIndicator={false}>
      {/* Header Pipeline Container */}
      <View className="flex-row justify-between items-center py-6 border-b border-[#1E2235] mb-6">
        <Text className="text-xl font-black text-white tracking-tight">
          Recover<Text className="text-[#10B981]">Flow</Text>
        </Text>
        <View className={`px-3 py-1 rounded-full ${isDemoMode ? 'bg-[#F59E0B]/10' : 'bg-[#10B981]/10'}`}>
          <Text className={`text-[10px] font-extrabold uppercase tracking-widest ${isDemoMode ? 'text-[#F59E0B]' : 'text-[#10B981]'}`}>
            {isDemoMode ? '⚙️ DEMO MODE ACTIVE' : '🌐 LIVE PRODUCTION'}
          </Text>
        </View>
      </View>

      {/* Conditional Runtime Switch */}
      {!isDemoMode ? (
        <EmptyState />
      ) : (
        <View>
          {/* Metrics Layout Engine */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mb-8">
            <MetricCard title="Total Recovered" value={totalRecovered} subtext="+12.4% this week" colorStyle="text-[#10B981]" isTrendUp={true} />
            <MetricCard title="Active Leakage" value={activeLeakage} subtext="Critical state risk" colorStyle="text-[#EF4444]" isTrendUp={false} />
            <MetricCard title="Recovery Rate" value={recoveryRate} subtext="Global baseline metric" colorStyle="text-white" isTrendUp={false} />
          </ScrollView>

          {/* Premium UI Mock Chart Construction */}
          <View className="bg-[#12141C] border border-[#1E2235] rounded-2xl p-5 mb-8">
            <Text className="text-white text-sm font-bold mb-4">Recovered Revenue vs Time (7 Days)</Text>
            
            <View className="h-40 flex-row items-end justify-between pt-4 px-2">
              {MOCK_CHART_DATA.map((item, index) => {
                const maxAmount = Math.max(...MOCK_CHART_DATA.map(d => d.amount));
                const barHeight = (item.amount / maxAmount) * 100;
                
                return (
                  <View key={index} className="items-center flex-1">
                    <View className="w-full px-1 items-center">
                      <View 
                        style={{ height: `${barHeight}%` }} 
                        className="w-3 rounded-t-md bg-[#10B981] opacity-90 relative"
                      >
                        {index === MOCK_CHART_DATA.length - 1 && (
                          <View className="absolute -top-6 bg-[#10B981] px-1.5 py-0.5 rounded shadow-lg">
                            <Text className="text-[#090A0F] text-[9px] font-black">${item.amount}</Text>
                          </View>
                        )}
                      </View>
                    </View>
                    <Text className="text-[#64748B] text-[10px] mt-2 font-medium">{item.day}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      )}

      {/* Permanent Core System Environment Interactive Control Switch */}
      <TouchableOpacity 
        onPress={() => setIsDemoMode(!isDemoMode)}
        className="bg-[#1E2235] border border-[#334155] py-4 rounded-xl items-center mb-10"
        activeOpacity={0.8}
      >
        <Text className="text-white font-bold text-sm">
          🎛️ Toggle Simulation Environment Mode
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}