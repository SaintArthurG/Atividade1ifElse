function calcularIdade() {

            const anoNascimento = document.getElementById('anoNascimento').value;
            const anoAtual = new Date().getFullYear();

            if (!anoNascimento || isNaN(anoNascimento) || anoNascimento <= 0) {
                document.getElementById('result').textContent = 'Por favor, insira um ano válido.';
                return;
            }

            const idade = anoAtual - parseInt(anoNascimento);

            const isMaior = idade >= 18 ? 'maior' : 'menor';

            document.getElementById('result').textContent = `Você tem ${idade} anos e é ${isMaior} de idade.`;
        }