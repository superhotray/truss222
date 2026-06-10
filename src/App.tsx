import { HardHat, Compass, Activity, BrainCircuit, Target, Wrench, ChevronRight, MonitorPlay, ShieldAlert, FlaskConical, ExternalLink } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-300 font-sans selection:bg-cyan-500/30">
      {/* Top Navigation / HUD Bar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0b1120]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-500/50 flex items-center justify-center">
              <HardHat className="w-5 h-5 text-cyan-400" />
            </div>
            <h1 className="font-display font-semibold text-lg tracking-wide text-slate-100">
              STRUCTURAL<span className="text-cyan-400">ENGINEER</span>_OS
            </h1>
          </div>
          <div className="hidden md:flex flex-gap-6 text-sm font-mono text-slate-500">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> SYSTEM ONLINE</span>
            <span className="ml-6 flex items-center gap-2">LEVEL: <span className="text-slate-300">GRADE 7</span></span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* HERO SECTION - Mission Briefing */}
        <section className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-slate-900 border border-slate-700/50 rounded-2xl p-8 md:p-12 overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 text-slate-800/50 pointer-events-none">
              <Compass className="w-64 h-64" />
            </div>

            <div className="md:w-2/3 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800 text-cyan-400 font-mono text-xs mb-6">
                <Target className="w-4 h-4" />
                MISSION_BRIEFING
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                桁架橋載重挑戰
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                你將化身為橋樑工程師，負責設計並搭建一座長度與寬度受限的桁架橋。
                應用力學知識完成設計圖後，首先在數位模擬環境中進行極限負載測試解決結構弱點。
                最終，我們將使用實木進行物理搭建，並以「載重比」見真章。
              </p>
              
              <div className="flex flex-wrap gap-4 font-mono text-sm">
                <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg text-slate-300 border border-slate-700">
                  <Activity className="w-4 h-4 text-emerald-400"/> 9 節課
                </div>
                <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg text-slate-300 border border-slate-700">
                  <Wrench className="w-4 h-4 text-amber-400"/> 手工具操作能力
                </div>
                <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg text-slate-300 border border-slate-700">
                  <BrainCircuit className="w-4 h-4 text-purple-400"/> 創意思維
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* OBJECTIVES SECTION */}
        <section className="space-y-8">
           <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="text-2xl font-display font-semibold text-white flex items-center gap-3">
               <ShieldAlert className="w-6 h-6 text-indigo-400" />
               學習目標矩陣
            </h3>
           </div>

           <div className="grid md:grid-cols-3 gap-6">
              {/* Knowledge */}
              <div className="group bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 hover:bg-slate-800/80 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-blue-950 border border-blue-800 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-4">基礎結構知識 (Knowledge)</h4>
                <ul className="space-y-3 text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
                    理解「結構」與其生活中的應用場景
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
                    認識「應力」是如何產生並影響物理結構
                  </li>
                </ul>
              </div>

              {/* Skills */}
              <div className="group bg-slate-900/50 border border-slate-800 hover:border-amber-500/50 rounded-xl p-6 transition-all duration-300 hover:bg-slate-800/80 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-amber-950 border border-amber-800 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-4">工程實作技能 (Skills)</h4>
                <ul className="space-y-3 text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 text-amber-500 shrink-0" />
                    能根據設計圖應用手工具進行實體搭建
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 text-amber-500 shrink-0" />
                    應用力學相關知識於線上建立橋梁數位模型
                  </li>
                </ul>
              </div>

              {/* Higher-order thinking */}
              <div className="group bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 hover:bg-slate-800/80 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-purple-950 border border-purple-800 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-4">高階思維 (Thinking)</h4>
                <ul className="space-y-3 text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 text-purple-500 shrink-0" />
                    在模擬失敗後，能根據受力分佈分析原因並修正
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 text-purple-500 shrink-0" />
                    能夠統整限制條件，創造一可承載重物的桁架設計
                  </li>
                </ul>
              </div>
           </div>
        </section>


        {/* KNOWLEDGE BASE - Truss concept */}
        <section className="space-y-8">
           <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="text-2xl font-display font-semibold text-white flex items-center gap-3">
               <FlaskConical className="w-6 h-6 text-emerald-400" />
               結構原理概覽：桁架 (Truss)
            </h3>
           </div>
           
           <div className="grid md:grid-cols-2 gap-6">
              {/* 1. 基本定義與構造 */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
                 <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-700/80">
                   <div className="w-8 h-8 rounded-lg bg-emerald-950 flex items-center justify-center text-emerald-400 font-mono font-bold">1</div>
                   <h4 className="text-lg font-display font-semibold text-slate-100">基本定義與構造</h4>
                 </div>
                 <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                   <li><strong className="text-emerald-300">核心概念：</strong>桁架是由「二力元件」（僅在兩個端點受力的元件）組合而成，整體視為單一物體的結構。</li>
                   <li><strong className="text-emerald-300">常見型態：</strong>通常由直桿元件組成五個以上的三角形單位，並在各元件末端的「節點」（頂點）互相連接。</li>
                 </ul>
              </div>

              {/* 2. 受力特性 */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-colors">
                 <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-700/80">
                   <div className="w-8 h-8 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 font-mono font-bold">2</div>
                   <h4 className="text-lg font-display font-semibold text-slate-100">受力特性</h4>
                 </div>
                 <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                   <li><strong className="text-blue-300">只受推拉力：</strong>外力與反作用力僅作用於端點，因此元件只會承受拉力或壓力。</li>
                   <li><strong className="text-blue-300">不傳遞轉矩：</strong>桁架的節點被視為「旋轉接點」，因此元件受到的轉矩（扭力）不會傳遞到其他元件上。</li>
                 </ul>
              </div>

              {/* 3. 分類方式 */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/30 transition-colors">
                 <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-700/80">
                   <div className="w-8 h-8 rounded-lg bg-purple-950 flex items-center justify-center text-purple-400 font-mono font-bold">3</div>
                   <h4 className="text-lg font-display font-semibold text-slate-100">分類方式</h4>
                 </div>
                 <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                   <li><strong className="text-purple-300">平面桁架：</strong>所有節點與元件都位於同一個二維平面上。</li>
                   <li><strong className="text-purple-300">空間桁架：</strong>節點與元件延伸至三維空間（立體結構）。</li>
                 </ul>
              </div>

              {/* 4. 各部位專有名詞 */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-rose-500/30 transition-colors">
                 <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-700/80">
                   <div className="w-8 h-8 rounded-lg bg-rose-950 flex items-center justify-center text-rose-400 font-mono font-bold">4</div>
                   <h4 className="text-lg font-display font-semibold text-slate-100">各部位專有名詞</h4>
                 </div>
                 <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3 text-slate-300 text-sm leading-relaxed">
                   <li className="bg-slate-950/50 p-2 rounded border border-slate-800/50"><strong className="text-rose-300 block mb-1">上弦杆 (Top chord)</strong>位於最上方的桿件，主要承受壓力。</li>
                   <li className="bg-slate-950/50 p-2 rounded border border-slate-800/50"><strong className="text-rose-300 block mb-1">下弦杆 (Bottom chord)</strong>位於最下方的桿件，主要承受拉力。</li>
                   <li className="bg-slate-950/50 p-2 rounded border border-slate-800/50"><strong className="text-rose-300 block mb-1">梁腹 (Web)</strong>位於上下弦杆中間的桿件。</li>
                   <li className="bg-slate-950/50 p-2 rounded border border-slate-800/50"><strong className="text-rose-300 block mb-1">桁格 (Panel)</strong>梁腹與梁腹之間所形成的空間。</li>
                 </ul>
              </div>
           </div>
        </section>

        {/* SIMULATION TERMINAL - Embedded iframe */}
        <section className="space-y-8 pb-24">
           <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="text-2xl font-display font-semibold text-white flex items-center gap-3">
               <MonitorPlay className="w-6 h-6 text-cyan-400" />
               工程模擬終端 (Simulation Terminal)
            </h3>
            <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-400 hidden sm:inline-block">AI.STUDIO/APP/TRUSS-SIM</span>
           </div>

           <div className="w-full bg-[#030712] rounded-2xl overflow-hidden border border-slate-700/80 shadow-[0_0_30px_rgba(6,182,212,0.1)] ring-1 ring-cyan-500/20">
              
              {/* Terminal Header */}
              <div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="font-mono text-xs text-slate-500">
                  STRUCTURAL_TESTING_ENVIRONMENT_v1.0
                </div>
                <div></div>
              </div>

              {/* The Sandbox iframe */}
              <div className="relative w-full" style={{ height: '700px' }}>
                <iframe 
                  src="https://superhotray.github.io/truss/" 
                  className="w-full h-full border-none"
                  title="Bridge Simulation Environment"
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
              </div>

           </div>
           
           <div className="flex justify-center mt-6">
             <div className="max-w-2xl text-center text-slate-400 text-sm bg-slate-900/50 p-4 rounded-xl border border-slate-800/50">
               <strong className="text-slate-200 font-semibold mb-1 block">測試指南：</strong>
               在上方模擬器中確認你的桁架設計能夠承受預期重量。如果節點顯示紅色警告，代表應力集中，請嘗試新增斜向桿件或是調整三角形的配置。設計通過後，即可申請實體木柴包進行最終搭建。
             </div>
           </div>

        </section>

      </main>
    </div>
  );
}

