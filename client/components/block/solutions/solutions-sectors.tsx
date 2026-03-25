import React from 'react';
import Image from 'next/image';

const SolutionsSectors = () => {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto border-t border-white/5 bg-background">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-16 uppercase text-center">Vertical Architectures</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Sector 1 */}
                <div className="group relative h-[400px] overflow-hidden rounded border border-white/10 flex flex-col justify-end p-8">
                    <Image 
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" 
                        alt="High-tech server room with infinite rows of racks and glowing blue indicators" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQe8D0Ea-Zgqg-uS9h_r11d5WnN-K_yqP7h3Z9A4o4i8F4L-Gj7x4x4S2m25_004Q2oO7mK2VlS_r1L6L1J9x4WzK93y07sC-_Z8-oPQ29vL1c2y-A2tNqH20r2W6F8X2k1h-p-z8M-5eG_3E9c72_3d8R1mUqH_4pD-kLXZFvJvq9-j0I3fI9l_T4A82s2V5x3f0" 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
                    <div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-500">
                        <span className="material-symbols-outlined text-primary text-4xl mb-4" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>corporate_fare</span>
                        <h3 className="text-2xl font-bold text-white mb-2">Global Enterprise</h3>
                        <p className="text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                            Unify disparate talent silos across borders. Standardize technical hiring with a single source of truth.
                        </p>
                    </div>
                </div>

                {/* Sector 2 */}
                <div className="group relative h-[400px] overflow-hidden rounded border border-primary/30 flex flex-col justify-end p-8 shadow-[0_0_30px_rgba(13,166,242,0.1)]">
                    <div className="absolute top-4 right-4 z-20 bg-primary px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-white rounded">Focus Model</div>
                    <Image 
                        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" 
                        alt="Abstract fast-moving light streaks representing hyper-growth and speed in a dark digital space" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN1N2s0R2kY8U-6Zz93Kx5G8L-Q4A3M1_gV2Z3w9F93J6o54O1-G4M5V1u5Z8Z2B4v5c1-j4Q0V5V8v1s2M8w4F91v3x2G4I4_s3J8N2A62B6M3_z4F0x3E1r2Q56C0A_x2N0o3i9F1S1a6D8k1q6H9L3t3n0V9X2a5c4D2n7F9L1s2w1C1e1Z2g4F1j7D6U5j" 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
                    <div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-500">
                        <span className="material-symbols-outlined text-primary text-4xl mb-4" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                        <h3 className="text-2xl font-bold text-white mb-2">Hyper-Growth Scaleups</h3>
                        <p className="text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                            Triple your engineering headcount without compromising architectural integrity. Predictive pipelines for rapid scaling.
                        </p>
                    </div>
                </div>

                {/* Sector 3 */}
                <div className="group relative h-[400px] overflow-hidden rounded border border-white/10 flex flex-col justify-end p-8">
                    <Image 
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" 
                        alt="Highly secure metallic vault door concept with biometric sensors and deep shadows" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2T8e0H6L5I1j9v7x8A9P0s3A2M4H8W1r8f9J7Z5i5o3G1L5r5D8i9z7R1Q9W1n1C6l8M5z3w1C3Z5e3Q8V9m5U2v0j2Y6n4R7t8X9G4Y3W2C4n7T6V2p9V1j0E9s7Y2R1x0_9r4X6P5W8z0N1L1F5a9N5H1Y2_1Y8M0r0C4S0B8W3_2_5S6K5D8W2T8S4M2_8H9_5M7H_2X1D0f5N5T2E8A6L0Z" 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
                    <div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-500">
                        <span className="material-symbols-outlined text-primary text-4xl mb-4" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" }}>policy</span>
                        <h3 className="text-2xl font-bold text-white mb-2">Defense &amp; GovTech</h3>
                        <p className="text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                            Air-gapped deployment capability. Rigorous clearance tracking and sovereign data architecture.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSectors;
