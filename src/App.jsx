import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import EventDetail from "./routes/EventDetail";
import Survey from "./routes/Survey";
import Stream from "./routes/Stream";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evento/:id" element={<EventDetail />} />
        <Route path="/evento/:id/encuesta" element={<Survey />} />
        <Route path="/evento/:id/stream" element={<Stream />} />
      </Routes>
    </BrowserRouter>
  );
}
