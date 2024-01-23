import {
  Home,
  AddPhotoAlternateOutlined,
  GroupOutlined,
  BookmarksOutlined,
  FavoriteBorder,
} from "@mui/icons-material";

export const SidebarLinks = [
  {
    icon: <Home sx={{ color: "black", fontSize: "26px" }} />,
    route: "/",
    label: "Home",
  },
  {
    icon: (
      <AddPhotoAlternateOutlined sx={{ color: "black", fontSize: "26px" }} />
    ),
    route: "/create-post",
    label: "Create Post",
  },
  {
    icon: <GroupOutlined sx={{ color: "black", fontSize: "26px" }} />,
    route: "/people",
    label: "People",
  },
  {
    icon: <BookmarksOutlined sx={{ color: "black", fontSize: "26px" }} />,
    route: "/saved-posts",
    label: "Saved Posts",
  },
  {
    icon: <FavoriteBorder sx={{ color: "black", fontSize: "26px" }} />,
    route: "/liked-posts",
    label: "Liked Posts",
  },
];

export const pageTitles = [
  {
    url: "/",
    title: "Feed",
  },
  {
    url: "/create-post",
    title: "Create Post",
  },
  {
    url: "/edit-profile",
    title: "Edit Profile",
  },
  {
    url: "/edit-posts",
    title: "Edit Posts",
  },
  {
    url: "/search",
    title: "Search",
  },
  {
    url: "/saved-posts",
    title: "Saved Posts",
  },
  {
    url: "/liked-posts",
    title: "Liked Posts",
  },
];

export const Tabs = [
  {
    link: "posts",
    name: "Posts",
  },
  {
    link: "followers",
    name: "Followers",
  },
  {
    link: "following",
    name: "Following",
  },
];
