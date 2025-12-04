import { Phone, Mail, User } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="bg-[#2C3E50] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 gap-2">
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@pulsemarketing.ru</span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-white text-white hover:bg-white hover:text-[#2C3E50]"
          >
            <User className="w-4 h-4 mr-2" />
            Área do Cliente
          </Button>
        </div>
      </div>
    </div>
  );
}
