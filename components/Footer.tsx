import Link from 'next/link';
import { FOOTER_LINKS, COMPLIANCE_DISCLAIMER } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0b] border-t border-[#252529]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-lg">
                <div className="bg-[#0a0a0b] rounded-md p-2">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    FAIRFORM
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-[#a0a0a6] max-w-xs">
              AI-powered compliance automation for Australian businesses.
            </p>
          </div>
          
          {/* Footer links */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-medium mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link 
                      href="#" 
                      className="text-sm text-[#a0a0a6] hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Disclaimer and copyright */}
        <div className="mt-12 pt-6 border-t border-[#252529]">
          <p className="text-xs text-[#6b6b7b] max-w-3xl">
            {COMPLIANCE_DISCLAIMER}
          </p>
          <p className="mt-4 text-xs text-[#6b6b7b]">
            © {new Date().getFullYear()} Fairform Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
