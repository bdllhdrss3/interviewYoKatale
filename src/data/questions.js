const quizData = [
  {
    qtn: "Which food contains high levels of antioxidants?",
    values: [
      {
        image:
          "https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Blueberries",
        no: "A",
      },
      {
        image:
          "https://images.pexels.com/photos/3298064/pexels-photo-3298064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Spinach",
        no: "B",
      },
    ],
    answers: ["A", "B"],
    correctAnswer: "A",
  },
  {
    qtn: "Which food is a good source of omega-3 fatty acids?",
    values: [
      {
        image:
          "https://images.pexels.com/photos/6149078/pexels-photo-6149078.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Salmon",
        no: "A",
      },
      {
        image:
          "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Chicken",
        no: "B",
      },
    ],
    answers: ["A", "B"],
    correctAnswer: "B", // Ensure Salmon is not 'B'
  },
  {
    qtn: "Which food is rich in iron?",
    values: [
      {
        image:
          "https://media.istockphoto.com/id/172876004/photo/banana-wallpaper.jpg?b=1&s=612x612&w=0&k=20&c=5U7GItR7BVTfNQM1MUaxf3lsb3W3lJaNYFt0mpH0_Rg=",
        name: "Banana",
        no: "A",
      },
      {
        image:
          "https://images.pexels.com/photos/3298064/pexels-photo-3298064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Spinach",
        no: "B",
      },
    ],
    answers: ["A", "B"],
    correctAnswer: "A", // Ensure Spinach is not 'B'
  },
  {
    qtn: "Which food is a good source of vitamin C?",
    values: [
      {
        image:
          "https://media.istockphoto.com/id/172876004/photo/banana-wallpaper.jpg?b=1&s=612x612&w=0&k=20&c=5U7GItR7BVTfNQM1MUaxf3lsb3W3lJaNYFt0mpH0_Rg=",
        name: "Banana",
        no: "A",
      },
      {
        image:
          "https://images.pexels.com/photos/207085/pexels-photo-207085.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Orange",
        no: "B",
      },
    ],
    answers: ["A", "B"],
    correctAnswer: "B", // Ensure Orange is not 'B'
  },
  {
    qtn: "Which food is a whole grain?",
    values: [
      {
        image:
          "https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Brown Rice",
        no: "A",
      },
      {
        image:
          "https://images.pexels.com/photos/8251401/pexels-photo-8251401.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "White Rice",
        no: "B",
      },
    ],
    answers: ["A", "B"],
    correctAnswer: "A", // Ensure Brown Rice is not 'B'
  },
  {
    qtn: "Which food is a good source of calcium?",
    values: [
      {
        image:
          "https://images.pexels.com/photos/306801/pexels-photo-306801.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Cheese",
        no: "A",
      },
      {
        image:
          "https://images.pexels.com/photos/2198626/pexels-photo-2198626.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Yogurt",
        no: "B",
      },
    ],
    answers: ["A", "B"],
    correctAnswer: "B", // Ensure Yogurt is not 'B'
  },
  {
    qtn: "Which food is rich in vitamin A?",
    values: [
      {
        image:
          "https://images.pexels.com/photos/54082/carrots-vegetables-food-orange-54082.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Carrots",
        no: "A",
      },
      {
        image:
          "https://images.pexels.com/photos/9969267/pexels-photo-9969267.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=1",
        name: "Pumpkin",
        no: "B",
      },
    ],
    answers: ["A", "B"],
    correctAnswer: "A", // Ensure Carrots is not 'B'
  },
  {
    qtn: "Which food is a good source of protein?",
    values: [
      {
        image:
          "https://images.pexels.com/photos/12884006/pexels-photo-12884006.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Fish",
        no: "A",
      },
      {
        image:
          "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Chicken",
        no: "B",
      },
    ],
    answers: ["A", "B"],
    correctAnswer: "B", // Ensure Chicken is not 'B'
  },
  {
    qtn: "Which food is rich in healthy fats?",
    values: [
      {
        image:
          "https://media.istockphoto.com/id/183338365/photo/avocados-with-pit.jpg?b=1&s=612x612&w=0&k=20&c=smS_TJ7Czi64lz-Pp-2zQMpJUgtpBiJV3CdRE0mqe9w=",
        name: "Avocado",
        no: "A",
      },
      {
        image:
          "https://images.pexels.com/photos/3997459/pexels-photo-3997459.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Nuts",
        no: "B",
      },
    ],
    answers: ["A", "B"],
    correctAnswer: "A", // Ensure Avocado is not 'B'
  },
  {
    qtn: "Which food is a good source of fiber?",
    values: [
      {
        image:
          "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Bread",
        no: "A",
      },
      {
        image:
          "https://images.pexels.com/photos/1192037/pexels-photo-1192037.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Oatmeal",
        no: "B",
      },
    ],
    answers: ["A", "B"],
    correctAnswer: "B", // Ensure Oatmeal is not 'B'
  },
  {
    qtn: "Which food is rich in potassium?",
    values: [
      {
        image:
          "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Banana",
        no: "A",
      },
      {
        image:
          "https://images.pexels.com/photos/1937743/pexels-photo-1937743.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Orange",
        no: "B",
      },
    ],
    answers: ["A", "B"],
    correctAnswer: "A", // Ensure Banana is not 'B'
  },
  {
    qtn: "Which food is a good source of vitamin K?",
    values: [
      {
        image:
          "https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Spinach",
        no: "A",
      },
      {
        image:
          "https://media.istockphoto.com/id/1069106266/photo/falling-broccoli-isolated-on-white-background-clipping-path-full-depth-of-field.jpg?b=1&s=612x612&w=0&k=20&c=RsB1XYhGQscJU773uTHF-YRD2Ge4z7V66lFzqz89n6c=",
        name: "Broccoli",
        no: "B",
      },
    ],
    answers: ["A", "B"],
    correctAnswer: "A", // Ensure Broccoli is not 'B'
  },
  {
    qtn: "Which food is a good source of iron?",
    values: [
      {
        image:
          "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Red Meat",
        no: "A",
      },
      {
        image:
          "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Chicken",
        no: "B",
      },
    ],
    answers: ["A", "B"],
    correctAnswer: "A", // Ensure Red Meat is not 'B'
  },
  // Add more quiz questions here
];

export default quizData;
