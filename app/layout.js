import "./globals.css";
import ClientWrapper from "./clientWrapper";

export const metadata = {
  title: "Tariq",
  description: "A creative software developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
