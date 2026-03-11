import { StyleSheet, View } from "react-native"

import { Button } from "@/components/Button"
import { Text } from "@/components/Text"
import { useAuth } from "@/features/auth/AuthContext"

export function HomeScreen() {
  const { user, logout } = useAuth()

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text tx="auth:home.title" preset="heading" style={styles.title} />
        <Text tx="auth:home.subtitle" style={styles.subtitle} />

        <View style={styles.userInfo}>
          <Text tx="auth:home.nameLabel" style={styles.label} />
          <Text testID="home-user-name" text={user?.name ?? "-"} style={styles.value} />
        </View>

        <View style={styles.userInfo}>
          <Text tx="auth:home.emailLabel" style={styles.label} />
          <Text testID="home-user-email" text={user?.email ?? "-"} style={styles.value} />
        </View>

        <Button
          testID="logout-button"
          tx="auth:home.logout"
          preset="filled"
          style={styles.logoutButton}
          onPress={logout}
        />
      </View>
    </View>
  )
}

const palette = {
  appBackground: "#FFF7EA",
  cardShadow: "#53340D",
  cardSurface: "#FFFFFF",
  label: "#5A5A5A",
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.cardSurface,
    borderRadius: 16,
    elevation: 4,
    gap: 12,
    padding: 18,
    shadowColor: palette.cardShadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
  },
  container: {
    backgroundColor: palette.appBackground,
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    color: palette.label,
    fontWeight: "600",
  },
  logoutButton: {
    marginTop: 12,
  },
  subtitle: {
    marginBottom: 4,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
  },
  userInfo: {
    gap: 4,
  },
  value: {
    fontSize: 18,
    lineHeight: 24,
  },
})
