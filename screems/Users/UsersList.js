import React, { useState, useEffect } from "react"
import { Text, View } from "react-native"
import firebase from "../../dataBase/firebase"

const UsersList = (props) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = []
      querySnapshot.docs.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() })
      })
    })
  }, [])
  return (
    <View>
      <Text>UserDetailScreen</Text>
    </View>
  )
}
export default UsersList
