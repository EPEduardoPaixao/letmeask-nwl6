import { BrowserRouter, Route, Switch } from "react-router-dom"
import { AdminRoom } from "./pages/AdminRoom"
import { Home } from "./pages/Home"
import { NewRomm } from "./pages/NewRoom"
import { Room } from "./pages/Room"

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'component={Home} />
                <Route exact path='/new/room'component={NewRomm} />
                <Route path='/room/:Id'component={Room} />
                <Route path='/admin/room/:Id'component={AdminRoom} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;