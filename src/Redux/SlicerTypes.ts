export type initialDataState = {
  isLoading: boolean;
  data: any;
  totalPages: number;
  error: any;
  inserData: string;
};

export type initialListingsState = {
  isLoading: boolean;
  totalPages: number;
  isSidebarOpen: boolean;
  isLoggedIn: boolean;
  user: any | null;
  resend: boolean;
  showPasswordToUser: boolean;
  showConfirmedPasswordToUser: boolean;
};
