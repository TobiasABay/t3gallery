import TopNav from "t3g/components/navbar";

const mockUrls = [
  "https://5bx9uoedh0.ufs.sh/f/Mza1PlXrJeZs0sXzUK6IYLeW1SfqOpcgQ9CFiyxMvKmk7ZAE",
  "https://5bx9uoedh0.ufs.sh/f/Mza1PlXrJeZsJUePxJQWRlba8ZHF05oO6Q9mSxyBqMYzvhrU",
  "https://5bx9uoedh0.ufs.sh/f/Mza1PlXrJeZsg3aoqNpwsX1cAquLn2Opdk0lPWCN3ZVb6yYa",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <TopNav />
      <div className="flex flex-wrap">
        {mockImages.map((image) => (
          <div key={image.id} className="w-1/4 p-4">
          <img src={image.url} alt="image" />
          </div>
        ))}
        </div>
    </main>
  );
}
