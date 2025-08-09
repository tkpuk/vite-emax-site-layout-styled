import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRouter from './AppRouter'
import GlobalStyle, { PageContainer } from './globalStyle'
import { Footer, Navbar, ScrollToTop } from './components'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <PageContainer>
        <AppRouter />
      </PageContainer>
      <Footer />
    </BrowserRouter>
  )
}

export default App
