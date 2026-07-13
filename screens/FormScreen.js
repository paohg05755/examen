import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createItem } from '../services/api';

export default function FormScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSave = async () => {
    // Validación básica para el Punto 8
    if (!nombre || !descripcion) {
      Alert.alert("Error", "Por favor llena todos los campos");
      return;
    }

    try {
      await createItem({ name: nombre, description: descripcion });
      navigation.goBack(); // Regresa a la lista tras guardar
    } catch (error) {
      Alert.alert("Error", "No se pudo guardar el ítem");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Nombre del ítem" 
        value={nombre} 
        onChangeText={setNombre} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Descripción" 
        value={descripcion} 
        onChangeText={setDescripcion} 
      />
      <Button title="Guardar Ítem" onPress={handleSave} color="#38bdf8" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#0f172a' },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 15 },
});
