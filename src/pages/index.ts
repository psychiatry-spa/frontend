import { lazy } from "react";

const AboutPage = lazy(() => import( "./AboutPage"))
const SignOutPage = lazy(() => import( "./SignOutPage"))
const SignUpPage = lazy(() => import( "./SignUpPage"))
const BookingPage = lazy(() => import( "./client/BookingPage"))
const SessionPage = lazy(() => import( "./client/SessionPage"))
const SettingsPage = lazy(() => import( "./client/SettingsPage"))
const SignInPage = lazy(() => import( "./LoginPage"))
const DashboardPage = lazy(() => import( "./admin/DashboardPage"))
const ManagerPage = lazy(() => import( "./admin/ManagerPage"))
const CalendarPage = lazy(() => import( "./admin/CalendarPage"))
const PostPage = lazy(() => import( "./admin/PostPage"))
const Page404 = lazy(() => import( "./Page404"))
const NewsPage = lazy(() => import( "./NewsPage"))
const MainPage = lazy(() => import( "./MainPage"))

const pages = {
  MainPage,
  AboutPage,
  SignOutPage,
  SignUpPage,
  BookingPage,
  SessionPage,
  SettingsPage,
  SignInPage,
  DashboardPage,
  ManagerPage,
  CalendarPage,
  PostPage,
  Page404,
  NewsPage,
};

export type PageName = keyof typeof pages;

export { pages };