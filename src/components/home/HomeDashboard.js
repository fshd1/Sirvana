import Container from "../ui/Container";
import LatestNews from "./LatestNews";
import LatestPosts from "./LatestPosts";
import TournamentBanner from "./TournamentBanner";

function HomeDashboard() {
  return (
    <Container className="mt-6 lg:mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <TournamentBanner className="lg:col-start-1 lg-row-start-1" />
        <LatestPosts className="lg:col-start-2 lg:row-start-1 lg:row-span-2" />
        <LatestNews className="lg:col-start-1 lg:row-start-2" />
      </div>
    </Container>
  );
}

export default HomeDashboard;
