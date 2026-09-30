import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./landing/Landing";

const Thanks = lazy(() => import("./landing/Thanks"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* El calendario redirige aquí al agendar: registra la agenda. */}
        <Route path="/gracias" element={<Thanks />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
