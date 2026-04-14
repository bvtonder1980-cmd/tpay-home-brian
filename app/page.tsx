'use client';
import Home from "./home2/components/Home";
import "@fontsource/barlow";

export default function DefaultRoute() {
  // If not authenticated, show home page
  return <Home />;
}
