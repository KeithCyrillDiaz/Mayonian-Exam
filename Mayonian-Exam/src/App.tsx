import { Carousel } from './Components/Carousel'
import { Container } from './Components/Container'
import { BottomCategories, UpperCategories } from './Components/Contents/Categories'
import { Games } from './Components/Contents/Games'
import { Footer } from './Components/footer'
import { Header } from './Components/Header'
import { useIsMobile } from './hooks/useIsMobile'

function App() {
  const {isMobile, status, isLandscape} =  useIsMobile()
    if(status === "loading"){
        <Container>
          Loading...
        </Container>
    } 
     return (
      <>
        {isMobile ? (

          <Container>
            <Header/>
            <Carousel/>
            <UpperCategories/>
            <Games/>
            <BottomCategories/>
            <Footer/>
          </Container>

        ) : isLandscape ? (

          <Container>
             Please rotate your device to portrait mode for the best experience.
          </Container>

        ) : (

          <Container>
            This Website is for Mobile Devices
          </Container>
        )}
      </>
     
    )
}

export default App
