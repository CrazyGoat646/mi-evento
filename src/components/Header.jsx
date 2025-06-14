// src/components/Header.jsx
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="p-4 flex justify-center">
      <img src={logo} alt="Diesemm logo" className="h-10" />
    </header>
  );
}
