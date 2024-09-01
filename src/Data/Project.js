import chatapp from '../assets/images/projects/CNATAPP.png';
import ecommerce from '../assets/images/projects/ecom.jpg';
import dreamCar from '../assets/images/projects/dreamCar.png';

const project = [
  {
    name: 'E-commerce',
    photo: ecommerce, 
    category: 'MERN Stack',
    text: 'The E-commerce project is a robust online shopping platform developed using the MERN stack. It includes features for browsing products, adding items to the cart, and securely completing purchases. The application integrates MongoDB for data storage, React for the frontend, and Node.js with Express.js for the backend.',
    tech: ['HTML', 'tailwind', 'JavaScript', 'React', 'node', 'Express', 'MongoDB'],
    property: ['Product Management: Admin interface for adding, editing, and deleting products',
      'User Authentication: Secure login and registration process with JWT tokens',
      'Shopping Cart Functionality: Adding products to the cart and managing cart items',
      'Order Management: Complete order processing including payment integration',
      'Responsive Design: Using Tailwind CSS for responsive and modern UI design'
    ],
    date: '2023',
    link: 'https://github.com/Hemnarayan123/MERN_ECOM',
    liveLink: 'https://xepxem-ecom-client.vercel.app/',
    learn: ['E-commerce Development: Understanding the architecture and development of online shopping platforms',
      'Payment Integration: Integrating payment gateways for secure online transactions',
      'State Management: Using Redux or Context API for managing application state'
    ]
  },
  {
    name: 'ChatApp',
    photo: chatapp, 
    category: 'MERN Stack',
    text: 'The ChatApp project is a real-time chat application built using the MERN stack. It allows users to create accounts, join chat rooms, and exchange real-time messages. The application leverages WebSocket technology for instant messaging and MongoDB for data storage.',
    tech: ['HTML', 'tailwind', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB'],
    property: ['User Authentication: Secure login and registration functionality',
      'Real-time Messaging: WebSocket integration for instant message delivery',
      'Chat Room Management: Creating and joining chat rooms for group conversations',
      'Message History: Storing and retrieving chat history from MongoDB',
      'Responsive Design: Using Tailwind CSS for responsive and modern UI design'
    ],
    date: '2023',
    link: 'https://github.com/Hemnarayan123/chatApp',
    liveLink: 'https://chatweb-81q3.onrender.com/',
    learn: ['Real-time Communication: Implementing WebSocket for bi-directional communication',
      'User Experience: Enhancing user interactions and interface design for a seamless chat experience',
      'Scalability: Handling concurrent users and optimizing performance for real-time applications'
    ]
  },

  {
    name: 'Dream Car',
    photo: dreamCar, 
    category: 'MERN Stack',
    text: 'Dream Car is a full-stack application built using the MERN stack (MongoDB, Express.js, React, Node.js) with authentication (JWT and bcrypt). It enables users to perform CRUD (Create, Read, Update, Delete) operations on car data while ensuring secure user authentication and authorization.',
    tech: ['HTML', 'Tailwind', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB'],
    property: [
        'User Authentication: Secure login and registration functionality with JWT token-based authentication and bcrypt for password hashing',
        'CRUD Operations: Implementing Create, Read, Update, Delete functionalities for managing car data',
        'RESTful API Design: Designing and implementing RESTful APIs for client-server communication',
        'Responsive Design: Using Tailwind CSS for responsive and modern UI design'
    ],
    date: '2023',
    link: 'https://github.com/Hemnarayan123/car-show',
    liveLink: 'https://dream-car-sigma.vercel.app/',
    learn: [
        'Advanced CRUD Operations: Enhancing skills in handling data manipulation operations',
        'Authentication and Authorization: Practical implementation of user authentication and authorization mechanisms',
        'REST API Development: Designing and developing scalable and maintainable REST APIs'
    ]
}
];

  export default project;