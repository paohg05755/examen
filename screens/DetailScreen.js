import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Button, Alert } from 'react-native';
import { getItemById, deleteItem } from '../services/api';

export default function DetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDetail = async () => {
      try {
        const data = await getItemById(id);
        setItem(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadDetail();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item?.title}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>{item?.description}</Text>
      
      {/* Aquí es donde el botón debe vivir, dentro del return */}
      <View style={{ marginTop: 20 }}>
        <Button 
          title="Eliminar este ítem" 
          color="red"
          onPress={() => {
            Alert.alert("Confirmar", "¿Seguro que quieres borrarlo?", [
              { text: "Cancelar" },
              { text: "Sí, borrar", onPress: async () => {
                  await deleteItem(id);
                  navigation.goBack();
              }}
            ]);
          }} 
        />
      </View>
    </View>
  );
}
