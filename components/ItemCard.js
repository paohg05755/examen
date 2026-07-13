import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ItemCard = ({ title, description, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#38bdf8" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 5,
  },
  content: { flex: 1, marginRight: 10 },
  title: { fontSize: 18, fontWeight: '700', color: '#f8fafc' },
  description: { fontSize: 14, color: '#94a3b8' },
});

export default ItemCard;
