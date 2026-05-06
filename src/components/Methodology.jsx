import React from 'react';
import { Mic2, Star, Maximize2, Zap, Megaphone } from 'lucide-react';

export default function Methodology() {
  return (
    <section className="section">
      <div className="content-wrapper">
        <div className="badge">PART 2.1</div>
        <h2 className="animate-fade-in delay-100">方法论 <span className="text-gradient">营销自己的艺术</span></h2>
        <p className="animate-fade-in delay-200" style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          找工作的本质是一种营销能力，即“如何把自己的技能销售出去”。IT/CS 同学在技术上有门槛，但在找工作时却频频受阻，核心原因在于缺乏这种营销思维。
        </p>

        <div className="glass-panel animate-fade-in delay-300" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ flex: '0 0 auto' }}>
            <div className="icon-wrapper" style={{ width: '80px', height: '80px', marginBottom: 0, borderRadius: '24px' }}>
              <Megaphone size={40} />
            </div>
          </div>
          <div>
            <h3 style={{ marginBottom: '0.5rem' }}>直播带货式面试法</h3>
            <p style={{ margin: 0 }}>
              非常反直觉，但这是一种行为面上极高成功率的降维打击。与其去刷LeetCode或看教程视频，不如去观摩高热度的带货直播，学习他们如何植入产品印象。
            </p>
          </div>
        </div>

        <h4 className="animate-fade-in delay-400" style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>核心四大原则</h4>
        
        <div className="grid-2 animate-fade-in delay-500">
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Star color="var(--accent-color)" size={24} />
              <h4 style={{ margin: 0 }}>1. 不述缺点，只述优点并不断重复</h4>
            </div>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>
              重复给面试官积极叙述和自夸信号。当面试结束印象模糊后，你重复的优点就会固化为面试官心中的事实。
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Zap color="var(--accent-color)" size={24} />
              <h4 style={{ margin: 0 }}>2. 差异化竞争的假象</h4>
            </div>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>
              并非真的技术差异化，而是一种无需数据的比较方式，旨在给面试官形成一种特定的“你比别人更可靠/好用”的印象。
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Maximize2 color="var(--accent-color)" size={24} />
              <h4 style={{ margin: 0 }}>3. 放大痛点与匹配价值</h4>
            </div>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>
              在阐述过往经历时，要放大痛点（需求）并泛化。当你把解决方案（你的工程技能）提出时，才能完美匹配Offer的价值。
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Mic2 color="var(--accent-color)" size={24} />
              <h4 style={{ margin: 0 }}>4. 最大化输出</h4>
            </div>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>
              优秀的面试体验一定是体力上感到累的。抓住一切机会强化输出，但要结合自身习惯避免僵硬。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
