import { View, Text, StyleSheet } from 'react-native'

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={{ color: 'white' }}>{props.text}</Text>
    </View>
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
})
