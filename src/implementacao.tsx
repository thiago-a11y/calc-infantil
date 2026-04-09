const calcular = () => {
  try {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      setErro('Preencha os campos com valores numéricos');
      return;
    }

    if (num1 < 0 || num2 < 0) {
      setErro('Os números não podem ser negativos');
      return;
    }

    // Verificar se os números são muito grandes ou muito pequenos
    if (num1 > Number.MAX_SAFE_INTEGER || num2 > Number.MAX_SAFE_INTEGER) {
      setErro('Os números são muito grandes');
      return;
    }

    if (num1 < Number.MIN_SAFE_INTEGER || num2 < Number.MIN_SAFE_INTEGER) {
      setErro('Os números são muito pequenos');
      return;
    }

    let resultado;
    switch (operacao) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          setErro('Não é possível dividir por zero');
          return;
        }
        resultado = num1 / num2;
        break;
      default:
        setErro('Operação inválida');
        return;
    }

    setResultado(resultado.toString());
    setErro('');
  } catch (error) {
    setErro(`Ocorreu um erro durante a execução: ${error.message}`);
  }
};