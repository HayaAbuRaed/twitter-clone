import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../../../components/Loader";
import TweetsList from "../../../../components/TweetsList";
import useGetProfileTweets from "../../hooks/useGetProfileTweets";

const PostsPanel = () => {
  const { username } = useParams();

  const { data, isFetching } = useGetProfileTweets(username);

  if (isFetching) return <Loader />;

  if (!data) return null;

  const {
    data: {
      user: {
        result: {
          timeline_v2: {
            timeline: { instructions: tweets },
          },
        },
      },
    },
  } = data;

  return (
    <>
      {tweets[2] && (
        <TweetsList key={0} tweets={[tweets[1].entry]} pinned={true} />
      )}

      <TweetsList
        key={1}
        tweets={tweets[2] ? tweets[2].entries : tweets[1].entries}
      />
    </>
  );
};

export default PostsPanel;
