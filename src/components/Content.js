import React from "react";

const Content = ({ styles }) => {
    const dummyPost = {
        title: `Here's a blog post title`,
        summary: `Space... The final frontier.
        These are the voyages of the starship Enterprise.
        Its continuing mission, to explore strange new worlds.
        To seek out new life and new civilizations.
        To boldly go where no one has gone before. `
    };

    // 20 dummy posts created here
    const posts = Array(20).fill(dummyPost);

    const contentStyle = {
        paddingTop: styles.topBarHeight + 20,
        paddingRight: 20,
        paddingBottom: styles.footerMenuHeight + 20,
        paddingLeft: 20
    };

    return(
        <div style={contentStyle}>
          {posts.map((post, i) => {
            return (
              <div key={i} style={{ marginBottom: 40 }}>
                <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
                <p>{post.summary}</p>
              </div>
            );
          })}
        </div>
      );
};

export default Content;