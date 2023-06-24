import { Comments, Hero, Loader, Section } from "../components";
import { useGetCommentsQuery } from "../redux/commentApi";

export const Home = () => {
  const { error, isLoading } = useGetCommentsQuery();

  return (
    <>
      <Section>
        {isLoading && <Loader />}
        {error && <p>Error</p>}
        <Hero
          title="What people are saying."
          subtitle="Feedback from our customers."
        />
        <Comments />
      </Section>
    </>
  );
};
