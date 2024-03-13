export interface ChildrenProps {
  children: JSX.Element | JSX.Element[] | string;
}

export interface SearchQueryProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}