import Image from 'next/image'
import Header from './header'
import Footer from './footer'
import Notification from '../../pages/notification'
import Nav from '../../pages/nav'
import Demo from './demo'
import NewsLetter from './newsletter'
export default function Home() {
  return (
   <>
    <Nav/>
    <NewsLetter/>
    <Notification/>
    <Header/>
<Demo/>
    <Footer/>
   
   </>
  )
}
