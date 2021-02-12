import React from "react"
import { ViewStyle, TextStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Screen, Text } from "../../components"
import { color, spacing, typography } from "../../theme"

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}
const CONTENT: TextStyle = {
  ...TEXT,
  color: "#BAB6C8",
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
}

export const WelcomeScreen = observer(function WelcomeScreen() {
  return (
    <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
      <Text style={CONTENT}>
        For everyone else, this is where you'll see a live preview of your fully functioning app
        using Ignite.
      </Text>
    </Screen>
  )
})
