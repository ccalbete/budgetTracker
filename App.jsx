import AppRoutes from "./routes/AppRoutes"
import Footer from "./components/common/Footer"

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
          <AppRoutes />
    </NavigationContainer>
  );
}
