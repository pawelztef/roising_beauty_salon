import React from 'react'
import './assets/sass/main.sass'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import MobileNav from './components/MobileNav'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'
import TeamPage from './components/TeamPage'
import GalleryPage from './components/GalleryPage'
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage'



class App extends React.Component {
  state = {
    mobileMenuOpen: false,
  }

  mobileMenuToggleHandler = () => {
    this.setState((prevState) => {
      console.log('App.mobileMenuToggleHandler prevState', prevState)
      return { mobileMenuOpen: !prevState.mobileMenuOpen }
    })
  }
  

  render() {
    return (
      <Router>
        <div className="pz-body-wrapper">
          <div className="pz-page-wrapper">
            <NavigationBar mobileMenuToggleHandler={this.mobileMenuToggleHandler} />
            <MobileNav show={this.state.mobileMenuOpen}
              click={this.mobileMenuToggleHandler} />


            <Switch>
              <Route exact path="/contact">
                <ContactPage />
              </Route>
              <Route exact path="/team">
                <TeamPage />
              </Route>
              <Route exact path="/gallery">
                <GalleryPage />
              </Route>
              <Route exact path="/about">
                <AboutPage />
              </Route>
              <Route exact path="/services">
                <ServicesPage />
              </Route>
              <Route exact path="/">
                <HomePage/>
              </Route>
            </Switch>



            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
