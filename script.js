const steps=[...document.querySelectorAll(".step")], bar=document.getElementById("bar"), progressText=document.getElementById("progressText");
let current=0, answers={};
function showStep(i){steps.forEach((s,n)=>s.classList.toggle("active",n===i));progressText.textContent=(i+1)+" / 4";bar.style.width=((i+1)/4*100)+"%";}
document.querySelectorAll(".options button").forEach(btn=>btn.addEventListener("click",()=>{
 const step=btn.closest(".step"), idx=steps.indexOf(step); answers["step"+idx]=btn.dataset.value;
 step.querySelectorAll("button").forEach(b=>b.classList.remove("selected"));btn.classList.add("selected");
 if(idx<3)setTimeout(()=>{current=idx+1;showStep(current)},180);
}));
document.getElementById("calcForm").addEventListener("submit",e=>{
 e.preventDefault();
 const name=document.getElementById("name").value, phone=document.getElementById("phone").value;
 const text=`Заявка AZN ARCHITECTS%0AИмя: ${encodeURIComponent(name)}%0AТелефон: ${encodeURIComponent(phone)}%0AОбъект: ${encodeURIComponent(answers.step0||"")}%0AПлощадь: ${encodeURIComponent(answers.step1||"")}%0AУслуга: ${encodeURIComponent(answers.step2||"")}%0A${encodeURIComponent(document.getElementById("message").value||"")}`;
 const toast=document.getElementById("toast");toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),3500);
 // Replace YOUR_TELEGRAM_USERNAME below with your real Telegram username.
 window.open("https://t.me/YOUR_TELEGRAM_USERNAME?text="+text,"_blank");
});
