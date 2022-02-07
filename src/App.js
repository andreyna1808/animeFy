//Importações necessarias
import React from "react";
import { Link, Switch, Route } from 'react-router-dom';

//Syled components
import { All, DesignerTop, Foot, Head, Nav, SpanNone, } from "./components/syledAll";

//Rotas
import Anymefy from "./pages/Anymefy";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Premium from "./pages/Premium";

class App extends React.Component {

  render() {

    return (
      <All>
        <Head>
          <Nav>
            <Link to="/"><DesignerTop>Home</DesignerTop></Link>
            <Link to="/Login"><DesignerTop>Login</DesignerTop></Link>
            <Link to="/animefy"><SpanNone>AnimeFy</SpanNone></Link> 
            <Link to="/premium"><DesignerTop>Seja Premium</DesignerTop></Link>
          </Nav>
        </Head>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/animefy' component={Anymefy} />
            <Route exact path='/premium' component={Premium} />
          </Switch>
        </main>
        <Foot>
          <h3>Todos os direitos reservados &copy;</h3>
        </Foot>
      </All>
    );
  }
}

export default App;
