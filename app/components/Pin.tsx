import React from "react";

// Utility for colored pin/pushpin
function Pin({ color, shadow }: { color: string; shadow: string }) {
  return (
    <span
      className={`block w-7 h-7 rounded-full ${color} ${shadow} border-[3px] border-white z-30 shadow-lg`}
      style={
        {
          boxShadow: `0 5px 18px 2px rgba(0,0,0,0.15), 0px 1px 0 0px #fff inset`,
          marginTop: -20,
        }
      }
    />
  );
}

const notes = [
  {
    number: "01",
    title: "Applications begin",
    desc: "Submit your application and join the journey",
    date: "3rd June 2025",
    colorBg: "bg-orange-50",
    colorText: "text-orange-500",
    pinColor: "bg-orange-500",
    pinShadow: "shadow-orange-300/80",
    rotate: "-rotate-[7deg]",
    style: "top-0 left-0",
    z: "z-20",
  },
  {
    number: "02",
    title: "Applications end",
    desc: "Final deadline for all applications",
    date: "10th June 2025",
    colorBg: "bg-blue-50",
    colorText: "text-blue-500",
    pinColor: "bg-blue-500",
    pinShadow: "shadow-blue-300/80",
    rotate: "rotate-[6deg]",
    style: "top-0 right-0",
    z: "z-10",
  },
  {
    number: "03",
    title: "Interview Invitations",
    desc: "Selected candidates receive interview invites",
    date: "10th June 2025",
    colorBg: "bg-purple-50",
    colorText: "text-purple-500",
    pinColor: "bg-purple-500",
    pinShadow: "shadow-purple-300/80",
    rotate: "-rotate-[5deg]",
    style: "left-10 top-2/4",
    z: "z-20",
  },
  {
    number: "04",
    title: "Interviews",
    desc: "Technical and cultural fit interviews",
    date: "10th June - 25th June",
    colorBg: "bg-orange-50",
    colorText: "text-orange-500",
    pinColor: "bg-orange-500",
    pinShadow: "shadow-orange-300/80",
    rotate: "rotate-[9deg]",
    style: "right-2 top-[60%]",
    z: "z-10",
  },
  {
    number: "05",
    title: "Final cohort results",
    desc: "Congratulations to the accepted fellows!",
    date: "Until 25th June 2025",
    colorBg: "bg-blue-50",
    colorText: "text-blue-500",
    pinColor: "bg-blue-500",
    pinShadow: "shadow-blue-300/80",
    rotate: "-rotate-[7deg]",
    style: "bottom-4 left-[13%]",
    z: "z-0",
  },
  {
    number: "06",
    title: "Program Starts",
    desc: "Begin your 8-week Solana development journey",
    date: "1st July - 31st Aug",
    colorBg: "bg-purple-50",
    colorText: "text-purple-500",
    pinColor: "bg-purple-500",
    pinShadow: "shadow-purple-300/80",
    rotate: "rotate-[5deg]",
    style: "bottom-4 right-[13%]",
    z: "z-10",
  },
];

// SVG Lines (absolute positions, curved dashed)
// function ConnectionLines() {
//   return (
//     <svg
//       className="absolute inset-0 w-full h-full pointer-events-none"
//       viewBox="0 0 900 1440"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       style={{ zIndex: 1 }}
//     >
//       {/* Fake coords, hand-tuned curves */}
//       <path
//         d="M 210 130 Q 450 70 670 140"
//         stroke="#D1D5DB"
//         strokeWidth="3"
//         strokeDasharray="15 10"
//         fill="none"
//         opacity="0.5"
//       />
//       <path
//         d="M 670 185 Q 450 280 330 380"
//         stroke="#D1D5DB"
//         strokeWidth="3"
//         strokeDasharray="13 14"
//         fill="none"
//         opacity="0.5"
//       />
//       <path
//         d="M 300 480 Q 570 630 650 700"
//         stroke="#D1D5DB"
//         strokeWidth="3"
//         strokeDasharray="15 12"
//         fill="none"
//         opacity="0.5"
//       />
//       <path
//         d="M 650 760 Q 360 970 220 1130"
//         stroke="#D1D5DB"
//         strokeWidth="3"
//         strokeDasharray="16 15"
//         fill="none"
//         opacity="0.5"
//       />
//     </svg>
//   );
// }

