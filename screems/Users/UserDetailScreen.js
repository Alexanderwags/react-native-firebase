import React, { useState, useEffect } from "react"
import { Text, View } from "react-native"
import firebase from "../../dataBase/firebase"

const UserDetailScreen = (props) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        console.log(doc.data())
      })
    })
  }, [])
  return (
    <View>
      <Text>UserDetailScreen</Text>
    </View>
  )
}

export default UserDetailScreen
