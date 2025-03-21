// app/api/states/route.js

export async function GET() {
    const statesData = {
      Maharashtra: [
        {
          name: "Gateway of India",
          description: "A historic monument overlooking the Arabian Sea.",
          location: "Mumbai",
          image: "/images/gateway-of-india.jpg", // Add image path
        },
        {
          name: "Ajanta and Ellora Caves",
          description: "Ancient rock-cut caves with intricate sculptures.",
          location: "Aurangabad",
          image: "/images/ellora-caves.jpg", // Add image path

        },
        {
          name: "Mahabaleshwar",
          description: "A beautiful hill station known for its scenic views and strawberry farms.",
          location: "Satara",
          image: "/images/Mahabaleshwar.jpg", // Add image path

        },
        {
          name: "Shaniwar Wada",
          description: "A historical fortification in the city of Pune.",
          location: "Pune",
          image: "/images/Shaniwaarwada.jpg", // Add image path

        },
      ],
      Rajasthan: [
        {
          name: "Hawa Mahal",
          description: "A palace with numerous small windows, known as the 'Palace of Winds'.",
          location: "Jaipur",
          image: "/images/hawa-mahal.jpeg", // Add image path

        },
        {
          name: "Mehrangarh Fort",
          description: "A massive fort overlooking the city of Jodhpur.",
          location: "Jodhpur",
          image: "/images/Mehrangarh-Fort.webp", // Add image path
        },
        {
          name: "Udaipur City Palace",
          description: "A grand palace complex on the banks of Lake Pichola.",
          location: "Udaipur",
          image: "/images/city-palace.jpg", // Add image path
        },
        {
          name: "Jaisalmer Fort",
          description: "A massive fort built of yellow sandstone.",
          location: "Jaisalmer",
          image: "/images/Jaisalmer-Fort.avif", // Add image path
        },
      ],
      Karnataka: [
        {
          name: "Mysore Palace",
          description: "A magnificent palace, the official residence of the Wadiyar dynasty.",
          location: "Mysore",
          image: "/images/Mysore-Palace.jpg", // Add image path
        },
        {
          name: "Hampi",
          description: "An ancient village with ruins of temples and monuments.",
          location: "Hospet",
          image: "/images/Hampi.jpeg", // Add image path
        },
        {
          name: "Jog Falls",
          description: "One of the highest plunge waterfalls in India.",
          location: "Shimoga",
             image: "/images/Jog-Falls.jpg", // Add image path
        },
        {
          name: "Gokarna",
          description: "A small temple town with beautiful beaches.",
          location: "Uttara Kannada",
          image: "/images/Gokarna.jpg", // Add image path
        },
      ],
    };
  
    return Response.json(statesData);
  }