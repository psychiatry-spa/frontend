import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import SignOutPage from "./SignOutPage";
import SignUpPage from "./SignUpPage";
import BookingPage from "./client/BookingPage";
import SessionPage from "./client/SessionPage";
import SettingsPage from "./client/SettingsPage";
import SignInPage from "./LoginPage";
import DashboardPage from "./admin/DashboardPage";
import ManagerPage from "./admin/ManagerPage";
import CalendarPage from "./admin/CalendarPage";
import PostPage from "./admin/PostPage";
import Page404 from "./Page404";
import NewsPage from "./NewsPage";

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