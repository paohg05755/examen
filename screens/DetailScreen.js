import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Button, Alert } from 'react-native';
import { getItemById, deleteItem } from '../services/api';

export default function DetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDetail = async () => {
      const data = await getItemById(id);
      setItem(data);
      setLoading(false);
    };
    loadDetail();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item?.title}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>{item?.description}</Text>
      
      <View style={{ marginTop: 20 }}>
        <Button title="Editar este ítem" onPress={() => navigation.navigate('Form', { item })} />
        <View style={{ marginTop: 10 }}>
          <Button title="Eliminar este ítem" color="red" onPress={() => {
            Alert.alert("Confirmar", "¿Seguro?", [
              { text: "Cancelar" },
              { text: "Sí", onPress: async () => { await deleteItem(id); navigation.goBack(); }}
            ]);
          }} />
        </View>
      </View>
    </View>
  );
}
