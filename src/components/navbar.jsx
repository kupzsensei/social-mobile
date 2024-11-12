import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
// import { jwtDecode } from "jwt-decode";
export default function Navbar() {
  // const userinfo = jwtDecode(sessionStorage.getItem('user'))
  return (
    <nav className="flex gap-5 p-2 items-center bg-black/80">
      <div>
        <Avatar className="object-contain">
          <AvatarImage  src="https://www.mfi.org.ph/wp-content/uploads/2020/04/mfi-logo.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 min-h-0">
        <Input type="search" placeholder="search" className="bg-gray-300" />
      </div>
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
