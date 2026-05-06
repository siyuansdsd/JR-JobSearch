import React from 'react';
import { FileText, Network, Users, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function ResumeAndNetworking() {
  return (
    <section className="section">
      <div className="content-wrapper">
        <div className="badge">PART 2.2 & 2.3</div>
        <h2 className="animate-fade-in delay-100">简历与人脉 <span className="text-gradient">CV & Networking</span></h2>
        <p className="animate-fade-in delay-200" style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          简历是你敲开面试大门的硬通货，而人脉则是让你事半功倍的隐形阶梯。
        </p>

        <div className="grid-2 animate-fade-in delay-300">
          <div className="glass-panel">
            <div className="icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa' }}>
              <FileText size={24} />
            </div>
            <h3 style={{ marginBottom: '1.5rem' }}>简历怎么提高？</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <CheckCircle2 size={18} color="#10b981" /> 100% 匹配 JD
              </h4>
              <p style={{ fontSize: '0.95rem' }}>首要目的是过ATS系统。如果简历无法匹配JD，只有两条路：放弃投递，或者Tailor CV（可借助AI Agent完成）。</p>
            </div>

            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <AlertTriangle size={18} color="#f59e0b" /> Bonus技能陷阱
              </h4>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>超纲的技能在澳洲环境往往不意味着Bonus，反而可能意味着减分项。JD中的Bonus通常是“最好必须会”的技能，而与JD无关的炫技要谨慎。</p>
            </div>

            <div className="highlight-box" style={{ marginTop: '1.5rem' }}>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                简历优化至少分两层：先用格式和关键词通过 ATS，再让内容在人工审阅时显得专业、清晰、可信。
                匠人学院也有针对 ATS 关键词、简历格式和后续人工润色的课程与修改支持。
              </p>
            </div>
          </div>

          <div className="glass-panel">
            <div className="icon-wrapper" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#a78bfa' }}>
              <Network size={24} />
            </div>
            <h3 style={{ marginBottom: '1.5rem' }}>人脉与社交拓展</h3>
            
            <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              <strong>判断标准：</strong> <br/>
              <span className="text-gradient" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>一对一线下面基 &gt; 多人线下面基 &gt; 一对一语音 &gt; 一对一打字</span>
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Users size={20} color="var(--accent-color)" style={{ marginTop: '3px' }} />
                <p style={{ fontSize: '0.95rem', margin: 0 }}>线下见过面的朋友大多会帮助你，电话沟通大约有10%的概率，而仅靠打字只有1%。</p>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Network size={20} color="#0077b5" style={{ marginTop: '3px' }} />
                <p style={{ fontSize: '0.95rem', margin: 0 }}><strong>Linkedin is Everything.</strong> 把领英经营好的华人学生极少。这是一个长期投入的过程，建议每周抽出时间经营。</p>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color="#10b981" style={{ marginTop: '3px' }} />
                <p style={{ fontSize: '0.95rem', margin: 0 }}>LinkedIn 运营可以系统化提升：让主页更专业、主动连接 recruiter，并持续争取 referral 机会。匠人学院也有相关课程覆盖这些基础动作。</p>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Users size={20} color="#f59e0b" style={{ marginTop: '3px' }} />
                <p style={{ fontSize: '0.95rem', margin: 0 }}>内推往往能让流程走得更深、反馈更快，也更容易提前拿到岗位和面试官相关信息，在澳洲尤其重要。匠人学院内推也能帮助候选人更快接近终面并获得更具体的岗位信息。</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="animate-fade-in delay-500" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <div className="badge" style={{ border: 'none', background: 'var(--gradient-primary)', color: 'white' }}>
            Thanks for listening
          </div>
        </div>
      </div>
    </section>
  );
}
