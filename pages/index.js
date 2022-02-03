import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Home(props) {

  return (
    <div className="App">
      <Head>
        <title>Maurice Yang</title>
          <meta charSet="UTF-8"/>
          <meta name="description" content="Maurice Yang is a fullstack web developer who specializes in developing websites using React JS and Django, constantly finding a way to improve both my technical skills and teamwork with other people. I&apos;m passionate to learn about all the wonderful new technologies. Had experience in deploying websites both in Heroku and Netlify."/>
          <meta name="keywords" content="Maurice Yang"/>
          <meta name="author" content="Maurice Yang"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
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
          projects: data,
          revalidate: 5*60,
      }
  }
}
