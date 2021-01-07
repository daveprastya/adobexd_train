import './App.css'
import { ApolloProvider } from '@apollo/client'
import client from './config/Graphql/graphql'
import LandingPage from './pages/index'


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <LandingPage />
      </div>
    </ApolloProvider>
  );
}

export default App;
