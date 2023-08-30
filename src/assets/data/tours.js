import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Taj Mahal",
    address: "Somewhere",
    city: "Agra",
    distance: 300,
    price: 999,
    maxGroupSize: 10,
    desc: "One of the most iconic monuments in the world, the Taj Mahal is a UNESCO World Heritage site and a symbol of eternal love. This white marble mausoleum was built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Jaipur",
    address: "Somewhere",
    city: "Rajasthan",
    distance: 400,
    price: 999,
    maxGroupSize: 8,
    desc: 'Known as the "Pink City," Jaipur is famous for its stunning architecture, vibrant markets, and historical forts. The Hawa Mahal, City Palace, and Amer Fort are must-visit attractions.',
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Aasi Ghat, Varansi",
    city: "Varansi",
    address: "Somewhere",
    distance: 500,
    price: 999,
    maxGroupSize: 8,
    desc: "Considered one of the oldest cities in the world, Varanasi is a spiritual hub for Hindus. The ghats along the Ganges River, where people perform rituals and ceremonies, offer a unique cultural experience.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Backwaters",
    city: "Kerala",
    distance: 500,
    address: "Somewhere",
    price: 999,
    maxGroupSize: 8,
    desc: "The serene backwaters of Kerala offer a tranquil experience as you cruise through interconnected lakes, canals, and rivers surrounded by lush greenery and traditional villages.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },{
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Beach",
    address: "Somewhere",
    city: "Goa",
    distance: 500,
    price: 999,
    maxGroupSize: 8,
    desc: "Known for its beautiful beaches, vibrant nightlife, and Portuguese-influenced architecture, Goa is a popular destination for both relaxation and adventure.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Khajuraho Temple",
    address: "Somewhere",
    city: "Madhya Pradesh",
    distance: 500,
    price: 999,
    maxGroupSize: 8,
    desc: "The Khajuraho Group of Monuments is a UNESCO site known for its intricately carved temples, depicting a range of themes including spirituality, sensuality, and daily life",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Rishikesh and Haridwar",
    city: "Uttrakhand",
    address: "Somewhere",
    distance: 500,
    price: 999,
    maxGroupSize: 8,
    desc: "These twin towns are located on the banks of the Ganges River and are known for their spiritual significance and adventure activities like yoga, meditation, and white-water rafting.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Mysore Palace, Mysore",
    city: "Karnataka",
    address: "Somewhere",
    distance: 500,
    price: 999,
    maxGroupSize: 8,
    desc: "Famous for its grand Mysore Palace, this city offers a blend of history, culture, and architecture. The Dussehra festival celebrated here is a spectacular event.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
