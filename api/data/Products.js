const products = [
    {
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52c951e30dcb4ff1bfdfd053405a6f75_9366/Samba_Shoes_Green_IG1243_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4.5,
        numReview: 6,
      },
    
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee357a7a8aef48d9b295af9e00205eec_9366/Forum_Low_Shoes_White_IE7165_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 0,
        rating: 4,
        numReview: 6,
      },
    
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a655b830a086442aa041af9c009fcdfc_9366/Stan_Smith_Shoes_White_FZ6429_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/584dcc48a1734ca4baf314572273e64e_9366/Stan_Smith_Crepe_Shoes_White_IG5531_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7e1026dbe8248fbbc31ae02002e1a62_9366/Superstar_ADV_Shoes_White_GW6930_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aebc2dba24cd456a9baaafad0019bac3_9366/Forum_84_Low_ADV_Shoes_Black_IG7581_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/418d83e0c655438da814ad1d00eccd79_9366/CUFFED_POM_Black_GQ8103_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/26c21c4b8bcb43d096caaf330079978b_9366/Designed_for_Training_HIIT_Backpack_Grey_HT2441_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7220fd98945942b0a2ceafa50188fc5c_9366/Favorites_Backpack_Turquoise_HY3000_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
    
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1fbc9be735c54edbbb490628e3804bda_9366/Yoga_Tote_Bag_Pink_HZ5945_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/23092e0453ce4f8085c2ad47018102bb_9366/Superlite_Hat_Black_EX6700_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52c951e30dcb4ff1bfdfd053405a6f75_9366/Samba_Shoes_Green_IG1243_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52c951e30dcb4ff1bfdfd053405a6f75_9366/Samba_Shoes_Green_IG1243_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52c951e30dcb4ff1bfdfd053405a6f75_9366/Samba_Shoes_Green_IG1243_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52c951e30dcb4ff1bfdfd053405a6f75_9366/Samba_Shoes_Green_IG1243_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52c951e30dcb4ff1bfdfd053405a6f75_9366/Samba_Shoes_Green_IG1243_01_standard.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 6,
      },
]

module.exports = products;