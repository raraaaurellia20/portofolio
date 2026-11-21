/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { BookingModal } from './components/BookingModal';
import { FocusAndValuesSection } from './components/FocusAndValuesSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { TechStackSection } from './components/TechStackSection';
import { TestimonialsAndFooter } from './components/TestimonialsAndFooter';
import { ProjectItem, ServicePackage } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);
  const [inquirySubject, setInquirySubject] = useState<string | undefined>(undefined);

  const handleOpenGeneralBooking = () => {
    setSelectedPackage(null);
    setInquirySubject(undefined);
    setBookingOpen(true);
  };

  const handleSelectPackage = (pkg: ServicePackage) => {
    setSelectedPackage(pkg);
    setInquirySubject(undefined);
    setBookingOpen(true);
  };

  const handleInquireSimilar = (projectTitle: string) => {
    setSelectedProject(null);
    setSelectedPackage(null);
    setInquirySubject(projectTitle);
    setBookingOpen(true);
  };

  return (
    <div className="paper-texture min-h-screen antialiased selection:bg-[#434E3D] selection:text-[#EFECE6]">
      <Header onOpenBooking={handleOpenGeneralBooking} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-20 sm:space-y-24">
        <HeroSection onOpenBooking={handleOpenGeneralBooking} />
        <AboutSection />
        <FocusAndValuesSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <TechStackSection onSelectProject={setSelectedProject} />
        <ServicesSection onSelectPackage={handleSelectPackage} />
        <TestimonialsAndFooter onOpenBooking={handleOpenGeneralBooking} />
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireSimilar={handleInquireSimilar}
      />

      <BookingModal
        isOpen={bookingOpen}
        selectedPackage={selectedPackage}
        initialSubject={inquirySubject}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
