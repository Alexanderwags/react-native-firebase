import React, { useState, useEffect } from "react"
import { Text, View, ScrollView, Button } from "react-native"
import firebase from "../../dataBase/firebase"
import { ListItem, Avatar } from "react-native-elements"
const UsersList = (props) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const dbUsers = []
      querySnapshot.docs.forEach((doc) => {
        dbUsers.push({ id: doc.id, ...doc.data() })
      })
      setUsers(dbUsers)
    })
  }, [])
  return (
    <ScrollView>
      <Button
        title="Create User"
        onPress={() => props.navigation.navigate("CreateUserScreen")}
      ></Button>
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={
              (() => props.navigation.navigate("UserDetailScreen"),
              {
                userId: user.id,
              })
            }
          >
            <ListItem.Chevron />
            <Avatar
              rounded
              source={{
                uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              }}
            />

            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )
      })}
    </ScrollView>
  )
}
export default UsersList
