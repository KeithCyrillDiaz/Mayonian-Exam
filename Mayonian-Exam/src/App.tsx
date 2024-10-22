import { Provider } from 'react-redux'
import { Carousel } from './Components/Carousel'
import { Container } from './Components/Container'
import { Contents } from './Components/Contents'


import { Footer } from './Components/footer'
import { Header } from './Components/Header'
import { useIsMobile } from './hooks/useIsMobile'
import { store } from './redux/store'

function App() {
  const {isMobile, status, isLandscape} =  useIsMobile()
    if(status === "loading"){
        <Container>
          Loading...
        </Container>
    } 
     return (
      <Provider store={store}>
          <>
        {isMobile ? (

          <Container>
            <Header/>
            <Carousel/>
            <Contents/>
            <Footer/>
          </Container>

        ) : isLandscape ? (

          <Container>
             Please rotate your device to portrait mode for the best experience.
          </Container>

        ) : (

          <Container>
             <Contents/>
            {/* This Website is for Mobile Devices Only */}
          </Container>
        )}
      </>
      </Provider>
      
     
    )
}

export default App
