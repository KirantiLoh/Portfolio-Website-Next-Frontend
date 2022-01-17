import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home(props) {

  return (
    <div className="App">
        <div id="home">
          <Header/>
          <Hero/>
          <About/>
          <Project projects={props.projects}/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  );
}


export async function getStaticProps() {
  let response = await fetch('https://maurice-portfolio-backend.herokuapp.com/api/projects', {
      method:"GET",
      headers: {
          'Content-Type':'application/json'
      }
  })
  let data = await response.json()
  return {
      props: {
          projects: data
      }
  }
}
