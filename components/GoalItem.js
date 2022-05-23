import { View, Text, StyleSheet, Pressable } from 'react-native'

function GoalItem({ text, onDeleteItem, id }) {
  return (
    <Pressable
      android_ripple={{ color: '#d2d' }}
      onPress={onDeleteItem.bind(this, id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={{ color: 'white' }}>{text}</Text>
      </View>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: 'lightcoral',
    margin: 10,
    padding: 20,
    fontWeight: 'bold',
    borderRadius: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
})
