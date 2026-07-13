import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Button, Text } from 'react-native';
import { getItems } from '../services/api';
import ItemCard from '../components/ItemCard';
import { useFocusEffect } from '@react-navigation/native';

export default function ItemsScreen({ navigation }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getItems();
      setItems(Array.isArray(data) ? data : []);
    } catch (error) {
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  if (loading) return <ActivityIndicator size="large" color="#38bdf8" style={styles.loader} />;

  return (
    <View style={styles.container}>
      <Button title="Recargar Lista" onPress={fetchData} color="#38bdf8" />
      
      {items.length > 0 ? (
        <FlatList
          data={items}
          keyExtractor={(item) => item?.id ? item.id.toString() : Math.random().toString()}
          renderItem={({ item }) => {
            if (!item) return null;
            
            // INTENTA ESTOS NOMBRES: Muchos proyectos Spring Boot usan 'nombre' o 'title'
            const titulo = item.name || item.nombre || item.title || "Sin título";
            const descripcion = item.description || item.descripcion || "Sin descripción";

            return (
              <ItemCard 
                title={titulo} 
                description={descripcion} 
                onPress={() => navigation.navigate('Detail', { id: item.id })}
              />
            );
          }}
        />
      ) : (
        <Text style={styles.emptyText}>No hay elementos para mostrar</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: { flex: 1, backgroundColor: '#0f172a', padding: 20 },
  loader: { flex: 1, justifyContent: 'center', backgroundColor: '#0f172a' },
  emptyText: { color: '#fff', textAlign: 'center', marginTop: 20, fontSize: 16 }
});
