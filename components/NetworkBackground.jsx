export default function NetworkBackground() {
  return (
    <div className="community-bg" id="communityBg">
      <svg className="network-svg" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
        <defs>

          {/* 1. Gavel — hammer head + handle + block */}
          <g id="icon-gavel">
            <g transform="rotate(-40 0 0)">
              <rect x="-10" y="-5" width="20" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8"/>
            </g>
            <line x1="2" y1="4" x2="10" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <rect x="-11" y="13" width="22" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6"/>
          </g>

          {/* 2. Suited person — circle head + jacket with tie */}
          <g id="icon-lawyer">
            <circle cx="0" cy="-9" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.7"/>
            <path d="M-11 14 C-11 2 -6 -1 0 -1 C6 -1 11 2 11 14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
            <line x1="-4" y1="-1" x2="0" y2="4" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="4" y1="-1" x2="0" y2="4" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="0" y1="4" x2="0" y2="9" stroke="currentColor" strokeWidth="1.4"/>
          </g>

          {/* 3. Document — page with folded corner + 3 text lines */}
          <g id="icon-document">
            <path d="M-8 -13 L6 -13 L9 -10 L9 13 L-8 13 Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
            <path d="M6 -13 L6 -10 L9 -10" fill="none" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="-4" y1="-5" x2="5" y2="-5" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="-4" y1="0" x2="5" y2="0" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="-4" y1="5" x2="2" y2="5" stroke="currentColor" strokeWidth="1.4"/>
          </g>

          {/* 4. Newspaper — outer box + inner box + text lines */}
          <g id="icon-newspaper">
            <rect x="-10" y="-12" width="20" height="24" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7"/>
            <rect x="-7" y="-9" width="8" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.3"/>
            <line x1="3" y1="-7" x2="7" y2="-7" stroke="currentColor" strokeWidth="1.2"/>
            <line x1="3" y1="-4" x2="7" y2="-4" stroke="currentColor" strokeWidth="1.2"/>
            <line x1="3" y1="-1" x2="7" y2="-1" stroke="currentColor" strokeWidth="1.2"/>
            <line x1="-7" y1="2" x2="7" y2="2" stroke="currentColor" strokeWidth="1.2"/>
            <line x1="-7" y1="5" x2="7" y2="5" stroke="currentColor" strokeWidth="1.2"/>
            <line x1="-7" y1="8" x2="4" y2="8" stroke="currentColor" strokeWidth="1.2"/>
          </g>

          {/* 5. Court building — columns + pediment + base */}
          <g id="icon-court">
            <rect x="-13" y="7" width="26" height="4" fill="none" stroke="currentColor" strokeWidth="1.7"/>
            <rect x="-13" y="11" width="26" height="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="-9" y1="7" x2="-9" y2="-3" stroke="currentColor" strokeWidth="1.6"/>
            <line x1="-4" y1="7" x2="-4" y2="-3" stroke="currentColor" strokeWidth="1.6"/>
            <line x1="1" y1="7" x2="1" y2="-3" stroke="currentColor" strokeWidth="1.6"/>
            <line x1="6" y1="7" x2="6" y2="-3" stroke="currentColor" strokeWidth="1.6"/>
            <line x1="11" y1="7" x2="11" y2="-3" stroke="currentColor" strokeWidth="1.6"/>
            <line x1="-13" y1="-3" x2="13" y2="-3" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M-14 -3 L0 -13 L14 -3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
          </g>

          {/* 6. Handshake — two hands meeting */}
          <g id="icon-handshake">
            <path d="M-13 3 L-7 -2 L-2 0 L2 -3 L7 -1 L13 -4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M-13 3 L-9 7 L-3 5 L2 8 L8 5 L13 7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="-2" y1="0" x2="-3" y2="5" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="2" y1="-3" x2="2" y2="8" stroke="currentColor" strokeWidth="1.4"/>
          </g>

          {/* 7. Briefcase — box body + handle + centre latch */}
          <g id="icon-briefcase">
            <rect x="-12" y="-5" width="24" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7"/>
            <path d="M-5 -5 L-5 -9 Q-5 -11 -3 -11 L3 -11 Q5 -11 5 -9 L5 -5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="-12" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="1.4"/>
            <rect x="-2.5" y="2" width="5" height="4" rx="0.8" fill="none" stroke="currentColor" strokeWidth="1.3"/>
          </g>

          {/* 8. Scales of Justice — beam + two pans + pillar + base */}
          <g id="icon-scales">
            <line x1="0" y1="-13" x2="0" y2="11" stroke="currentColor" strokeWidth="1.7"/>
            <line x1="-12" y1="-7" x2="12" y2="-7" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="0" cy="-13" r="1.8" fill="currentColor"/>
            {/* Left pan */}
            <line x1="-12" y1="-7" x2="-14" y2="2" stroke="currentColor" strokeWidth="1.3"/>
            <line x1="-12" y1="-7" x2="-10" y2="2" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M-15 2 Q-12 5 -9 2" fill="none" stroke="currentColor" strokeWidth="1.4"/>
            {/* Right pan */}
            <line x1="12" y1="-7" x2="10" y2="2" stroke="currentColor" strokeWidth="1.3"/>
            <line x1="12" y1="-7" x2="14" y2="2" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M9 2 Q12 5 15 2" fill="none" stroke="currentColor" strokeWidth="1.4"/>
            {/* Base */}
            <line x1="-6" y1="11" x2="6" y2="11" stroke="currentColor" strokeWidth="1.6"/>
          </g>

        </defs>

        {/* Connecting lines — kept subtle */}
        <g className="network-lines" stroke="currentColor" strokeWidth="1" opacity="0.2">
          <line x1="50" y1="80" x2="200" y2="120"/><line x1="200" y1="120" x2="380" y2="90"/><line x1="380" y1="90" x2="550" y2="140"/><line x1="550" y1="140" x2="720" y2="100"/><line x1="720" y1="100" x2="900" y2="130"/><line x1="900" y1="130" x2="1080" y2="85"/><line x1="1080" y1="85" x2="1250" y2="110"/><line x1="1250" y1="110" x2="1350" y2="150"/>
          <line x1="80" y1="220" x2="280" y2="260"/><line x1="280" y1="260" x2="450" y2="220"/><line x1="450" y1="220" x2="620" y2="280"/><line x1="620" y1="280" x2="800" y2="240"/><line x1="800" y1="240" x2="980" y2="300"/><line x1="980" y1="300" x2="1150" y2="260"/><line x1="1150" y1="260" x2="1300" y2="290"/>
          <line x1="60" y1="380" x2="240" y2="420"/><line x1="240" y1="420" x2="420" y2="380"/><line x1="420" y1="380" x2="600" y2="440"/><line x1="600" y1="440" x2="780" y2="400"/><line x1="780" y1="400" x2="960" y2="460"/><line x1="960" y1="460" x2="1140" y2="420"/><line x1="1140" y1="420" x2="1320" y2="450"/>
          <line x1="100" y1="540" x2="300" y2="580"/><line x1="300" y1="580" x2="500" y2="540"/><line x1="500" y1="540" x2="700" y2="600"/><line x1="700" y1="600" x2="900" y2="560"/><line x1="900" y1="560" x2="1100" y2="620"/><line x1="1100" y1="620" x2="1280" y2="580"/>
          <line x1="120" y1="700" x2="340" y2="740"/><line x1="340" y1="740" x2="560" y2="700"/><line x1="560" y1="700" x2="780" y2="760"/><line x1="780" y1="760" x2="1000" y2="720"/><line x1="1000" y1="720" x2="1180" y2="750"/>
          <line x1="200" y1="120" x2="280" y2="260"/><line x1="380" y1="90" x2="450" y2="220"/><line x1="550" y1="140" x2="620" y2="280"/><line x1="720" y1="100" x2="800" y2="240"/><line x1="900" y1="130" x2="980" y2="300"/><line x1="1080" y1="85" x2="1150" y2="260"/>
          <line x1="280" y1="260" x2="240" y2="420"/><line x1="450" y1="220" x2="420" y2="380"/><line x1="620" y1="280" x2="600" y2="440"/><line x1="800" y1="240" x2="780" y2="400"/><line x1="980" y1="300" x2="960" y2="460"/><line x1="1150" y1="260" x2="1140" y2="420"/>
          <line x1="240" y1="420" x2="300" y2="580"/><line x1="420" y1="380" x2="500" y2="540"/><line x1="600" y1="440" x2="700" y2="600"/><line x1="780" y1="400" x2="900" y2="560"/><line x1="960" y1="460" x2="1100" y2="620"/>
          <line x1="300" y1="580" x2="340" y2="740"/><line x1="500" y1="540" x2="560" y2="700"/><line x1="700" y1="600" x2="780" y2="760"/><line x1="900" y1="560" x2="1000" y2="720"/>
        </g>

        {/* Icons — cycling all 8 across grid */}
        <g className="network-icons" fill="none" stroke="currentColor" strokeWidth="1">
          <use href="#icon-gavel"      x="50"   y="80"/>
          <use href="#icon-lawyer"     x="200"  y="120"/>
          <use href="#icon-document"   x="380"  y="90"/>
          <use href="#icon-newspaper"  x="550"  y="140"/>
          <use href="#icon-court"      x="720"  y="100"/>
          <use href="#icon-handshake"  x="900"  y="130"/>
          <use href="#icon-briefcase"  x="1080" y="85"/>
          <use href="#icon-scales"     x="1250" y="110"/>
          <use href="#icon-gavel"      x="1350" y="150"/>
          <use href="#icon-scales"     x="80"   y="220"/>
          <use href="#icon-court"      x="280"  y="260"/>
          <use href="#icon-handshake"  x="450"  y="220"/>
          <use href="#icon-briefcase"  x="620"  y="280"/>
          <use href="#icon-lawyer"     x="800"  y="240"/>
          <use href="#icon-document"   x="980"  y="300"/>
          <use href="#icon-newspaper"  x="1150" y="260"/>
          <use href="#icon-gavel"      x="1300" y="290"/>
          <use href="#icon-newspaper"  x="60"   y="380"/>
          <use href="#icon-scales"     x="240"  y="420"/>
          <use href="#icon-gavel"      x="420"  y="380"/>
          <use href="#icon-lawyer"     x="600"  y="440"/>
          <use href="#icon-court"      x="780"  y="400"/>
          <use href="#icon-document"   x="960"  y="460"/>
          <use href="#icon-handshake"  x="1140" y="420"/>
          <use href="#icon-briefcase"  x="1320" y="450"/>
          <use href="#icon-briefcase"  x="100"  y="540"/>
          <use href="#icon-newspaper"  x="300"  y="580"/>
          <use href="#icon-scales"     x="500"  y="540"/>
          <use href="#icon-gavel"      x="700"  y="600"/>
          <use href="#icon-lawyer"     x="900"  y="560"/>
          <use href="#icon-court"      x="1100" y="620"/>
          <use href="#icon-handshake"  x="1280" y="580"/>
          <use href="#icon-court"      x="120"  y="700"/>
          <use href="#icon-briefcase"  x="340"  y="740"/>
          <use href="#icon-newspaper"  x="560"  y="700"/>
          <use href="#icon-scales"     x="780"  y="760"/>
          <use href="#icon-gavel"      x="1000" y="720"/>
          <use href="#icon-lawyer"     x="1180" y="750"/>
        </g>

      </svg>
    </div>
  );
}
