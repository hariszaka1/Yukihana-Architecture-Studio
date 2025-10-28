


import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import AccordionItem from '../components/AccordionItem';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useWhatsApp } from '../contexts/WhatsAppContext';
import { useContent } from '../contexts/ContentContext';
import { 
    DesignConceptIcon,
    ExecutionIcon,
    InteriorIcon,
    CalculatorIcon,
    StructureIcon,
    ClipboardCheckIcon,
    MapPinIcon,
} from '../components/icons';

const PricingPage: React.FC = () => {
  const [area, setArea] = useState<number | ''>('');
  const [selectedPackage, setSelectedPackage] = useState<string>('Paket Standard');
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
  
  const { content } = useContent();
  const { bannerTitle, packages, calculator, faq, cta } = content.pricing;
  const { setIsWhatsAppOpen } = useWhatsApp();

  const pricingSection = useScrollAnimation<HTMLDivElement>();
  const calculatorSection = useScrollAnimation<HTMLDivElement>();
  const customServicesSection = useScrollAnimation<HTMLDivElement>();
  const faqSection = useScrollAnimation<HTMLDivElement>();
  const ctaSection = useScrollAnimation<HTMLDivElement>();
  
  const inputStyles = "w-full p-3 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none placeholder-gray-500 dark:placeholder-gray-400";

  // Dynamically create package prices from context to ensure they are always up-to-date.
  const packagePrices = packages.items.reduce((acc, pkg) => {
    // This regex finds all sequences of digits, handling thousands separators.
    const priceMatches = pkg.price.match(/\d+/g);
    if (priceMatches) {
      const priceString = priceMatches.join('');
      acc[pkg.name] = parseInt(priceString, 10);
    } else {
      acc[pkg.name] = 0; // Default to 0 if no price found
    }
    return acc;
  }, {} as { [key: string]: number });

  const customServiceIconMap: { [key: string]: React.ReactElement } = {
      DesignConceptIcon: <DesignConceptIcon className="w-12 h-12 text-brand-yellow" />,
      ExecutionIcon: <ExecutionIcon className="w-12 h-12 text-brand-yellow" />,
      ClipboardCheckIcon: <ClipboardCheckIcon className="w-12 h-12 text-brand-yellow" />,
      InteriorIcon: <InteriorIcon className="w-12 h-12 text-brand-yellow" />,
      CalculatorIcon: <CalculatorIcon className="w-12 h-12 text-brand-yellow" />,
      StructureIcon: <StructureIcon className="w-12 h-12 text-brand-yellow" />,
      MapPinIcon: <MapPinIcon className="w-12 h-12 text-brand-yellow" />,
  };

  const customServices = [
    {
      icon: 'DesignConceptIcon',
      name: 'Denah',
      price: 'Mulai Rp 15.000/m²',
      priceValue: 15000,
      unit: 'm²',
      description: 'Rancangan denah fungsional dan efisien untuk tata ruang yang optimal.'
    },
    {
      icon: 'MapPinIcon',
      name: 'Survey Lokasi',
      price: 'Mulai Rp 5.000/m²',
      priceValue: 5000,
      unit: 'm²',
      description: 'Pengukuran dan pemetaan kondisi eksisting lokasi proyek secara akurat.'
    },
    {
      icon: 'ExecutionIcon',
      name: 'Gambar Kerja',
      price: 'Mulai Rp 35.000/m²',
      priceValue: 35000,
      unit: 'm²',
      description: 'Gambar teknis detail (DED) yang siap digunakan untuk konstruksi.'
    },
    {
      icon: 'ClipboardCheckIcon',
      name: 'Gambar As-Built',
      price: 'Mulai Rp 40.000/m²',
      priceValue: 40000,
      unit: 'm²',
      description: 'Dokumentasi gambar akhir sesuai dengan kondisi bangunan terbangun.'
    },
    {
      icon: 'InteriorIcon',
      name: 'Desain Interior',
      price: 'Mulai Rp 150.000/m²',
      priceValue: 150000,
      unit: 'm²',
      description: 'Perancangan interior yang menciptakan suasana ruang yang nyaman dan estetis.'
    },
    {
      icon: 'CalculatorIcon',
      name: 'Perhitungan RAB',
      price: 'Mulai Rp 20.000/m²',
      priceValue: 20000,
      unit: 'm²',
      description: 'Estimasi Rencana Anggaran Biaya proyek yang akurat dan terperinci.'
    },
    {
      icon: 'StructureIcon',
      name: 'Perhitungan Struktur',
      price: 'Mulai Rp 30.000/m²',
      priceValue: 30000,
      unit: 'm²',
      description: 'Analisis dan perhitungan struktur bangunan untuk keamanan dan efisiensi.'
    }
  ];

  const allPackagesForCalc = [...packages.items, ...customServices];
  const selectedPackageDetails = allPackagesForCalc.find(p => p.name === selectedPackage);
  const isAreaRequired = !selectedPackageDetails || 'features' in selectedPackageDetails || ('unit' in selectedPackageDetails && selectedPackageDetails.unit === 'm²');

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const selected = allPackagesForCalc.find(p => p.name === selectedPackage);
    if (!selected) {
        setEstimatedCost(null);
        return;
    }

    if (isAreaRequired && typeof area === 'number' && area > 0) {
        const basePrice = 'features' in selected 
            ? packagePrices[selected.name] || 0
            : ('priceValue' in selected ? selected.priceValue : 0);
        const cost = area * basePrice;
        setEstimatedCost(cost);
    } else {
        setEstimatedCost(null);
    }
  };

  return (
    <div>
      <PageBanner title={bannerTitle} />

      <div className="py-16 md:py-20 space-y-16 md:space-y-20 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Table */}
        <section ref={pricingSection.ref} className={`transition-all duration-700 ${pricingSection.animationClasses}`}>
          <SectionTitle title={packages.title} subtitle={packages.subtitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {packages.items.map((pkg, index) => (
              <div key={index} className={`glass-panel flex flex-col p-6 md:p-8 transition-all duration-300 hover:scale-105 glow-on-hover ${pkg.popular ? 'border-brand-yellow/50' : ''}`}>
                {pkg.popular && <div className="absolute top-0 right-8 -mt-4 bg-brand-yellow text-brand-dark font-bold text-sm px-4 py-1 rounded-full shadow-lg">Paling Populer</div>}
                <h3 className="text-xl sm:text-2xl font-bold text-brand-text-light dark:text-white mb-2">{pkg.name}</h3>
                <p className="text-xl font-semibold text-brand-yellow mb-6">{pkg.price}</p>
                <ul className="space-y-3 text-gray-600 dark:text-brand-gray mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-brand-yellow mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-auto">{pkg.buttonText}</Button>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Services Section */}
        <section ref={customServicesSection.ref} className={`glass-panel p-6 sm:p-8 md:p-12 transition-all duration-700 ${customServicesSection.animationClasses}`}>
            <SectionTitle title="Paket Pekerjaan Custom (Layanan Terpisah)" subtitle="Pilih Sesuai Kebutuhan" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customServices.map((service, index) => (
                <div key={index} className="glass-panel flex flex-col p-6 text-center transition-all duration-300 hover:scale-105 glow-on-hover">
                    <div className="flex justify-center mb-4">
                        {customServiceIconMap[service.icon]}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-text-light dark:text-white mb-2">{service.name}</h3>
                    <p className="text-brand-yellow font-semibold text-sm mb-3">{service.price}</p>
                    <p className="text-gray-600 dark:text-brand-gray text-sm flex-grow mb-6">{service.description}</p>
                    <Button onClick={() => setIsWhatsAppOpen(true)} className="w-full mt-auto">Pesan Layanan</Button>
                </div>
            ))}
            </div>
        </section>

        {/* Cost Estimator */}
        <section ref={calculatorSection.ref} className={`glass-panel p-6 sm:p-8 md:p-12 transition-all duration-700 ${calculatorSection.animationClasses}`}>
            <SectionTitle title={calculator.title} subtitle={calculator.subtitle} />
            <form onSubmit={handleCalculate} className="grid md:grid-cols-3 gap-6 items-end max-w-4xl mx-auto">
                <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2">Luas Bangunan (m²){!isAreaRequired && " (Tidak Diperlukan)"}</label>
                    <input 
                        type="number" 
                        id="area" 
                        value={area} 
                        onChange={e => setArea(e.target.value === '' ? '' : parseFloat(e.target.value))} 
                        placeholder={isAreaRequired ? "Contoh: 100" : "-"}
                        required={isAreaRequired} 
                        disabled={!isAreaRequired}
                        className={`${inputStyles} ${!isAreaRequired ? 'bg-black/5 dark:bg-white/5 cursor-not-allowed' : ''}`} 
                    />
                </div>
                <div>
                    <label htmlFor="package" className="block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2">Pilihan Paket / Layanan</label>
                    <select id="package" value={selectedPackage} onChange={e => setSelectedPackage(e.target.value)} className={inputStyles}>
                        <optgroup label="Paket Desain Lengkap">
                            {packages.items.map(p => <option className="bg-white text-brand-text-light dark:bg-gray-800 dark:text-brand-gray" key={p.name} value={p.name}>{p.name}</option>)}
                        </optgroup>
                        <optgroup label="Layanan Terpisah">
                            {customServices.map(s => <option className="bg-white text-brand-text-light dark:bg-gray-800 dark:text-brand-gray" key={s.name} value={s.name}>{s.name}</option>)}
                        </optgroup>
                    </select>
                </div>
                <Button type="submit" className="w-full">Hitung Estimasi</Button>
            </form>
            {estimatedCost !== null && (
                <div className="mt-8 text-center bg-black/5 dark:bg-white/5 p-6 rounded-lg max-w-md mx-auto animate-fade-in-down">
                    <p className="text-gray-600 dark:text-brand-gray">Estimasi Biaya Anda:</p>
                    <p className="text-3xl font-bold text-brand-yellow">Rp {estimatedCost.toLocaleString('id-ID')}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">*Harga merupakan estimasi dan dapat berubah sesuai kompleksitas.</p>
                </div>
            )}
        </section>

        {/* FAQ */}
        <section ref={faqSection.ref} className={`transition-all duration-700 ${faqSection.animationClasses}`}>
            <SectionTitle title={faq.title} subtitle={faq.subtitle}/>
            <div className="max-w-3xl mx-auto space-y-4">
                {faq.items.map((item, index) => (
                    <AccordionItem key={index} title={item.question}>
                        <p>{item.answer}</p>
                    </AccordionItem>
                ))}
            </div>
        </section>

        {/* CTA */}
        <section ref={ctaSection.ref} className={`glass-panel p-6 sm:p-8 md:p-12 text-center transition-all duration-700 ${ctaSection.animationClasses}`}>
            <SectionTitle title={cta.title} />
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-brand-gray mb-8">
                {cta.text}
            </p>
            <Button onClick={() => setIsWhatsAppOpen(true)}>
                Konsultasi Gratis via WhatsApp
            </Button>
        </section>

      </div>
    </div>
  );
};

export default PricingPage;