const sampleData = {
  products: [
    {
      "name": "6ES7 193-6BP00-0DA0",
      "slug": "6ES7193-6BP00-0DA0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP BU15-P16+A0+2D",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9486.webp"
      ],
      "price": 16.8,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 121,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP BU15-P16+A0+2D Sealed <a href=\"https://eusens.com/crouzet-mas5/\" target=\"_blank\">crouzet mas5</a>\n\n\n<a href=\"https://eusens.com/6sl3040-1ma01-0aa0/\" target=\"_blank\">6sl3040 1ma01 0aa0</a>",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 214-1AG40-0XB0",
      "slug": "6ES7214-1AG40-0XB0",
      "category": "Siemens",
      "description": "SIMATIC S7-1200 CPU 1214C DC/DC/DC",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9445.webp"
      ],
      "price": 237.38,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 37,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-1200 CPU 1214C DC/DC/DC Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 131-6BH01-0BA0",
      "slug": "6ES7131-6BH01-0BA0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP DI 16x 24VDC ST",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9465.webp"
      ],
      "price": 54.02,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 38,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP DI 16x 24VDC ST Sealed,<a href=\"https://eusens.com/crouzet-mas5/\" target=\"_blank\">crouzet mas5</a>\n\n\n<a href=\"https://eusens.com/6sl3040-1ma01-0aa0/\" target=\"_blank\">6sl3040 1ma01 0aa0</a>",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 193-6AR00-0AA0",
      "slug": "6ES7193-6AR00-0AA0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP BA 2x RJ45",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9449.webp"
      ],
      "price": 33.44,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 120,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP BA 2x RJ45 Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 193-6BP00-0BA0",
      "slug": "6ES7193-6BP00-0BA0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP BU15-P16+A0+2B",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9448.webp"
      ],
      "price": 9.6,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 575,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP BU15-P16+A0+2B Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6AV2 124-0GC01-0AX0",
      "slug": "6AV2124-0GC01-0AX0",
      "category": "Siemens",
      "description": "SIMATIC HMI TP700 Comfort",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9464.webp"
      ],
      "price": 631.12,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 31,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC HMI TP700 Comfort Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6AV2 124-0MC01-0AX0",
      "slug": "6AV2124-0MC01-0AX0",
      "category": "Siemens",
      "description": "SIMATIC HMI TP1200 Comfort",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9487.webp"
      ],
      "price": 1489.28,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 20,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC HMI TP1200 Comfort Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6AV2 123-2GB03-0AX0",
      "slug": "6AV2123-2GB03-0AX0",
      "category": "Siemens",
      "description": "SIMATIC HMI KTP700 Basic",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9468.webp"
      ],
      "price": 372.89,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 89,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC HMI KTP700 Basic Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 132-6BH01-0BA0",
      "slug": "6ES7132-6BH01-0BA0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP DQ 16x 24VDC/0.5A ST",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9491.webp"
      ],
      "price": 63.0,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 227,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP DQ 16x 24VDC/0.5A ST Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 134-6GD01-0BA1",
      "slug": "6ES7134-6GD01-0BA1",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP AI 4xI 2-/4-wire ST",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9422.webp"
      ],
      "price": 101.99,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 12,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP AI 4xI 2-/4-wire ST Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6GK1 901-1BB10-2AA0",
      "slug": "6GK1901-1BB10-2AA0",
      "category": "Siemens",
      "description": "SIMATIC NET IE FastConnect RJ45 Plug 180\u00b0",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9442.webp"
      ],
      "price": 7.79,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 1,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC NET IE FastConnect RJ45 Plug 180\u00b0 New in open package",
      "conditions": "New in open package"
    },
    {
      "name": "6ES7 135-6HD00-0BA1",
      "slug": "6ES7135-6HD00-0BA1",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP AQ 4xU/I ST",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9441.webp"
      ],
      "price": 125.77,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 68,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP AQ 4xU/I ST Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 155-6AU01-0CN0",
      "slug": "6ES7155-6AU01-0CN0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP IM 155-6 PN/2 HF",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9483.webp"
      ],
      "price": 160.72,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 52,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP IM 155-6 PN/2 HF Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 331-7KF02-0AB0",
      "slug": "6ES7331-7KF02-0AB0",
      "category": "Siemens",
      "description": "SIMATIC S7-300 SM 331 8 AI 9/12/14 BIT",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9451.webp"
      ],
      "price": 515.7,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 41,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-300 SM 331 8 AI 9/12/14 BIT Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 131-6BF01-0BA0",
      "slug": "6ES7131-6BF01-0BA0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP DI 8x 24VDC ST",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9447.webp"
      ],
      "price": 30.55,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 81,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP DI 8x 24VDC ST Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 134-6HD01-0BA1",
      "slug": "6ES7134-6HD01-0BA1",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP AI 4xU/I 2-wire ST",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9484.webp"
      ],
      "price": 68.98,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 2,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP AI 4xU/I 2-wire ST New without package",
      "conditions": "New without package"
    },
    {
      "name": "6ES7 134-6JD00-0CA1",
      "slug": "6ES7134-6JD00-0CA1",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP AI 4xRTD/TC HF",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9467.webp"
      ],
      "price": 113.19,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 115,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP AI 4xRTD/TC HF Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 136-6BA00-0CA0",
      "slug": "6ES7136-6BA00-0CA0",
      "category": "Siemens",
      "description": "SIMATIC DP F-DI 8x24VDC HF",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9488.webp"
      ],
      "price": 132.97,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 12,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC DP F-DI 8x24VDC HF Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 136-6BA01-0CA0",
      "slug": "6ES7136-6BA01-0CA0",
      "category": "Siemens",
      "description": "SIMATIC DP F-DI 8x24VDC HF",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9466.webp"
      ],
      "price": 86.89,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 2,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC DP F-DI 8x24VDC HF New without package",
      "conditions": "New without package"
    },
    {
      "name": "6ES7 155-6AA01-0BN0",
      "slug": "6ES7155-6AA01-0BN0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP IM 155-6 PN ST",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9489.webp"
      ],
      "price": 172.48,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 25,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP IM 155-6 PN ST Sealed",
      "conditions": "Sealed"
    },
  ],
};

export default sampleData;
