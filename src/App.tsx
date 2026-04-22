/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dna, 
  MapPin, 
  ChevronRight, 
  RotateCcw, 
  Share2, 
  Sparkles, 
  Binary, 
  ShieldCheck, 
  Heart, 
  Flame, 
  Crown,
  Trophy,
  History
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import { DOCTORS, QUESTIONS, Dimensions, Doctor } from './data';

type AppState = 'landing' | 'quiz' | 'result';

export default function App() {
  const [state, setState] = useState<AppState>('landing');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Dimensions>({
    intelligence: 50,
    rebellion: 50,
    empathy: 50,
    leadership: 50,
    loyalty: 50
  });

  const handleStart = () => {
    setScores({
      intelligence: 50,
      rebellion: 50,
      empathy: 50,
      leadership: 50,
      loyalty: 50
    });
    setCurrentQuestion(0);
    setState('quiz');
  };

  const handleAnswer = (weights: Partial<Dimensions>) => {
    setScores(prev => ({
      intelligence: Math.min(100, prev.intelligence + (weights.intelligence || 0)),
      rebellion: Math.min(100, prev.rebellion + (weights.rebellion || 0)),
      empathy: Math.min(100, prev.empathy + (weights.empathy || 0)),
      leadership: Math.min(100, prev.leadership + (weights.leadership || 0)),
      loyalty: Math.min(100, prev.loyalty + (weights.loyalty || 0))
    }));

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setState('result');
    }
  };

  const matchedDoctor = useMemo(() => {
    let bestMatch: Doctor = DOCTORS[0];
    let minDistance = Infinity;

    DOCTORS.forEach(doc => {
      const distance = Math.sqrt(
        Math.pow(doc.profile.intelligence - scores.intelligence, 2) +
        Math.pow(doc.profile.rebellion - scores.rebellion, 2) +
        Math.pow(doc.profile.empathy - scores.empathy, 2) +
        Math.pow(doc.profile.leadership - scores.leadership, 2) +
        Math.pow(doc.profile.loyalty - scores.loyalty, 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        bestMatch = doc;
      }
    });

    return bestMatch;
  }, [scores]);

  const radarData = [
    { subject: 'Intelligence', A: scores.intelligence, fullMark: 100 },
    { subject: 'Rebellion', A: scores.rebellion, fullMark: 100 },
    { subject: 'Empathy', A: scores.empathy, fullMark: 100 },
    { subject: 'Leadership', A: scores.leadership, fullMark: 100 },
    { subject: 'Loyalty', A: scores.loyalty, fullMark: 100 },
  ];

  return (
    <div className="min-h-screen bg-[#020508] text-gray-200 font-sans selection:bg-[#00a2ff] selection:text-white overflow-hidden relative border-8 border-[#003b6f]/30">
      {/* Gallifreyan Seal Decoration */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] border-[0.5px] border-[#e2b659]/20 rounded-full flex items-center justify-center opacity-40 pointer-events-none z-0">
        <div className="w-[320px] h-[320px] border-[0.5px] border-[#e2b659]/20 rounded-full"></div>
        <div className="w-[150px] h-[150px] border-[0.5px] border-[#e2b659]/20 rounded-full flex flex-col items-center justify-center">
           <div className="w-1 h-20 bg-[#e2b659]/20 rotate-45"></div>
        </div>
      </div>

      <main className="relative z-10 w-full min-h-screen flex">
        <AnimatePresence mode="wait">
          {state === 'landing' && (
            <motion.div 
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center p-8 space-y-12 relative"
            >
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 800 800">
                  <circle cx="400" cy="400" r="350" fill="none" stroke="#e2b659" strokeWidth="0.5" strokeDasharray="10 5" />
                  <circle cx="400" cy="400" r="250" fill="none" stroke="#e2b659" strokeWidth="1" />
                </svg>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#003b6f] rounded-sm mx-auto mb-8 flex items-center justify-center border border-[#00a2ff]/50 shadow-[0_0_15px_rgba(0,59,111,0.5)]">
                  <div className="w-6 h-10 border-2 border-white/80"></div>
                </div>
                <h1 className="text-7xl font-serif italic text-white leading-none tracking-tight">Who Are You?</h1>
                <p className="text-[#00a2ff] text-sm tracking-[0.4em] uppercase font-bold">Gallifrey Identity Matrix</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className="bg-[#003b6f] text-white px-12 py-5 text-sm uppercase tracking-[0.3em] font-bold border border-[#00a2ff]/50 shadow-lg group flex items-center gap-4 hover:bg-[#00a2ff] transition-all duration-500"
              >
                Immediate Ingress <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <p className="text-xs text-gray-500 uppercase tracking-widest max-w-[200px] text-center leading-loose">
                Scanning temporal signatures... <br /> Accessing nexus...
              </p>
            </motion.div>
          )}

          {state === 'quiz' && (
            <div className="flex-1 flex overflow-hidden">
              {/* Sidebar Component for Quiz */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="w-64 border-r border-[#003b6f]/40 bg-[#03080f] p-8 flex flex-col justify-between hidden md:flex"
              >
                <div>
                  <h2 className="text-xs uppercase tracking-[0.3em] text-[#00a2ff] font-bold mb-4">实时传输</h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00a2ff] shadow-[0_0_8px_#00a2ff]"></div>
                      <span className="text-[10px] uppercase tracking-widest text-white">题目已激活</span>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 font-mono text-[10px] text-gray-400">
                      ID: {currentQuestion + 101} <br />
                      时间: {new Date().getFullYear()} AD <br />
                      信号: 稳定
                    </div>
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-gray-600 font-mono">
                  中继站: 节点_09
                </div>
              </motion.div>

              <motion.div 
                key="quiz"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1 p-8 md:p-16 flex flex-col justify-center max-w-4xl mx-auto space-y-12"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <p className="text-[#00a2ff] text-xs tracking-[0.4em] uppercase font-bold">序列 {currentQuestion + 1} / {QUESTIONS.length}</p>
                    <p className="font-mono text-xs text-[#e2b659]">{Math.round(((currentQuestion + 1) / QUESTIONS.length) * 100)}% 完成度</p>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 bg-opacity-20 border-b border-[#003b6f]/30">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }}
                      className="h-full bg-[#e2b659] shadow-[0_0_10px_#e2b659]/50"
                    />
                  </div>
                </div>

                <div className="space-y-12">
                  <motion.h2 
                    key={currentQuestion}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl font-serif italic text-white leading-tight"
                  >
                    {QUESTIONS[currentQuestion].text}
                  </motion.h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    {QUESTIONS[currentQuestion].options.map((option, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "#e2b659" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(option.weights)}
                        className="w-full text-left p-6 border border-[#003b6f]/40 bg-[#03080f]/50 backdrop-blur-sm transition-all group flex items-start gap-4"
                      >
                        <span className="text-[10px] font-mono text-[#00a2ff] border-r border-[#003b6f]/40 pr-4 mt-1 opacity-50 group-hover:opacity-100">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1 text-sm text-gray-200 group-hover:text-white transition-colors leading-relaxed">
                          {option.text}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {state === 'result' && (
            <div className="flex-1 flex overflow-hidden">
              {/* Sidebar for Result */}
              <div className="w-64 border-r border-[#003b6f]/40 bg-[#03080f] p-8 flex flex-col justify-between hidden md:flex">
                <div>
                  <div className="w-12 h-12 bg-[#003b6f] rounded-sm mb-8 flex items-center justify-center border border-[#00a2ff]/50 shadow-[0_0_15px_rgba(0,59,111,0.5)]">
                    <div className="w-4 h-6 border-2 border-white/80"></div>
                  </div>
                  <h2 className="text-xs uppercase tracking-[0.3em] text-[#00a2ff] font-bold mb-1">扫描状态</h2>
                  <p className="text-sm text-gray-400 mb-8 font-mono">特征检索成功</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 opacity-50">
                      <div className="w-2 h-2 rounded-full bg-[#00a2ff]"></div>
                      <span className="text-[10px] uppercase tracking-widest">数据摄取</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-50">
                      <div className="w-2 h-2 rounded-full bg-[#00a2ff]"></div>
                      <span className="text-[10px] uppercase tracking-widest">时空漩涡映射</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#e2b659]">
                      <div className="w-2 h-2 rounded-full bg-[#e2b659] shadow-[0_0_8px_#e2b659]"></div>
                      <span className="text-[10px] uppercase tracking-widest">灵魂匹配</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleStart}
                  className="border border-[#e2b659]/50 text-[#e2b659] py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-[#e2b659]/10 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw size={12} /> 重新追踪时间轴
                </button>
              </div>

              <div className="flex-1 relative flex flex-col overflow-y-auto">
                {/* Background Decoration */}
                <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
                  <svg width="100%" height="100%" viewBox="0 0 800 800">
                    <circle cx="400" cy="400" r="350" fill="none" stroke="#e2b659" strokeWidth="0.5" strokeDasharray="10 5" />
                    <circle cx="400" cy="400" r="250" fill="none" stroke="#e2b659" strokeWidth="1" />
                    <path d="M400 50 L400 750 M50 400 L750 400" stroke="#e2b659" strokeWidth="0.5" />
                  </svg>
                </div>

                {/* Content Header */}
                <div className="p-12 pb-6 flex flex-col md:flex-row justify-between items-start relative z-10 space-y-4 md:space-y-0">
                  <div>
                    <h1 className="text-6xl font-serif italic text-white mb-2 leading-none">{matchedDoctor.name}</h1>
                    <p className="text-[#00a2ff] text-sm tracking-[0.4em] uppercase font-bold">身份匹配度: {Math.round(85 + Math.random() * 14)}.%</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">时间轴参考</p>
                    <p className="font-mono text-xs text-[#e2b659]">编号: {matchedDoctor.id}</p>
                  </div>
                </div>

                {/* Main Body Split */}
                <div className="flex-1 p-12 pt-0 flex flex-col lg:flex-row gap-12 relative z-10 overflow-visible">
                  {/* Left: Analysis */}
                  <div className="flex-1 flex flex-col space-y-8">
                    <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                        <History size={60} />
                      </div>
                      <p className="text-2xl font-serif italic text-white/90 mb-6 leading-relaxed">
                        "{matchedDoctor.quote}"
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed font-sans">
                        {matchedDoctor.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 bg-[#003b6f] text-white py-5 text-xs uppercase tracking-[0.3em] font-bold border border-[#00a2ff]/50 shadow-lg hover:bg-[#00a2ff] transition-all flex items-center justify-center gap-2">
                        <Share2 size={16} /> 传输结果
                      </button>
                      <button className="px-12 border border-white/20 text-white/50 py-5 text-xs uppercase tracking-[0.3em] hover:text-white hover:border-white transition-all">
                        保存
                      </button>
                      <button 
                        onClick={handleStart}
                        className="md:hidden flex-1 border border-[#e2b659]/50 text-[#e2b659] py-5 text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2"
                      >
                        <RotateCcw size={12} /> 重新匹配
                      </button>
                    </div>
                  </div>

                  {/* Right: Radar Chart Visualization */}
                  <div className="w-full lg:w-[350px] bg-[#050c14] border border-[#00a2ff]/20 p-8 flex flex-col items-center justify-center">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#00a2ff] mb-8 font-bold">维度矩阵分析</h3>
                    
                    <div className="w-full h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                          <PolarGrid stroke="#1a2a3a" />
                          <PolarAngleAxis dataKey="subject" tick={{ fill: '#00a2ff', fontSize: 8, uppercase: true }} />
                          <Radar
                            name="User"
                            dataKey="A"
                            stroke="#00a2ff"
                            fill="#003b6f"
                            fillOpacity={0.4}
                            strokeWidth={2}
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="mt-8 w-full space-y-4">
                      <div className="grid gap-3 pt-4 border-t border-white/10">
                        <div className="flex flex-col space-y-1">
                          <span className="text-[10px] font-bold text-[#e2b659] uppercase tracking-widest">智慧与逻辑 (Intelligence)</span>
                          <p className="text-[10px] text-gray-500 leading-relaxed">衡量你对宇宙规律的推演能力与运用科技解决难题的理智程度。</p>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <span className="text-[10px] font-bold text-[#e2b659] uppercase tracking-widest">冒险与反叛 (Rebellion)</span>
                          <p className="text-[10px] text-gray-500 leading-relaxed">衡量你对既定规则的挑战精神以及在未知面前即兴发挥的勇气。</p>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <span className="text-[10px] font-bold text-[#e2b659] uppercase tracking-widest">共情与人性 (Empathy)</span>
                          <p className="text-[10px] text-gray-500 leading-relaxed">衡量你对微小生命的共苦能力以及在冰冷时空中坚持温柔的底色。</p>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <span className="text-[10px] font-bold text-[#e2b659] uppercase tracking-widest">领导力与决断 (Leadership)</span>
                          <p className="text-[10px] text-gray-500 leading-relaxed">衡量你在危机中凝聚人心的气场以及做出关键抉择的果敢。 </p>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <span className="text-[10px] font-bold text-[#e2b659] uppercase tracking-widest">忠诚与羁绊 (Loyalty)</span>
                          <p className="text-[10px] text-gray-500 leading-relaxed">衡量你对伙伴坚不可摧的承诺以及跨越岁月仍不离不弃的厚度。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </main>

      {state === 'landing' && (
        <footer className="absolute bottom-6 left-0 w-full z-10 text-center text-gray-600 text-[10px] uppercase tracking-[0.3em] font-mono">
          Gallifrey Intergalactic Archives // Matrix Source: Stable
        </footer>
      )}
    </div>
  );
}

function StatIcon({ icon, value, label }: { icon: ReactNode, value: number, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-2 rounded-xl bg-slate-900/50 border border-slate-800">
      <div className="text-cyan-500/70">{icon}</div>
      <div className="text-xs font-black text-slate-200">{value}</div>
      <div className="text-[8px] uppercase tracking-tighter opacity-40">{label}</div>
    </div>
  );
}
