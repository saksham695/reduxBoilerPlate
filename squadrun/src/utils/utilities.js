export const priceRangeHeaders = [
  {
    priceRange: "$100K-$200K",
    planIndex: 0,
  },
  {
    priceRange: "$200K-$300K",
    planIndex: 1,
  },
  {
    priceRange: "$300K-$400K",
    planIndex: 2,
  },
  {
    priceRange: "$400K-$500K",
    planIndex: 3,
  },
  {
    priceRange: "$500K+",
    planIndex: 4,
  },
];

export const planDetails = [
  {
    0: [
      {
        leadsPerMonth: 20,
        pricePerLead: 69,
        platformFee: 299,
        finalPrice: 1679,
      },
      {
        leadsPerMonth: 40,
        pricePerLead: 67,
        platformFee: 599,
        finalPrice: 3279,
      },
      {
        leadsPerMonth: 60,
        pricePerLead: 65,
        platformFee: 699,
        finalPrice: 4599,
      },
      {
        leadsPerMonth: 80,
        pricePerLead: 63,
        platformFee: 699,
        finalPrice: 5839,
      },
      {
        leadsPerMonth: "",
        pricePerLead: "",
        platformFee: "",
        finalPrice: "",
      },
    ],
  },
  {
    1: [
      {
        leadsPerMonth: 20,
        pricePerLead: 79,
        platformFee: 299,
        finalPrice: 1879,
      },
      {
        leadsPerMonth: 40,
        pricePerLead: 77,
        platformFee: 599,
        finalPrice: 3679,
      },
      {
        leadsPerMonth: 60,
        pricePerLead: 74,
        platformFee: 699,
        finalPrice: 5139,
      },
      {
        leadsPerMonth: 80,
        pricePerLead: 72,
        platformFee: 699,
        finalPrice: 6559,
      },
      {
        leadsPerMonth: "",
        pricePerLead: "",
        platformFee: "",
        finalPrice: "",
      },
    ],
  },
  {
    2: [
      {
        leadsPerMonth: 20,
        pricePerLead: 99,
        platformFee: 299,
        finalPrice: 2279,
      },
      {
        leadsPerMonth: 40,
        pricePerLead: 96,
        platformFee: 599,
        finalPrice: 4439,
      },
      {
        leadsPerMonth: 60,
        pricePerLead: 93,
        platformFee: 699,
        finalPrice: 6279,
      },
      {
        leadsPerMonth: 80,
        pricePerLead: 90,
        platformFee: 699,
        finalPrice: 7999,
      },
      {
        leadsPerMonth: "",
        pricePerLead: "",
        platformFee: "",
        finalPrice: "",
      },
    ],
  },
  {
    3: [
      {
        leadsPerMonth: 20,
        pricePerLead: 109,
        platformFee: 299,
        finalPrice: 2479,
      },
      {
        leadsPerMonth: 40,
        pricePerLead: 106,
        platformFee: 599,
        finalPrice: 4839,
      },
      {
        leadsPerMonth: 60,
        pricePerLead: 102,
        platformFee: 699,
        finalPrice: 6819,
      },
      {
        leadsPerMonth: 80,
        pricePerLead: 99,
        platformFee: 799,
        finalPrice: 8719,
      },
      {
        leadsPerMonth: "",
        pricePerLead: "",
        platformFee: "",
        finalPrice: "",
      },
    ],
  },
  {
    4: [
      {
        leadsPerMonth: 20,
        pricePerLead: 129,
        platformFee: 299,
        finalPrice: 2879,
      },
      {
        leadsPerMonth: 40,
        pricePerLead: 125,
        platformFee: 599,
        finalPrice: 5599,
      },
      {
        leadsPerMonth: 60,
        pricePerLead: 121,
        platformFee: 699,
        finalPrice: 7959,
      },
      {
        leadsPerMonth: 80,
        pricePerLead: 117,
        platformFee: 799,
        finalPrice: 10159,
      },
      {
        leadsPerMonth: "",
        pricePerLead: "",
        platformFee: "",
        finalPrice: "",
      },
    ],
  },
];

export const buttonTitles = [
  { name: "Start Your Trial" },
  { name: "Start Your Trial" },
  { name: "Start Your Trial" },
  { name: "Start Your Trial" },
  { name: "Get In Touch" },
];

export const getPlanDetails = (selectedIndex) => {
  return typeof selectedIndex == "number"
    ? Object.values(planDetails[selectedIndex])
    : [];
};

export const SESSION_KEY = "PRICE_RANGE_INDEX";
