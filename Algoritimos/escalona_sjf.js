function SJF(){

	this.listaProcessos = [];

	this.vazio = function(){
		if(this.listaProcessos.length ==0){
			return true;
		}
		else
		return false;
	};

	this.addProcesso = function(processo){
		this.listaProcessos.splice(0, 0, processo);
		this.listaProcessos.sort( function(a, b){
			return a.execucao < b.execucao;
		});
	};

	this.escolherProcesso = function(){
		return this.listaProcessos.pop();
	};

	this.addTEspera = function(){
		for(i in this.listaProcessos){
			this.listaProcessos[i].incrTEspera();
		}
	};
}
