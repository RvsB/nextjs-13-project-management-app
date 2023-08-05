import "@/styles/global.css";

import GlassPane from "@/components/GlassPane";

interface Props {
  children: React.ReactNode;
}

export default function DashboardRootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className={"w-full h-full flex items-center justify-center"}>
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
