import { View, Text, Button } from 'react-native';
import { useStore } from '../store/useStore';

export default function Expenses() {
  const expenses = useStore((state) => state.expenses);
  const addExpense = useStore((state) => state.addExpense);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Expenses</Text>

      <Button
        title="Add ₹100 Expense"
        onPress={() => addExpense({ id: Date.now(), amount: 100 })}
      />

      {expenses.map((e) => (
        <Text key={e.id}>₹{e.amount}</Text>
      ))}
    </View>
  );
}
