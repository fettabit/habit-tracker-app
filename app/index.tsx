import { Redirect } from "expo-router";

export default function Index() {
  const isAuth = false;

  if (!isAuth) {
    return <Redirect href="/auth" />;
  }

  return <Redirect href="/(tabs)" />;
}
