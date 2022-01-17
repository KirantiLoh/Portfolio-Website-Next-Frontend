import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Head from 'next/head'
import Image from 'next/image'

const BlogPage = (props) => {

    const blog = props.blog

    return (
        <div className='blog-page'>
            <Head>
                <title>Maurice Yang&apos;s Blog | {blog?.title}</title>
            </Head>
            <Header/>
            <main>
                <h1 className="title">{blog?.title}</h1>
                <div className="image-container">
                    <Image src={'http://res.cloudinary.com/kirantiloh-bucket/' + blog?.thumbnail} alt={blog?.title} width={600} height={250} layout='responsive' objectFit='contain' />
                </div>
                <p className="content" dangerouslySetInnerHTML={{__html : blog?.content.replace(/(?:\r\n|\r|\n)/g, "<br>")}}>
                </p>
            </main>
            <Footer/>
        </div>
    )
}

export default BlogPage

export async function getStaticPaths() {
    let response = await fetch("https://maurice-portfolio-backend.herokuapp.com/api/blogs/slugs", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    let data = await response.json()
    const paths = data.map(blog => {
        return {
            params: {slug: blog.slug}
        }
    })
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({params}) {
    let response = await fetch(`https://maurice-portfolio-backend.herokuapp.com/api/blogs/${params.slug}`, {
        method: "GET",
        headers: {
            "Content-Type" : 'application/json'
        }
    })
    let data = await response.json()
    return {
        props: {
            blog: data
        }
    }
}