import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/all.min.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/nice-select.css"
import "/public/assets/css/swiper.min.css"
import "/public/assets/css/aos.css"
import "/public/assets/css/main.css"
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'
import FloatingWhatsAppComponent from '../components/elements/FloatingWhatsApp'; // Import your FloatingWhatsApp component


const manrope = Manrope({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--manrope",
    display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--jakarta",
    display: 'swap',
})
export const metadata = {
    title: 'Ecomfidence - Ecommerce with Confidence',
    description: 'Ecomfidence is Your trusted partner in building, managing, and optimizing Shopify stores for success.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head><meta name="facebook-domain-verification" content="0ecru9hlqcyfzucoterpz3oalg0152" />
            <meta name='impact-site-verification' value='89e06ce3-c61f-4d14-9d0b-187aa5b5b8b8'></meta></head>
            <body className={`${manrope.variable} ${jakarta.variable} position-relative bg2-clr`}>
                {children}
                <FloatingWhatsAppComponent /> 
            </body>
        </html>
    )
}
