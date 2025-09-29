import React, { useState } from 'react';
import { ChevronRight, Globe, Users, Shield, Scale, Heart } from 'lucide-react';

const NusantaraGenomicSlide = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const pancasilaPillars = [
    {
      sila: "1. Ketuhanan YME",
      icon: "🕌",
      color: "bg-purple-100 border-purple-400",
      implementation: "Multi-Faith Ethics Council",
      detail: "Spiritual-ethical foundation dalam governance"
    },
    {
      sila: "2. Kemanusiaan",
      icon: "❤️",
      color: "bg-red-100 border-red-400",
      implementation: "Dignity-Centered Operations",
      detail: "Return of results & genetic counseling gratis"
    },
    {
      sila: "3. Persatuan Indonesia",
      icon: "🇮🇩",
      color: "bg-blue-100 border-blue-400",
      implementation: "Inclusive Genomic Diversity",
      detail: "Representasi 38 provinsi, 1,300+ ethnic groups"
    },
    {
      sila: "4. Kerakyatan",
      icon: "🤝",
      color: "bg-green-100 border-green-400",
      implementation: "Consensus-Based Governance",
      detail: "Musyawarah mufakat, Community Advisory Councils"
    },
    {
      sila: "5. Keadilan Sosial",
      icon: "⚖️",
      color: "bg-yellow-100 border-yellow-400",
      implementation: "Mandatory Benefit Sharing",
      detail: "15-20% revenue → Community Health Fund"
    }
  ];

  const comparisonData = [
    { aspect: "Philosophy", western: "Individual Autonomy", nusantara: "Gotong Royong" },
    { aspect: "Governance", western: "Committee Voting", nusantara: "Musyawarah Mufakat" },
    { aspect: "Ethics", western: "Procedural", nusantara: "Values-Anchored (Pancasila)" },
    { aspect: "Access", western: "Transactional (Fees)", nusantara: "Keadilan Sosial (Benefit-Sharing)" },
    { aspect: "Diversity", western: "Afterthought", nusantara: "By-Design (Bhinneka Tunggal Ika)" }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4 lg:p-12 font-sans overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 via-white to-red-600 p-6 lg:p-8 rounded-xl shadow-xl mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-3 leading-tight">
              NUSANTARA GENOMIC COMMONS
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 italic font-medium">
              Biobank Berbasis Pancasila: Dari Copy-Paste menuju Kepemimpinan Global
            </p>
          </div>
          <div className="text-left lg:text-right bg-white/80 p-4 rounded-lg">
            <div className="text-base lg:text-lg font-semibold text-gray-700">FGD Akses Data & Spesimen</div>
            <div className="text-sm lg:text-base text-gray-600 font-medium">BB Binomika • 29 Sep - 1 Okt 2025</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-3 lg:gap-4 mb-8 justify-center">
        {[
          { id: 'overview', label: 'Strategic Gap', icon: '🎯' },
          { id: 'pancasila', label: 'Pancasila Framework', icon: '🇮🇩' },
          { id: 'comparison', label: 'Paradigm Shift', icon: '🔄' },
          { id: 'roadmap', label: 'Implementation', icon: '🚀' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold transition-all text-base lg:text-lg ${
              activeTab === tab.id
                ? 'bg-red-600 text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
            }`}
          >
            <span className="mr-2 lg:mr-3 text-lg lg:text-xl">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl shadow-xl p-6 lg:p-10 max-w-none">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-700 mb-6 text-center">
              🔍 Yang BELUM Terlihat: Strategic Opportunity Gap
            </h2>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 lg:p-8 rounded-lg">
                <h3 className="font-bold text-red-800 mb-4 text-lg lg:text-xl">❌ Asumsi yang Perlu Diubah</h3>
                <ul className="text-base lg:text-lg space-y-2 text-gray-700">
                  <li>• Best practices global = model untuk diadopsi</li>
                  <li>• Indonesia harus "catch up" dengan UK/NIH/China</li>
                  <li>• Individualistic consent adalah gold standard</li>
                  <li>• Technical excellence {'>'} value alignment</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-6 lg:p-8 rounded-lg">
                <h3 className="font-bold text-green-800 mb-4 text-lg lg:text-xl">✅ Paradigm Baru: Leapfrog!</h3>
                <ul className="text-base lg:text-lg space-y-2 text-gray-700">
                  <li>• Best practices = lessons to integrate selectively</li>
                  <li>• Indonesia bisa MEMIMPIN ethical genomics</li>
                  <li>• Community-based governance lebih sustainable</li>
                  <li>• Values-anchored = competitive advantage</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 lg:p-8 rounded-xl border-2 border-blue-400">
              <h3 className="font-bold text-gray-800 mb-6 text-center text-xl lg:text-2xl">
                🎯 The "Ace Result" Strategy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 text-center">
                <div className="bg-white p-3 rounded shadow">
                  <div className="text-2xl mb-1">📱</div>
                  <div className="text-xs font-semibold">Seperti Indonesia</div>
                  <div className="text-xs text-gray-600">Leapfrog fixed-line {'→'} mobile</div>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <div className="text-2xl mb-1">💳</div>
                  <div className="text-xs font-semibold">Leapfrog banking</div>
                  <div className="text-xs text-gray-600">{'→'} digital payment</div>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <div className="text-2xl mb-1">🧬</div>
                  <div className="text-xs font-semibold text-red-700">Leapfrog biobank</div>
                  <div className="text-xs text-gray-600">{'→'} VALUES-BASED COMMONS</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg">
              <h3 className="font-bold text-yellow-900 mb-2">💡 Foundation yang Sudah Ada:</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>✅ 9,000+ genome samples (BGSi)</div>
                <div>✅ SATUSEHAT platform integration</div>
                <div>✅ SatuDNA portal (7 priority diseases)</div>
                <div>✅ UU PDP 27/2022 + GR 28/2024</div>
                <div>✅ Presidential mandate (Satu Data)</div>
                <div>✅ International precedent (Māori model)</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pancasila' && (
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-700 mb-6 text-center">
              🇮🇩 Operasionalisasi Pancasila dalam Biobank Governance
            </h2>
            
            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              {pancasilaPillars.map((pillar, idx) => (
                <div key={idx} className={`${pillar.color} border-2 p-6 lg:p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div className="text-4xl lg:text-5xl">{pillar.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-3 text-lg lg:text-xl">{pillar.sila}</h3>
                      <div className="space-y-2">
                        <div className="font-semibold text-gray-700 text-base lg:text-lg">
                          {'→'} {pillar.implementation}
                        </div>
                        <div className="text-gray-600 italic text-base lg:text-lg">
                          {pillar.detail}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg border-2 border-purple-400 mt-4">
              <h3 className="font-bold text-gray-800 mb-2 text-center">
                🌟 Unique Value Proposition Indonesia
              </h3>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-white p-2 rounded text-center">
                  <div className="font-semibold">Community-First</div>
                  <div className="text-gray-600">vs Institution-First</div>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <div className="font-semibold">Benefit-Sharing Mandatory</div>
                  <div className="text-gray-600">vs Optional CSR</div>
                </div>
                <div className="bg-white p-2 rounded text-center">
                  <div className="font-semibold">Values-Anchored</div>
                  <div className="text-gray-600">vs Purely Procedural</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'comparison' && (
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-700 mb-6 text-center">
              🔄 Paradigm Shift: Western Models vs Nusantara Commons
            </h2>
            
            <div className="overflow-hidden rounded-xl border-2 border-gray-300 shadow-lg">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                  <tr>
                    <th className="p-4 lg:p-6 text-left text-base lg:text-lg font-bold">Dimensi</th>
                    <th className="p-4 lg:p-6 text-left text-base lg:text-lg font-bold">Western Models</th>
                    <th className="p-4 lg:p-6 text-left bg-green-700 text-base lg:text-lg font-bold">Nusantara Genomic Commons</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 lg:p-6 font-semibold text-gray-700 text-base lg:text-lg">{row.aspect}</td>
                      <td className="p-4 lg:p-6 text-gray-600 text-base lg:text-lg">{row.western}</td>
                      <td className="p-4 lg:p-6 font-semibold text-green-800 bg-green-50 text-base lg:text-lg">{row.nusantara}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-50 border-2 border-blue-400 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-3">📚 Learn from Global Models</h3>
                <div className="space-y-2 text-sm">
                  <div>🇬🇧 <span className="font-semibold">UK Biobank:</span> Access infrastructure</div>
                  <div>🇺🇸 <span className="font-semibold">All of Us:</span> Public data release</div>
                  <div>🇸🇬 <span className="font-semibold">SG10K:</span> Multi-ethnic focus</div>
                  <div>🇪🇺 <span className="font-semibold">BBMRI-ERIC:</span> Pan-regional coordination</div>
                  <div>🇨🇳 <span className="font-semibold">CKB/NGDC:</span> Exclusive period mechanism</div>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-400 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 mb-3">🚀 Indonesia's Innovation</h3>
                <div className="space-y-2 text-sm">
                  <div>✅ Community co-ownership model</div>
                  <div>✅ Consensus-based access decisions</div>
                  <div>✅ Mandatory return of results</div>
                  <div>✅ Built-in benefit-sharing (15-20%)</div>
                  <div>✅ Multi-faith ethical framework</div>
                  <div>✅ Diversity-by-design (1,300+ ethnic groups)</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg border-2 border-orange-400">
              <h3 className="font-bold text-center text-gray-800 mb-2">
                🎯 Strategic Positioning: From Follower to Leader
              </h3>
              <div className="text-center text-sm text-gray-700">
                <strong>Precedent:</strong> New Zealand's Māori biobank model shows community-engaged governance 
                <span className="text-green-700 font-bold"> INCREASES participation</span> & trust.
                <br/>
                <strong className="text-red-700">Indonesia dapat menjadi global exemplar untuk ethical genomics dalam diverse populations!</strong>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-700 mb-6 text-center">
              🚀 100-Day Implementation Blitz
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-blue-50 border-2 border-blue-400 p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-blue-800 mb-4 text-lg lg:text-xl">Days 1-30: Coalition</h3>
                <ul className="text-base lg:text-lg space-y-2">
                  <li>✓ Secure Menkes buy-in</li>
                  <li>✓ Align Dirjen terkait</li>
                  <li>✓ Engage professional societies</li>
                  <li>✓ Build multi-stakeholder consensus</li>
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-400 p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-green-800 mb-4 text-lg lg:text-xl">Days 31-60: Design</h3>
                <ul className="text-base lg:text-lg space-y-2">
                  <li>✓ Draft SOPs & technical specs</li>
                  <li>✓ SATUSEHAT integration architecture</li>
                  <li>✓ Draft Permenkes Biobank Nasional</li>
                  <li>✓ Community engagement guidelines</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-2 border-purple-400 p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-purple-800 mb-4 text-lg lg:text-xl">Days 61-100: Launch</h3>
                <ul className="text-base lg:text-lg space-y-2">
                  <li>✓ Select 3 pilot sites</li>
                  <li>✓ Community kickoff ceremonies</li>
                  <li>✓ Press conference launch</li>
                  <li>✓ First samples collected</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 lg:p-8 rounded-xl border-2 border-red-400 shadow-lg">
              <h3 className="font-bold text-gray-800 mb-6 text-xl lg:text-2xl text-center">📊 3-Horizon Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="font-bold text-blue-700 mb-2 text-base lg:text-lg">Horizon 1 (Yr 0-2)</div>
                  <div className="text-gray-600 text-base lg:text-lg font-medium mb-3">Build Foundation</div>
                  <ul className="mt-3 space-y-2 text-sm lg:text-base">
                    <li>• Governance structures</li>
                    <li>• 3-5 province pilots</li>
                    <li>• First pharmacogenomic apps</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <div className="font-bold text-green-700 mb-1">Horizon 2 (Yr 3-5)</div>
                  <div className="text-gray-600">Scale & Integrate</div>
                  <ul className="mt-2 space-y-1">
                    <li>• National rollout (38 prov)</li>
                    <li>• Deep SATUSEHAT integration</li>
                    <li>• ASEAN partnerships</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <div className="font-bold text-purple-700 mb-1">Horizon 3 (Yr 6-10)</div>
                  <div className="text-gray-600">Lead & Transform</div>
                  <ul className="mt-2 space-y-1">
                    <li>• Global exemplar status</li>
                    <li>• Export governance model</li>
                    <li>• Economic engine (biotech)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg">
              <h3 className="font-bold text-yellow-900 mb-2">🎯 Quick Wins (6 months)</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>💊 <strong>Pharmacogenomic warfarin dosing</strong> untuk Indonesian population</div>
                <div>🏥 <strong>"Kampung Genomik Sehat"</strong> pilot di 10 villages</div>
                <div>📱 <strong>SatuDNA mobile app</strong> launch with participant engagement</div>
                <div>🎤 <strong>International conference presentation</strong> - thought leadership</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg border-2 border-green-400 mt-4">
              <h3 className="font-bold text-center text-gray-800 text-lg mb-2">
                💪 Critical Success Factors
              </h3>
              <div className="grid grid-cols-4 gap-2 text-xs text-center">
                <div className="bg-white p-2 rounded">
                  <div className="text-2xl mb-1">🤝</div>
                  <div className="font-semibold">Community Trust</div>
                </div>
                <div className="bg-white p-2 rounded">
                  <div className="text-2xl mb-1">⚖️</div>
                  <div className="font-semibold">Policy Support</div>
                </div>
                <div className="bg-white p-2 rounded">
                  <div className="text-2xl mb-1">💰</div>
                  <div className="font-semibold">Funding Sustainability</div>
                </div>
                <div className="bg-white p-2 rounded">
                  <div className="text-2xl mb-1">🌐</div>
                  <div className="font-semibold">International Recognition</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-8 lg:mt-12 bg-gradient-to-r from-gray-800 to-red-900 text-white p-6 lg:p-10 rounded-xl shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="font-bold text-xl lg:text-2xl mb-2">dr. Ahmad Hidayat, MSc, MBA</div>
            <div className="text-base lg:text-lg opacity-90">Ketua TWG SATUSEHAT • Expert Panel Regulatory Sandbox Digital Health Innovation</div>
          </div>
          <div className="text-left lg:text-right">
            <div className="font-bold text-yellow-300 text-lg lg:text-xl mb-3 italic">
              "Think like a startup, execute like an enterprise, impact like a social movement"
            </div>
            <div className="italic text-base lg:text-lg font-medium">Indonesia tidak perlu mengikuti - Indonesia bisa memimpin.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NusantaraGenomicSlide;