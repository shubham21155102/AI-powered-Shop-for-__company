import './globals.css'
import "./style.css"

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI SHOP',
  description: 'AISHOP',
  
}

export default function RootLayout({ children }) {
  return (
    
   
    
    <html lang="en">
      <body className={inter.className}>{children}</body>
        <script src='https://github.com/codewithsadee/anon-ecommerce-website/blob/master/assets/js/script.js'>
          
        </script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </html>
  
  )
}
