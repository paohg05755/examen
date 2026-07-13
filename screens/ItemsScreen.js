import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { getItems } from '../services/api';

export default function ItemsScreen({ navigation }) {
  const [items, setItems] = useState([]);

  // Usamos focus para recargar la lista cada vez que regreses a esta pantalla
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const data = await getItems();
      setItems(data);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button 
        title="Crear nuevo ítem" 
        onPress={() => navigation.navigate('Form')} 
      />
      
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item}
            onPress={() => navigation.navigate('Detail', { id: item.id })}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 20, borderBottomWidth: 1, borderColor: '#ccc' },
  title: { fontSize: 18 }
});
