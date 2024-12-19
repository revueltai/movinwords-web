import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Content from '@/components/Content'
import Cta from '@/components/Cta'

export default function App() {
  return (
    <>
      <Header />

      <div className="flex flex-col gap-64 mx-auto max-w-1400">
        <main>
          <Hero />

          <div>
            <Content />
            <Cta />
            <Footer />
          </div>
        </main>
      </div>
    </>
  )
}
