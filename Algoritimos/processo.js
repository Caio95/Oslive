function Processo(nome, chegada, execucao, prioridade, cor){
	this.nome = nome;
	this.chegada = chegada;
	this.execucao = execucao;
	this.prioridade = prioridade;
	this.cor = cor;
	this.tempoEspera = 0;
	this.tempoExecucao =0;
	// this.tempoResp = 0;
    
	this.incrTEspera = function() {
		this.tempoEspera ++;
	};

	this.incrTExecucao = function() {

		this.tempoExecucao +=1;

		if(this.tempoExecucao >= this.execucao){
			return true;
		}

		return false;
	};
}