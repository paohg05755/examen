import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, ActivityIndicator } from 'react-native';
import { getItemById, deleteItem } from '../services/api';

export default function DetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemById(id).then(data => {
      setItem(data);
      setLoading(false);
    });
  }, [id]);

  const confirmDelete = () => {
    Alert.alert("Confirmar", "¿Seguro que deseas eliminar este ítem?", [
      { text: "Cancelar" },
      { text: "Eliminar", style: "destructive", onPress: async () => {
          await deleteItem(id);
          navigation.goBack(); // Regresa tras eliminar
      }}
    ]);
  };

  if (loading) return <ActivityIndicator size="large" color="#38bdf8" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Eliminar" color="#ef4444" onPress={confirmDelete} />
        <View style={{ marginTop: 10 }}>
          <Button title="Volver" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0f172a' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  description: { fontSize: 16, color: '#94a3b8', marginBottom: 20 },
  buttonContainer: { marginTop: 20 }
});
