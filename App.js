import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisable, setModalIsVisable] = useState(false)

  function startAddGoalHandler() {
    setModalIsVisable(true)
  }

  function endAddGoal() {
    setModalIsVisable(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#5e0acc'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisable}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoal}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  goalsContainer: {
    flex: 4,
  },
})
