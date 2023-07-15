import AddCardForm from './AddCardForm';
import './App.scss';
import FormikDemo from './FormikDemo';
import FormLayout from './formlayout/FormLayout';
import HeadersLayout from './header/headerLayout';
import Login from './login/Login';

function App() {
  return (
    <div className="abn_car_main_container">
      {/* <HeadersLayout /> */}
      {/* <FormLayout /> */}
      <FormikDemo></FormikDemo>
      {/* <AddCardForm></AddCardForm> */}
    </div>
  );
}

export default App;
