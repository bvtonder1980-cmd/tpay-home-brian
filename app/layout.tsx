import Footer from "@/components/footer/footer";
import NotLoggedInLayout from "@/layout/notLoggedIn";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<NotLoggedInLayout>{children}</NotLoggedInLayout>
  );
}
