class Challenge01{
  constructor(valor){
    this.valor = 10;
    this.soma = 0;
    this.souNinja = true;
    this.comida = ['arroz', 'feijão', 'ovo'];
  }

  setSoma(){
    this.soma = 15 + 8;
  }

  incrementSoma(){
    this.soma++;
  }

  somaX3(){
    this.soma = this.soma * 3;
  }

  /**
   *
   * @returns {string}
   */
  getFeijao(){
    return this.comida[1];
  }

  /**
   *
   * @returns {boolean}
   */
  isValorIgualSoma(){
    return this.valor === this.soma;
  }
}

