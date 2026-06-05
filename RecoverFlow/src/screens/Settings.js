import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AppContext } from '../../App';

export default function Settings() {
  const { apiKeys, setApiKeys, isDemoMode } = useContext(AppContext);
  const [stripeInput, setStripeInput] = useState(apiKeys.stripe);
  const [whatsappInput, setWhatsappInput] = useState(apiKeys.whatsapp);
  const [twilioInput, setTwilioInput] = useState(apiKeys.twilio);
  const [maskStripe, setMaskStripe] = useState(true);

  const handleSaveConfig = () => {
    setApiKeys({ stripe: stripeInput, whatsapp: whatsappInput, twilio: twilioInput });
    Alert.alert(
      'Credentials Committed', 
      'Offline state configuration updated cleanly. Local parameters successfully modified.'
    );
  };

  return (
    <ScrollView className="flex-1 bg-[#090A0F] px-5 pt-6" showsVerticalScrollIndicator={false}>
      <Text className="text-xl font-bold text-white mb-2">Integration & API Core</Text>
      <Text className="text-[#64748B] text-xs mb-6 leading-relaxed">
        Configure live endpoints and platform authentication vectors. Leave fields completely empty to evaluate the runtime via simulation framework.
      </Text>

      <View className="space-y-6 mb-8">
        {/* Stripe Configuration Node */}
        <View className="bg-[#12141C] border border-[#1E2235] p-5 rounded-2xl">
          <Text className="text-white text-sm font-bold mb-3">Stripe Billing Webhook Source</Text>
          <View className="flex-row items-center bg-[#090A0F] border border-[#334155] rounded-xl px-3 mb-2">
            <TextInput 
              value={stripeInput}
              onChangeText={setStripeInput}
              secureTextEntry={maskStripe}
              placeholder="sk_live_..."
              placeholderTextColor="#475569"
              className="flex-1 text-white py-3 font-mono text-xs"
            />
            <TouchableOpacity onPress={() => setMaskStripe(!maskStripe)} className="ml-2">
              <Text className="text-xs text-[#10B981] font-bold">{maskStripe ? "SHOW" : "HIDE"}</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-[#64748B] text-[10px]">Provide live or test key profiles.</Text>
        </View>

        {/* WhatsApp Business Node */}
        <View className="bg-[#12141C] border border-[#1E2235] p-5 rounded-2xl">
          <Text className="text-white text-sm font-bold mb-3">WhatsApp Cloud API Gateway</Text>
          <TextInput 
            value={whatsappInput}
            onChangeText={setWhatsappInput}
            placeholder="Meta Access Token"
            placeholderTextColor="#475569"
            className="bg-[#090A0F] border border-[#334155] rounded-xl px-3 py-3 text-white font-mono text-xs mb-3"
          />
          <Text className="text-[#64748B] text-[10px]">Controls automatic conversational message loops.</Text>
        </View>

        {/* Twilio Component Node */}
        <View className="bg-[#12141C] border border-[#1E2235] p-5 rounded-2xl">
          <Text className="text-white text-sm font-bold mb-3">Twilio SMS Routing Interface</Text>
          <TextInput 
            value={twilioInput}
            onChangeText={setTwilioInput}
            placeholder="Account SID Engine Reference"
            placeholderTextColor="#475569"
            className="bg-[#090A0F] border border-[#334155] rounded-xl px-3 py-3 text-white font-mono text-xs"
          />
        </View>
      </View>

      {/* Execution Actions */}
      <TouchableOpacity 
        onPress={handleSaveConfig}
        className="bg-[#10B981] py-4 rounded-xl items-center mb-12"
        activeOpacity={0.8}
      >
        <Text className="text-[#090A0F] font-bold text-sm">Save Configuration Parameters</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}