const nav=document.querySelector('.nav'),toggle=document.querySelector('.toggle');
toggle&&toggle.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Subtle first-view count-up for the 06 / 04 / 02 / 15 metrics.
const counters=document.querySelectorAll('[data-count]');
const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting||entry.target.dataset.done)return;
    const el=entry.target,target=+el.dataset.count,pad=+el.dataset.pad||0,duration=650,start=performance.now();
    el.dataset.done='1';
    const tick=now=>{const p=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-p,3);const val=Math.round(target*eased);el.textContent=String(val).padStart(pad,'0');if(p<1)requestAnimationFrame(tick)};
    requestAnimationFrame(tick);io.unobserve(el);
  })
},{threshold:.45});
counters.forEach(c=>io.observe(c));

// Sequential score-bar reveal when the sample assessment enters view.
const assessmentPanel=document.querySelector('.assessment');
if(assessmentPanel){
  const fills=[...assessmentPanel.querySelectorAll('.fill[data-width]')];
  const values=[...assessmentPanel.querySelectorAll('.score-value[data-score]')];
  const scoreObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting||assessmentPanel.dataset.animated)return;
      assessmentPanel.dataset.animated='1';
      fills.forEach((fill,i)=>{
        const target=+fill.dataset.width;
        const valueEl=values[i];
        const scoreTarget=valueEl?+valueEl.dataset.score:0;
        setTimeout(()=>{
          const duration=620,start=performance.now();
          const step=now=>{
            const p=Math.min((now-start)/duration,1);
            const eased=1-Math.pow(1-p,3);
            fill.style.width=(target*eased)+'%';
            if(valueEl)valueEl.textContent=(scoreTarget*eased).toFixed(1);
            if(p<1)requestAnimationFrame(step);
            else if(valueEl)valueEl.textContent=scoreTarget.toFixed(1);
          };
          requestAnimationFrame(step);
        },i*220);
      });
      scoreObserver.unobserve(assessmentPanel);
    });
  },{threshold:.35});
  scoreObserver.observe(assessmentPanel);
}
