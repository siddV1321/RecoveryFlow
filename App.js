import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Modal } from 'react-native';

// Simple Inline Mock Data for Siddharth's Simulation Engine
const mockIncidents = [
  { id: '1', name: 'Siddharth Verma', plan: 'MicroBiz OS - Pro', amount: '$29.00', status: 'Retrying', reason: 'Insufficient Funds' },
  { id: '2', name: 'Rahul Sharma', plan: 'GapAlert Premium', amount: '$49.00', status: 'Recovered', reason: 'Card Expired' },
  { id: '3', name: 'Amit Patel', plan: 'LeakAnalyzer CLI', amount: '$19.00', status: 'Failed', reason: 'Temporary Decline' }
];

export default function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [isDemoMode, setIsDemoMode] = useState(true);
  const [selectedIncident, setSelectedIncident] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER STATUS PILL */}
      <View style={styles.header}>
        <Text style={styles.logoText}>💸 RecoverFlow</Text>
        <TouchableOpacity 
          style={[styles.pill, isDemoMode ? styles.pillDemo : styles.pillLive]} 
          onPress={() => setIsDemoMode(!isDemoMode)}
        >
          <Text style={styles.pillText}>{isDemoMode ? '⚙️ DEMO MODE' : '🌐 LIVE MODE'}</Text>
        </TouchableOpacity>
      </View>

      {/* RENDER ACTIVE TAB */}
      <ScrollView style={styles.mainContent}>
        {currentTab === 'dashboard' && (
          <View>
            <Text style={styles.sectionTitle}>Financial Leak Overview</Text>
            
            {/* METRIC CARDS */}
            <View style={styles.statsGrid}>
              <View style={styles.card}>
                <Text style={styles.cardLabel}>Total Recovered</Text>
                <Text style={[styles.cardVal, {color: '#10B981'}]}>{isDemoMode ? '$1,420.00' : '$0.00'}</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardLabel}>Active Leakage</Text>
                <Text style={[styles.cardVal, {color: '#EF4444'}]}>{isDemoMode ? '$249.00' : '$0.00'}</Text>
              </View>
            </View>

            {/* INSIGHT BOX */}
            <View style={styles.blockquote}>
              <Text style={styles.quoteText}>
                {isDemoMode 
                  ? "💡 Recovery optimization running flawlessly. 84.5% of bounced transactions caught via smart-retry queues." 
                  : "🔒 Live mode active. Waiting for upstream Stripe Webhook events..."}
              </Text>
            </View>
          </View>
        )}

        {currentTab === 'recoveries' && (
          <View>
            <Text style={styles.sectionTitle}>Live Recovery Stream</Text>
            {!isDemoMode ? (
              <Text style={styles.emptyState}>No live production payment failures caught yet.</Text>
            ) : (
              mockIncidents.map(item => (
                <TouchableOpacity key={item.id} style={styles.listItem} onPress={() => setSelectedIncident(item)}>
                  <View>
                    <Text style={styles.itemTitle}>{item.name}</Text>
                    <Text style={styles.itemSub}>{item.plan} • {item.amount}</Text>
                  </View>
                  <View style={[styles.statusBadge, item.status === 'Recovered' ? styles.bgSuccess : styles.bgDanger]}>
                    <Text style={styles.badgeText}>{item.status}</Text>
                  </View>
                </TouchableOpacity>
              ))
            )}
          </View>
        )}
      </ScrollView>

      {/* RECOVERY BOTTOM SHEET MODAL */}
      <Modal visible={selectedIncident !== null} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Incident: {selectedIncident?.name}</Text>
            <Text style={styles.modalMeta}>Reason: {selectedIncident?.reason} ({selectedIncident?.amount})</Text>
            
            <View style={styles.copyBox}>
              <Text style={styles.copyLabel}>📱 Automated WhatsApp Script:</Text>
              <Text style={styles.copyBody}>"Hey {selectedIncident?.name}, your payment of {selectedIncident?.amount} for {selectedIncident?.plan} couldn't go through. No worries, your access is safe! Quickly refresh details securely here: https://rf.demo/update_bill"</Text>
            </View>

            <TouchableOpacity style={styles.closeBtn} onPress={() => setSelectedIncident(null)}>
              <Text style={styles.closeBtnText}>Dismiss View</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* BOTTOM NAVIGATION BAR */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navBtn} onPress={() => setCurrentTab('dashboard')}>
          <Text style={[styles.navBtnText, currentTab === 'dashboard' && styles.navBtnActive]}>📊 Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBtn} onPress={() => setCurrentTab('recoveries')}>
          <Text style={[styles.navBtnText, currentTab === 'recoveries' && styles.navBtnActive]}>⚡ Recoveries</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0F19' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderColor: '#1E293B' },
  logoText: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' },
  pill: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  pillDemo: { backgroundColor: '#1E293B' },
  pillLive: { backgroundColor: '#065F46' },
  pillText: { color: '#FFFFFF', fontSize: 12, fontWeight: '600' },
  mainContent: { flex: 1, padding: 20 },
  sectionTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  statsGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  card: { flex: 1, backgroundColor: '#131A2E', padding: 15, borderRadius: 12, marginHorizontal: 5, borderWidth: 1, borderColor: '#1E293B' },
  cardLabel: { color: '#94A3B8', fontSize: 13, marginBottom: 5 },
  cardVal: { fontSize: 22, fontWeight: 'bold' },
  blockquote: { backgroundColor: '#1E293B', padding: 15, borderRadius: 8, borderLeftWidth: 4, borderColor: '#10B981', marginTop: 10 },
  quoteText: { color: '#CBD5E1', fontSize: 14, fontStyle: 'italic' },
  listItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#131A2E', padding: 15, borderRadius: 12, marginBottom: 10, borderWidth: 1, borderColor: '#1E293B' },
  itemTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  itemSub: { color: '#94A3B8', fontSize: 13, marginTop: 2 },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  bgSuccess: { backgroundColor: '#065F46' },
  bgDanger: { backgroundColor: '#7F1D1D' },
  badgeText: { color: '#FFFFFF', fontSize: 11, fontWeight: 'bold' },
  emptyState: { color: '#94A3B8', textAlign: 'center', marginTop: 40 },
  navbar: { flexDirection: 'row', height: 60, backgroundColor: '#131A2E', borderTopWidth: 1, borderColor: '#1E293B' },
  navBtn: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  navBtnText: { color: '#94A3B8', fontSize: 14 },
  navBtnActive: { color: '#10B981', fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#131A2E', padding: 24, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderWidth: 1, borderColor: '#1E293B' },
  modalTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  modalMeta: { color: '#94A3B8', fontSize: 14, marginBottom: 20 },
  copyBox: { backgroundColor: '#0B0F19', padding: 15, borderRadius: 8, marginBottom: 20 },
  copyLabel: { color: '#10B981', fontSize: 12, fontWeight: 'bold', marginBottom: 5 },
  copyBody: { color: '#E2E8F0', fontSize: 13 },
  closeBtn: { backgroundColor: '#1E293B', padding: 12, borderRadius: 8, alignItems: 'center' },
  closeBtnText: { color: '#FFFFFF', fontWeight: '600' }
});
