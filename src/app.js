import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, NavLink, NavNavLink } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardStage = () => (
  <div>
    This is from my Dashboard Component.
  </div>
)
 
const AddExpensePage = () => (
  <div>
    This is from my Add Expense component. 
  </div>
)

const EditExpensePage = () => (
  <div>
    This is from my Edit Page Component
  </div>
)

const HelpPage = () => (
  <div>
    This is my Help Page Component
  </div>
)

const NotFoundPage = () => (
  <div>
    404! - <NavLink to="/">Go Home</NavLink>
  </div>
)

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
)


const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardStage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
      </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))