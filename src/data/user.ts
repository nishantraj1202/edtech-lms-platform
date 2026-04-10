export interface UserEnrolledCourse {
  courseId: string;
  progressPercentage: number;
  lastAccessedLessonId?: string;
  completedLessonIds: string[];
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  enrolledCourses: UserEnrolledCourse[];
}

export const mockUser: User = {
  id: 'u1',
  name: 'Hrishikesh Das',
  avatar: '/images/hero.png', // Reusing placeholder
  enrolledCourses: [
    {
      courseId: 'bhagavad-gita-intro', // Will match the course from courses.ts
      progressPercentage: 33, // Simulation
      lastAccessedLessonId: 'l1',
      completedLessonIds: ['l1']
    }
  ]
};
