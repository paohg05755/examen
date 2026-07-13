import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, Button } from 'react-native';
import { getItems } from '../services/api'; // Importamos el servicio

export default function ItemsScreen({ navigation }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para cargar los datos desde la API
  const loadItems = async () => {
    setLoading(true);
    try {
      const data = await getItems(); // Llamada al endpoint GET /items
      setItems(data);
    } catch (error) {
      console.error("Error al cargar:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems(); // Carga inicial al abrir la pantalla
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Recargar lista" onPress={loadItems} />
      
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()} // Convertimos a string como pide el examen
          renderItem={({ item }) => (
            <View style={{ padding: 10, borderBottomWidth: 1 }}>
              <Text style={{ fontSize: 18 }}>{item.title}</Text>
              <Button 
                title="Ver detalle" 
                onPress={() => navigation.navigate('Detail', { id: item.id })} 
              />
            </View>
          )}
        />
      )}
    </View>
  );
}
