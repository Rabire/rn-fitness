import React, { useCallback } from "react"
import { ViewStyle, TextStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Screen, Text } from "../../components"
import { color, spacing, typography } from "../../theme"
import Fitness from "@ovalmoney/react-native-fitness"

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const TXT: TextStyle = {
  fontFamily: typography.primary,
  color: "green",
  fontSize: 15,
  padding: 10,
  marginBottom: 5,
  backgroundColor: "pink",
}

export const WelcomeScreen = observer(function WelcomeScreen() {
  const permissions = [
    { kind: Fitness.PermissionKinds.Steps, access: Fitness.PermissionAccesses.Read },
  ]

  const requestPermissions = useCallback(() => {
    return Fitness.requestPermissions(permissions).then((requestPermissions) => {
      // Do something
      console.log({ requestPermissions })
    })
  }, [permissions])

  const isAuthorized = useCallback(() => {
    return Fitness.isAuthorized(permissions).then((isAuthorized) => {
      // Do something
      console.log({ isAuthorized })
    })
  }, [permissions])

  return (
    <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
      <Text style={TXT} text="requestPermissions" onPress={requestPermissions} />
      <Text style={TXT} text="isAuthorized" onPress={isAuthorized} />
    </Screen>
  )
})
