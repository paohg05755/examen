import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { getItems } from '../services/api';
import ItemCard from '../components/ItemCard';

export default function ItemsScreen({ navigation }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems().then(data => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#38bdf8" />;

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemCard 
            title={item.name} 
            description={item.description} 
            onPress={() => navigation.navigate('Detail', { id: item.id })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#0f172a', padding: 20 } });
