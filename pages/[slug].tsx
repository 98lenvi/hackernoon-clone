import axios, { AxiosResponse } from "axios";
import { GetStaticProps } from "next";
import { PostInterface } from "../interfaces";
import Container from '../components/Container';
import StoryLayout from '../components/StoryLayout';
import Profile from "../components/Profile";
import Content from "../components/Content";
import StoryMeta from "../components/StoryMeta";
import StoryHeroBanner from "../components/StoryHeroBanner";
import Reactions from "../components/Reactions";
import StoryFooter from "../components/StoryFooter";
import RelatedStories from "../components/RelatedStories";
import StoryTags from "../components/StoryTags"
import StoryTopbar from "../components/StoryTopbar"
import React from "react";
import StoryHead from "../components/StoryHead";

interface PostComponentInterface extends PostInterface {
  notFound: boolean;
}

function Post(props: PostComponentInterface) {
  const { notFound, markup, profile, title, publishedAt, reactions, mainImage, relatedStories, tags } = props;
  if (notFound) return <div>Page not found</div>;

  return (
    <>
      <StoryHead post={props}/>
      <StoryTopbar title={title} profile={profile} />
      <Container>
        <StoryLayout>
          <h1>{title}</h1>
          <StoryMeta meta={{
            publishedAt,
            totalReads: 860,
            totalReactions: reactions?.total,
          }} />
          <StoryHeroBanner url={mainImage} />
          <Profile profile={profile} />
          <Content markup={markup} />
          <Reactions totalReactions={reactions?.total} />
          <StoryFooter profile={profile} />
          <RelatedStories stories={relatedStories} />
          <StoryTags tags={tags} />
        </StoryLayout>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug:
            "step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd",
        },
      },
    ],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { slug } = params;
    const res: AxiosResponse<PostInterface> = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/post?slug=${slug}`
    );
    return {
      props: res.data,
      revalidate: 1,
    };
  } catch (error) {
    console.log(JSON.stringify(error))
    return {
      props: {
        notFound: true,
      },
      revalidate: 1,
    };
  }
};

export default Post;
