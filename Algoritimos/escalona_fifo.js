function FIFO(){

	this.listaProcessos = [];

	this.vazio = function(){	//verifica se a lista esta vazia
		if(this.listaProcessos.length ==0){
			return true;
		}
		else
		return false;
	};

	this.addProcesso = function(processo){	// insere o processo na fila 
		this.listaProcessos.splice(0, 0, processo);
	};

	this.escolherProcesso = function(){		//retira o processo da fila
		return this.listaProcessos.pop();
	};

	this.addTEspera = function(tempo){		//adiciona o tempo de espera para os processos que estão na fila
		for(i in this.listaProcessos){
			for(var j=0; j< tempo; j++){
				this.listaProcessos[i].incrTEspera();
			}
		}
	};
}