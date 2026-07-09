import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Narrativa } from "./pages/Narrativa/Narrativa";
import { Hierarquia } from "./pages/Hierarquia/Hierarquia";
import { Cargos } from "./pages/Cargos/Cargos";
import { Sistemas } from "./pages/Sistemas/Sistemas";
import { Universo } from "./pages/Universo/Universo";
import { Rito } from "./pages/Rito/Rito";

import { Lamina } from "./pages/Ordens/Lamina/Lamina";
import { Veu } from "./pages/Ordens/Veu/Veu";
import { Ledger } from "./pages/Ordens/Ledger/Ledger";
import { Codigo } from "./pages/Ordens/Codigo/Codigo";

import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ordensOpen, setOrdensOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-3xl border border-[var(--rito-border)] bg-black/70 px-5 py-3 backdrop-blur-xl md:rounded-full">
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          className="font-arcane text-lg tracking-[0.25em] text-[var(--rito-gold-soft)]"
          onClick={() => setMenuOpen(false)}
        >
          RITO
        </Link>

        <button
          className="rounded-full border border-[var(--rito-border)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--rito-muted)] md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
        >
          Menu
        </button>

        <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.18em] text-[var(--rito-muted)] md:flex">
          <Link to="/rito">Rito</Link>
          <Link to="/universo">Universo</Link>
          <Link to="/narrativa">Narrativa</Link>
          <Link to="/hierarquia">Hierarquia</Link>
          <Link to="/cargos">Cargos</Link>
          <Link to="/sistemas">Sistemas</Link>

         <div
  className="relative"
  onMouseEnter={() => setOrdensOpen(true)}
  onMouseLeave={() => setOrdensOpen(false)}
>
  <button className="uppercase tracking-[0.18em]">
    Ordens ▾
  </button>

  {ordensOpen && (
    <div
      className="absolute left-1/2 top-full z-50 mt-1 w-56 -translate-x-1/2 rounded-2xl border border-[var(--rito-border)] bg-[#111111ee] p-3 shadow-2xl backdrop-blur-xl"
    >
                <Link to="/ordens/lamina" className="block rounded-xl px-4 py-3 transition hover:bg-white/10">
                  Lâmina
                </Link>
                <Link to="/ordens/veu" className="block rounded-xl px-4 py-3 transition hover:bg-white/10">
                  Véu
                </Link>
                <Link to="/ordens/ledger" className="block rounded-xl px-4 py-3 transition hover:bg-white/10">
                  Ledger
                </Link>
                <Link to="/ordens/codigo" className="block rounded-xl px-4 py-3 transition hover:bg-white/10">
                  Código
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="mt-4 grid gap-2 border-t border-[var(--rito-border)] pt-4 text-xs uppercase tracking-[0.16em] text-[var(--rito-muted)] md:hidden">
          <Link onClick={() => setMenuOpen(false)} to="/rito" className="rounded-xl px-4 py-3 hover:bg-white/10">Rito</Link>
          <Link onClick={() => setMenuOpen(false)} to="/universo" className="rounded-xl px-4 py-3 hover:bg-white/10">Universo</Link>
          <Link onClick={() => setMenuOpen(false)} to="/narrativa" className="rounded-xl px-4 py-3 hover:bg-white/10">Narrativa</Link>
          <Link onClick={() => setMenuOpen(false)} to="/hierarquia" className="rounded-xl px-4 py-3 hover:bg-white/10">Hierarquia</Link>
          <Link onClick={() => setMenuOpen(false)} to="/cargos" className="rounded-xl px-4 py-3 hover:bg-white/10">Cargos</Link>
          <Link onClick={() => setMenuOpen(false)} to="/sistemas" className="rounded-xl px-4 py-3 hover:bg-white/10">Sistemas</Link>

          <div className="mt-2 rounded-2xl border border-[var(--rito-border)] bg-black/30 p-3">
            <p className="px-2 pb-2 text-[var(--rito-gold-soft)]">Ordens</p>
            <Link onClick={() => setMenuOpen(false)} to="/ordens/lamina" className="block rounded-xl px-4 py-3 hover:bg-white/10">Lâmina</Link>
            <Link onClick={() => setMenuOpen(false)} to="/ordens/veu" className="block rounded-xl px-4 py-3 hover:bg-white/10">Véu</Link>
            <Link onClick={() => setMenuOpen(false)} to="/ordens/ledger" className="block rounded-xl px-4 py-3 hover:bg-white/10">Ledger</Link>
            <Link onClick={() => setMenuOpen(false)} to="/ordens/codigo" className="block rounded-xl px-4 py-3 hover:bg-white/10">Código</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/rito">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rito" element={<Rito />} />
        <Route path="/universo" element={<Universo />} />
        <Route path="/narrativa" element={<Narrativa />} />
        <Route path="/hierarquia" element={<Hierarquia />} />
        <Route path="/cargos" element={<Cargos />} />
        <Route path="/sistemas" element={<Sistemas />} />

        <Route path="/ordens/lamina" element={<Lamina />} />
        <Route path="/ordens/veu" element={<Veu />} />
        <Route path="/ordens/ledger" element={<Ledger />} />
        <Route path="/ordens/codigo" element={<Codigo />} />
      </Routes>
    </BrowserRouter>
  );
}