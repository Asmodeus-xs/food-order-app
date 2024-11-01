
import { Provider } from "react-redux"
import store from "./store/store"
import Header from "./components/Header"
import Meals from "./components/Meal/Meals"

function App() {

  return (
    <Provider store={store}>
      <Header />
      <main>
        <Meals />
      </main>
    </Provider>
  )
}

export default App
