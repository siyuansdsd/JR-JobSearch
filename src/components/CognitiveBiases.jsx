import React from 'react';
import { UserX, RefreshCw, Compass, ShieldAlert, Cpu } from 'lucide-react';

export default function CognitiveBiases() {
  return (
    <section className="section">
      <div className="content-wrapper">
        <div className="badge">PART 1</div>
        <h2 className="animate-fade-in delay-100">认知误区 <span className="text-gradient">Cognitive Biases</span></h2>
        <p className="animate-fade-in delay-200" style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          打破学校教育和技术狂热带来的错觉，重新认识澳洲职场的真实需求。
        </p>

        <div className="grid-2 animate-fade-in delay-300">
          <div className="glass-panel">
            <div className="icon-wrapper"><RefreshCw size={24} /></div>
            <h3>1. 工作能力 vs 找工作能力</h3>
            <p>学校教育主要围绕<strong>工作能力</strong>的培养，而<strong>找工作</strong>是一项独立的能力。两者仅为交集。</p>
            <div className="highlight-box">
              <p style={{ margin: 0 }}>针对找工作，我们需要切换另外一种提高方法，而非仅仅提升工作能力。</p>
            </div>
            <div className="highlight-box" style={{ marginTop: '1rem' }}>
              <p style={{ margin: 0 }}>
                收益最大的交集是真实工作环境和真实项目。像匠人学院这类多人协作项目里的 PR、
                Code Review 和 Git 工作流，比教程式个人项目更能沉淀可复述的工程故事。
              </p>
            </div>
          </div>

          <div className="glass-panel">
            <div className="icon-wrapper"><UserX size={24} /></div>
            <h3>2. 真实的你 vs 面试官眼中的你</h3>
            <p>当你尝试表达“真实的自己”时，受限于表达能力，往往只能投射出一部分。面试官接收到的更是经过他们理解过滤后的形象。</p>
            <div className="highlight-box">
              <p style={{ margin: 0 }}>在面试时，应采取最有效的方法让面试官保留<strong>积极印象</strong>，而非单纯追求让自己满意的真实表达。</p>
            </div>
            <div className="highlight-box" style={{ marginTop: '1rem' }}>
              <p style={{ margin: 0 }}>
                真实面试里很难直接获得面试官的真实反馈。匠人学院的模拟面试和复盘，
                可以帮助我们收集反馈，并持续迭代更有效的面试话术和表达策略。
              </p>
            </div>
          </div>
        </div>

        <div className="grid-3 animate-fade-in delay-400" style={{ marginTop: '2rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div className="icon-wrapper" style={{ marginBottom: '1rem', width: '40px', height: '40px' }}><Compass size={20} /></div>
            <h4>3. 澳洲 IT vs 中国 IT</h4>
            <p style={{ fontSize: '0.95rem' }}>中国注重技术溢出与基座调优，澳洲偏重JD文字匹配与收缩要求。在澳洲，<strong>“经验”</strong>比<strong>“学习新技术的能力”</strong>更重要。过度追求超纲技能(如Agent, RAG)可能起到反效果。</p>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div className="icon-wrapper" style={{ marginBottom: '1rem', width: '40px', height: '40px' }}><ShieldAlert size={20} /></div>
            <h4>4. Worker vs Engineer</h4>
            <p style={{ fontSize: '0.95rem' }}>Worker思维（学生/nerd）：罗列所有配置和技术以展示能力。<br/>Engineer思维：强调<strong>取舍</strong>以及选择某种方案的<strong>逻辑与原因</strong>。</p>
            <div className="highlight-box" style={{ marginTop: '1rem' }}>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                在匠人学院 P3 这类实战项目中，可以把每个 ticket 的方案选择和理由写进 PR message，
                再借助老师的 Code Review 快速验证自己的工程判断。
              </p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div className="icon-wrapper" style={{ marginBottom: '1rem', width: '40px', height: '40px' }}><Cpu size={20} /></div>
            <h4>5. AI 的困扰</h4>
            <p style={{ fontSize: '0.95rem' }}>AI是一个天然过滤器，增加了ATS负担，但同时唱衰论调也分流了竞争者。目前的求职环境（投递与回复比）正逐渐恢复至比前两年更健康的水平。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
