import { useAuth } from "@/lib/auth-context";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Index() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/auth");
  };

  return (
    <View style={styles.view}>
      <Text> Main Screen</Text>
      <Button mode="text" onPress={handleSignOut} icon="logout">
        Sign Out?
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
