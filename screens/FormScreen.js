import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { createItem, updateItem } from '../services/api';

export default function FormScreen({ route, navigation }) {
  // Obtenemos el ítem si viene de editar, o dejamos undefined si es nuevo
  const existingItem = route.params?.item;

  const [title, setTitle] = useState(existingItem?.title || '');
  const [description, setDescription] = useState(existingItem?.description || '');

  const handleSave = async () => {
    try {
      if (existingItem && existingItem.id) {
        // MODO ACTUALIZAR (PUT)
        await updateItem(existingItem.id, { title, description });
      } else {
        // MODO CREAR (POST)
        await createItem({ title, description });
      }
      navigation.goBack(); // Regresa a la lista tras guardar
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Título" 
        value={title} 
        onChangeText={setTitle} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Descripción" 
        value={description} 
        onChangeText={setDescription} 
        style={styles.input} 
      />
      <Button 
        title={existingItem ? "Actualizar" : "Crear"} 
        onPress={handleSave} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }
});
