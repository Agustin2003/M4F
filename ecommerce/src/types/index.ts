export interface IProduct{
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
  }


  export interface IProductListProps {
    products: IProduct[];
  }

  export interface IProductCardProps {
    product: IProduct;
    remove?: ( ) => void;

  }

  export interface ICategory{
    name: string;
  }

  export interface ICredentials {
    password: string
    id:number;
  }

  export interface ILoginUser {
    email: string;
    password: string;
  }

  export interface LoginErrorProps {
    email?: string;
    password?: string;
  }

  export interface IRegisterUser {
    name: string;
    phone: string;
    address: string;
    email: string;
    password: string;
  }

  export interface IRegisterUserResponse {
    name: string;
    phone: string;
    address: string;
    email: string;
    password: string;
    role: string;
    credential: ICredentials;
  }

  export interface RegisterPropsResponse {
    name: string;
    phone: string;
    address: string;
    email: string;
    password: string;
  }
  
  export interface RegisterErrorProps {
    name?: string;
    phone?: string;
    address?: string;
    email?: string;
    password?: string;
  }


  export interface IUser{
    id:number;
    name: string;
    password: string;
    phone: string;
    address: string;
    email: string;
    orders?: IOrderResponse[]
  }

  export interface IUserResponse {
    login: boolean;
    user: Partial<IUser> | null;
    token: string;
  }

  export interface ICreateOrder{
    userId: number;
    products: number;
  }

  export interface IOrderResponse {
    id: number,
    status: string;
    date: string;
    user: IUser,
    products: IProduct[];

  }

  export interface IOrderProps{
    order: IOrderResponse
  }

   export interface IUsercontextType{
      user: Partial<IUserResponse> | null;
      setUser: React.Dispatch<React.SetStateAction<Partial<IUserResponse> | null>>;
      isLogged: boolean;
      setIsLogged: (isLogged: boolean) => void;
      signIn: (credentials: ILoginUser) => Promise<boolean>;
      signUp: (user: Omit<IUser, "id">) => Promise<boolean>;
      getOrders: () => void;
      orders: IOrderResponse [] | [];
      logout: () => void;
  }

  export interface ICartContextType{
    cartItems: IProduct[];
    addToCart: (product: number) => void;
    removeFromCart: (product: number) => void;
    total: number;
    proceedtoCheckout: () => void;
  }




  