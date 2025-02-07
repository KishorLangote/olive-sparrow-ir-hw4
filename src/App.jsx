import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function App() {
 

  return (
    <>
    <Header />
    <main className='container py-4'>
      <section>
        <img src="https://placehold.co/800x400?text=Employees+Smilling" alt="smilling image" className='img-fluid' />
      </section>

      <section className='py-5'>
        <h2>Our Employees</h2>
        <p>Meet our dedicated team of professionals who work tirelessly to achieve our company;s goals.</p>
        <a className='btn btn-primary' to="/employee" >View Employees</a>
      </section>

      <section className='py-5'>
        <h2>Company Report</h2>
        <p>Explore our latest financial report to gain insights into our company's performance and growth.</p>
        <a className='btn btn-primary' to="/report" >View Report</a>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default App
