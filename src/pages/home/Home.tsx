import React, { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { Post } from "../../components/post/Post";
import { postSimulate } from "../../lib/postSimulate";

export type Post = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  dateCreated: string;
  image: string;
  contents: { model: string; image: string | null | string[]; text: string | null }[];
  author: {
    id: number | string;
    name: string;
    avatar: string;
    email: string;
  };
  interactions: { like: number }[];
  comments: {
    id: number;
    comment: string;
    user: {
      id: number;
      name: string;
      avatar: string;
    };
  }[];
};

export function Home() {
  const [urlParams, setUrlParams] = useSearchParams();
  const [postList, setPostList] = useState<Post[]>([]);
  const [viewCursor, setViewCursor] = useState(0);

  const [loading, setLoading] = useState(false);

  const observerRef = useRef(null);

  async function loadPosts() {
    if (loading) return;
    setLoading(true);

    // Simulando API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newPosts = Array.from({ length: 5 }, (_, index) => postSimulate());
    const posts = await Promise.all(newPosts);
    console.log(posts);
    setPostList((current) => [...current, ...posts!]);

    setLoading(false);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadPosts();
        }
      },
      // {
      //   rootMargin: "500px",
      // },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);
  // useEffect(() => {
  //   console.log(urlParams.entries());
  // }, [urlParams]);

  return (
    <main className="relative w-auto border-4 overflow-auto">

      {postList.map((post: Post) => (
        <Post key={post.id} post={post} />
      ))}
      <div className="h-20 w=full" ref={observerRef}>
        {loading && <p>Carregando...</p>}
      </div>
    </main>
  );
}
