import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home } from "./pages/Home"
import { NewRomm } from "./pages/NewRoom"

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'component={Home} />
                <Route exact path='/new/room'component={NewRomm} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;