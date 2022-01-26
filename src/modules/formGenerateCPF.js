import GenerateCPF from "./GenerateCPF";

const generatedCpf = document.querySelector('.cpf');
const btnGenerateCpf = document.querySelector('.generate-cpf');
const generate = new GenerateCPF;

export default () => {
  btnGenerateCpf.addEventListener('click', () => {
    generatedCpf.innerHTML = generate.generateNewCPF();
  });
}