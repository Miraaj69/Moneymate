import { View, Text } from 'react-native';
import { useStore } from '../store/useStore';

export default function Portfolio() {
  const portfolio = useStore((state) => state.portfolio);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Portfolio</Text>

      {portfolio.length === 0 ? (
        <Text>No investments yet</Text>
      ) : (
        portfolio.map((item, index) => (
          <Text key={index}>{item.name}</Text>
        ))
      )}
    </View>
  );
}
