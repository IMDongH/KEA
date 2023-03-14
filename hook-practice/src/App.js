import logo from './logo.svg';
import './App.css';
import Comment from './comment'
import LandingPage from './LandingPage';
function App() {

  const users = [
    {id : 1, name :"lim" , comment : "테스트입니다 1"},
    {id : 2, name :"dong" , comment : "테스트입니다 2"},
    {id : 3, name :"hyeok" , comment : "테스트입니다 3"}
  ]
  return (
    <div className="App">
      <LandingPage></LandingPage>
      {users.map((user)=>
      <Comment key = {user.id} name = {user.name} comment = {user.comment}/>)}
      
    </div>
  );
}

export default App;
