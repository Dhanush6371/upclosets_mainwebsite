import { Suspense, lazy } from 'react';
import { RouterProvider, useRouter } from './utils/router';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import ScrollToTop from './components/ScrollToTop';
import ScrollReveal from './components/ScrollReveal';
const Home = lazy(() => import('./pages/Home'));
const WalkInClosets = lazy(() => import('./pages/WalkInClosets'));
const ReachInClosets = lazy(() => import('./pages/ReachInClosets'));
const OfficeRoom = lazy(() => import('./pages/OfficeRoom'));
const HobbyRoom = lazy(() => import('./pages/HobbyRoom'));
const MudRoom = lazy(() => import('./pages/MudRoom'));
const LaundryRoom = lazy(() => import('./pages/LaundryRoom'));
const KitchenPantry = lazy(() => import('./pages/KitchenPantry'));
const Garages = lazy(() => import('./pages/Garages'));
const Process = lazy(() => import('./pages/Process'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Contact = lazy(() => import('./pages/Contact'));
const TrackOrder = lazy(() => import('./pages/TrackOrder'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));

function AppContent() {
  const { currentPath } = useRouter();

  const routes: { [key: string]: React.ComponentType } = {
    '/': Home,
    '/walk-in-closets': WalkInClosets,
    '/reach-in-closets': ReachInClosets,
    '/office-room': OfficeRoom,
    '/hobby-room': HobbyRoom,
    '/mud-room': MudRoom,
    '/laundry-room': LaundryRoom,
    '/kitchen-pantry': KitchenPantry,
    '/garages': Garages,
    '/process': Process,
    '/gallery': Catalog,
    '/contact': Contact,
    '/track-order': TrackOrder,
    '/about': About,
    '/services': Services,
  };

  const Component = routes[currentPath] || Home;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-36" data-reveal>
        <Suspense fallback={<div className="container-custom mx-auto px-6 py-12 text-gray-400">Loading...</div>}>
          <Component />
        </Suspense>
      </main>
      <Footer />
      <FloatingChat />
      <ScrollToTop />
      <ScrollReveal />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
