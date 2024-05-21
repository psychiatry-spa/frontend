import { pages } from "./pages";

export const routes = [
  { path: '', element: pages.MainPage },
  { path: '/login', element: pages.SignInPage },
  { path: '/register', element: pages.SignUpPage },
  { path: '/about', element: pages.AboutPage },
  { path: '/news', element: pages.NewsPage },
  { path: '/logout', element: pages.SignOutPage },
  { path: '/sessions', element: pages.SessionPage },
  { path: '/settings', element: pages.SettingsPage },
  { path: '/booking', element: pages.BookingPage },

  { path: '/admin/dashboard', element: pages.DashboardPage },
  { path: '/admin/calendar', element: pages.CalendarPage },
  { path: '/admin/manager', element: pages.ManagerPage },
  { path: '/admin/posts', element: pages.PostPage },
  { path: '/admin/settings', element: pages.SettingsPage },
  { path: '/admin', element: pages.DashboardPage },
  
  { path: '*', element: pages.Page404 },
];