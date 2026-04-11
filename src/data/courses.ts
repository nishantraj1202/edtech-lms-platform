export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isVideo: boolean;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  type: 'Self-Paced' | 'Live';
  price: number;
  rating: number;
  students: number;
  instructor: string;
  instructorBio: string;
  instructorAvatar: string;
  thumbnail: string;
  modules: Module[];
  includes: string[];
  reviews: Review[];
}

export const courses: Course[] = [
  {
    id: 'bhagavad-gita-intro',
    title: 'Introduction to Bhagavad Gita',
    description: 'A comprehensive starter into the timeless wisdom of the Gita.',
    longDescription: 'Learn the Bhagavad Gita systematically under the guidance of an experienced instructor. This course dives deep into the timeless teachings revealing the profound philosophy of consciousness and how to live a life aligned with spiritual principles.',
    type: 'Self-Paced',
    price: 300,
    rating: 4.8,
    students: 1098,
    instructor: 'A.C. Bhaktivedanta Swami Prabhupada',
    instructorBio: 'Founder-Acarya of the International Society for Krishna Consciousness. He translated and commented on over eighty volumes of the Vedas\' most important sacred bhakti texts.',
    instructorAvatar: '/images/hero.jpeg',
    thumbnail: '/images/self-study.png',
    includes: ['Lifetime Access', 'Quizzes & Certificate', 'Over 1000 Enrolled'],
    reviews: [
      { id: 'r1', name: 'Aruna S.', rating: 5, comment: 'This course completely changed my perspective on life and duty. Highly recommended!' },
      { id: 'r2', name: 'John D.', rating: 4, comment: 'Very deep and authentic presentation. The interface is also wonderful.' },
    ],
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Introduction & Chapter 1',
        lessons: [
          { id: 'l1', title: 'Class 1: Importance of Bhagavad Gita', duration: '12:50', isVideo: true },
          { id: 'l2', title: 'Class 2: Overview of Bhagavad Gita', duration: '20:00', isVideo: true },
          { id: 'l3', title: "Class 3: Chapter 1 - Arjuna's Dilemma Part 1", duration: '30:00', isVideo: true },
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Chapters 2 & 3',
        lessons: [
          { id: 'l4', title: 'Class 1: Symptoms of a self-realized soul', duration: '45:00', isVideo: true },
          { id: 'l5', title: 'Class 2: Karma Yoga', duration: '30:00', isVideo: true },
        ]
      }
    ]
  },
  {
    id: 'bhakti-sastri',
    title: 'Bhakti Sastri Comprehensive',
    description: 'Dive deep into the primary four books of the Gaudiya Vaishnava sampradaya.',
    longDescription: 'An intense, structured course exploring Nectar of Instruction, Nectar of Devotion, Sri Isopanisad, and Bhagavad Gita.',
    type: 'Live',
    price: 1500,
    rating: 4.9,
    students: 540,
    instructor: 'H.G. Chaitanya Charan Das',
    instructorBio: 'A monk and spiritual author. He has spoken at various international conferences and universities on science and spirituality.',
    instructorAvatar: '/images/hero.jpeg',
    thumbnail: '/images/hero.jpeg',
    includes: ['Live Zoom Sessions', 'Interactive Q&A', 'Certification Upon Graduation'],
    reviews: [
      { id: 'r3', name: 'Priya K.', rating: 5, comment: 'Incredible systematic study. The live classes are very engaging.' }
    ],
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Nectar of Instruction',
        lessons: [
          { id: 'l1', title: 'Verses 1-4 Analysis', duration: '60:00', isVideo: true },
        ]
      }
    ]
  },
  {
    id: 'srimad-bhagavatam',
    title: 'Srimad Bhagavatam Canto 1',
    description: 'The ripened fruit of the desire tree of Vedic literature.',
    longDescription: 'Study the First Canto of the Bhagavatam, establishing the philosophical basis for all subsequent cantos.',
    type: 'Self-Paced',
    price: 500,
    rating: 4.7,
    students: 820,
    instructor: 'H.H. Radhanath Swami',
    instructorBio: 'A spiritual leader and author of The Journey Home, dedicating his life to cultivating devotion and community service worldwide.',
    instructorAvatar: '/images/hero.jpeg',
    thumbnail: '/images/book.png',
    includes: ['Lifetime Access', 'Community Forum'],
    reviews: [],
    modules: []
  }
];
