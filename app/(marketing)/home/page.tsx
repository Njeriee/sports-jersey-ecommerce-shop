import HeroSection from "@/components/HeroSection";

export default function LandingPage() {

    const carouselImages:string[] =[
        '/image 1.jpg',
        '/image 2.jpeg',
        '/image 3.jpg',
        '/image 4.jpg',
        '/image 5.jpg'
    ]
  return (
    <div style={{margin:"72px"}}>
        <HeroSection imageUrls = {carouselImages}/>
    </div>
  );
}
