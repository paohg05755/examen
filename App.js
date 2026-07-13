import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

export default function App() {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((json) => {
setData(json);
setLoading(false);
})
.catch((error) => console.error(error));
}, []);

return (
<View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20 }}>
{loading ? (
<ActivityIndicator />
) : (
<FlatList
data={data}
keyExtractor={(item) => item.id.toString()}
renderItem={({ item }) => <Text style={{ padding: 10 }}>{item.title}</Text>}
/>
)}
</View>
);
}
