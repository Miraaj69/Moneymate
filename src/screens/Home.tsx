import { View, Text } from 'react-native';
import { useStore } from '../store/useStore';

export default function Home() {
  const balance = useStore((state) => state.balance);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>💰 MoneyMate</Text>
      <Text>Total Balance: ₹{balance}</Text>
    </View>
  );
}
