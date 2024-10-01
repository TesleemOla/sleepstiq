import Navbar from "@/components/ui/navbar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavigationMenu className="hidden md:block transparent sticky top-0">
  <NavigationMenuList>
    <NavigationMenuItem>Home
      </NavigationMenuItem>
    
      <NavigationMenuItem>About
      </NavigationMenuItem>
      <NavigationMenuItem>
        Shop
      </NavigationMenuItem>
      <NavigationMenuItem>
        FAQs
      </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
    <Navbar />
    </div>
  );
}
