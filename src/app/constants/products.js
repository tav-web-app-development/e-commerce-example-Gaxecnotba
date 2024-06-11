import bottle1 from "../assets/img/bottle1.webp";
import coffe2 from "../assets/img/coffe2.jpg";
import paper3 from "../assets/img/paper3.jpg";
import pencil4 from "../assets/img/pencil4.jpg";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: bottle1,
    price: "$48",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: coffe2,
    price: "$35",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: paper3,
    price: "$89",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: pencil4,
    price: "$35",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];
export { products };
