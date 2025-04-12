import logo from "./logo.svg";
import "./App.css";
import ApolloWrapper from "./ApolloClient";
import CollectionList from "./components/CollectionList";
import Collection from "./components/Collection";

function App() {
  return (
    <ApolloWrapper>
      <div className="App">GraphQL</div>
      <Collection collectionId="cjwuuj5bz000i0719rrtw5gqk" />
      <CollectionList />
    </ApolloWrapper>
  );
}

export default App;
