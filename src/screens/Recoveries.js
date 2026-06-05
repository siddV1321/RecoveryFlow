import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AppContext } from '../../App';
import RecoveryRow from '../components/RecoveryRow';
import BottomSheet from '../components/BottomSheet';
import EmptyState from '../components/EmptyState';
import { MOCK_INCIDENTS } from '../constants/mockData';

export default function Recoveries() {
  const { isDemoMode } = useContext(AppContext);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Structural Filtering Engine
  const filteredIncidents = MOCK_INCIDENTS.filter(incident => {
    if (activeFilter === 'all') return true;
    return incident.status === activeFilter;
  });

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'failed', label: 'Failed' },
    { id: 'recovered', label: 'Recovered' },
    { id: 'retrying', label: 'Retrying' }
  ];

  const handleOpenRow = (incident) => {
    setSelectedIncident(incident);
    setModalVisible(true);
  };

  return (
    <View className="flex-1 bg-[#090A0F] px-5 pt-6">
      <Text className="text-xl font-bold text-white mb-4">Dunning Operational Feed</Text>

      {/* Segmented Filter Control Bar */}
      <View className="flex-row bg-[#12141C] border border-[#1E2235] rounded-xl p-1 mb-6 justify-between">
        {filterTabs.map(tab => (
          <TouchableOpacity
            key={tab.id}
            onPress={() => setActiveFilter(tab.id)}
            className={`flex-1 py-2 rounded-lg items-center ${activeFilter === tab.id ? 'bg-[#1E2235]' : ''}`}
            activeOpacity={0.7}
          >
            <Text className={`text-xs font-bold ${activeFilter === tab.id ? 'text-[#10B981]' : 'text-[#64748B]'}`}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Dynamic List Rendering Pipeline */}
      {!isDemoMode ? (
        <EmptyState />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          {filteredIncidents.length === 0 ? (
            <Text className="text-[#64748B] text-center mt-10 text-sm">No items matching this query criteria filter.</Text>
          ) : (
            filteredIncidents.map(item => (
              <RecoveryRow key={item.id} incident={item} onPress={() => handleOpenRow(item)} />
            ))
          )}
        </ScrollView>
      )}

      {/* Details/Action Interactive Modal */}
      <BottomSheet 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        incident={selectedIncident} 
      />
    </View>
  );
}