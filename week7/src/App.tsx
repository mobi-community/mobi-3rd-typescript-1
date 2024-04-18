import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./libs/route/router";
import { Provider } from "react-redux";
import store from "./libs/redux/store/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </>
    );
}

export default App;
