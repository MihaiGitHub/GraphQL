import logo from "./logo.svg";
import "./App.css";
import ApolloWrapper from "./ApolloClient";
import CollectionList from "./components/CollectionList";

function App() {
  return (
    <ApolloWrapper>
      <div className="App">GraphQL</div>
      <CollectionList />
    </ApolloWrapper>
  );
}

export default App;
