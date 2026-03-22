import StatCard from "../components/cards/Statcard";
import ContentList from "../components/content/Contentlist";
import { stats, contentData } from "../data/mockdata";
import Header from "../components/common/Header";

const Dashboard = () => {
  const bestPost = [...contentData].sort((a, b) => b.likes - a.likes)[0];

  return (
    <div className="space-y-10">
      <Header />

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <StatCard key={index} {...item} index={index} />
        ))}
      </div>

      {/* Highlight */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 p-6 rounded-2xl">
        <h2 className="text-lg mb-2">🔥 Top Performing Content</h2>
        <p className="text-xl font-semibold">{bestPost.title}</p>
        <p className="text-gray-400 text-sm">
          {bestPost.likes} likes • {bestPost.views} views
        </p>
      </div>

      <ContentList />
    </div>
  );
};

export default Dashboard;