function FloatingTrustNotes() {
  return (
    <div className="relative min-h-screen w-full py-4 flex justify-center items-center overflow-hidden">
      {/* Decorative curved lines */}
      {/* <ConnectionLines /> */}
      {/* Note cards */}
      <div className="relative max-w-4xl w-full mx-auto px-2 md:px-0">
        {/* Mobile View - Vertical Stack */}
        <div className="md:hidden flex flex-col gap-12">
          {notes.map((note, index) => (
            <div key={index} className="relative">
              <div className="flex justify-center" style={{position:'absolute',width:'100%',top:'4px',zIndex:30}}>
                <Pin color={note.pinColor} shadow={note.pinShadow} />
              </div>
              <div className={`rounded-3xl shadow-xl px-7 pt-8 pb-6 ${note.colorBg} transition-transform`}>
                <span className={`block mb-2 font-semibold text-xl ${note.colorText}`}>{note.number}</span>
                <div className="text-xl font-bold text-neutral-800 mb-2">{note.title}</div>
                <div className="text-neutral-500 text-base font-medium mb-2 bg-white/50 px-3 py-1 rounded-full inline-block">{note.date}</div>
                <div className="text-neutral-500 text-base font-medium">{note.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Absolute Positioning */}
        <div className="hidden md:block relative h-[160vh]">
          <div className="absolute" style={{top:'45px',left:'0'}}>
            <div className={`relative w-[300px] min-h-[200px] ${notes[0].rotate} ${notes[0].z}`}>
              <div className="flex justify-center" style={{position:'absolute',width:'100%',top:'-18px',zIndex:30}}>
                <Pin color={notes[0].pinColor} shadow={notes[0].pinShadow} />
              </div>
              <div className={`rounded-3xl shadow-xl px-7 pt-8 pb-6 ${notes[0].colorBg} transition-transform`}>
                <span className={`block mb-2 font-semibold text-xl ${notes[0].colorText}`}>{notes[0].number}</span>
                <div className="text-xl font-bold text-neutral-800 mb-2">{notes[0].title}</div>
                <div className="text-neutral-500 text-base font-medium mb-2 bg-white/50 px-3 py-1 rounded-full inline-block">{notes[0].date}</div>
                <div className="text-neutral-500 text-base font-medium">{notes[0].desc}</div>
              </div>
            </div>
          </div>
          <div className="absolute" style={{top:'185px',right:'0'}}>
            <div className={`relative w-[300px] min-h-[200px] ${notes[1].rotate} ${notes[1].z}`}>
              <div className="flex justify-center" style={{position:'absolute',width:'100%',top:'-18px',zIndex:30}}>
                <Pin color={notes[1].pinColor} shadow={notes[1].pinShadow} />
              </div>
              <div className={`rounded-3xl shadow-xl px-7 pt-8 pb-6 ${notes[1].colorBg} transition-transform`}>
                <span className={`block mb-2 font-semibold text-xl ${notes[1].colorText}`}>{notes[1].number}</span>
                <div className="text-xl font-bold text-neutral-800 mb-2">{notes[1].title}</div>
                <div className="text-neutral-500 text-base font-medium mb-2 bg-white/50 px-3 py-1 rounded-full inline-block">{notes[1].date}</div>
                <div className="text-neutral-500 text-base font-medium">{notes[1].desc}</div>
              </div>
            </div>
          </div>
          <div className="absolute" style={{top:'420px',left:'60px'}}>
            <div className={`relative w-[300px] min-h-[200px] ${notes[2].rotate} ${notes[2].z}`}>
              <div className="flex justify-center" style={{position:'absolute',width:'100%',top:'-18px',zIndex:30}}>
                <Pin color={notes[2].pinColor} shadow={notes[2].pinShadow} />
              </div>
              <div className={`rounded-3xl shadow-xl px-7 pt-8 pb-6 ${notes[2].colorBg} transition-transform`}>
                <span className={`block mb-2 font-semibold text-xl ${notes[2].colorText}`}>{notes[2].number}</span>
                <div className="text-xl font-bold text-neutral-800 mb-2">{notes[2].title}</div>
                <div className="text-neutral-500 text-base font-medium mb-2 bg-white/50 px-3 py-1 rounded-full inline-block">{notes[2].date}</div>
                <div className="text-neutral-500 text-base font-medium">{notes[2].desc}</div>
              </div>
            </div>
          </div>
          <div className="absolute" style={{top:'620px',right:'30px'}}>
            <div className={`relative w-[300px] min-h-[200px] ${notes[3].rotate} ${notes[3].z}`}>
              <div className="flex justify-center" style={{position:'absolute',width:'100%',top:'-18px',zIndex:30}}>
                <Pin color={notes[3].pinColor} shadow={notes[3].pinShadow} />
              </div>
              <div className={`rounded-3xl shadow-xl px-7 pt-8 pb-6 ${notes[3].colorBg} transition-transform`}>
                <span className={`block mb-2 font-semibold text-xl ${notes[3].colorText}`}>{notes[3].number}</span>
                <div className="text-xl font-bold text-neutral-800 mb-2">{notes[3].title}</div>
                <div className="text-neutral-500 text-base font-medium mb-2 bg-white/50 px-3 py-1 rounded-full inline-block">{notes[3].date}</div>
                <div className="text-neutral-500 text-base font-medium">{notes[3].desc}</div>
              </div>
            </div>
          </div>
          <div className="absolute" style={{bottom:'160px',left:'120px'}}>
            <div className={`relative w-[300px] min-h-[200px] ${notes[4].rotate} ${notes[4].z}`}>
              <div className="flex justify-center" style={{position:'absolute',width:'100%',top:'-18px',zIndex:30}}>
                <Pin color={notes[4].pinColor} shadow={notes[4].pinShadow} />
              </div>
              <div className={`rounded-3xl shadow-xl px-7 pt-8 pb-6 ${notes[4].colorBg} transition-transform`}>
                <span className={`block mb-2 font-semibold text-xl ${notes[4].colorText}`}>{notes[4].number}</span>
                <div className="text-xl font-bold text-neutral-800 mb-2">{notes[4].title}</div>
                <div className="text-neutral-500 text-base font-medium mb-2 bg-white/50 px-3 py-1 rounded-full inline-block">{notes[4].date}</div>
                <div className="text-neutral-500 text-base font-medium">{notes[4].desc}</div>
              </div>
            </div>
          </div>
          <div className="absolute" style={{bottom:'0',right:'60px'}}>
            <div className={`relative w-[300px] min-h-[200px] ${notes[5].rotate} ${notes[5].z}`}>
              <div className="flex justify-center" style={{position:'absolute',width:'100%',top:'-18px',zIndex:30}}>
                <Pin color={notes[5].pinColor} shadow={notes[5].pinShadow} />
              </div>
              <div className={`rounded-3xl shadow-xl px-7 pt-8 pb-6 ${notes[5].colorBg} transition-transform`}>
                <span className={`block mb-2 font-semibold text-xl ${notes[5].colorText}`}>{notes[5].number}</span>
                <div className="text-xl font-bold text-neutral-800 mb-2">{notes[5].title}</div>
                <div className="text-neutral-500 text-base font-medium mb-2 bg-white/50 px-3 py-1 rounded-full inline-block">{notes[5].date}</div>
                <div className="text-neutral-500 text-base font-medium">{notes[5].desc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloatingTrustNotes;
