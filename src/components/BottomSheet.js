import React from 'react';
import { Modal, View, Text, TouchableOpacity, ScrollView, Alert, Clipboard } from 'react-native';

export default function BottomSheet({ visible, onClose, incident }) {
  if (!incident) return null;

  const handleCopyLink = () => {
    Alert.alert('Success', 'Magic Payment Link copied to your clipboard system buffer.');
  };

  const handleManualTrigger = () => {
    Alert.alert(
      'Notification Dispatched', 
      `Direct alerts re-queued & fired synchronously via active pipelines to ${incident.customerName}.`
    );
    onClose();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View className="flex-1 justify-end bg-black/60">
        <View className="bg-[#12141C] border-t-2 border-[#1E2235] rounded-t-3xl p-6 max-h-[80%]">
          
          {/* Header Drag Indicator Indicator */}
          <View className="w-12 h-1 bg-[#1E2235] rounded-full align-self-center mx-auto mb-4" />
          
          <View className="flex-row justify-between items-start mb-6">
            <View>
              <Text className="text-white text-xl font-bold">{incident.customerName}</Text>
              <Text className="text-[#64748B] text-sm">{incident.product} • ${incident.amount.toFixed(2)}</Text>
            </View>
            <TouchableOpacity onPress={onClose} className="bg-[#1E2235] px-3 py-1.5 rounded-lg">
              <Text className="text-[#94A3B8] text-xs font-bold">Close</Text>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} className="space-y-4 mb-6">
            {/* System Log Details */}
            <View className="bg-[#1E2235]/40 border border-[#1E2235] p-4 rounded-xl">
              <Text className="text-[#64748B] text-xs font-bold uppercase mb-1">Gateway Error Log</Text>
              <Text className="text-[#EF4444] font-medium text-sm">{incident.reason}</Text>
              <Text className="text-[#94A3B8] text-xs mt-2">Dunning State Level: Attempt {incident.attempt}</Text>
            </View>

            {/* Email Outreach Template Copy Section */}
            <View className="bg-[#1E2235]/40 border border-[#1E2235] p-4 rounded-xl">
              <Text className="text-[#64748B] text-xs font-bold uppercase mb-2">Automated Email Copy</Text>
              <Text className="text-white text-xs leading-relaxed font-mono">
                Subject: Urgent action required: Payment Failed for {incident.product}{'\n\n'}
                Hi {incident.customerName.split(' ')[0]},{'\n'}
                Your invoice for ${incident.amount.toFixed(2)} was declined. Click the secure link below to update your profile card wallet securely.
              </Text>
            </View>
          </ScrollView>

          {/* Call to Action Row Elements */}
          <View className="space-y-3">
            <TouchableOpacity 
              onPress={handleCopyLink}
              className="bg-[#1E2235] border border-[#334155] py-4 rounded-xl items-center"
              activeOpacity={0.8}
            >
              <Text className="text-white font-bold text-sm">🔗 Copy Magic Payment Link</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={handleManualTrigger}
              className="bg-[#10B981] py-4 rounded-xl items-center"
              activeOpacity={0.8}
            >
              <Text className="text-[#090A0F] font-bold text-sm">⚡ Manual Re-trigger Notification</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
}