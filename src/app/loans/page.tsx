"use client";

import React, { useState } from "react";
import MenuNav from "@/components/menuNav"; // ojo con la mayúscula si el archivo es MenuNav.tsx

const LoansPage: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <MenuNav />

     
    </div>
  );
};

export default LoansPage;
