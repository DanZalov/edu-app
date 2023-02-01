import Head from 'next/head'
import Footer from './Footer'
import NavBar from './NavBar'

interface MainLayoutProps {
  children: JSX.Element
  title: string
}

export default function MainLayout({ children, title }: MainLayoutProps) {
  const containerWidthClass: string = 'w-[1000px]'
  return (
    <div className={`${containerWidthClass} mx-auto`}>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Website for educational purposes" />
        <meta
          name="keywords"
          content="next, nextjs, react, JavaScript, education, learning, chemistry, biology"
        />
        <meta name="author" content="Danil Zalialutdinov" />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
