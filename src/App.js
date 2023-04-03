import './App.css';
import Header from './Header'
import Content from './Content';
import Footer from './Footer';
import styles from './styles.module.css'

function App() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <form>
          <h1 style={{textAlign: 'center'}}>Log In</h1>
          <p>Email</p>
          <input type="text" name="email"/>
          <p>Password</p>
          <input type="text" name="password"/>
          <p>Account type</p>
          <input type="radio" name="accType" value="Admin" />Admin
          <input type="radio" name="accType" value="User" />User 
        </form>
      </div>
    </div>
  );
}

export default App;
