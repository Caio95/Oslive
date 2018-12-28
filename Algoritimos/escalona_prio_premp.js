function PrioridadePreemp(){

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
			return a.prioridade < b.prioridade;
		});
	};

	this.topo = function(){
		var n = this.listaProcessos.length;
		return this.listaProcessos[n-1];
	};

	this.escolherProcesso = function(){
		return this.listaProcessos.pop();
	};

	this.addTEspera = function(tempo){
		for(i in this.listaProcessos){
			for(var j=0; j< tempo; j++){
				this.listaProcessos[i].incrTEspera();
			}
		}
	};

}