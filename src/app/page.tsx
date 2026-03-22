'use client';

import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  batch: string;
  manufacturer: string;
  origin: string;
  verified: boolean;
  blockchai
      <header className="border-b-4 border-purple-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black">App</h1>
              <p className="text-gray-400 mt-2">Interactive demo</p>
            </div>
            <nav className="flex gap-2">
              <a href="/" className="px-4 py-2 bg-gray-800 border-2 border-gray-600 hover:border-purple-400 rounded font-bold transition-all">
                Home
              </a>
              <a href="/docs" className="px-4 py-2 bg-purple-500 border-2 border-purple-400 rounded font-bold transition-all">
                Documentation
              </a>
            </nav>
          </div>
        </div>
      </header>

nHash: string;
  certificateUrl?: string;
}

interface ProductCertificate {
  certId: string;
  productName: string;
  batch: string;
  manufacturer: string;
  origin: string;
  verificationDate: string;
  status: 'Verified' | 'Pending' | 'Revoked';
  hash: string;
  documents: string[];
}

const products: Product[] = [
  {
    id: 'P-001',
    name: 'Semiconductor Chip',
    batch: 'SC-2026-BATCH-A1',
    manufacturer: 'TSMC',
    origin: 'Taiwan',
    verified: true,
    blockchainHash: '0x7a3f9b2c1d4e5f6a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2',
  },
  {
    id: 'P-002',
    name: 'Rare Earth Material',
    batch: 'REE-2026-MIN-998',
    manufacturer: 'ReElement',
    origin: 'USA',
    verified: true,
    blockchainHash: '0x1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
  },
  {
    id: 'P-003',
    name: 'Circuit Board Assembly',
    batch: 'CBA-2026-WHOLESALE-45',
    manufacturer: 'Foxconn',
    origin: 'Vietnam',
    verified: true,
    blockchainHash: '0x3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e',
  },
  {
    id: 'P-004',
    name: 'Battery Cell',
    batch: 'BATTERY-2026-LFP-100',
    manufacturer: 'CATL',
    origin: 'China',
    verified: true,
    blockchainHash: '0x5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b',
  },
  {
    id: 'P-005',
    name: 'Connector Component',
    batch: 'CONN-2026-SMD-202',
    manufacturer: 'Molex',
    origin: 'Ireland',
    verified: true,
    blockchainHash: '0x7a8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e',
  },
  {
    id: 'P-006',
    name: 'Aluminum Alloy',
    batch: 'ALLOY-2026-REFINED-77',
    manufacturer: 'Rio Tinto',
    origin: 'Australia',
    verified: true,
    blockchainHash: '0x9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b',
  },
];

