import { defineStore } from "pinia";

export const useProduct = defineStore("product", {
  state: () => {
    return {
      products: [
        {
          id: 1,
          name: "IdeaPad Gaming 3 15ACH6 - Z",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          img: "https://dkstatics-public.digikala.com/digikala-products/98f214fd74da302ae4a301a11b48affac30b9bdd_1671292913.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
          price: "844.28",
          priceInt: 844.28,
          brand: "Lenovo",
        },
        {
          id: 2,
          name: "IdeaPad Gaming 3-15LHU6 - Z",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          img: "https://dkstatics-public.digikala.com/digikala-products/6bd2171139ca42a1db946f8b6e3564dab3276f16_1671467642.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
          price: "680.20",
          priceInt: 680.2,
          brand: "Lenovo",
        },
        {
          id: 3,
          name: "TUF Gaming F15 FX506HC-HN002W",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          img: "https://dkstatics-public.digikala.com/digikala-products/2b6ad3327c2bf7bf9a1a4f7b93e44b7e2cce38c4_1671298126.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
          price: "763.53",
          priceInt: 763.53,
          brand: "ASUS",
        },
        {
          id: 4,
          name: "TUF Gaming F17 FX706HM-HX100",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          img: "https://dkstatics-public.digikala.com/digikala-products/7949766b96006068000cf670a86731cd74d1e8b7_1671298044.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
          price: "856.52",
          priceInt: 856.52,
          brand: "ASUS",
        },
        {
          id: 5,
          name: "TUF Gaming F15 FX506LH-HN004",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          img: "https://dkstatics-public.digikala.com/digikala-products/8d7cac6e6a683745e612f78b832d90c0c88804fe_1671470675.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
          price: "931.16",
          priceInt: 931.16,
          brand: "ASUS",
        },
        {
          id: 6,
          name: "TUF Gaming ROG Strix G512LI",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          img: "https://meghdadit.com/_image.ashx?i=%252ffiles%252fproduct%252f1ivhczjnnbfpi5c7t5jkekesiggregrd742th5hakuzqq54ivy%255blarge%255d.png",
          price: "1,095.10",
          priceInt: 1095.1,
          brand: "ASUS",
        },
        {
          id: 7,
          name: "VivoBook Pro 15 OLED K3500PH",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          img: "https://meghdadit.com/_image.ashx?i=%252ffiles%252fproduct%252ffre11sax7b7tmh2ln4bjrutn6jiuouriybqtf3on2bl36bco30%255blarge%255d.jpg",
          price: "783.91",
          priceInt: 783.91,
          brand: "ASUS",
        },
        {
          id: 8,
          name: "TUF Gaming ROG Strix SCAR 17 G733ZW",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          img: "https://meghdadit.com/_image.ashx?i=%252ffiles%252fproduct%252fytets3hwuuiurzqexl3mzo4pg5o4u64najiangti7785aq52cp%255blarge%255d.jpg",
          price: "2,838.85",
          priceInt: 2838.85,
          brand: "ASUS",
        },
      ],
    };
  },
  getters: {
    allProduct: (state) => state.products,
  },
});
