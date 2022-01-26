import GenerateCPF from './modules/GenerateCPF';
import './assets/css/style.css';

(function() {
  const generate = new GenerateCPF;
  const generatedCpf = document.querySelector('.result');

  generatedCpf.innerHTML = generate.generateNewCPF();
})();