const certificates: ProductCertificate[] = [
  {
    certId: 'CERT-2026-001',
    productName: 'Semiconductor Chip',
    batch: 'SC-2026-BATCH-A1',
    manufacturer: 'TSMC',
    origin: 'Taiwan',
    verificationDate: '2026-03-15',
    status: 'Verified',
    hash: '0x7a3f9b2c1d4e5f6a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2',
    documents: ['Bill of Lading', 'Quality Certificate', 'Import Documentation'],
  },
  {
    certId: 'CERT-2026-002',
    productName: 'Rare Earth Material',
    batch: 'REE-2026-MIN-998',
    manufacturer: 'ReElement',
    origin: 'USA',
    verificationDate: '2026-03-14',
    status: 'Verified',
    hash: '0x1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
    documents: ['Mining Permit', 'Processing Report', 'Supply Chain Log'],
  },
  {
    certId: 'CERT-2026-003',
    productName: 'Circuit Board Assembly',
    batch: 'CBA-2026-WHOLESALE-45',
    manufacturer: 'Foxconn',
    origin: 'Vietnam',
    verificationDate: '2026-03-13',
    status: 'Verified',
    hash: '0x3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e',
    documents: ['Assembly Record', 'QC Check', 'Export Certificate'],
  },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCertificate, setShowCertificate] = useState<ProductCertificate | null>(null);

  const verifyProduct = async () => {
    const hash = selectedProduct?.blockchainHash || '';
    await new Promise(r => setTimeout(r, 1200));

    setShowCertificate(certificates[0]); // Mock certificate
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-emerald-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">Supply Chain Verifier</h1>
          <p className="text-gray-400 mt-2">Verify products across 6 manufacturers with blockchain certificates</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-emerald-400 p-4 text-center">
            <div className="text-3xl font-black text-emerald-400">6</div>
            <div className="text-sm text-gray-400">Verified Products</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">100%</div>
            <div className="text-sm text-gray-400">Verification Rate</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">6</div>
            <div className="text-sm text-gray-400">Manufacturers</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">2026</div>
            <div className="text-sm text-gray-400">Current Year</div>
          </div>
        </section>

        {/* Product List */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Product Registry</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {products.map((product, i) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`p-4 border-4 cursor-pointer transition-all ${
                  selectedProduct?.id === product.id
                    ? 'bg-emerald-900/30 border-emerald-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-emerald-400">{product.name}</h3>
                    <p className="text-sm text-gray-400">{product.manufacturer}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-bold ${
                    product.verified ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'
                  }`}>
                    {product.verified ? 'VERIFIED' : 'PENDING'}
                  </span>
                </div>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>Batch: {product.batch}</div>
                  <div>Origin: {product.origin}</div>
                  <div className="font-mono text-xs truncate">{product.blockchainHash}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verify Button */}
        {selectedProduct && (
          <button
            onClick={verifyProduct}
            className="w-full py-4 bg-emerald-500 text-white font-bold border-4 border-emerald-400 hover:bg-emerald-400 text-xl"
          >
            Verify {selectedProduct.name} on Blockchain
          </button>
        )}

        {/* Certificate Display */}
        {showCertificate && (
          <section className="bg-gray-900 border-4 border-blue-400 p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-black text-blue-400">Certificate</h2>
                <p className="text-sm text-gray-400">{showCertificate.certId}</p>
              </div>
              <span className="px-4 py-2 bg-blue-900 text-blue-400 text-sm font-bold">
                {showCertificate.status}
              </span>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-gray-800 border-2 border-gray-700">
                <div className="text-sm text-gray-400">Product</div>
                <div className="font-bold text-lg">{showCertificate.productName}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-800 border-2 border-gray-700">
                  <div className="text-sm text-gray-400">Batch</div>
                  <div className="font-bold">{showCertificate.batch}</div>
                </div>
                <div className="p-3 bg-gray-800 border-2 border-gray-700">
                  <div className="text-sm text-gray-400">Manufacturer</div>
                  <div className="font-bold">{showCertificate.manufacturer}</div>
                </div>
                <div className="p-3 bg-gray-800 border-2 border-gray-700">
                  <div className="text-sm text-gray-400">Origin</div>
                  <div className="font-bold">{showCertificate.origin}</div>
                </div>
                <div className="p-3 bg-gray-800 border-2 border-gray-700">
                  <div className="text-sm text-gray-400">Verified</div>
                  <div className="font-bold text-emerald-400">{showCertificate.verificationDate}</div>
                </div>
              </div>
              <div className="p-4 bg-gray-800 border-2 border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Blockchain Hash</div>
                <div className="font-mono text-sm break-all">{showCertificate.hash}</div>
              </div>
              <div className="p-4 bg-gray-800 border-2 border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Attached Documents</div>
                <div className="flex flex-wrap gap-2">
                  {showCertificate.documents.map((doc, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 text-sm border border-gray-600">
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How Supply Chain Verification Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-emerald-400 mb-2">Track</h3>
              <p className="text-xs text-gray-400">Products logged with manufacturer data at each stage</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Record</h3>
              <p className="text-xs text-gray-400">Certificate hash recorded on blockchain</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-purple-400 mb-2">Verify</h3>
              <p className="text-xs text-gray-400">Consumers check hash against blockchain</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Trust</h3>
              <p className="text-xs text-gray-400">Immutable record of origin and chain of custody</p>
            </div>
          </div>
        </section>

        {/* Manufacturers */}
        <section className="bg-gray-900 border-4 border-emerald-400 p-6">
          <h2 className="text-xl font-black text-emerald-400 mb-4">Verified Manufacturers</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {['TSMC', 'ReElement', 'Foxconn', 'CATL', 'Molex', 'Rio Tinto'].map(m => (
              <div key={m} className="p-3 bg-gray-800 border-2 border-gray-600 text-center">
                <div className="font-bold">{m}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-emerald-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
