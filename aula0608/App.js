import { View, Text, Button, TextInput, ActivityIndicator } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Aula 0608</Text>
      <Button

        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <TextInput

        value={10}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

     <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
}
