import React from 'react';
import { ChevronDown, Code, Target, BrainCircuit } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="section">
      <div className="content-wrapper" style={{ textAlign: 'center' }}>
        <div className="badge animate-fade-in delay-100">50 Min Masterclass</div>
        <h1 className="animate-fade-in delay-200">
          如何在悉尼找到 <br />
          <span className="text-gradient">全栈开发工作</span>
        </h1>
        <p className="animate-fade-in delay-300" style={{ fontSize: '1.5rem', marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto' }}>
          打破认知误区，掌握工程思维与营销策略，在澳洲IT职场脱颖而出。
        </p>
        
        <div className="grid-3 animate-fade-in delay-400" style={{ marginTop: '4rem' }}>
          <div className="glass-panel">
            <div className="icon-wrapper" style={{ margin: '0 auto 1.5rem auto' }}><BrainCircuit size={24} /></div>
            <h3>认知误区</h3>
            <p>重新定义工作能力与找工作能力</p>
          </div>
          <div className="glass-panel">
            <div className="icon-wrapper" style={{ margin: '0 auto 1.5rem auto' }}><Target size={24} /></div>
            <h3>方法论</h3>
            <p>像直播带货一样推销自己</p>
          </div>
          <div className="glass-panel">
            <div className="icon-wrapper" style={{ margin: '0 auto 1.5rem auto' }}><Code size={24} /></div>
            <h3>实战策略</h3>
            <p>简历优化与领英人脉拓展</p>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scroll</span>
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
