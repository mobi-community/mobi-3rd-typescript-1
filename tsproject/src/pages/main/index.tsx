import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const Home = () => {
  const navigator = useNavigate();
  const navigateToTodoPage = () => {
    navigator("/todo");
  };

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={navigateToTodoPage}>Go to TodoPage</Button>
    </div>
  );
};
export default Home;
