import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";

export default function LandingPage() {

  const carouselImages: string[] = [
    '/image 1.jpg',
    '/image 2.jpeg',
    '/image 3.jpg',
    '/image 4.jpg',
    '/image 5.jpg'
  ]
  return (
    <div>
      <Nav/>
      <div style={{ margin: "68px"}}>
        <HeroSection imageUrls={carouselImages} />
      </div>
    </div>
  );
}
