import Carousel from "@/components/Carousel";

export default function LandingPage() {

    const carouselImages:string[] =[
        '/image 1.jpg',
        '/image 2.jpeg',
        '/image 3.jpg',
        '/image 4.jpg',
        '/image 5.jpg'
    ]
  return (
    <div>
        <Carousel imageUrls = {carouselImages}/>
    </div>
  );
}
