export interface ChildrenProps {
  children: JSX.Element | JSX.Element[] | string;
}

export interface SearchQueryProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

export interface UsersProps {
  _id: string;
  imageUrl: string;
  name: string;
  surname: string;
  email: string;
  country: string;
  consultationCounter: number;
  role: "admin" | "user";
  createdAt: number;
}
