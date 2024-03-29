interface ILink {
  title: string;
  path: string;
}

export const publicPaths: ILink[] = [
  {
    title: "marketplace",
    path: "/marketplace",
  },
  {
    title: "games",
    path: "/games",
  },
  {
    title: "sign in",
    path: "/signin",
  },
];
export const privatePaths: ILink[] = [
  {
    title: "marketplace",
    path: "/marketplace",
  },
  {
    title: "upload products",
    path: "/newproduct",
  },
  {
    title: "calendar",
    path: "/calendar",
  },
  {
    title: "games",
    path: "/games",
  },
  {
    title: "profile",
    path: "/profile",
  },
];
