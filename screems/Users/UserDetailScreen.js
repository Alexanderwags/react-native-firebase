import React, { useState, useEffect } from "react"
import { TextInput, View, StyleSheet, ScrollView, Button } from "react-native"
import firebase from "../../dataBase/firebase"

const UserDetailScreen = (props) => {
  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users".doc(id))
    const doc = await dbRef
    const user = doc.data()
  }
  useEffect(() => {
    getUserById(props.route.params.userId)
  }, [])
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name User"
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email User"
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone User"
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View>
        <Button title="Save User" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccc",
  },
})

export default UserDetailScreen
