import { Container } from "@/components/container";

const HomePage = () => {
  return (
    <div className="felx-col w-full pb-24">
      <Container>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="text-outline font-extrabold md:text-8xl">
              AI SuperPower
            </span>
            <span className="text-gray-500 font-extrabold">
              - A better way to
            </span>
            <br />
            improve your interview chances and skills
          </h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Boost your interview skills and increase your success rate with
            AI-driven insights. Discover a smarter way to prepare,practice and
            stand out.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
