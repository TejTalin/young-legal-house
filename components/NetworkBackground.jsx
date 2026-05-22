export default function NetworkBackground() {
  return (
    <div className="community-bg" id="communityBg">
      <svg className="network-svg" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
        <defs>

          {/* 1. Gavel */}
          <g id="icon-gavel">
            <rect x="-9" y="-4" width="18" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.85" transform="rotate(-40 0 0)"/>
            <line x1="2" y1="3" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.85"/>
            <rect x="-10" y="12" width="20" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.85"/>
          </g>

          {/* 2. Suited Lawyer/Person */}
          <g id="icon-lawyer">
            <circle cx="0" cy="-10" r="6" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.85"/>
            <path d="M-10 10 L-6 -2 L0 2 L6 -2 L10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" opacity="0.85"/>
            <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeWidth="1.4" opacity="0.85"/>
            <line x1="-2" y1="1" x2="-2" y2="4" stroke="currentColor" strokeWidth="1.2" opacity="0.85"/>
            <line x1="2" y1="1" x2="2" y2="4" stroke="currentColor" strokeWidth="1.2" opacity="0.85"/>
          </g>

          {/* 3. Document */}
          <g id="icon-document">
            <path d="M-8 -12 L5 -12 L8 -9 L8 12 L-8 12 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" opacity="0.85"/>
            <path d="M5 -12 L5 -9 L8 -9" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.85"/>
            <line x1="-4" y1="-4" x2="4" y2="-4" stroke="currentColor" strokeWidth="1.4" opacity="0.85"/>
            <line x1="-4" y1="1" x2="4" y2="1" stroke="currentColor" strokeWidth="1.4" opacity="0.85"/>
            <line x1="-4" y1="6" x2="2" y2="6" stroke="currentColor" strokeWidth="1.4" opacity="0.85"/>
          </g>

          {/* 4. Newspaper */}
          <g id="icon-newspaper">
            <rect x="-10" y="-11" width="20" height="22" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.85"/>
            <rect x="-7" y="-8" width="8" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.85"/>
            <line x1="3" y1="-6" x2="7" y2="-6" stroke="currentColor" strokeWidth="1.3" opacity="0.85"/>
            <line x1="3" y1="-3" x2="7" y2="-3" stroke="currentColor" strokeWidth="1.3" opacity="0.85"/>
            <line x1="-7" y1="3" x2="7" y2="3" stroke="currentColor" strokeWidth="1.3" opacity="0.85"/>
            <line x1="-7" y1="6" x2="7" y2="6" stroke="currentColor" strokeWidth="1.3" opacity="0.85"/>
            <line x1="-7" y1="9" x2="4" y2="9" stroke="currentColor" strokeWidth="1.3" opacity="0.85"/>
          </g>

          {/* 5. Court Building */}
          <g id="icon-court">
            <rect x="-12" y="6" width="24" height="4" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.85"/>
            <rect x="-12" y="10" width="24" height="3" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.85"/>
            <line x1="-9" y1="6" x2="-9" y2="-4" stroke="currentColor" strokeWidth="1.6" opacity="0.85"/>
            <line x1="-4" y1="6" x2="-4" y2="-4" stroke="currentColor" strokeWidth="1.6" opacity="0.85"/>
            <line x1="1" y1="6" x2="1" y2="-4" stroke="currentColor" strokeWidth="1.6" opacity="0.85"/>
            <line x1="6" y1="6" x2="6" y2="-4" stroke="currentColor" strokeWidth="1.6" opacity="0.85"/>
            <line x1="11" y1="6" x2="11" y2="-4" stroke="currentColor" strokeWidth="1.6" opacity="0.85"/>
            <path d="M-13 -4 L0 -12 L13 -4 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" opacity="0.85"/>
            <circle cx="0" cy="-7" r="1.5" fill="currentColor" opacity="0.85"/>
          </g>

          {/* 6. Handshake */}
          <g id="icon-handshake">
            <path d="M-12 0 L-6 -5 L-1 -3 L3 -5 L8 -3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" opacity="0.85"/>
            <path d="M12 0 L6 -5 L1 -3 L-3 -5 L-8 -3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" opacity="0.85"/>
            <path d="M-12 0 L-8 4 L-3 2 L2 5 L8 3 L12 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" opacity="0.85"/>
            <line x1="-3" y1="-3" x2="-3" y2="2" stroke="currentColor" strokeWidth="1.4" opacity="0.85"/>
          </g>

          {/* 7. Briefcase */}
          <g id="icon-briefcase">
            <rect x="-11" y="-5" width="22" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.85"/>
            <path d="M-5 -5 L-5 -8 Q-5 -10 -3 -10 L3 -10 Q5 -10 5 -8 L5 -5" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.85"/>
            <line x1="-11" y1="3" x2="11" y2="3" stroke="currentColor" strokeWidth="1.4" opacity="0.85"/>
            <rect x="-2" y="1" width="4" height="4" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.85"/>
          </g>

          {/* 8. Scales of Justice */}
          <g id="icon-scales">
            <line x1="0" y1="-12" x2="0" y2="10" stroke="currentColor" strokeWidth="1.8" opacity="0.85"/>
            <line x1="-11" y1="-6" x2="11" y2="-6" stroke="currentColor" strokeWidth="1.6" opacity="0.85"/>
            <circle cx="0" cy="-12" r="1.5" fill="currentColor" opacity="0.85"/>
            <path d="M-11 -6 L-14 2 L-8 2 Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity="0.85"/>
            <path d="M11 -6 L8 2 L14 2 Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity="0.85"/>
            <line x1="-5" y1="10" x2="5" y2="10" stroke="currentColor" strokeWidth="1.6" opacity="0.85"/>
            <line x1="-14" y1="2" x2="-8" y2="2" stroke="currentColor" strokeWidth="1.4" opacity="0.85"/>
            <line x1="8" y1="2" x2="14" y2="2" stroke="currentColor" strokeWidth="1.4" opacity="0.85"/>
          </g>

        </defs>

        {/* Animated connecting lines — same positions as before */}
        <g className="network-lines" stroke="currentColor" strokeWidth="1" opacity="0.25">
          <line x1="50" y1="80" x2="200" y2="120"/><line x1="200" y1="120" x2="380" y2="90"/><line x1="380" y1="90" x2="550" y2="140"/><line x1="550" y1="140" x2="720" y2="100"/><line x1="720" y1="100" x2="900" y2="130"/><line x1="900" y1="130" x2="1080" y2="85"/><line x1="1080" y1="85" x2="1250" y2="110"/><line x1="1250" y1="110" x2="1350" y2="150"/>
          <line x1="80" y1="220" x2="280" y2="260"/><line x1="280" y1="260" x2="450" y2="220"/><line x1="450" y1="220" x2="620" y2="280"/><line x1="620" y1="280" x2="800" y2="240"/><line x1="800" y1="240" x2="980" y2="300"/><line x1="980" y1="300" x2="1150" y2="260"/><line x1="1150" y1="260" x2="1300" y2="290"/>
          <line x1="60" y1="380" x2="240" y2="420"/><line x1="240" y1="420" x2="420" y2="380"/><line x1="420" y1="380" x2="600" y2="440"/><line x1="600" y1="440" x2="780" y2="400"/><line x1="780" y1="400" x2="960" y2="460"/><line x1="960" y1="460" x2="1140" y2="420"/><line x1="1140" y1="420" x2="1320" y2="450"/>
          <line x1="100" y1="540" x2="300" y2="580"/><line x1="300" y1="580" x2="500" y2="540"/><line x1="500" y1="540" x2="700" y2="600"/><line x1="700" y1="600" x2="900" y2="560"/><line x1="900" y1="560" x2="1100" y2="620"/><line x1="1100" y1="620" x2="1280" y2="580"/>
          <line x1="120" y1="700" x2="340" y2="740"/><line x1="340" y1="740" x2="560" y2="700"/><line x1="560" y1="700" x2="780" y2="760"/><line x1="780" y1="760" x2="1000" y2="720"/><line x1="1000" y1="720" x2="1180" y2="750"/>
          <line x1="180" y1="820" x2="420" y2="860"/><line x1="420" y1="860" x2="660" y2="820"/><line x1="660" y1="820" x2="900" y2="880"/><line x1="900" y1="880" x2="1120" y2="840"/>
          {/* Vertical connectors */}
          <line x1="200" y1="120" x2="280" y2="260"/><line x1="380" y1="90" x2="450" y2="220"/><line x1="550" y1="140" x2="620" y2="280"/><line x1="720" y1="100" x2="800" y2="240"/><line x1="900" y1="130" x2="980" y2="300"/><line x1="1080" y1="85" x2="1150" y2="260"/>
          <line x1="280" y1="260" x2="240" y2="420"/><line x1="450" y1="220" x2="420" y2="380"/><line x1="620" y1="280" x2="600" y2="440"/><line x1="800" y1="240" x2="780" y2="400"/><line x1="980" y1="300" x2="960" y2="460"/><line x1="1150" y1="260" x2="1140" y2="420"/>
          <line x1="240" y1="420" x2="300" y2="580"/><line x1="420" y1="380" x2="500" y2="540"/><line x1="600" y1="440" x2="700" y2="600"/><line x1="780" y1="400" x2="900" y2="560"/><line x1="960" y1="460" x2="1100" y2="620"/>
          <line x1="300" y1="580" x2="340" y2="740"/><line x1="500" y1="540" x2="560" y2="700"/><line x1="700" y1="600" x2="780" y2="760"/><line x1="900" y1="560" x2="1000" y2="720"/>
        </g>

        {/* Icons — cycling through all 8 across the grid */}
        <g className="network-icons" fill="currentColor">
          {/* Row 1 */}
          <use href="#icon-gavel"      x="50"   y="80"/>
          <use href="#icon-lawyer"     x="200"  y="120"/>
          <use href="#icon-document"   x="380"  y="90"/>
          <use href="#icon-newspaper"  x="550"  y="140"/>
          <use href="#icon-court"      x="720"  y="100"/>
          <use href="#icon-handshake"  x="900"  y="130"/>
          <use href="#icon-briefcase"  x="1080" y="85"/>
          <use href="#icon-scales"     x="1250" y="110"/>
          <use href="#icon-gavel"      x="1350" y="150"/>
          {/* Row 2 */}
          <use href="#icon-scales"     x="80"   y="220"/>
          <use href="#icon-court"      x="280"  y="260"/>
          <use href="#icon-handshake"  x="450"  y="220"/>
          <use href="#icon-briefcase"  x="620"  y="280"/>
          <use href="#icon-lawyer"     x="800"  y="240"/>
          <use href="#icon-document"   x="980"  y="300"/>
          <use href="#icon-newspaper"  x="1150" y="260"/>
          <use href="#icon-gavel"      x="1300" y="290"/>
          {/* Row 3 */}
          <use href="#icon-newspaper"  x="60"   y="380"/>
          <use href="#icon-scales"     x="240"  y="420"/>
          <use href="#icon-gavel"      x="420"  y="380"/>
          <use href="#icon-lawyer"     x="600"  y="440"/>
          <use href="#icon-court"      x="780"  y="400"/>
          <use href="#icon-document"   x="960"  y="460"/>
          <use href="#icon-handshake"  x="1140" y="420"/>
          <use href="#icon-briefcase"  x="1320" y="450"/>
          {/* Row 4 */}
          <use href="#icon-briefcase"  x="100"  y="540"/>
          <use href="#icon-newspaper"  x="300"  y="580"/>
          <use href="#icon-scales"     x="500"  y="540"/>
          <use href="#icon-gavel"      x="700"  y="600"/>
          <use href="#icon-lawyer"     x="900"  y="560"/>
          <use href="#icon-court"      x="1100" y="620"/>
          <use href="#icon-handshake"  x="1280" y="580"/>
          {/* Row 5 */}
          <use href="#icon-court"      x="120"  y="700"/>
          <use href="#icon-briefcase"  x="340"  y="740"/>
          <use href="#icon-newspaper"  x="560"  y="700"/>
          <use href="#icon-scales"     x="780"  y="760"/>
          <use href="#icon-gavel"      x="1000" y="720"/>
          <use href="#icon-lawyer"     x="1180" y="750"/>
          {/* Row 6 */}
          <use href="#icon-handshake"  x="180"  y="820"/>
          <use href="#icon-court"      x="420"  y="860"/>
          <use href="#icon-briefcase"  x="660"  y="820"/>
          <use href="#icon-newspaper"  x="900"  y="880"/>
          <use href="#icon-scales"     x="1120" y="840"/>
        </g>

      </svg>
    </div>
  );
}
