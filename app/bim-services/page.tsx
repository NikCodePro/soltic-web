import { Layers, Box, Cpu, AlertTriangle, FileText } from "lucide-react";
import Image from "next/image";

export default function BimServices() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Integrated BIM Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From LOD 200 concept models to LOD 500 digital twins, we deliver accurate, clash-free, and data-rich BIM models for global construction projects.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Architectural BIM */}
          <div className="flex flex-col gap-4">
             <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6 text-accent" />
             </div>
             <h2 className="text-3xl font-bold text-primary">Architectural BIM Modeling</h2>
             <p className="text-gray-600 leading-relaxed">
               We convert 2D CAD drawings and sketches into intelligent 3D Revit models. Our architectural services ensure spatial coordination and visualization accuracy.
             </p>
             <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
               <li>CAD to BIM Conversion</li>
               <li>Parametric Family Creation</li>
               <li>3D Rendering & Walkthroughs</li>
               <li>Construction Documentation (CD Sets)</li>
             </ul>
          </div>
          <div className="bg-gray-200 rounded-xl h-64 md:h-auto flex items-center justify-center overflow-hidden relative">
             <span className="text-gray-400 font-bold">Graphic: Architectural Model visual</span>
             {/* <Image src="/placeholder-arch.jpg" alt="Architectural BIM" fill className="object-cover" /> */}
          </div>

          {/* Structural BIM */}
          <div className="md:order-last flex flex-col gap-4">
             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Box className="w-6 h-6 text-primary" />
             </div>
             <h2 className="text-3xl font-bold text-primary">Structural BIM Modeling</h2>
             <p className="text-gray-600 leading-relaxed">
               Precise modeling of foundations, steel frames, and rebar detailing to ensure structural integrity and seamless fabrication.
             </p>
             <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
               <li>Structural Framing & Foundation Plans</li>
               <li>Rebar Detailing & Scheduling</li>
               <li>Precast Concrete Modeling</li>
               <li>Steel Connection Details</li>
             </ul>
          </div>
          <div className="bg-gray-200 rounded-xl h-64 md:h-auto flex items-center justify-center">
             <span className="text-gray-400 font-bold">Graphic: Structural Steel Frame</span>
          </div>

          {/* MEP BIM */}
          <div className="flex flex-col gap-4">
             <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-secondary" />
             </div>
             <h2 className="text-3xl font-bold text-primary">MEP BIM Services</h2>
             <p className="text-gray-600 leading-relaxed">
               Comprehensive coordination of Mechanical, Electrical, and Plumbing systems to optimize building performance and installation.
             </p>
             <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
               <li>HVAC Ductwork & Piping</li>
               <li>Electrical Conduit & Tray routing</li>
               <li>Plumbing & Fire Protection</li>
               <li>Plant Room Detailing</li>
             </ul>
          </div>
          <div className="bg-gray-200 rounded-xl h-64 md:h-auto flex items-center justify-center">
             <span className="text-gray-400 font-bold">Graphic: MEP Coordination</span>
          </div>

        </div>
      </div>

      {/* Clash Detection Section */}
      <div className="bg-gray-50 py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between gap-12">
               <div className="md:w-1/2 mb-10 md:mb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-8 h-8 text-secondary" />
                    <h2 className="text-3xl font-bold text-primary">Clash Detection & Coordination</h2>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We use Navisworks to detect and resolve inter-disciplinary conflicts before construction begins, saving thousands in rework costs.
                  </p>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-primary mb-2">Our Process:</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
                      <li>Federate Architecture, Structure & MEP models.</li>
                      <li>Run automated interference checks.</li>
                      <li>Generate detailed Clash Reports.</li>
                      <li>Conduct coordination meetings for resolution.</li>
                    </ol>
                  </div>
               </div>
               <div className="md:w-1/2 bg-slate-800 rounded-xl h-80 flex items-center justify-center text-white">
                 <span className="font-mono text-sm opacity-50">[Navisworks Clash View Placeholder]</span>
               </div>
            </div>
         </div>
      </div>

      {/* As-Built Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
         <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
         <h2 className="text-3xl font-bold text-primary mb-6">As-Built & Shop Drawings</h2>
         <p className="text-gray-600 max-w-2xl mx-auto mb-10">
           We update models based on red-line markups to create accurate As-Built drawings and facilitate facility management.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-gray-200 p-8 rounded-xl hover:border-accent transition-colors">
               <h3 className="text-xl font-bold text-primary mb-2">Shop Drawings</h3>
               <p className="text-sm text-gray-500">For fabrication and on-site installation.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-xl hover:border-accent transition-colors">
               <h3 className="text-xl font-bold text-primary mb-2">Digital Twins</h3>
               <p className="text-sm text-gray-500">Asset information models for operations.</p>
            </div>
         </div>
      </div>
    </div>
  );
}
