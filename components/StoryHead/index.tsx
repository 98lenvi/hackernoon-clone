import { PostInterface } from "../../interfaces";
import Head from "../Head";
import { BrandLogo } from "../../assets"

const defaultImage = {
    "hn-logo.png" : {
        width: 100,
        height: 100
    }
}

const JsonLdData = (post: PostInterface) => ({
    "@context": "http://schema.org",
    "@type": "TechArticle",
    //"dependencies": post?.title?.toString(),
    //"proficiencyLevel": "Beginner",
    "author": post?.profile?.displayName,
    "datePublished": post?.publishedAt,
    //"datemodified": post?.publishedAt,
    "mainEntityOfPage": "True",
    "headline": post?.title,
    "image": {
    "@type": "imageObject",
    "url": `https://hackernoon.com/${Object.keys(post?.images || defaultImage)[0]}`,
    "height": post?.images?.[Object.keys(post?.images || defaultImage)[0]]?.height,
    "width": post?.images?.[Object.keys(post?.images || defaultImage)[0]]?.width
    },
    "publisher": {
    "@type": "Organization",
    "name": "Hackernoon",
    "logo": {
    "@type": "imageObject",
    "url": BrandLogo
    }
    },
    "wordCount": post.wordCount,
    })

function StoryHead({
    post
}: {
    post: PostInterface
}) {
    return (<Head>
        <meta name="description" content={post?.excerpt}></meta>
        <meta property="og:title" content={post?.title}></meta>
        <meta property="og:description" content={post?.excerpt}></meta>
        <meta property="og:type" content="website"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:creator" content={post?.profile?.twitter || '@hackernoon'}></meta>
        <meta name="twitter:title" content={post?.title}></meta>
        <meta name="twitter:image" content={post?.mainImage}></meta>
        <meta name="twitter:description" content={post?.excerpt}></meta>
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_API_BASE}/${post?.slug}`}></meta>
        <meta property="og:image" content={post?.mainImage}></meta>
        <meta property="og:site_name" content={`${process.env.NEXT_PUBLIC_API_BASE}`}></meta>
        <meta name="image" content={post?.mainImage}></meta>
        <meta name="keywords" content={post?.tags?.toString()}></meta>
        <script 
          type="application/ld+json" 
        >
        {JSON.stringify(JsonLdData(post))}
        </script>
    </Head>)
}

export default StoryHead