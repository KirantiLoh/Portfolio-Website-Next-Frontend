import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

const BlogsPage = (props) => {
    const blogs = props.blogs ? props.blogs : []
    
    const router = useRouter()

    return (
        <div className='blog-page'>
            <Head>
                <title>Maurice Yang&apos;s Blogs</title>
            </Head>
            <Header/>
            <ul className="blogs">
                {blogs.map(blog => {
                    return (
                    <li className="blog" key={blog.id} onClick={() => router.push('/blogs/' + blog.slug)} >
                        <div className="image-container">
                        <Image src={'http://res.cloudinary.com/kirantiloh-bucket/' + blog.thumbnail} alt={blog.title} width={300} height={150} layout='responsive' objectFit='contain' />
                        </div>
                        <h1 className="blog-title">{blog.title}</h1>
                    </li>
                    )
                })}
            </ul>
            <Footer/>
        </div>
    )
}

export default BlogsPage

export async function getStaticProps() {
    let response = await fetch('https://maurice-portfolio-backend.herokuapp.com/api/blogs', {
        method:"GET",
        headers: {
            'Content-Type':'application/json'
        }
    })
    let data = await response.json()
    return {
        props: {
            blogs: data,
            revalidate: 15*60
        }
    }
  }