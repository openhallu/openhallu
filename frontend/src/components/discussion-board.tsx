"use client";

import { useState } from "react";

type DiscussionBoardProps = {
  paperTitle: string;
  seedPrompt: string;
};

type Post = {
  author: string;
  body: string;
};

export function DiscussionBoard({
  paperTitle,
  seedPrompt,
}: DiscussionBoardProps) {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const isDisabled = body.trim().length === 0;

  function submitPost() {
    const cleanAuthor = author.trim() || "Anonymous";
    const cleanBody = body.trim();

    if (!cleanBody) {
      return;
    }

    setPosts((current) => [
      {
        author: cleanAuthor,
        body: cleanBody,
      },
      ...current,
    ]);
    setBody("");
  }

  return (
    <div className="paper-note rounded-[24px] p-4">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#6d7d3f]">
        Discussion board
      </p>
      <p className="mt-2 text-sm leading-6 text-[#5b574a]">
        {seedPrompt}
      </p>
      <div className="mt-4 grid gap-3">
        <input
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          placeholder="Your name"
          className="paper-input rounded-2xl px-4 py-3 text-sm text-[#153330] outline-none transition placeholder:text-[#8a826d]"
        />
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder={`Share reproduction notes, visual examples, or benchmark observations for ${paperTitle}.`}
          rows={4}
          className="paper-input rounded-2xl px-4 py-3 text-sm text-[#153330] outline-none transition placeholder:text-[#8a826d]"
        />
        <button
          type="button"
          onClick={submitPost}
          disabled={isDisabled}
          className="paper-button-dark w-fit disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
        >
          Publish discussion
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[rgba(153,126,67,0.3)] bg-white/60 p-4 text-sm leading-6 text-[#5f5a49]">
            No posts yet. Start with reproduction setup, benchmark notes, or
            visual failure cases.
          </div>
        ) : null}
        {posts.map((post, index) => (
          <div
            key={`${post.author}-${index}`}
            className="paper-panel rounded-2xl p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#667c44]">
              {post.author}
            </p>
            <p className="mt-2 text-sm leading-6 text-[#535f55]">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
